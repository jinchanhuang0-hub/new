"""Create reproducibly aligned artwork/finished-pin web assets.

The finished product image is the reference. The artwork is transformed with one
global projective mapping calculated from distributed, manually verified matching
points. No local warping, retouching, redrawing, or color changes are performed.
"""

from __future__ import annotations

import json
import math
import shutil
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw


PROJECT_ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = PROJECT_ROOT / "public" / "assets" / "images" / "pin-artwork-comparison"
FINISHED_SOURCE = Path(r"E:\Desktop\27cd0fde-82d6-4697-9943-47932f482994.png")
ARTWORK_SOURCE = Path(r"E:\Desktop\徽章-4.24-温-02.jpg")
CANVAS_SIZE = (1254, 1254)

# Coordinates are in each original image's pixel space. These fitting points cover
# the outer silhouette and internal artwork so the solution is not biased toward a
# single central feature.
FIT_POINTS = [
    ("left banner tip", (96, 246), (112, 326)),
    ("12U upper-left corner", (201, 111), (222, 161)),
    ("12U upper-right corner", (435, 118), (517, 151)),
    ("left bat top", (649, 80), (724, 85)),
    ("right bat top", (814, 166), (914, 178)),
    ("right palm leaf tip", (1013, 488), (1184, 520)),
    ("lower-right bat end", (339, 1034), (433, 1181)),
    ("lower-left bat end", (127, 893), (202, 1068)),
    ("center palm joint", (519, 401), (623, 468)),
    ("right palm joint", (805, 490), (956, 553)),
    ("850 upper-left corner", (307, 484), (397, 577)),
    ("850 upper-right corner", (629, 484), (755, 560)),
    ("UNITED lower-left corner", (115, 771), (184, 910)),
    ("UNITED upper-right corner", (782, 624), (903, 710)),
]

# These points are deliberately excluded from fitting and are used as holdout checks.
CHECK_POINTS = [
    ("left star point", (230, 578), (309, 704)),
    ("left palm leaf tip", (303, 402), (377, 492)),
    ("center-right palm leaf tip", (704, 387), (824, 414)),
    ("right tree trunk end", (786, 857), (957, 942)),
    ("lower outline turn", (418, 1001), (493, 1158)),
    ("2026 star center", (699, 847), (841, 966)),
]


def solve_homography(source_points: np.ndarray, target_points: np.ndarray) -> np.ndarray:
    rows = []
    values = []
    for (x, y), (u, v) in zip(source_points, target_points, strict=True):
        rows.append([x, y, 1, 0, 0, 0, -u * x, -u * y])
        rows.append([0, 0, 0, x, y, 1, -v * x, -v * y])
        values.extend([u, v])
    solution, *_ = np.linalg.lstsq(np.asarray(rows, dtype=float), np.asarray(values, dtype=float), rcond=None)
    return np.append(solution, 1).reshape(3, 3)


def project(point: tuple[int, int], matrix: np.ndarray) -> tuple[float, float]:
    mapped = matrix @ np.asarray([point[0], point[1], 1.0])
    return float(mapped[0] / mapped[2]), float(mapped[1] / mapped[2])


def pillow_inverse_coefficients(matrix: np.ndarray) -> tuple[float, ...]:
    inverse = np.linalg.inv(matrix)
    inverse /= inverse[2, 2]
    return tuple(inverse.flatten()[:8])


def point_report(points, matrix: np.ndarray, display_width: int = 600):
    scale = display_width / CANVAS_SIZE[0]
    report = []
    for label, source, expected in points:
        predicted = project(source, matrix)
        residual = math.dist(predicted, expected)
        report.append({
            "label": label,
            "source": list(source),
            "expected_target": list(expected),
            "predicted_target": [round(predicted[0], 2), round(predicted[1], 2)],
            "residual_canvas_px": round(residual, 2),
            "residual_at_600_css_px": round(residual * scale, 2),
        })
    return report


def draw_residuals(base: Image.Image, points, matrix: np.ndarray, color: tuple[int, int, int, int]) -> None:
    draw = ImageDraw.Draw(base, "RGBA")
    for index, (label, source, expected) in enumerate(points, start=1):
        predicted = project(source, matrix)
        draw.line((predicted[0], predicted[1], expected[0], expected[1]), fill=color, width=4)
        radius = 7
        draw.ellipse((expected[0] - radius, expected[1] - radius, expected[0] + radius, expected[1] + radius), outline=color, width=3)
        draw.text((expected[0] + 10, expected[1] - 10), str(index), fill=color)


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    finished = Image.open(FINISHED_SOURCE).convert("RGB")
    artwork = Image.open(ARTWORK_SOURCE).convert("RGB")
    if finished.size != CANVAS_SIZE:
        raise ValueError(f"Unexpected finished image size: {finished.size}")
    if artwork.size != (1107, 1113):
        raise ValueError(f"Unexpected artwork image size: {artwork.size}")

    source_points = np.asarray([point[1] for point in FIT_POINTS], dtype=float)
    target_points = np.asarray([point[2] for point in FIT_POINTS], dtype=float)
    matrix = solve_homography(source_points, target_points)

    aligned_artwork = artwork.transform(
        CANVAS_SIZE,
        Image.Transform.PERSPECTIVE,
        pillow_inverse_coefficients(matrix),
        resample=Image.Resampling.BICUBIC,
        fillcolor=(255, 255, 255),
    )

    finished_output = OUTPUT_DIR / "finished-850-united-pin-aligned.png"
    artwork_output = OUTPUT_DIR / "artwork-850-united-pin-aligned.png"
    overlay_output = OUTPUT_DIR / "alignment-overlay-50.png"
    residual_output = OUTPUT_DIR / "alignment-holdout-residuals.png"
    report_output = OUTPUT_DIR / "alignment-report.json"

    # Preserve the exact finished source bytes. The artwork output is the only transformed display asset.
    shutil.copyfile(FINISHED_SOURCE, finished_output)
    aligned_artwork.save(artwork_output, format="PNG", optimize=True)
    overlay = Image.blend(finished, aligned_artwork, 0.5)
    overlay.save(overlay_output, format="PNG", optimize=True)
    residual_image = overlay.convert("RGBA")
    draw_residuals(residual_image, CHECK_POINTS, matrix, (210, 35, 35, 230))
    residual_image.convert("RGB").save(residual_output, format="PNG", optimize=True)

    fit_report = point_report(FIT_POINTS, matrix)
    check_report = point_report(CHECK_POINTS, matrix)
    report = {
        "canvas": {"width": CANVAS_SIZE[0], "height": CANVAS_SIZE[1]},
        "mapping": {
            "finished_original": str(FINISHED_SOURCE),
            "finished_display": finished_output.name,
            "artwork_original": str(ARTWORK_SOURCE),
            "artwork_display": artwork_output.name,
        },
        "transform": {
            "type": "single global projective homography",
            "artwork_to_finished_matrix": [[round(value, 10) for value in row] for row in matrix],
            "prohibited_operations_used": [],
        },
        "fit_points": fit_report,
        "holdout_points": check_report,
        "fit_rms_canvas_px": round(math.sqrt(sum(point["residual_canvas_px"] ** 2 for point in fit_report) / len(fit_report)), 2),
        "holdout_rms_canvas_px": round(math.sqrt(sum(point["residual_canvas_px"] ** 2 for point in check_report) / len(check_report)), 2),
        "holdout_rms_at_600_css_px": round(math.sqrt(sum(point["residual_at_600_css_px"] ** 2 for point in check_report) / len(check_report)), 2),
        "known_source_differences": [
            "The finished pin contains BASEBALL text; the artwork leaves that area blank.",
            "The finished pin contains red baseball stitching; the artwork does not.",
            "The finished pin includes metal thickness, relief, highlights, and a natural shadow not present in the flat artwork.",
        ],
    }
    report_output.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
    print(json.dumps(report, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
