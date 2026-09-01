const escapeHtml = (value = "") => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;");

const keychainLinks = [
  { href: "/products/custom-metal-keychains", label: "custom metal keychain options", note: "compare project-ready formats" },
  { href: "/blog/custom-metal-keychain-materials", label: "keychain material guide", note: "compare metal and leather choices" },
  { href: "/blog/custom-metal-keychain-size-attachment-guide", label: "size and attachment guide", note: "match the charm, hole and hardware" },
];

const pinLinks = [
  { href: "/products/custom-enamel-pins", label: "custom enamel pin options", note: "review pin formats for a new project" },
  { href: "/blog/soft-enamel-vs-hard-enamel-pins", label: "soft vs hard enamel guide", note: "compare surface feel and finish" },
  { href: "/blog/custom-enamel-pins-no-moq-guide", label: "custom pin inquiry guide", note: "prepare artwork and quantity details" },
];

const coinLinks = [
  { href: "/products/custom-challenge-coins", label: "custom challenge coin options", note: "review shapes, relief and finishes" },
  { href: "/blog/challenge-coin-size-guide", label: "challenge coin size guide", note: "confirm diameter and thickness" },
  { href: "/blog/how-custom-challenge-coins-are-made", label: "coin manufacturing guide", note: "understand proofing and production steps" },
];

const medalLinks = [
  { href: "/products/custom-medals", label: "custom medal options", note: "plan a made-to-order award program" },
  { href: "/blog/custom-marathon-medals-guide", label: "custom marathon medal guide", note: "match medal size, ribbon and event use" },
  { href: "/blog/finisher-medals-vs-placement-medals", label: "finisher vs placement medal guide", note: "define award eligibility before ordering" },
];

const buckleLinks = [
  { href: "/products/custom-belt-buckles", label: "custom belt buckle options", note: "review formats for a new club or brand project" },
  { href: "/blog/how-to-design-a-custom-belt-buckle", label: "belt buckle design guide", note: "confirm belt fit, relief and hardware" },
  { href: "/blog/custom-metal-crafts-guide", label: "custom metal crafts guide", note: "prepare artwork, finish and packing details" },
];

const defineProfile = (profile) => ({
  moq: "Quantity and production feasibility are confirmed from the approved design, packing plan and destination; this reference page does not publish a fixed price or stock position.",
  sampleTiming: "Sample timing is confirmed after artwork review.",
  productionTiming: "Bulk timing is confirmed after approval.",
  ...profile,
});

// These profiles are intentionally limited to the first priority cohort. They are
// production-reference data, not ecommerce offers or claims of product inventory.
export const productProcurementProfiles = {
  "blue-knights-mc-antique-belt-buckle": defineProfile({
    priority: 1,
    productCategory: "Belt Buckles",
    referenceDesignTheme: "motorcycle-club emblem with antique gold relief and an enamel shield",
    material: "zinc alloy",
    process: "die casting, antique plating and enamel detailing",
    sizeRange: "custom buckle size matched to the belt width and approved artwork",
    thickness: "relief depth and back hardware confirmed on the proof",
    accessories: "belt loop, prong and fit hardware selected for the intended belt",
    packaging: "protective bag, pouch, gift box or retail packing quoted by project",
    quoteFactors: "buckle width, relief depth, plating, enamel areas, back hardware, quantity, packaging, delivery date and destination",
    idealBuyers: "motorcycle clubs, member programs, event organizers and branded merchandise buyers",
    whyThisDesignWorks: "The reference uses a central shield, scrollwork and antique finish to make a club identity readable at buckle scale. Its layered metal treatment suits projects that need a durable emblem-led presentation rather than a flat printed accessory.",
    customOptions: "A new project can use an original club crest, event date or member program artwork, then adjust the outline, relief levels, plating and enamel placement. Belt compatibility must be confirmed with the finished buckle width and the selected hook-and-loop hardware.",
    finishNotes: "Zinc alloy is useful where sculpted relief and an aged metal character are important. Antique plating can emphasize recessed scroll details, while defined enamel areas can keep a small shield or logo visually separated from the surrounding metal.",
    deliveryNotes: "Share the required in-hands date, belt specification and packing requirement with the inquiry. The production plan starts from the approved proof and confirms whether individual protection, presentation boxes or retail-ready packing are needed.",
    links: buckleLinks,
  }),
  "brown-memorial-paw-leather-keychain": defineProfile({
    priority: 2,
    productCategory: "Keychains",
    referenceDesignTheme: "paw-shaped stitched leather memorial keepsake with printed personalization",
    material: "leather with zinc-alloy ring hardware",
    process: "leather cutting, stitching, heat-transfer printing and ring assembly",
    sizeRange: "custom paw silhouette and print area sized for the required wording",
    thickness: "leather layers and hardware attachment confirmed on the proof",
    accessories: "split ring, chain or clasp selected for the use case",
    packaging: "OPP bag, backing card, pouch or gift packaging quoted by project",
    quoteFactors: "leather shape, print area, personalization layout, hardware, quantity, packing, delivery date and destination",
    idealBuyers: "pet memorial gift programs, boutiques, rescue events and personalized merchandise buyers",
    whyThisDesignWorks: "The paw silhouette gives the reference an immediate memorial cue, while the stitched edge provides a clear boundary for a short name or remembrance message. It is a useful starting point for a new design that needs warmth rather than a purely metal format.",
    customOptions: "A fresh project can use an original paw outline, different leather color, logo, date or short message. The usable print area should be reviewed at final size so lettering remains clear and the ring position does not crowd the personalized portion.",
    finishNotes: "Leather creates a softer hand feel than an all-metal keychain, and zinc-alloy hardware adds a practical connection point. The proof should show stitch lines, print placement and the relationship between the material edge and the selected ring or clasp.",
    deliveryNotes: "Provide the expected quantity, wording rules and whether items will be sold individually or distributed at an event. Packing and delivery timing are then planned after proof approval, especially when each piece carries different personalized text.",
    links: keychainLinks,
  }),
  "black-braided-leather-loop-keychain": defineProfile({
    priority: 3,
    productCategory: "Keychains",
    referenceDesignTheme: "braided leather loop with metal end caps and a split ring",
    material: "leather with zinc-alloy metal fittings",
    process: "leather braiding, metal plating and hardware assembly",
    sizeRange: "custom loop length and end-cap scale matched to the intended carry use",
    thickness: "braid diameter and end-cap fit confirmed with the selected leather",
    accessories: "split ring, swivel hook or clasp selected by function",
    packaging: "OPP bag, backing card, pouch or retail box quoted by project",
    quoteFactors: "leather treatment, braid length, end-cap finish, logo treatment, hardware, quantity, packing, delivery date and destination",
    idealBuyers: "corporate gift programs, automotive brands, retail collections and premium giveaways",
    whyThisDesignWorks: "The braided loop introduces visible texture without making the keychain bulky. Metal end caps give the reference a finished transition from leather to ring hardware, which helps it read as a premium everyday accessory for brand or automotive projects.",
    customOptions: "A new project can change the leather color, loop length, braid density, end-cap plating or add an original logo element. Before sampling, confirm whether the preferred connection is a split ring, swivel hook or another attachment and how it will be used.",
    finishNotes: "Leather and metal age differently, so the project should specify the desired appearance of both parts. A darker plated fitting can create a restrained look, while a brighter finish makes the hardware more prominent against the braid.",
    deliveryNotes: "For retail or gift distribution, define whether the loop is packed flat, attached to a card or placed in a pouch. The final quote is based on the approved construction, requested quantity, packaging and destination.",
    links: keychainLinks,
  }),
  "black-pet-paw-leather-keychain": defineProfile({
    priority: 4,
    productCategory: "Keychains",
    referenceDesignTheme: "black paw-shaped leather holder with ring and lobster-clasp hardware",
    material: "leather with zinc-alloy hardware",
    process: "leather cutting, stitching and metal assembly",
    sizeRange: "custom paw outline and hardware placement based on the intended carry use",
    thickness: "leather layers, stitch allowance and clasp connection confirmed on the proof",
    accessories: "ring, lobster clasp, short chain or other requested fitting",
    packaging: "OPP bag, backing card, pouch or gift packing quoted by project",
    quoteFactors: "leather outline, stitching, hardware combination, personalization, quantity, packing, delivery date and destination",
    idealBuyers: "pet gift retailers, memorial programs, rescue events and personalized accessory buyers",
    whyThisDesignWorks: "The paw form keeps the reference recognizable even before a logo or message is added. Combining a ring with a lobster clasp creates more than one attachment option, which can help a new pet-gift project serve bags, keys or event distribution.",
    customOptions: "A new design can use an original paw profile, add a name area, change the leather color or select different metal fittings. The position of the clasp and ring should be shown on the proof so the finished keychain balances correctly when carried.",
    finishNotes: "A black leather base can keep printed or engraved personalization visually focused, while zinc-alloy fittings provide a practical connection point. Material edges, stitching and hardware finish should be reviewed together rather than treated as separate choices.",
    deliveryNotes: "State whether this is a memorial, retail or event project and supply any variable wording in a production-ready list. Sampling and bulk timing are confirmed from the approved layout, final attachments, quantity and packing method.",
    links: keychainLinks,
  }),
  "bradley-leather-emblem-keychain": defineProfile({
    priority: 5,
    productCategory: "Keychains",
    referenceDesignTheme: "stitched leather body with a round metal emblem and split ring",
    material: "leather and zinc alloy",
    process: "leather cutting, stitching and metal emblem assembly",
    sizeRange: "custom leather body and emblem diameter based on artwork",
    thickness: "leather layers and emblem profile confirmed in the proof",
    accessories: "split ring, clasp or short chain selected for use",
    packaging: "OPP bag, backing card, pouch or event-ready packing quoted by project",
    quoteFactors: "leather shape, emblem relief, plating, stitching, hardware, quantity, packing, delivery date and destination",
    idealBuyers: "schools, alumni programs, campus stores, retail buyers and event organizers",
    whyThisDesignWorks: "The round metal emblem gives a school or organization mark a separate focal point from the leather body. That split of materials works well for programs that need a warm branded keepsake while preserving the crisp relief of a small crest.",
    customOptions: "For a new project, artwork can be developed as an original crest, seal or event mark with a revised leather outline, color and ring position. The final emblem diameter should leave enough room for readable type and a stable attachment point.",
    finishNotes: "Zinc alloy supports a raised emblem surface, while leather creates contrast around it. The selected plating, edge treatment and stitching should be reviewed against the artwork proof so the emblem remains legible at the chosen size.",
    deliveryNotes: "Include the event date, distribution method and desired presentation when requesting a quote. Production planning confirms the proof, sample need, quantity, leather and metal specifications, packaging and shipping destination together.",
    links: keychainLinks,
  }),
  "basketball-bottle-opener-keychain": defineProfile({
    priority: 6,
    productCategory: "Keychains",
    referenceDesignTheme: "metal bottle opener with a basketball-style printed insert and split ring",
    material: "zinc alloy",
    process: "die casting, plating, printed insert application and ring assembly",
    sizeRange: "custom opener body sized around the required opening function and artwork",
    thickness: "metal strength and insert recess confirmed with the proof",
    accessories: "split ring, chain, clasp or custom attachment",
    packaging: "OPP bag, backing card, gift box or retail packaging quoted by project",
    quoteFactors: "opener shape, metal thickness, plating, insert artwork, hardware, quantity, packing, delivery date and destination",
    idealBuyers: "sports teams, fan merchandise programs, promotional campaigns and retail gift buyers",
    whyThisDesignWorks: "The reference combines a practical opener with a clearly themed insert, so the logo or team artwork remains visible during normal use. It can suit a promotional project where the functional object needs to carry a distinct sports identity.",
    customOptions: "A new project can revise the opener outline, use original team artwork, change the insert finish or add a second branding area. The proof should confirm both the opening edge and the safe artwork zone before the final metal thickness is selected.",
    finishNotes: "For an opener, function and handling come first. Zinc alloy supports shaped metal bodies, while plating and a protected printed insert can differentiate the visible branding area from the working opening edge.",
    deliveryNotes: "Tell the factory whether this is intended for game-day giveaways, retail sale or a gift set. The quote is then based on the approved body, insert, attachment, quantity, packing and destination rather than a published unit price.",
    links: keychainLinks,
  }),
  "fire-breathing-queen-soft-enamel-pin": defineProfile({
    priority: 7,
    productCategory: "Lapel Pins",
    referenceDesignTheme: "statement lettering and flame artwork in raised metal and soft enamel",
    material: "zinc alloy or iron selected for the approved artwork",
    process: "die casting and soft-enamel color filling",
    sizeRange: "custom pin shape and size matched to lettering and flame detail",
    thickness: "metal outline and recessed enamel depth confirmed on the proof",
    accessories: "butterfly clutch, rubber clutch, magnet, safety pin or backing card",
    packaging: "OPP bag, backing card, carded bag, pouch or retail box quoted by project",
    quoteFactors: "size, outline complexity, color count, plating, attachment, quantity, packing, delivery date and destination",
    idealBuyers: "retail collections, campaign merchandise, event teams and statement-gift programs",
    whyThisDesignWorks: "The reference relies on a strong silhouette, bold type and flame details that remain readable at small scale. Raised metal outlines separate the enamel colors and let the design keep a tactile character suited to expressive merchandise.",
    customOptions: "A new project can replace the wording and flame illustration with original artwork, then adjust the outline, color areas, plating and attachment. Review small text at the intended physical size before choosing the final pin dimensions.",
    finishNotes: "Soft enamel leaves the color areas slightly recessed below the metal lines, producing visible texture. This is useful when the artwork benefits from outlined color fields; the proof should define the metal borders and each color area clearly.",
    deliveryNotes: "For a retail collection, decide whether pins need individual backing cards, barcodes or gift packing before quotation. Artwork review, samples and bulk timing are scheduled from the approved design, quantity and delivery destination.",
    links: pinLinks,
  }),
  "auburn-proud-soft-enamel-pin": defineProfile({
    priority: 8,
    productCategory: "Lapel Pins",
    referenceDesignTheme: "school-spirit lettering with green soft enamel and raised metal outlines",
    material: "zinc alloy or iron selected for the approved artwork",
    process: "die casting and soft-enamel filling",
    sizeRange: "custom pin size based on lettering, logo and intended distribution",
    thickness: "metal outline and color recess depth confirmed in the proof",
    accessories: "butterfly clutch, rubber clutch, magnet, safety pin or backing card",
    packaging: "OPP bag, backing card, carded bag, pouch or retail box quoted by project",
    quoteFactors: "size, lettering detail, color count, plating, attachment, quantity, packing, delivery date and destination",
    idealBuyers: "schools, alumni associations, athletics programs, campus stores and club merchandise buyers",
    whyThisDesignWorks: "The design uses short, high-contrast lettering that can support school-spirit distribution without relying on a large illustration. Raised metal outlines keep the colored fields distinct, helping an original crest or wordmark stay recognizable when worn.",
    customOptions: "A new school, club or event project can use its own wordmark, mascot or graduation date, then select the pin outline and attachment. Confirm the smallest lettering and the intended backing card size during artwork proofing.",
    finishNotes: "Soft enamel is appropriate when visible metal lines are part of the identity. The selected plating can frame green or other school colors, and the proof should make clear which lines remain raised and which areas receive color.",
    deliveryNotes: "Share the distribution date and whether the pins are for students, alumni packs or retail sale. Quantity, backing cards, packing and destination are confirmed with the finished artwork before the production schedule is set.",
    links: pinLinks,
  }),
  "aaa-antique-round-lapel-pin": defineProfile({
    priority: 9,
    productCategory: "Lapel Pins",
    referenceDesignTheme: "round emblem with raised lettering, textured recesses and antique plating",
    material: "zinc alloy",
    process: "die casting and antique plating",
    sizeRange: "custom round or shaped badge size based on text and emblem detail",
    thickness: "relief depth and edge profile confirmed with the proof",
    accessories: "butterfly clutch, rubber clutch, deluxe clutch, magnet or backing card",
    packaging: "OPP bag, backing card, pouch or gift box quoted by project",
    quoteFactors: "diameter, relief detail, plating, attachment, quantity, packing, delivery date and destination",
    idealBuyers: "clubs, recognition programs, membership organizations and retail gift buyers",
    whyThisDesignWorks: "A round field provides a stable frame for a club seal, anniversary mark or recognition message. Textured recessed areas and raised type create contrast without adding multiple color fills, which can suit an original emblem with an antique character.",
    customOptions: "A fresh design can use an original seal, initials, founding date or border wording. Diameter, edge treatment and lettering height should be reviewed together so the message remains readable and the antique effect does not obscure fine details.",
    finishNotes: "Antique plating is most effective where the artwork has deliberate raised and recessed levels. Zinc alloy supports that relief approach, and the proof should identify the edges that need definition after plating.",
    deliveryNotes: "Membership mailers, event awards and retail programs may need different attachments and packing. Confirm those choices with the artwork, quantity and destination so the quote reflects the complete finished pin rather than only the metal face.",
    links: pinLinks,
  }),
  "skull-axe-3d-zinc-alloy-lapel-pin": defineProfile({
    priority: 10,
    productCategory: "Lapel Pins",
    referenceDesignTheme: "sculpted skull-and-axe motif with 3D relief and antique plating",
    material: "zinc alloy",
    process: "3D die casting and antique plating",
    sizeRange: "custom silhouette sized to preserve sculpted forms",
    thickness: "relief height and back attachment confirmed on the proof",
    accessories: "butterfly clutch, rubber clutch, deluxe clutch, magnet or backing card",
    packaging: "OPP bag, backing card, pouch or retail box quoted by project",
    quoteFactors: "shape, 3D relief depth, plating, attachment, quantity, packing, delivery date and destination",
    idealBuyers: "club merchandise teams, retail collections, event organizers and collector-gift buyers",
    whyThisDesignWorks: "This reference gives the sculpted subject enough depth to create a dimensional metal presentation. The antique finish emphasizes transitions in the relief, which makes it useful as a reference for original art that cannot be expressed clearly as a flat logo.",
    customOptions: "A new project can start from different original character, mascot or emblem artwork, then define the relief planes, outer silhouette and attachment. The proof should simplify very small texture details where they would not reproduce cleanly at pin scale.",
    finishNotes: "3D die casting is suited to curved transitions and larger sculpted areas. Antique plating can help reveal those levels, while a flatter surface or enamel insert can be introduced only where the approved artwork calls for a clear contrast.",
    deliveryNotes: "Send reference images that show the intended depth and the final use, such as retail backing cards or club distribution. The sample decision and bulk schedule are then confirmed after relief, finish, quantity, packing and destination are approved.",
    links: pinLinks,
  }),
  "uv-printed-masquerade-day-lapel-pin": defineProfile({
    priority: 11,
    productCategory: "Lapel Pins",
    referenceDesignTheme: "full-color masquerade artwork with UV printing and a clear epoxy surface",
    material: "zinc alloy or iron base with a print-ready face",
    process: "full-color UV printing with optional clear epoxy coating",
    sizeRange: "custom shape and print area based on the artwork composition",
    thickness: "metal profile and coating allowance confirmed on the proof",
    accessories: "butterfly clutch, rubber clutch, magnet, safety pin or backing card",
    packaging: "OPP bag, backing card, carded bag or retail packaging quoted by project",
    quoteFactors: "print area, artwork detail, coating, plating, attachment, quantity, packing, delivery date and destination",
    idealBuyers: "event merchandise teams, photo-art retailers, campaign programs and promotional buyers",
    whyThisDesignWorks: "The reference uses full-color printing where artwork needs more tonal variation than divided enamel fields can carry. A glossy clear coating can protect the printed surface while keeping a photo-style masquerade composition visually connected.",
    customOptions: "A new project can use original illustration, photography or gradient artwork and revise the outline, print area, coating and attachment. The submitted file should be reviewed at actual size so fine lines and small color transitions remain useful after production.",
    finishNotes: "UV printing is most appropriate for continuous color, fine illustration or photographic detail. The base, edge plating and optional epoxy surface should be selected together because each affects the contrast and perceived depth of the artwork.",
    deliveryNotes: "For campaigns and retail programs, define the card format and launch date before quotation. Proofing, sample requirements and bulk delivery are planned around the artwork readiness, requested quantity, packing and destination.",
    links: pinLinks,
  }),
  "3d-antique-firefighter-challenge-coins": defineProfile({
    priority: 12,
    productCategory: "Challenge Coins",
    referenceDesignTheme: "firefighter recognition coin with dimensional relief, antique finish and color detail",
    material: "zinc alloy",
    process: "die casting with relief, plating and optional color detailing",
    sizeRange: "custom round or shaped coin size based on relief and wording",
    thickness: "coin profile and sculpted depth confirmed with the proof",
    accessories: "coin capsule, pouch, display stand or presentation box",
    packaging: "OPP bag, capsule, pouch, case or gift box quoted by project",
    quoteFactors: "diameter, thickness, 3D relief, plating, color detail, quantity, packaging, delivery date and destination",
    idealBuyers: "departments, recognition programs, memorial committees, clubs and commemorative-event buyers",
    whyThisDesignWorks: "The reference assigns the strongest visual elements to raised relief, making it suitable for a recognition piece rather than a flat token. An antique finish helps differentiate the sculpted planes and can support original department or commemorative artwork.",
    customOptions: "A new project can use an original badge, vehicle, building or service symbol on one or both sides. Coin diameter and thickness should be chosen after reviewing the smallest text, the intended relief and whether a display package is required.",
    finishNotes: "Zinc alloy can support shaped or sculpted relief, while antique plating draws attention to recesses. Color should be reserved for defined areas so it supports, rather than covers, the three-dimensional form.",
    deliveryNotes: "Recognition programs often have fixed ceremony dates, so provide the in-hands date at the first inquiry. Sampling, packaging and delivery timing are confirmed after the artwork, finish, quantity and destination are approved.",
    links: coinLinks,
  }),
  "double-sided-anniversary-challenge-coin": defineProfile({
    priority: 13,
    productCategory: "Challenge Coins",
    referenceDesignTheme: "double-sided anniversary coin with detailed artwork and antique metal finish",
    material: "zinc alloy",
    process: "die casting, relief forming and antique plating",
    sizeRange: "custom diameter or shape based on artwork for both faces",
    thickness: "double-sided relief and edge profile confirmed with the proof",
    accessories: "capsule, pouch, acrylic case, stand or presentation box",
    packaging: "OPP bag, capsule, pouch, case or gift box quoted by project",
    quoteFactors: "two-sided artwork, diameter, thickness, edge, plating, color detail, quantity, packaging, delivery date and destination",
    idealBuyers: "anniversary committees, organizations, recognition programs and collector-gift buyers",
    whyThisDesignWorks: "Using both faces creates room for an anniversary story: one side can carry the primary emblem while the other holds a date, message or secondary artwork. That division helps a commemorative project avoid overcrowding one coin face.",
    customOptions: "A new coin can combine an original front emblem with reverse-side wording, event details or a secondary logo. The artwork review should confirm which details need relief, which remain flat and how the edge treatment supports the overall presentation.",
    finishNotes: "Two-sided coins need a balanced construction so neither face compromises the other. Antique metal finishing can make raised graphics readable, while limited color fills may be used only where they clarify the approved artwork.",
    deliveryNotes: "Share the anniversary date, recipient type and intended presentation early. The quote will confirm proofing, any sample requirement, bulk quantity, packaging and shipment plan based on the finished two-sided design.",
    links: coinLinks,
  }),
  "cut-shape-route-map-challenge-coin": defineProfile({
    priority: 14,
    productCategory: "Challenge Coins",
    referenceDesignTheme: "custom map-route silhouette with cut edges and colored details",
    material: "zinc alloy",
    process: "custom-shape die casting, plating and optional color detailing",
    sizeRange: "custom width and height based on the route outline and lettering",
    thickness: "narrow areas and relief depth confirmed on the proof",
    accessories: "capsule, pouch, stand, display card or presentation box",
    packaging: "OPP bag, capsule, pouch, case or gift box quoted by project",
    quoteFactors: "irregular outline, narrow sections, size, thickness, color detail, plating, quantity, packing, delivery date and destination",
    idealBuyers: "destination marketers, race organizers, travel campaigns and commemorative-event buyers",
    whyThisDesignWorks: "The route silhouette turns a map or journey into the object itself, which makes the reference well suited to event courses, destination stories and milestone travel programs. It is a better starting point than a standard round coin when the outline is meaningful.",
    customOptions: "A new project can use an original route, map boundary, landmark outline or trail graphic. The proof should simplify very narrow turns and confirm the maximum width and height so the shape remains strong after casting and packing.",
    finishNotes: "Custom outlines need enough metal around fine points and cut edges. Zinc alloy supports irregular shapes, while plating and defined color areas can separate a route line, destination name or important visual marker.",
    deliveryNotes: "For a race or travel program, send the required date, route artwork and distribution plan. The production schedule is set from the approved silhouette, finish, quantity, packaging and destination rather than a generic coin specification.",
    links: coinLinks,
  }),
  "victoria-police-st-michael-challenge-coin": defineProfile({
    priority: 15,
    productCategory: "Challenge Coins",
    referenceDesignTheme: "double-sided service recognition coin with antique silver relief",
    material: "zinc alloy",
    process: "die casting and antique plating",
    sizeRange: "custom coin size based on double-sided artwork and wording",
    thickness: "relief and edge thickness confirmed on the proof",
    accessories: "capsule, pouch, acrylic case, coin stand or presentation box",
    packaging: "OPP bag, capsule, pouch, case or gift box quoted by project",
    quoteFactors: "two-sided relief, diameter, edge detail, plating, color detail, quantity, packaging, delivery date and destination",
    idealBuyers: "service organizations, recognition committees, unit programs and collector-gift buyers",
    whyThisDesignWorks: "The reference balances a service-related central image with formal border detail, leaving room for separate front and reverse messages. That makes it a useful reference for an original recognition coin that needs ceremonial presence and readable identity on both faces.",
    customOptions: "A new project can use authorized original insignia, motto, date or recognition text and choose a round or custom outline. The proof should establish the hierarchy of artwork on each side before diameter, thickness and edge treatment are finalized.",
    finishNotes: "Antique silver-style plating can strengthen contrast in relief-heavy artwork. It works best when the approved design has clear raised borders and limited fine texture; enamel is optional and should only be placed in well-defined recessed areas.",
    deliveryNotes: "Because recognition coins may be presented at a ceremony, provide the target in-hands date and desired presentation style early. Sampling, bulk quantity, packaging and shipping are then scheduled from the approved artwork and destination.",
    links: coinLinks,
  }),
  "3d-shield-logo-award-medal": defineProfile({
    priority: 16,
    productCategory: "Medals",
    referenceDesignTheme: "shield-shaped award medal with a raised 3D logo area",
    material: "zinc alloy",
    process: "die casting with relief, plating and ribbon assembly",
    sizeRange: "custom shield width and height based on logo and event text",
    thickness: "relief depth and medal loop confirmed on the proof",
    accessories: "ribbon, neck drape, jump ring, presentation box or display case",
    packaging: "individual bag, medal case, gift box or event-ready packing quoted by project",
    quoteFactors: "shape, size, relief depth, plating, ribbon, quantity, packaging, delivery date and destination",
    idealBuyers: "award programs, corporate recognition teams, schools, races and ceremony organizers",
    whyThisDesignWorks: "A shield outline gives the reference a formal award character and a central 3D zone provides visual hierarchy for an original logo. It can work when an event needs a medal that feels distinct from a standard round participation piece.",
    customOptions: "A new project can use a different shield, crest or event mark, with revised relief levels, ribbon colors and reverse-side wording. Confirm the neck loop and ribbon width early so the metal body and presentation work as one finished award.",
    finishNotes: "Zinc alloy is suitable for a raised central logo and custom outer shape. Plating can emphasize the relief, while small enamel areas can be added only where the artwork has defined recessed boundaries.",
    deliveryNotes: "Provide the ceremony date, recipient count and whether medals are finisher, placement or recognition awards. The quote then reflects the approved medal body, ribbon, packaging, quantity and destination.",
    links: medalLinks,
  }),
  "silver-race-award-medal-with-ribbon": defineProfile({
    priority: 17,
    productCategory: "Medals",
    referenceDesignTheme: "race award medal with clean relief and a ribbon attachment",
    material: "zinc alloy",
    process: "die casting, plating and ribbon assembly",
    sizeRange: "custom medal size based on event artwork, distance and ribbon use",
    thickness: "medal weight, relief and loop confirmed on the proof",
    accessories: "ribbon, neck drape, jump ring, medal loop, box or display case",
    packaging: "individual bag, medal case, gift box or event-ready packing quoted by project",
    quoteFactors: "size, relief, plating, ribbon specification, quantity, packaging, delivery date and destination",
    idealBuyers: "race organizers, school competitions, sports events and award-program buyers",
    whyThisDesignWorks: "The reference keeps the medal face clean enough for event artwork while the attached ribbon makes it ready for presentation. It offers a practical starting point for programs that need a clear award object rather than a more complex commemorative coin.",
    customOptions: "A new event can use original distance, year, location or sponsor artwork, then select the medal outline, plating and ribbon. The proof should confirm whether one design serves all finishers or whether placement and age-group variants are required.",
    finishNotes: "Clean relief works well for names, distance marks and simple visual identity. The chosen plating and ribbon color should be reviewed together so the award remains readable during the ceremony and in event photography.",
    deliveryNotes: "Provide registration estimates, award rules and the required in-hands date early. The final plan confirms the approved medal, ribbon, reserve quantity, packing and delivery destination before bulk production begins.",
    links: medalLinks,
  }),
  "blue-marathon-ribbon-medal": defineProfile({
    priority: 18,
    productCategory: "Medals",
    referenceDesignTheme: "marathon medal with detailed metal casting and a blue event ribbon",
    material: "zinc alloy",
    process: "die casting, plating and ribbon assembly",
    sizeRange: "custom medal size based on marathon artwork and intended wear",
    thickness: "weight, relief and loop strength confirmed with the proof",
    accessories: "printed or plain ribbon, neck drape, jump ring, medal loop, box or display case",
    packaging: "individual bag, medal case, gift box or event-ready packing quoted by project",
    quoteFactors: "medal size, relief, plating, ribbon specification, quantity, packing, delivery date and destination",
    idealBuyers: "marathon organizers, charity runs, running clubs and finisher-program buyers",
    whyThisDesignWorks: "The reference pairs a cast metal face with a visible event ribbon, which supports both participant presentation and race-day distribution. It is a useful starting point for an original marathon design where medal size, wear comfort and event identity must work together.",
    customOptions: "A new running event can add its own route, distance, year, city or charity imagery, then select the outer shape and ribbon treatment. Confirm the intended medal diameter and ribbon width before finalizing the proof, especially for detailed artwork.",
    finishNotes: "Zinc alloy can support relief and custom shapes while keeping the medal suitable for a neck ribbon. Plating, color details and ribbon printing should be reviewed together so the finished award has clear contrast and the right event tone.",
    deliveryNotes: "Share the event date, registration forecast, award policy and required delivery location at inquiry. Sampling and bulk production are planned around approved artwork, ribbon, quantity, packing and logistics rather than a published retail schedule.",
    links: medalLinks,
  }),
  "gold-scn-ribbon-medal": defineProfile({
    priority: 19,
    productCategory: "Medals",
    referenceDesignTheme: "gold-plated ribbon medal with black enamel detail and a tricolor neck ribbon",
    material: "zinc alloy",
    process: "die casting, gold plating, enamel detailing and ribbon assembly",
    sizeRange: "custom medal size based on artwork, color areas and event use",
    thickness: "relief and ribbon-loop construction confirmed on the proof",
    accessories: "printed or stock ribbon, neck drape, jump ring, medal loop, box or display case",
    packaging: "individual bag, medal case, gift box or event-ready packing quoted by project",
    quoteFactors: "size, plating, enamel areas, ribbon specification, quantity, packing, delivery date and destination",
    idealBuyers: "sports-event organizers, award programs, finisher medal buyers and branded recognition teams",
    whyThisDesignWorks: "Gold plating, dark enamel and a contrasting ribbon give this reference a strong ceremonial hierarchy. It can guide an original event medal where the visual system needs to distinguish a premium award or a special race category.",
    customOptions: "A new project can adapt the color palette, medal outline, event mark and ribbon print while keeping the award logic original. The proof should show every enamel boundary and confirm whether ribbon colors identify distances, placements or a single event series.",
    finishNotes: "A polished gold finish gives defined metal borders high visibility, while black enamel can make small logo elements stand out. The relationship between plating, color fill and ribbon should be reviewed under the intended event presentation conditions.",
    deliveryNotes: "Share the recipient plan, event date and required packaging at the start. The quote is based on the approved medal artwork, finish, ribbon, quantity, packing and destination, with timing confirmed after proof approval.",
    links: medalLinks,
  }),
  "silver-basketball-sports-medal-with-ribbon": defineProfile({
    priority: 20,
    productCategory: "Medals",
    referenceDesignTheme: "basketball sports medal with raised detail and a presentation ribbon",
    material: "zinc alloy",
    process: "die casting, plating and ribbon assembly",
    sizeRange: "custom medal size based on sports artwork and ceremony use",
    thickness: "medal weight, relief and loop confirmed with the proof",
    accessories: "ribbon, neck drape, jump ring, medal loop, presentation box or display case",
    packaging: "individual bag, medal case, gift box or tournament-ready packing quoted by project",
    quoteFactors: "size, relief, plating, ribbon, quantity, packaging, delivery date and destination",
    idealBuyers: "schools, basketball tournaments, team award programs and community-sports organizers",
    whyThisDesignWorks: "Raised sports detail gives the medal a clear theme before the event logo is added, and the ribbon makes it ready for podium or team presentation. It is a practical reference for an original tournament award with a physical sense of achievement.",
    customOptions: "A new tournament can use its own ball graphic, team crest, division name, year or placement wording. The proof should establish whether the same medal is used for every participant or whether gold, silver and bronze variants are required.",
    finishNotes: "Zinc alloy supports sporting relief and a durable medal loop, while plating and selective color can distinguish a basketball graphic or event logo. Ribbon color should be selected in the same approval cycle as the medal face.",
    deliveryNotes: "Provide tournament dates, team counts, award categories and the distribution plan when requesting a quote. The final schedule follows the approved artwork, ribbon, quantity, packing and delivery destination.",
    links: medalLinks,
  }),
};

export const buildProcurementContentHtml = (profile) => {
  if (!profile) return "";

  const links = profile.links.map((link) => `
              <li><a href="${escapeHtml(link.href)}">${escapeHtml(link.label)}</a><span>${escapeHtml(link.note)}.</span></li>`).join("");

  return `
    <section class="single-product-procurement" aria-label="Custom procurement notes">
      <div class="container">
        <div class="single-product-procurement-heading">
          <p>REFERENCE DESIGN FOR OEM/ODM INQUIRY</p>
          <h2>Plan a Similar Custom Project</h2>
        </div>
        <div class="single-product-procurement-grid">
          <section>
            <h3>Why This Design Works</h3>
            <p>${escapeHtml(profile.whyThisDesignWorks)}</p>
          </section>
          <section>
            <h3>Custom Options for Your Project</h3>
            <p>${escapeHtml(profile.customOptions)}</p>
          </section>
          <section>
            <h3>What Affects the Quote</h3>
            <p>This is a made-to-order reference, not a stocked retail item. The quote is shaped by ${escapeHtml(profile.quoteFactors)}. ${escapeHtml(profile.moq)}</p>
          </section>
          <section>
            <h3>Material / Finish Considerations</h3>
            <p>${escapeHtml(profile.finishNotes)}</p>
          </section>
          <section>
            <h3>Packaging and Delivery Notes</h3>
            <p>${escapeHtml(profile.deliveryNotes)} ${escapeHtml(profile.sampleTiming)} ${escapeHtml(profile.productionTiming)}</p>
          </section>
          <section>
            <h3>Related Custom Ideas / Guides</h3>
            <ul class="single-product-procurement-links">${links}
            </ul>
          </section>
        </div>
      </div>
    </section>`;
};
