"""Reproduce coin registration without redrawing or locally warping either source.

Run with Python + NumPy + Pillow; optional --artwork/--finished/--output arguments.
Coordinates are manually inspected source pixels, not automatically invented matches.
The finished source is copied byte-for-byte. Only artwork gets one global homography.
"""
import argparse
import hashlib
import json
from pathlib import Path
import shutil
import numpy as np
from PIL import Image, ImageDraw

FIT = [
    ('outer top', [762,144], [625,121]),
    ('outer left', [222,684], [134,611]),
    ('outer right', [1302,684], [1117,611]),
    ('outer bottom', [762,1224], [625,1099]),
    ('inner top', [762,174], [625,156]),
    ('inner left', [251,684], [165,611]),
    ('inner right', [1272,684], [1085,611]),
    ('inner bottom', [762,1194], [625,1068]),
    ('NO: N upper left serif', [642,218], [552,186]),
    ('MERCY: M upper left serif', [908,226], [798,212]),
    ('SHOW: H upper left serif', [359,420], [273,357]),
    ('PHOENIX: P lower left serif', [721,1167], [585,1043]),
    ('motorcycle front axle', [555,770], [445,683]),
    ('rider nose tip', [811,514], [697,464]),
    ('M.C.: M lower left corner', [678,923], [556,823]),
    ('M.C.: C lower right corner', [829,920], [690,820]),
]
HOLDOUT = [
    ('NO: O counter center', [777,251], [674,226]),
    ('MERCY: E lower serif corner', [1010,387], [869,362]),
    ('PHOENIX: O counter center', [936,1090], [784,976]),
    ('rider bandana right junction', [903,487], [780,440]),
    ('left glove knuckle', [632,550], [529,484]),
    ('front tire uppermost contour', [477,610], [380,534]),
    ('M.C.: M upper left corner', [678,852], [558,762]),
]

def project(matrix, point):
    p = matrix @ np.array([*point, 1.0])
    return p[:2] / p[2]

def fit(points):
    rows, target = [], []
    for _, (x,y), (u,v) in points:
        rows += [[x,y,1,0,0,0,-u*x,-u*y], [0,0,0,x,y,1,-v*x,-v*y]]
        target += [u,v]
    return np.append(np.linalg.lstsq(rows, target, rcond=None)[0],1).reshape(3,3)

def main():
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--artwork',default='E:/Desktop/双面币-4.24-卢-02.jpg')
    parser.add_argument('--finished',default='E:/Desktop/7bd85476-fb6c-4039-a779-3e5d6f67afc1.png')
    parser.add_argument('--output',default=str(Path(__file__).resolve().parents[1]/'public/assets/images/coin-artwork-comparison'))
    parser.add_argument('--evidence',default='C:/Users/admin/AppData/Local/Temp/coin-comparison-evidence')
    args=parser.parse_args(); out=Path(args.output); out.mkdir(parents=True,exist_ok=True)
    evidence=Path(args.evidence); evidence.mkdir(parents=True,exist_ok=True)
    artwork=Image.open(args.artwork).convert('RGB'); finished=Image.open(args.finished).convert('RGB')
    assert artwork.size==(1551,1368) and finished.size==(1254,1254), 'Landmarks only apply to these original source sizes'
    matrix=fit(FIT); inverse=np.linalg.inv(matrix); inverse/=inverse[2,2]
    # Cardinal contour anchors are not glyph landmarks: tangential movement on a
    # circle is not contour separation. Independently measure nearest distances
    # between the transformed circles and ellipses estimated from the front rims.
    contour_results={}
    theta=np.linspace(0,2*np.pi,4096,endpoint=False)
    for name,radius,reference in [('outer',540,(625.5,610,491.5,489)),('inner',511,(625,612,460,456))]:
        cx,cy,rx,ry=reference
        target_curve=np.column_stack((cx+rx*np.cos(theta),cy+ry*np.sin(theta)))
        curve=np.array([project(matrix,[762+radius*np.cos(t),684+radius*np.sin(t)]) for t in theta[::8]])
        distance=np.array([np.sqrt(np.min(np.sum((target_curve-point)**2,axis=1))) for point in curve])
        contour_results[name]=dict(reference_ellipse=reference,estimated_from='Manually inspected front-rim extrema, excluding drop shadow; approximate ellipse',
            transformed_bounds=[*curve.min(axis=0).tolist(),*curve.max(axis=0).tolist()],
            rms_output_px=float(np.sqrt(np.mean(distance**2))),max_output_px=float(distance.max()),rms_css_at_actual_598=float(np.sqrt(np.mean(distance**2))*598/1254))
    aligned=artwork.transform(finished.size,Image.Transform.PERSPECTIVE,inverse.flatten()[:8],Image.Resampling.BICUBIC,fillcolor='white')
    aligned.save(out/'coin-artwork-aligned.png',optimize=True)
    shutil.copyfile(args.finished,out/'coin-finished-aligned.png')
    overlay=Image.blend(aligned,finished,0.5)
    overlay.save(evidence/'coin-overlay-50.png')
    annotated=overlay.copy(); draw=ImageDraw.Draw(annotated)
    results={}
    for group,points in [('fit',FIT),('holdout',HOLDOUT)]:
        result=[]
        for name,source,target in points:
            predicted=project(matrix,source); error=float(np.linalg.norm(predicted-target))
            source_error=float(np.linalg.norm(project(inverse,target)-source))
            result.append(dict(name=name,artwork_source=source,finished_source=target,predicted_output=predicted.tolist(),output_px=error,artwork_source_px=source_error,css_px_at_600=error*600/1254,css_px_at_actual_598=error*598/1254))
            if group=='holdout':
                x,y=target; u,v=predicted
                draw.line((x,y,u,v),fill='red',width=3)
                draw.ellipse((x-5,y-5,x+5,y+5),outline='cyan',width=2)
                draw.ellipse((u-4,v-4,u+4,v+4),outline='red',width=2)
                draw.text((x+8,y+8),f'{name}: {error:.1f}px',fill='red',stroke_width=1,stroke_fill='white')
        results[group]=dict(points=result,rms_output_px=float(np.sqrt(np.mean([p['output_px']**2 for p in result]))),max_output_px=max(p['output_px'] for p in result))
    annotated.save(evidence/'coin-holdout-residuals.png')
    report=dict(sources={k:dict(path=v,sha256=hashlib.sha256(Path(v).read_bytes()).hexdigest()) for k,v in [('artwork',args.artwork),('finished',args.finished)]},
        output_canvas=[1254,1254],desktop_canvas_css_px=600,desktop_image_css_px=598,finished_processing='Byte-for-byte source copy; no resizing, retouching or color changes',
        method='Single least-squares global homography of artwork, constrained by front-face inner/outer contours and eight shared design landmarks',
        manual_pick_uncertainty_px='Approximately 2–5 px; relief/shading makes some semantic points less precise. Residuals are not metrology-grade.',
        artwork_to_finished_matrix=matrix.tolist(),**results,
        contour_nearest_distance=contour_results,
        limitations=['NO and MERCY lettering spacing/shape differs locally from flat artwork.','Raised relief, bevels and motorcycle line widths do not have identical contours.','No local correction, generated pixels, face mask or redesign was used. Shadow is not a registration anchor.'])
    (evidence/'coin-registration.json').write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf8')
    print(json.dumps({k:{q:v for q,v in results[k].items() if q!='points'} for k in results},indent=2))

if __name__=='__main__': main()
