import StaticPage from "../components/StaticPage";
import { footerHtml } from "../components/footerHtml";
import { getProductPath } from "../lib/siteRoutes";
import { compareProductEntriesBySkuDesc } from "../lib/productSorting";
import { siteHeaderHtml } from "../components/siteHeaderHtml";


export const productItems = {
  "uv-printed-masquerade-day-lapel-pin": {
    title: "UV Printed Masquerade Day Lapel Pin",
    image: "assets/images/type-pins-uv-printed-masquerade-day.png",
    alt: "UV printed masquerade day lapel pin",
    categoryLabel: "Lapel Pins",
    categoryHref: "/products/custom-enamel-pins",
    material: "Zinc alloy",
    process: "Full color UV printing with clear epoxy coating",
    sku: "UP-PIN-017",
    usage: "Event merchandise, retail gifts, photo artwork pins",
    categories: "Lapel Pins, UV Printed Pins, Full Color Printed Pins",
    quoteProduct: "Lapel Pins",
    lead: "This UV printed masquerade day lapel pin uses full color UV printing to reproduce photo-style artwork, crisp color transitions and glossy surface detail for event merchandise, retail gifts and promotional collections."
  },
  "skull-axe-3d-zinc-alloy-lapel-pin": {
    title: "Skull Axe 3D Zinc Alloy Lapel Pin",
    image: "assets/images/type-pins-3d-zinc-alloy.png",
    alt: "Skull axe 3D zinc alloy lapel pin",
    categoryLabel: "Lapel Pins",
    categoryHref: "/products/custom-enamel-pins",
    material: "Zinc alloy",
    process: "3D die casting and antique plating",
    sku: "UP-PIN-016",
    usage: "Retail collections, club merchandise, events",
    categories: "Lapel Pins, 3D Lapel Pins, Zinc Alloy Pins",
    quoteProduct: "Lapel Pins",
    lead: "This skull axe 3D zinc alloy lapel pin features sculpted metal relief, antique plating and bold dimensional detail for retail collections, club merchandise, event giveaways and promotional gifts."
  },
  "aaa-antique-round-lapel-pin": {
    title: "AAA Antique Round Lapel Pin",
    image: "assets/images/type-pins-aaa-antique-round.png",
    alt: "AAA antique round lapel pin",
    categoryLabel: "Lapel Pins",
    categoryHref: "/products/custom-enamel-pins",
    material: "Zinc alloy",
    process: "Die casting and antique plating",
    sku: "UP-PIN-015",
    usage: "Club merchandise, awards, retail gifts",
    categories: "Lapel Pins, Antique Pins, Round Pins",
    quoteProduct: "Lapel Pins",
    lead: "This AAA antique round lapel pin uses raised metal lettering, textured recessed detail and antique plating for club merchandise, recognition gifts, retail collections and event promotions."
  },
  "halloween-letter-s-soft-enamel-pin": {
    title: "Halloween Letter S Soft Enamel Pin",
    image: "assets/images/type-pins-halloween-letter-s-soft-enamel.png",
    alt: "Halloween letter S soft enamel pin",
    categoryLabel: "Lapel Pins",
    categoryHref: "/products/custom-enamel-pins",
    material: "Zinc alloy",
    process: "Die casting and soft enamel filling",
    sku: "UP-PIN-015",
    usage: "Halloween merchandise, retail collections, events",
    categories: "Lapel Pins, Soft Enamel Pins",
    quoteProduct: "Lapel Pins",
    lead: "This Halloween letter S soft enamel pin features a custom letter shape, seasonal artwork and colorful recessed enamel for retail collections, event merchandise, club campaigns and promotional gifts."
  },
  "fire-breathing-queen-soft-enamel-pin": {
    title: "Fire Breathing Queen Soft Enamel Pin",
    image: "assets/images/type-pins-fire-breathing-queen-soft-enamel.png",
    alt: "Fire Breathing Queen soft enamel pin",
    categoryLabel: "Lapel Pins",
    categoryHref: "/products/custom-enamel-pins",
    material: "Zinc alloy",
    process: "Die casting and soft enamel filling",
    sku: "UP-PIN-014",
    usage: "Statement merchandise, retail collections, events",
    categories: "Lapel Pins, Soft Enamel Pins",
    quoteProduct: "Lapel Pins",
    lead: "This Fire Breathing Queen soft enamel pin features bold lettering, flame artwork and vivid recessed enamel for statement merchandise, retail collections, events and promotional gifts."
  },
  "winged-anime-character-soft-enamel-pin-set": {
    title: "Winged Anime Character Soft Enamel Pin Set",
    image: "assets/images/type-pins-winged-anime-character-soft-enamel-set.png",
    alt: "Winged anime character soft enamel pin set",
    categoryLabel: "Lapel Pins",
    categoryHref: "/products/custom-enamel-pins",
    material: "Zinc alloy",
    process: "Die casting and soft enamel filling",
    sku: "UP-PIN-013",
    usage: "Fan merchandise, retail collections, events",
    categories: "Lapel Pins, Soft Enamel Pins",
    quoteProduct: "Lapel Pins",
    lead: "This winged anime character soft enamel pin set features detailed character artwork, raised metal outlines and colorful recessed enamel for fan merchandise, retail collections, events and promotional gifts."
  },
  "wizard-bunny-soft-enamel-pin-set": {
    title: "Wizard Bunny Soft Enamel Pin Set",
    image: "assets/images/type-pins-wizard-bunny-soft-enamel-set.png",
    alt: "Wizard bunny soft enamel pin set",
    categoryLabel: "Lapel Pins",
    categoryHref: "/products/custom-enamel-pins",
    material: "Zinc alloy",
    process: "Die casting and soft enamel filling",
    sku: "UP-PIN-012",
    usage: "Cute merchandise, retail collections, events",
    categories: "Lapel Pins, Soft Enamel Pins",
    quoteProduct: "Lapel Pins",
    lead: "This wizard bunny soft enamel pin set features cute bunny artwork, polished gold plating and colorful recessed enamel for retail collections, event merchandise, club campaigns and promotional gifts."
  },
  "horror-guts-soft-enamel-pin": {
    title: "Horror Guts Soft Enamel Pin",
    image: "assets/images/type-pins-horror-guts-soft-enamel.png",
    alt: "Horror guts soft enamel pin",
    categoryLabel: "Lapel Pins",
    categoryHref: "/products/custom-enamel-pins",
    material: "Zinc alloy",
    process: "Die casting and soft enamel filling",
    sku: "UP-PIN-011",
    usage: "Horror merchandise, retail collections, events",
    categories: "Lapel Pins, Soft Enamel Pins",
    quoteProduct: "Lapel Pins",
    lead: "This horror guts soft enamel pin features bold comic-style artwork, vivid recessed enamel color and raised dark metal outlines for retail collections, event merchandise, fan campaigns and promotional gifts."
  },
  "rosemount-irish-soft-enamel-pin": {
    title: "Rosemount Irish Soft Enamel Pin",
    image: "assets/images/type-pins-rosemount-irish-soft-enamel.png",
    alt: "Rosemount Irish soft enamel pin",
    categoryLabel: "Lapel Pins",
    categoryHref: "/products/custom-enamel-pins",
    material: "Zinc alloy",
    process: "Die casting and soft enamel filling",
    sku: "UP-PIN-010",
    usage: "School spirit, sports events, retail gifts",
    categories: "Lapel Pins, Soft Enamel Pins",
    quoteProduct: "Lapel Pins",
    lead: "This Rosemount Irish soft enamel pin features bold school spirit lettering, a mascot emblem and colorful recessed enamel for sports events, alumni programs, retail collections and promotional gifts."
  },
  "tiger-face-soft-enamel-pin": {
    title: "Tiger Face Soft Enamel Pin",
    image: "assets/images/type-pins-tiger-face-soft-enamel.png",
    alt: "Tiger face soft enamel pin",
    categoryLabel: "Lapel Pins",
    categoryHref: "/products/custom-enamel-pins",
    material: "Zinc alloy",
    process: "Die casting and soft enamel filling",
    sku: "UP-PIN-009",
    usage: "Animal merchandise, retail collections, events",
    categories: "Lapel Pins, Soft Enamel Pins",
    quoteProduct: "Lapel Pins",
    lead: "This tiger face soft enamel pin features colorful animal artwork, recessed enamel color and raised dark metal outlines for retail collections, event merchandise, club campaigns and promotional gifts."
  },
  "christmas-enamel-pin-set": {
    title: "Christmas Enamel Pin Set",
    image: "assets/images/latest-christmas-enamel-pins.jpg",
    alt: "Christmas enamel pin set",
    categoryLabel: "Lapel Pins",
    categoryHref: "/products/custom-enamel-pins",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-PIN-005",
    usage: "Holiday promotions, retail gifts, events",
    categories: "Lapel Pins, Christmas Enamel Pins",
    quoteProduct: "Lapel Pins",
    lead: "This Christmas enamel pin set includes festive pin designs for holiday retail programs, brand campaigns, gift boxes and seasonal event merchandise."
  },
  "lost-my-way-floral-hard-enamel-pin": {
    title: "Lost My Way Floral Hard Enamel Pin",
    image: "assets/images/type-pins-lost-my-way-floral.jpg",
    alt: "Lost My Way floral hard enamel pin",
    categoryLabel: "Lapel Pins",
    categoryHref: "/products/custom-enamel-pins",
    material: "Zinc alloy",
    process: "Die casting and hard enamel filling",
    sku: "UP-PIN-008",
    usage: "Inspirational gifts, retail collections, events",
    categories: "Lapel Pins, Hard Enamel Pins",
    quoteProduct: "Lapel Pins",
    lead: "This Lost My Way floral hard enamel pin combines a purple compass-style background, floral artwork and smooth enamel for gifts, retail collections, events and club campaigns."
  },
  "yellow-character-hard-enamel-pin": {
    title: "Yellow Character Hard Enamel Pin",
    image: "assets/images/type-pins-yellow-character.jpg",
    alt: "Yellow character hard enamel pin",
    categoryLabel: "Lapel Pins",
    categoryHref: "/products/custom-enamel-pins",
    material: "Zinc alloy",
    process: "Die casting and hard enamel filling",
    sku: "UP-PIN-007",
    usage: "Character merchandise, events, retail gifts",
    categories: "Lapel Pins, Hard Enamel Pins",
    quoteProduct: "Lapel Pins",
    lead: "This yellow character hard enamel pin features bright enamel color, polished smooth surfaces and playful character artwork for event merchandise, retail collections, club campaigns and promotional gifts."
  },
  "auburn-proud-soft-enamel-pin": {
    title: "Auburn Proud Soft Enamel Pin",
    image: "assets/images/type-pins-auburn-proud.jpg",
    alt: "Auburn Proud green soft enamel pin",
    categoryLabel: "Lapel Pins",
    categoryHref: "/products/custom-enamel-pins",
    material: "Zinc alloy",
    process: "Die casting and soft enamel filling",
    sku: "UP-PIN-006",
    usage: "School spirit, alumni events, retail gifts",
    categories: "Lapel Pins, Soft Enamel Pins",
    quoteProduct: "Lapel Pins",
    lead: "This Auburn Proud soft enamel pin uses green enamel, raised metal outlines and bold lettering for school spirit programs, alumni events, club merchandise and retail gift collections."
  },
  "green-character-soft-enamel-pin-set": {
    title: "Green Character Soft Enamel Pin Set",
    image: "assets/images/type-pins-soft-enamel.jpg",
    alt: "Green character soft enamel pin set",
    categoryLabel: "Lapel Pins",
    categoryHref: "/products/custom-enamel-pins",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-PIN-001",
    usage: "Brand events, clubs, retail gifts",
    categories: "Lapel Pins, Soft Enamel Pins",
    quoteProduct: "Lapel Pins",
    lead: "This custom soft enamel pin set features raised metal outlines and colorful recessed enamel. It is suitable for brand merchandise, club rewards, event giveaways, fan collectibles and retail accessories."
  },
  "box-cat-and-umbrella-cat-enamel-pins": {
    title: "Box Cat and Umbrella Cat Enamel Pins",
    image: "assets/images/type-pins-hard-enamel.jpg",
    alt: "Box cat and umbrella cat hard enamel pins",
    categoryLabel: "Lapel Pins",
    categoryHref: "/products/custom-enamel-pins",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-PIN-002",
    usage: "Retail gifts, fan merch, promotional sets",
    categories: "Lapel Pins, Hard Enamel Pins",
    quoteProduct: "Lapel Pins",
    lead: "These colorful cat enamel pins use smooth enamel color fills and polished metal edges. They work well for retail collections, brand mascots, artist merch and gift campaigns."
  },
  "antique-silver-guitar-crest-enamel-pin": {
    title: "Antique Silver Guitar Crest Enamel Pin",
    image: "assets/images/type-pins-die-struck.jpg",
    alt: "Antique silver guitar crest enamel pin",
    categoryLabel: "Lapel Pins",
    categoryHref: "/products/custom-enamel-pins",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-PIN-003",
    usage: "Music events, awards, souvenir pins",
    categories: "Lapel Pins, Die Struck Pins",
    quoteProduct: "Lapel Pins",
    lead: "This antique silver guitar crest pin shows raised relief detail with an aged metal finish. It is suited for music events, collectible awards, venue merchandise and commemorative gifts."
  },
  "glitter-tour-truck-printed-enamel-pin": {
    title: "Glitter Tour Truck Printed Enamel Pin",
    image: "assets/images/type-pins-printed.jpg",
    alt: "Glitter tour truck printed enamel pin",
    categoryLabel: "Lapel Pins",
    categoryHref: "/products/custom-enamel-pins",
    material: "Zinc alloy",
    process: "Printing and enamel filling",
    sku: "UP-PIN-004",
    usage: "Campaign merch, events, retail souvenirs",
    categories: "Lapel Pins, Printed Pins",
    quoteProduct: "Lapel Pins",
    lead: "This truck-shaped printed enamel pin combines detailed artwork with bright color accents. It is ideal for promotional campaigns, roadshow merchandise, souvenir programs and retail gift lines."
  },
  "victoria-police-st-michael-challenge-coin": {
    title: "Victoria Police St. Michael Challenge Coin",
    image: "assets/images/type-coins-victoria-police-st-michael.png",
    alt: "Victoria Police St. Michael double-sided challenge coin",
    categoryLabel: "Challenge Coins",
    categoryHref: "/products/custom-challenge-coins",
    material: "Zinc alloy",
    process: "Die casting and antique plating",
    sku: "UP-COIN-037",
    usage: "Police units, patron saint gifts, recognition",
    categories: "Challenge Coins, Double Sided Coins",
    quoteProduct: "Challenge Coins",
    lead: "This Victoria Police St. Michael challenge coin combines antique silver relief, double-sided police artwork and detailed plating for recognition, commemorative gifts and collector programs."
  },
  "jennifer-jo-cobb-racing-challenge-coin": {
    title: "Jennifer Jo Cobb Racing Challenge Coin",
    image: "assets/images/type-coins-jennifer-jo-cobb-racing.png",
    alt: "Jennifer Jo Cobb Racing double-sided challenge coin",
    categoryLabel: "Challenge Coins",
    categoryHref: "/products/custom-challenge-coins",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-COIN-036",
    usage: "Racing teams, charity programs, events",
    categories: "Challenge Coins, Double Sided Coins",
    quoteProduct: "Challenge Coins",
    lead: "This Jennifer Jo Cobb Racing challenge coin features double sided racing artwork, bright enamel color and polished metal texture for motorsport events, charity programs, team recognition and fan merchandise."
  },
  "marine-nationale-commandant-challenge-coin": {
    title: "Marine Nationale Commandant Challenge Coin",
    image: "assets/images/type-coins-marine-nationale-commandant.png",
    alt: "Marine Nationale Commandant double-sided challenge coin",
    categoryLabel: "Challenge Coins",
    categoryHref: "/products/custom-challenge-coins",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-COIN-035",
    usage: "Naval units, command gifts, ceremonies",
    categories: "Challenge Coins, Double Sided Coins",
    quoteProduct: "Challenge Coins",
    lead: "This Marine Nationale Commandant challenge coin pairs naval vessel artwork with antique relief and color enamel for naval unit gifts, command recognition, ceremonies and commemorative programs."
  },
  "houston-community-college-emt-challenge-coin": {
    title: "Houston Community College EMT Challenge Coin",
    image: "assets/images/type-coins-houston-community-college-emt.png",
    alt: "Houston Community College EMT double-sided challenge coin",
    categoryLabel: "Challenge Coins",
    categoryHref: "/products/custom-challenge-coins",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-COIN-034",
    usage: "Medical training, colleges, recognition",
    categories: "Challenge Coins, Double Sided Coins",
    quoteProduct: "Challenge Coins",
    lead: "This Houston Community College EMT challenge coin uses antique copper plating, medical training artwork and double sided relief for EMT programs, college recognition, graduation gifts and award events."
  },
  "dice-dungeons-inspiration-challenge-coin": {
    title: "Dice Dungeons Inspiration Challenge Coin",
    image: "assets/images/type-coins-dice-dungeons-inspiration.png",
    alt: "Dice Dungeons Inspiration double-sided challenge coin",
    categoryLabel: "Challenge Coins",
    categoryHref: "/products/custom-challenge-coins",
    material: "Zinc alloy",
    process: "Die casting and antique plating",
    sku: "UP-COIN-033",
    usage: "Gaming clubs, tabletop events, collector gifts",
    categories: "Challenge Coins, Double Sided Coins",
    quoteProduct: "Challenge Coins",
    lead: "This Dice Dungeons Inspiration challenge coin features a custom octagon shape, antique metal texture and fantasy game artwork for tabletop events, gaming clubs, retail gifts and collector programs."
  },
  "ibew-eastern-wyoming-challenge-coin": {
    title: "IBEW Eastern Wyoming Challenge Coin",
    image: "assets/images/type-coins-ibew-eastern-wyoming.png",
    alt: "IBEW Eastern Wyoming double-sided challenge coin",
    categoryLabel: "Challenge Coins",
    categoryHref: "/products/custom-challenge-coins",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-COIN-032",
    usage: "Union locals, trade groups, member gifts",
    categories: "Challenge Coins, Double Sided Coins",
    quoteProduct: "Challenge Coins",
    lead: "This IBEW Eastern Wyoming challenge coin uses bright enamel color, double sided union artwork and polished metal borders for local chapters, member gifts, trade events and recognition programs."
  },
  "marine-corps-daniel-joseph-moran-challenge-coin": {
    title: "Marine Corps Daniel Joseph Moran Challenge Coin",
    image: "assets/images/type-coins-marine-corps-daniel-joseph-moran.png",
    alt: "Marine Corps Daniel Joseph Moran double-sided challenge coin",
    categoryLabel: "Challenge Coins",
    categoryHref: "/products/custom-challenge-coins",
    material: "Zinc alloy",
    process: "Die casting and antique plating",
    sku: "UP-COIN-031",
    usage: "Marine Corps gifts, memorials, recognition",
    categories: "Challenge Coins, Double Sided Coins",
    quoteProduct: "Challenge Coins",
    lead: "This Marine Corps Daniel Joseph Moran challenge coin features antique relief, a rope edge and double-sided memorial artwork for recognition, remembrance events and collector sets."
  },
  "queensland-fire-emergency-service-challenge-coin": {
    title: "Queensland Fire Emergency Service Challenge Coin",
    image: "assets/images/type-coins-queensland-fire-emergency-service.png",
    alt: "Queensland Fire Emergency Service double-sided challenge coin",
    categoryLabel: "Challenge Coins",
    categoryHref: "/products/custom-challenge-coins",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-COIN-030",
    usage: "Fire services, emergency teams, awards",
    categories: "Challenge Coins, Double Sided Coins",
    quoteProduct: "Challenge Coins",
    lead: "This Queensland Fire Emergency Service challenge coin combines fire service emblem artwork, deep red enamel and double sided relief for emergency service teams, award ceremonies and commemorative programs."
  },
  "wenatchee-ibew-local-191-challenge-coin": {
    title: "Wenatchee IBEW Local 191 Challenge Coin",
    image: "assets/images/type-coins-wenatchee-ibew-local-191.png",
    alt: "Wenatchee IBEW Local 191 double-sided challenge coin",
    categoryLabel: "Challenge Coins",
    categoryHref: "/products/custom-challenge-coins",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-COIN-029",
    usage: "Union locals, member recognition, events",
    categories: "Challenge Coins, Double Sided Coins",
    quoteProduct: "Challenge Coins",
    lead: "This Wenatchee IBEW Local 191 challenge coin highlights double sided union artwork, blue enamel and antique relief for local chapter gifts, member recognition, labor events and collector programs."
  },
  "canada-border-services-pacific-region-challenge-coin": {
    title: "Canada Border Services Pacific Region Challenge Coin",
    image: "assets/images/type-coins-canada-border-services-pacific-region.png",
    alt: "Canada Border Services Pacific Region double-sided challenge coin",
    categoryLabel: "Challenge Coins",
    categoryHref: "/products/custom-challenge-coins",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-COIN-028",
    usage: "Border services, enforcement teams, recognition",
    categories: "Challenge Coins, Double Sided Coins",
    quoteProduct: "Challenge Coins",
    lead: "This Canada Border Services Pacific Region challenge coin uses official-style emblem artwork, airport details and double-sided enamel color for team recognition, gifts and ceremonies."
  },
  "pow-mia-you-are-not-forgotten-challenge-coin": {
    title: "POW MIA You Are Not Forgotten Challenge Coin",
    image: "assets/images/type-coins-pow-mia-you-are-not-forgotten.png",
    alt: "POW MIA You Are Not Forgotten double-sided challenge coin",
    categoryLabel: "Challenge Coins",
    categoryHref: "/products/custom-challenge-coins",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-COIN-027",
    usage: "Memorial events, veteran gifts, ceremonies",
    categories: "Challenge Coins, Double Sided Coins",
    quoteProduct: "Challenge Coins",
    lead: "This POW MIA You Are Not Forgotten challenge coin uses black enamel, antique relief and double sided memorial artwork for veteran gifts, remembrance ceremonies, service organizations and collector programs."
  },
  "norwegian-defense-family-legion-challenge-coin": {
    title: "Norwegian Defense Family Legion Challenge Coin",
    image: "assets/images/type-coins-norwegian-defense-family-legion.png",
    alt: "Norwegian Defense Family Legion double-sided challenge coin",
    categoryLabel: "Challenge Coins",
    categoryHref: "/products/custom-challenge-coins",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-COIN-026",
    usage: "Defense groups, family legions, recognition",
    categories: "Challenge Coins, Double Sided Coins",
    quoteProduct: "Challenge Coins",
    lead: "This Norwegian Defense Family Legion challenge coin combines flag enamel, antique silver texture and double sided emblem artwork for defense organizations, family groups, recognition gifts and ceremonies."
  },
  "vancouver-police-retired-challenge-coin": {
    title: "Vancouver Police Retired Challenge Coin",
    image: "assets/images/type-coins-vancouver-police-retired.png",
    alt: "Vancouver Police Retired double-sided challenge coin",
    categoryLabel: "Challenge Coins",
    categoryHref: "/products/custom-challenge-coins",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-COIN-025",
    usage: "Police departments, retirement gifts, recognition",
    categories: "Challenge Coins, Double Sided Coins",
    quoteProduct: "Challenge Coins",
    lead: "This Vancouver Police Retired challenge coin presents polished gold tone details, double sided department artwork and dark enamel for retirement gifts, police recognition, ceremonies and commemorative collections."
  },
  "marina-de-guerra-peru-challenge-coin": {
    title: "Marina De Guerra Del Peru Challenge Coin",
    image: "assets/images/type-coins-marina-de-guerra-peru.png",
    alt: "Marina De Guerra Del Peru double-sided challenge coin",
    categoryLabel: "Challenge Coins",
    categoryHref: "/products/custom-challenge-coins",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-COIN-024",
    usage: "Naval academies, military gifts, recognition",
    categories: "Challenge Coins, Double Sided Coins",
    quoteProduct: "Challenge Coins",
    lead: "This Marina De Guerra Del Peru challenge coin features naval academy artwork, antique bronze relief and double sided enamel detail for naval academies, military gifts, ceremonies and collector programs."
  },
  "punish-blue-errors-aggressors-challenge-coin": {
    title: "Punish Blue Errors Aggressors Challenge Coin",
    image: "assets/images/type-coins-punish-blue-errors-aggressors.png",
    alt: "Punish Blue Errors Aggressors double-sided challenge coin",
    categoryLabel: "Challenge Coins",
    categoryHref: "/products/custom-challenge-coins",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-COIN-023",
    usage: "Air units, defense teams, recognition",
    categories: "Challenge Coins, Double Sided Coins",
    quoteProduct: "Challenge Coins",
    lead: "This Punish Blue Errors Aggressors challenge coin uses red and black enamel, aircraft artwork and double sided relief for air units, defense teams, morale gifts and collector programs."
  },
  "hmcs-bras-dor-royal-canadian-navy-challenge-coin": {
    title: "HMCS Bras D'Or Royal Canadian Navy Challenge Coin",
    image: "assets/images/type-coins-hmcs-bras-dor-royal-canadian-navy.png",
    alt: "HMCS Bras D'Or Royal Canadian Navy double-sided challenge coin",
    categoryLabel: "Challenge Coins",
    categoryHref: "/products/custom-challenge-coins",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-COIN-022",
    usage: "Navy units, ship commemorations, awards",
    categories: "Challenge Coins, Double Sided Coins",
    quoteProduct: "Challenge Coins",
    lead: "This HMCS Bras D'Or Royal Canadian Navy challenge coin combines blue enamel, ship artwork and double sided relief for navy units, ship commemorations, awards and presentation gifts."
  },
  "saint-florian-firefighter-challenge-coin": {
    title: "Saint Florian Firefighter Challenge Coin",
    image: "assets/images/type-coins-saint-florian-firefighter.png",
    alt: "Saint Florian firefighter custom shape challenge coin",
    categoryLabel: "Challenge Coins",
    categoryHref: "/products/custom-challenge-coins",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-COIN-021",
    usage: "Fire departments, firefighter gifts, ceremonies",
    categories: "Challenge Coins, Custom Shape Coins",
    quoteProduct: "Challenge Coins",
    lead: "This Saint Florian firefighter challenge coin uses a custom shape, red enamel and raised relief artwork for fire department gifts, firefighter recognition, memorial events and commemorative programs."
  },
  "40-years-port-authority-challenge-coin": {
    title: "40 Years Port Authority Challenge Coin",
    image: "assets/images/type-coins-40-years-port-authority.jpg",
    alt: "40 years port authority double-sided challenge coin",
    categoryLabel: "Challenge Coins",
    categoryHref: "/products/custom-challenge-coins",
    material: "Zinc alloy",
    process: "Die casting and antique plating",
    sku: "UP-COIN-020",
    usage: "Service recognition, port authority awards, anniversaries",
    categories: "Challenge Coins, Double Sided Coins",
    quoteProduct: "Challenge Coins",
    lead: "This 40 Years Port Authority challenge coin features antique plating, raised service lettering and double sided relief for long service recognition, port authority awards and commemorative programs."
  },
  "stay-sharp-excellence-challenge-coin": {
    title: "Stay Sharp Excellence Challenge Coin",
    image: "assets/images/type-coins-stay-sharp-excellence.jpg",
    alt: "Stay Sharp Excellence double-sided challenge coin",
    categoryLabel: "Challenge Coins",
    categoryHref: "/products/custom-challenge-coins",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-COIN-019",
    usage: "Team awards, training programs, recognition",
    categories: "Challenge Coins, Double Sided Coins",
    quoteProduct: "Challenge Coins",
    lead: "This Stay Sharp Excellence challenge coin combines bold enamel color, skull artwork and double sided metal relief for team awards, training programs, recognition gifts and collector pieces."
  },
  "congressman-stephen-womack-challenge-coin": {
    title: "Congressman Stephen A. Womack Challenge Coin",
    image: "assets/images/type-coins-congressman-stephen-womack.jpg",
    alt: "Congressman Stephen A. Womack double-sided challenge coin",
    categoryLabel: "Challenge Coins",
    categoryHref: "/products/custom-challenge-coins",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-COIN-018",
    usage: "Government offices, district gifts, recognition",
    categories: "Challenge Coins, Double Sided Coins",
    quoteProduct: "Challenge Coins",
    lead: "This Congressman Stephen A. Womack challenge coin presents double sided government emblem artwork, enamel color and antique metal detail for district gifts, office recognition and commemorative programs."
  },
  "marine-corps-forces-north-challenge-coin": {
    title: "U.S. Marine Corps Forces North Challenge Coin",
    image: "assets/images/type-coins-marine-corps-forces-north.jpg",
    alt: "U.S. Marine Corps Forces North double-sided challenge coin",
    categoryLabel: "Challenge Coins",
    categoryHref: "/products/custom-challenge-coins",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-COIN-017",
    usage: "Military units, command gifts, recognition",
    categories: "Challenge Coins, Double Sided Coins",
    quoteProduct: "Challenge Coins",
    lead: "This U.S. Marine Corps Forces North challenge coin uses double sided emblem artwork, polished gold tone metal and enamel color for military unit gifts, command recognition and ceremonies."
  },
  "united-states-space-force-challenge-coin": {
    title: "United States Space Force Challenge Coin",
    image: "assets/images/type-coins-united-states-space-force.jpg",
    alt: "United States Space Force double-sided challenge coin",
    categoryLabel: "Challenge Coins",
    categoryHref: "/products/custom-challenge-coins",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-COIN-016",
    usage: "Space force units, technology teams, awards",
    categories: "Challenge Coins, Double Sided Coins",
    quoteProduct: "Challenge Coins",
    lead: "This United States Space Force challenge coin features double sided relief, dark enamel fields and dimensional insignia artwork for unit recognition, technology teams, awards and commemorations."
  },
  "cocoa-fire-department-challenge-coin": {
    title: "Cocoa Fire Department Challenge Coin",
    image: "assets/images/type-coins-cocoa-fire-department.jpg",
    alt: "Cocoa Fire Department double-sided challenge coin",
    categoryLabel: "Challenge Coins",
    categoryHref: "/products/custom-challenge-coins",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-COIN-015",
    usage: "Fire departments, service awards, anniversaries",
    categories: "Challenge Coins, Double Sided Coins",
    quoteProduct: "Challenge Coins",
    lead: "This Cocoa Fire Department challenge coin pairs double sided fire department artwork with polished enamel color for service anniversaries, department awards, community gifts and commemorative sets."
  },
  "arikara-horns-up-front-challenge-coin": {
    title: "Arikara Horns Up Front Challenge Coin",
    image: "assets/images/type-coins-arikara-horns-up-front.jpg",
    alt: "Arikara Horns Up Front double-sided challenge coin",
    categoryLabel: "Challenge Coins",
    categoryHref: "/products/custom-challenge-coins",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-COIN-014",
    usage: "Military units, squadron gifts, recognition",
    categories: "Challenge Coins, Double Sided Coins",
    quoteProduct: "Challenge Coins",
    lead: "This Arikara Horns Up Front challenge coin uses antique silver texture, colored enamel and double sided emblem artwork for military units, squadron gifts, recognition and collector programs."
  },
  "dod-cyber-red-team-conference-challenge-coin": {
    title: "DOD Cyber Red Team Conference Challenge Coin",
    image: "assets/images/type-coins-dod-cyber-red-team-conference.jpg",
    alt: "DOD Cyber Red Team Conference double-sided challenge coin",
    categoryLabel: "Challenge Coins",
    categoryHref: "/products/custom-challenge-coins",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-COIN-013",
    usage: "Cyber teams, conferences, recognition",
    categories: "Challenge Coins, Double Sided Coins",
    quoteProduct: "Challenge Coins",
    lead: "This DOD Cyber Red Team Conference challenge coin features cyber themed artwork, double sided enamel detail and polished metal edges for conferences, cyber teams, operations groups and recognition gifts."
  },
  "storm-troopers-highway-patrol-challenge-coin": {
    title: "Storm Troopers Highway Patrol Challenge Coin",
    image: "assets/images/type-coins-storm-troopers-highway-patrol.jpg",
    alt: "Storm Troopers Highway Patrol double-sided challenge coin",
    categoryLabel: "Challenge Coins",
    categoryHref: "/products/custom-challenge-coins",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-COIN-012",
    usage: "Highway patrol units, collector gifts, events",
    categories: "Challenge Coins, Double Sided Coins",
    quoteProduct: "Challenge Coins",
    lead: "This Storm Troopers Highway Patrol challenge coin combines double sided patrol artwork, antique metal texture and colored enamel for highway patrol units, event gifts, recognition and collector programs."
  },
  "vancouver-police-service-challenge-coin": {
    title: "Vancouver Police Service Challenge Coin",
    image: "assets/images/type-coins-vancouver-police-service.jpg",
    alt: "Vancouver Police Service double-sided challenge coin",
    categoryLabel: "Challenge Coins",
    categoryHref: "/products/custom-challenge-coins",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-COIN-011",
    usage: "Police units, commemorations, recognition",
    categories: "Challenge Coins, Double Sided Coins",
    quoteProduct: "Challenge Coins",
    lead: "This Vancouver Police Service challenge coin presents double sided police emblems, antique silver texture and detailed edge artwork for department recognition, commemorative gifts and collector programs."
  },
  "emergency-task-force-challenge-coin": {
    title: "Emergency Task Force Challenge Coin",
    image: "assets/images/type-coins-emergency-task-force.jpg",
    alt: "Emergency Task Force double-sided challenge coin",
    categoryLabel: "Challenge Coins",
    categoryHref: "/products/custom-challenge-coins",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-COIN-010",
    usage: "Task forces, emergency teams, awards",
    categories: "Challenge Coins, Double Sided Coins",
    quoteProduct: "Challenge Coins",
    lead: "This Emergency Task Force challenge coin combines double sided relief, enamel color and antique metal details for emergency teams, award programs, unit identity and commemorative gifts."
  },
  "enlisted-advisor-military-challenge-coin": {
    title: "Enlisted Advisor Military Challenge Coin",
    image: "assets/images/type-coins-enlisted-advisor.jpg",
    alt: "Enlisted Advisor military double-sided challenge coin",
    categoryLabel: "Challenge Coins",
    categoryHref: "/products/custom-challenge-coins",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-COIN-009",
    usage: "Military units, advisors, recognition",
    categories: "Challenge Coins, Double Sided Coins",
    quoteProduct: "Challenge Coins",
    lead: "This enlisted advisor military challenge coin features double sided insignia artwork, deep enamel color and polished metal borders for unit recognition, ceremonies and military gift programs."
  },
  "information-warfare-capabilities-challenge-coin": {
    title: "Information Warfare Capabilities Challenge Coin",
    image: "assets/images/type-coins-information-warfare.jpg",
    alt: "Information Warfare Capabilities double-sided challenge coin",
    categoryLabel: "Challenge Coins",
    categoryHref: "/products/custom-challenge-coins",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-COIN-008",
    usage: "Military groups, cyber teams, awards",
    categories: "Challenge Coins, Double Sided Coins",
    quoteProduct: "Challenge Coins",
    lead: "This Information Warfare Capabilities challenge coin uses double sided enamel artwork, raised lettering and polished plating for military groups, cyber teams, commemorations and award programs."
  },
  "musee-de-larmee-1670-challenge-coin": {
    title: "Musee De L'Armee 1670 Challenge Coin",
    image: "assets/images/type-coins-musee-de-larmee-1670.jpg",
    alt: "Musee De L'Armee 1670 double-sided challenge coin",
    categoryLabel: "Challenge Coins",
    categoryHref: "/products/custom-challenge-coins",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-COIN-007",
    usage: "Museums, anniversaries, commemorations",
    categories: "Challenge Coins, Double Sided Coins",
    quoteProduct: "Challenge Coins",
    lead: "This Musee De L'Armee 1670 challenge coin highlights double sided architectural artwork, antique silver relief and colored rim detail for museum gifts, anniversaries and commemorative collections."
  },
  "50-years-of-service-challenge-coin": {
    title: "50 Years of Service Challenge Coin",
    image: "assets/images/type-coins-50-years-service.jpg",
    alt: "50 years of service double-sided challenge coin",
    categoryLabel: "Challenge Coins",
    categoryHref: "/products/custom-challenge-coins",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-COIN-006",
    usage: "Anniversaries, service awards, recognition",
    categories: "Challenge Coins, Double Sided Coins",
    quoteProduct: "Challenge Coins",
    lead: "This 50 Years of Service challenge coin pairs anniversary artwork with double sided enamel detail for service awards, organization milestones, recognition programs and commemorative gifts."
  },
  "3d-antique-firefighter-challenge-coins": {
    title: "3D Antique Firefighter Challenge Coin",
    image: "assets/images/type-coins-3d.jpg",
    alt: "3D antique firefighter challenge coin",
    categoryLabel: "Challenge Coins",
    categoryHref: "/products/custom-challenge-coins",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-COIN-001",
    usage: "Recognition, departments, commemorations",
    categories: "Challenge Coins, 3D Coins",
    quoteProduct: "Challenge Coins",
    lead: "These antique challenge coins use dimensional relief and enamel details for a premium recognition piece. They are suitable for departments, clubs, memorial events and award programs."
  },
  "double-sided-anniversary-challenge-coin": {
    title: "Double Sided Anniversary Challenge Coin",
    image: "assets/images/type-coins-double-sided.jpg",
    alt: "Double sided anniversary challenge coin",
    categoryLabel: "Challenge Coins",
    categoryHref: "/products/custom-challenge-coins",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-COIN-002",
    usage: "Anniversaries, recognition, ceremonies",
    categories: "Challenge Coins, Double Sided Coins",
    quoteProduct: "Challenge Coins",
    lead: "This double-sided challenge coin carries detailed artwork on both faces with antique metal finishing. It fits anniversary events, recognition ceremonies, unit gifts and collector programs."
  },
  "christmas-bell-challenge-coin": {
    title: "Christmas Bell Challenge Coin",
    image: "assets/images/latest-christmas-bell-challenge-coin.jpg",
    alt: "Christmas bell challenge coin",
    categoryLabel: "Challenge Coins",
    categoryHref: "/products/custom-challenge-coins",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-COIN-005",
    usage: "Holiday gifts, commemorations, brand campaigns",
    categories: "Challenge Coins, Christmas Coins",
    quoteProduct: "Challenge Coins",
    lead: "This Christmas bell challenge coin uses festive raised relief and plated metal details for holiday gifts, commemorative campaigns, seasonal collections and presentation sets."
  },
  "cut-shape-route-map-challenge-coin": {
    title: "Cut Shape Route Map Challenge Coin",
    image: "assets/images/type-coins-cut-shape.jpg",
    alt: "Cut shape route map challenge coin",
    categoryLabel: "Challenge Coins",
    categoryHref: "/products/custom-challenge-coins",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-COIN-003",
    usage: "Travel events, races, commemorations",
    categories: "Challenge Coins, Custom Shape Coins",
    quoteProduct: "Challenge Coins",
    lead: "This custom shaped route coin highlights map artwork with cut edges and colored details. It is useful for travel campaigns, race events, commemorative routes and destination souvenirs."
  },
  "antique-military-squadron-challenge-coins": {
    title: "Antique Military Squadron Challenge Coin",
    image: "assets/images/type-coins-antique.jpg",
    alt: "Antique military squadron challenge coin",
    categoryLabel: "Challenge Coins",
    categoryHref: "/products/custom-challenge-coins",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-COIN-004",
    usage: "Squadrons, military groups, awards",
    categories: "Challenge Coins, Antique Coins",
    quoteProduct: "Challenge Coins",
    lead: "These antique squadron coins combine military-style emblems with durable metal relief. They are suited for unit recognition, group identity, veteran gifts and official ceremonies."
  },
  "kinderprinz-mascot-ribbon-medal": {
    title: "Kinderprinz Mascot Ribbon Medal",
    image: "assets/images/type-medals-kinderprinz-mascot-ribbon.png",
    alt: "Kinderprinz mascot ribbon medal",
    categoryLabel: "Medals",
    categoryHref: "/products/custom-medals",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-MEDAL-042",
    usage: "Carnival events, youth awards, festivals",
    categories: "Medals, Ribbon Medals",
    quoteProduct: "Medals",
    lead: "This Kinderprinz mascot ribbon medal combines football net detail, character artwork, green and yellow enamel and a matching ribbon for carnival events, youth awards, festivals and commemorative programs."
  },
  "weiss-blau-prinzenpaar-ribbon-medal": {
    title: "Weiss-Blau Prinzenpaar Ribbon Medal",
    image: "assets/images/type-medals-weiss-blau-prinzenpaar-ribbon.png",
    alt: "Weiss-Blau Prinzenpaar ribbon medal",
    categoryLabel: "Medals",
    categoryHref: "/products/custom-medals",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-MEDAL-041",
    usage: "Carnival clubs, anniversaries, awards",
    categories: "Medals, Ribbon Medals",
    quoteProduct: "Medals",
    lead: "This Weiss-Blau Prinzenpaar ribbon medal features two-sided presentation, mascot relief, blue enamel and striped ribbons for carnival clubs, anniversaries, society events and award ceremonies."
  },
  "grielacher-ellene-anniversary-medal": {
    title: "Grielacher Ellene Anniversary Medal",
    image: "assets/images/type-medals-grielacher-ellene-anniversary.png",
    alt: "Grielacher Ellene anniversary medal",
    categoryLabel: "Medals",
    categoryHref: "/products/custom-medals",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-MEDAL-040",
    usage: "Club anniversaries, carnival events, commemorations",
    categories: "Medals, Custom Shape Medals",
    quoteProduct: "Medals",
    lead: "This Grielacher Ellene anniversary medal uses openwork lettering, character figures, blue-white enamel and custom ribbon attachment for club anniversaries, carnival events and commemorative celebrations."
  },
  "aachener-stadtkadettchen-carnival-medal": {
    title: "Aachener Stadtkadettchen Carnival Medal",
    image: "assets/images/type-medals-aachener-stadtkadettchen-carnival.png",
    alt: "Aachener Stadtkadettchen carnival medal",
    categoryLabel: "Medals",
    categoryHref: "/products/custom-medals",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-MEDAL-039",
    usage: "Carnival corps, city festivals, awards",
    categories: "Medals, Ribbon Medals",
    quoteProduct: "Medals",
    lead: "This Aachener Stadtkadettchen carnival medal combines skyline relief, ribbon banners, red-blue enamel and a red neck ribbon for carnival corps, city festivals, local events and commemorative awards."
  },
  "oecher-jonge-cathedral-ribbon-medal": {
    title: "Oecher Jonge Cathedral Ribbon Medal",
    image: "assets/images/type-medals-oecher-jonge-cathedral-ribbon.png",
    alt: "Oecher Jonge cathedral ribbon medal",
    categoryLabel: "Medals",
    categoryHref: "/products/custom-medals",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-MEDAL-038",
    usage: "Carnival societies, city events, commemorative awards",
    categories: "Medals, Ribbon Medals",
    quoteProduct: "Medals",
    lead: "This Oecher Jonge cathedral ribbon medal uses gold architectural relief, black-green enamel and custom text for carnival societies, city events, anniversaries and commemorative award programs."
  },
  "run-for-a-cause-rectangle-medal": {
    title: "Run for a Cause Rectangle Medal",
    image: "assets/images/type-medals-run-for-a-cause-rectangle.png",
    alt: "Run for a Cause rectangle medal",
    categoryLabel: "Medals",
    categoryHref: "/products/custom-medals",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-MEDAL-037",
    usage: "Charity runs, university events, fundraisers",
    categories: "Medals, Running Medals",
    quoteProduct: "Medals",
    lead: "This Run for a Cause rectangle medal features antique plating, turquoise enamel, double-sided artwork and a printed ribbon for charity runs, university events, fundraising programs and finisher awards."
  },
  "br-fernsehsitzung-carnival-ribbon-medal": {
    title: "BR Fernsehsitzung Carnival Ribbon Medal",
    image: "assets/images/type-medals-br-fernsehsitzung-carnival-ribbon.jpg",
    alt: "BR Fernsehsitzung carnival ribbon medal",
    categoryLabel: "Medals",
    categoryHref: "/products/custom-medals",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-MEDAL-036",
    usage: "Carnival clubs, festivals, commemorative events",
    categories: "Medals, Ribbon Medals",
    quoteProduct: "Medals",
    lead: "This BR Fernsehsitzung carnival ribbon medal uses layered city artwork, blue enamel banners and rhinestone details for carnival clubs, festival sessions, commemorative events and presentation awards."
  },
  "king-william-fair-ribbon-medal": {
    title: "King William Fair Ribbon Medal",
    image: "assets/images/type-medals-king-william-fair-ribbon.jpg",
    alt: "King William Fair ribbon medal",
    categoryLabel: "Medals",
    categoryHref: "/products/custom-medals",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-MEDAL-035",
    usage: "Fairs, parades, festivals, community events",
    categories: "Medals, Ribbon Medals",
    quoteProduct: "Medals",
    lead: "This King William Fair ribbon medal combines colorful house artwork, floral details and hanging ribbon streamers for fairs, parades, festivals, community events and commemorative programs."
  },
  "bergroup-beach-cup-ribbon-medal": {
    title: "Bergroup Beach Cup Ribbon Medal",
    image: "assets/images/type-medals-bergroup-beach-cup-ribbon.jpg",
    alt: "Bergroup Beach Cup ribbon medal",
    categoryLabel: "Medals",
    categoryHref: "/products/custom-medals",
    material: "Zinc alloy",
    process: "Die casting and plating",
    sku: "UP-MEDAL-034",
    usage: "Beach volleyball, sports tournaments, team awards",
    categories: "Medals, Sports Medals",
    quoteProduct: "Medals",
    lead: "This Bergroup Beach Cup ribbon medal features a gold openwork volleyball scene, blue ribbon and custom event lettering for beach sports, volleyball tournaments, team events and award ceremonies."
  },
  "four-winds-kungfu-tournament-medal": {
    title: "Four Winds Kungfu Tournament Medal",
    image: "assets/images/type-medals-four-winds-kungfu-tournament.jpg",
    alt: "Four Winds Kungfu Tournament medal",
    categoryLabel: "Medals",
    categoryHref: "/products/custom-medals",
    material: "Zinc alloy",
    process: "Die casting and plating",
    sku: "UP-MEDAL-033",
    usage: "Martial arts tournaments, schools, competitions",
    categories: "Medals, Sports Medals",
    quoteProduct: "Medals",
    lead: "This Four Winds Kungfu Tournament medal uses raised martial arts relief, polished gold plating and a red ribbon for kungfu tournaments, martial arts schools, competitions and champion awards."
  },
  "basketball-rope-design-ribbon-medal": {
    title: "Basketball Rope Design Ribbon Medal",
    image: "assets/images/type-medals-basketball-rope-design-ribbon.jpg",
    alt: "Basketball rope design ribbon medal",
    categoryLabel: "Medals",
    categoryHref: "/products/custom-medals",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-MEDAL-032",
    usage: "Basketball games, school sports, tournaments",
    categories: "Medals, Sports Medals",
    quoteProduct: "Medals",
    lead: "This basketball ribbon medal uses a rope-style open frame, player silhouette and warm enamel accents for basketball games, school sports, club tournaments and athletic awards."
  },
  "dreigestirn-carnival-ribbon-medal": {
    title: "Dreigestirn Carnival Ribbon Medal",
    image: "assets/images/type-medals-dreigestirn-carnival-ribbon.jpg",
    alt: "Dreigestirn carnival ribbon medal",
    categoryLabel: "Medals",
    categoryHref: "/products/custom-medals",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-MEDAL-031",
    usage: "Carnival clubs, seasonal events, awards",
    categories: "Medals, Ribbon Medals",
    quoteProduct: "Medals",
    lead: "This Dreigestirn carnival ribbon medal combines blue-white banners, crown artwork and custom names for carnival clubs, seasonal celebrations, commemorative awards and parade events."
  },
  "sea-doo-summer-series-medal-set": {
    title: "Sea-Doo Summer Series Medal Set",
    image: "assets/images/type-medals-sea-doo-summer-series-set.jpg",
    alt: "Sea-Doo Summer Series medal set",
    categoryLabel: "Medals",
    categoryHref: "/products/custom-medals",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-MEDAL-030",
    usage: "Summer series, water sports, event awards",
    categories: "Medals, Sports Medals",
    quoteProduct: "Medals",
    lead: "This Sea-Doo Summer Series medal set includes colorful fan-shaped medals with marine animal artwork for summer series, water sports events, race awards and themed activity programs."
  },
  "new-zealand-open-jiu-jitsu-medal": {
    title: "New Zealand Open Jiu Jitsu Medal",
    image: "assets/images/type-medals-new-zealand-open-jiu-jitsu.png",
    alt: "New Zealand Open Jiu Jitsu medal",
    categoryLabel: "Medals",
    categoryHref: "/products/custom-medals",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-MEDAL-029",
    usage: "Jiu jitsu events, martial arts, tournaments",
    categories: "Medals, Sports Medals",
    quoteProduct: "Medals",
    lead: "This New Zealand Open Jiu Jitsu medal uses a bold shield shape, two-sided presentation and custom ribbon for jiu jitsu tournaments, martial arts events, championship awards and sports clubs."
  },
  "winter-bear-snow-sports-ribbon-medal": {
    title: "Winter Bear Snow Sports Ribbon Medal",
    image: "assets/images/type-medals-winter-bear-snow-sports.png",
    alt: "Winter bear snow sports ribbon medal",
    categoryLabel: "Medals",
    categoryHref: "/products/custom-medals",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-MEDAL-028",
    usage: "Winter sports, snow events, club awards",
    categories: "Medals, Sports Medals",
    quoteProduct: "Medals",
    lead: "This winter bear snow sports ribbon medal features mascot artwork, ski goggle detail and a black ribbon for winter sports events, snow clubs, seasonal races and custom award programs."
  },
  "hollywood-carnival-ribbon-medal": {
    title: "Hollywood Carnival Ribbon Medal",
    image: "assets/images/type-medals-hollywood-carnival-ribbon.png",
    alt: "Hollywood carnival ribbon medal",
    categoryLabel: "Medals",
    categoryHref: "/products/custom-medals",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-MEDAL-027",
    usage: "Carnival clubs, film themes, festivals",
    categories: "Medals, Ribbon Medals",
    quoteProduct: "Medals",
    lead: "This Hollywood carnival ribbon medal combines film reel artwork, marquee styling, purple ribbon and gold plating for carnival clubs, themed festivals, entertainment events and souvenir awards."
  },
  "butterfly-cocoon-ribbon-medal": {
    title: "Butterfly Cocoon Ribbon Medal",
    image: "assets/images/type-medals-butterfly-cocoon-ribbon.png",
    alt: "Butterfly Cocoon ribbon medal",
    categoryLabel: "Medals",
    categoryHref: "/products/custom-medals",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-MEDAL-026",
    usage: "Community events, charity runs, themed awards",
    categories: "Medals, Custom Shape Medals",
    quoteProduct: "Medals",
    lead: "This Butterfly Cocoon ribbon medal uses a custom butterfly outline, vivid orange enamel and a printed ribbon for charity runs, community activities, themed awards and commemorative events."
  },
  "city-finisher-52195-ribbon-medal": {
    title: "City Finisher 52.195 KM Ribbon Medal",
    image: "assets/images/type-medals-city-finisher-52195-ribbon.jpg",
    alt: "City Finisher 52.195 KM ribbon medal",
    categoryLabel: "Medals",
    categoryHref: "/products/custom-medals",
    material: "Zinc alloy",
    process: "Die casting and plating",
    sku: "UP-MEDAL-025",
    usage: "Marathons, city races, finisher awards",
    categories: "Medals, Running Medals",
    quoteProduct: "Medals",
    lead: "This City Finisher 52.195 KM ribbon medal uses a gold city skyline frame, raised landmark detail and a colorful event ribbon for marathon finishers, city races, running clubs and commemorative awards."
  },
  "dongfeng-trucks-cup-marathon-medal": {
    title: "Dongfeng Trucks Cup Marathon Medal",
    image: "assets/images/type-medals-dongfeng-trucks-cup-marathon.jpg",
    alt: "Dongfeng Trucks Cup marathon medal",
    categoryLabel: "Medals",
    categoryHref: "/products/custom-medals",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-MEDAL-024",
    usage: "Marathons, truck events, race awards",
    categories: "Medals, Running Medals",
    quoteProduct: "Medals",
    lead: "This Dongfeng Trucks Cup marathon medal combines a flowing custom outline, tire center detail and blue ribbon for sponsored races, marathon events, automotive promotions and finisher recognition."
  },
  "medal-depot-carnival-run-ribbon-medal": {
    title: "Medal Depot Carnival Run Ribbon Medal",
    image: "assets/images/type-medals-medal-depot-carnival-run.jpg",
    alt: "Medal Depot Carnival Run ribbon medal",
    categoryLabel: "Medals",
    categoryHref: "/products/custom-medals",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-MEDAL-023",
    usage: "Carnival runs, festivals, fun races",
    categories: "Medals, Ribbon Medals",
    quoteProduct: "Medals",
    lead: "This Medal Depot Carnival Run ribbon medal pairs a ferris wheel topper with colorful character artwork for carnival runs, festival activities, family fun races and event award programs."
  },
  "halloween-bicycle-race-ribbon-medal": {
    title: "Halloween Bicycle Race Ribbon Medal",
    image: "assets/images/type-medals-halloween-bicycle-race-ribbon.jpg",
    alt: "Halloween bicycle race ribbon medal",
    categoryLabel: "Medals",
    categoryHref: "/products/custom-medals",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-MEDAL-022",
    usage: "Halloween rides, bicycle races, themed events",
    categories: "Medals, Sports Medals",
    quoteProduct: "Medals",
    lead: "This Halloween bicycle race ribbon medal features a skeleton rider, bat wings, orange enamel and a themed ribbon for Halloween rides, cycling events, online races and finisher awards."
  },
  "halloween-finisher-ribbon-medal": {
    title: "Halloween Finisher Ribbon Medal",
    image: "assets/images/type-medals-halloween-finisher-ribbon.jpg",
    alt: "Halloween finisher ribbon medal",
    categoryLabel: "Medals",
    categoryHref: "/products/custom-medals",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-MEDAL-021",
    usage: "Halloween runs, themed races, finisher medals",
    categories: "Medals, Custom Shape Medals",
    quoteProduct: "Medals",
    lead: "This Halloween finisher ribbon medal uses a bold pumpkin silhouette, bat artwork and black-orange enamel for Halloween runs, themed races, seasonal events and custom finisher medals."
  },
  "swim-ribbon-medal-set": {
    title: "Swim Ribbon Medal Set",
    image: "assets/images/type-medals-swim-ribbon-medal-set.jpg",
    alt: "Swim ribbon medal set",
    categoryLabel: "Medals",
    categoryHref: "/products/custom-medals",
    material: "Zinc alloy",
    process: "Die casting and printed insert",
    sku: "UP-MEDAL-020",
    usage: "Swim meets, school races, sports awards",
    categories: "Medals, Sports Medals",
    quoteProduct: "Medals",
    lead: "This swim ribbon medal set includes gold and silver finishes with swimming artwork and blue ribbons for swim meets, school competitions, sports clubs and aquatic event awards."
  },
  "hofgrafen-kalscheuren-carnival-medal": {
    title: "Hofgrafen Kalscheuren Carnival Medal",
    image: "assets/images/type-medals-hofgrafen-kalscheuren-carnival.jpg",
    alt: "Hofgrafen Kalscheuren carnival medal",
    categoryLabel: "Medals",
    categoryHref: "/products/custom-medals",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-MEDAL-018",
    usage: "Carnival clubs, festivals, commemorative awards",
    categories: "Medals, Ribbon Medals",
    quoteProduct: "Medals",
    lead: "This Hofgrafen Kalscheuren carnival medal combines shield artwork, raised banners, enamel color and a red-white ribbon for carnival clubs, festival programs, commemorative awards and local celebrations."
  },
  "world-run-triathlon-medal-set": {
    title: "World Run Triathlon Medal Set",
    image: "assets/images/type-medals-world-run-triathlon-set.jpg",
    alt: "World Run Triathlon medal set",
    categoryLabel: "Medals",
    categoryHref: "/products/custom-medals",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-MEDAL-017",
    usage: "Triathlon events, charity runs, sports awards",
    categories: "Medals, Sports Medals",
    quoteProduct: "Medals",
    lead: "This World Run Triathlon medal set combines antique relief, cutout detail and ribbon attachments for triathlon events, charity runs, sports awards and commemorative race programs."
  },
  "ski-federation-ribbon-medal": {
    title: "Ski Federation Ribbon Medal",
    image: "assets/images/type-medals-ski-federation-ribbon.jpg",
    alt: "Ski Federation ribbon medal",
    categoryLabel: "Medals",
    categoryHref: "/products/custom-medals",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-MEDAL-016",
    usage: "Ski races, winter sports, awards",
    categories: "Medals, Sports Medals",
    quoteProduct: "Medals",
    lead: "This Ski Federation ribbon medal uses a custom cutout ski design, blue enamel detail and a printed ribbon for winter races, ski clubs, regional competitions and award ceremonies."
  },
  "kolding-light-run-ribbon-medal": {
    title: "Kolding Light Run Ribbon Medal",
    image: "assets/images/type-medals-kolding-light-run-ribbon.jpg",
    alt: "Kolding Light Run ribbon medal",
    categoryLabel: "Medals",
    categoryHref: "/products/custom-medals",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-MEDAL-015",
    usage: "Running events, night races, awards",
    categories: "Medals, Running Medals",
    quoteProduct: "Medals",
    lead: "This Kolding Light Run ribbon medal features runner silhouettes, luminous-style enamel and a dark ribbon for night races, fun runs, sports events and finisher awards."
  },
  "bali-hogz-ribbon-medal": {
    title: "Bali Hogz Ribbon Medal",
    image: "assets/images/type-medals-bali-hogz-ribbon.jpg",
    alt: "Bali Hogz ribbon medal",
    categoryLabel: "Medals",
    categoryHref: "/products/custom-medals",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-MEDAL-014",
    usage: "Team events, sports leagues, awards",
    categories: "Medals, Sports Medals",
    quoteProduct: "Medals",
    lead: "This Bali Hogz ribbon medal combines a bold team mascot, open ring shape and color enamel for sports leagues, community events, team awards and custom tournament prizes."
  },
  "half-marathon-ribbon-medal-set": {
    title: "Half Marathon Ribbon Medal Set",
    image: "assets/images/type-medals-half-marathon-ribbon-set.jpg",
    alt: "Half marathon ribbon medal set",
    categoryLabel: "Medals",
    categoryHref: "/products/custom-medals",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-MEDAL-013",
    usage: "Half marathons, 5K races, 10K events",
    categories: "Medals, Running Medals",
    quoteProduct: "Medals",
    lead: "This half marathon ribbon medal set includes detailed race scenery, bright enamel colors and ribbon attachments for half marathons, 5K and 10K events, running clubs and finisher awards."
  },
  "triko-gas-mask-ribbon-medal": {
    title: "Triko Gas Mask Ribbon Medal",
    image: "assets/images/type-medals-triko-gas-mask-ribbon.jpg",
    alt: "Triko gas mask ribbon medal",
    categoryLabel: "Medals",
    categoryHref: "/products/custom-medals",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-MEDAL-012",
    usage: "Obstacle races, themed events, awards",
    categories: "Medals, Custom Shape Medals",
    quoteProduct: "Medals",
    lead: "This Triko gas mask ribbon medal uses an angular custom shape, black and red enamel and a printed ribbon for obstacle races, themed events, team challenges and custom awards."
  },
  "hanover-falcons-ribbon-medal": {
    title: "Hanover Falcons Ribbon Medal",
    image: "assets/images/type-medals-hanover-falcons-ribbon.jpg",
    alt: "Hanover Falcons ribbon medal",
    categoryLabel: "Medals",
    categoryHref: "/products/custom-medals",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-MEDAL-011",
    usage: "School sports, team awards, tournaments",
    categories: "Medals, Sports Medals",
    quoteProduct: "Medals",
    lead: "This Hanover Falcons ribbon medal features raised mascot artwork, antique plating and a green ribbon for school sports, team tournaments, club awards and athletic recognition."
  },
  "altenhofen-summer-ribbon-medal": {
    title: "Altenhofen Summer Ribbon Medal",
    image: "assets/images/type-medals-altenhofen-summer-ribbon.jpg",
    alt: "Altenhofen summer ribbon medal",
    categoryLabel: "Medals",
    categoryHref: "/products/custom-medals",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-MEDAL-010",
    usage: "Summer festivals, carnival events, awards",
    categories: "Medals, Ribbon Medals",
    quoteProduct: "Medals",
    lead: "This Altenhofen summer ribbon medal uses layered scenic artwork, bright enamel and a hanging cord for summer festivals, carnival events, community awards and seasonal celebrations."
  },
  "wimbledon-common-half-marathon-medal": {
    title: "Wimbledon Common Half Marathon Medal",
    image: "assets/images/type-medals-wimbledon-common-half-marathon.jpg",
    alt: "Wimbledon Common half marathon medal",
    categoryLabel: "Medals",
    categoryHref: "/products/custom-medals",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-MEDAL-009",
    usage: "Half marathons, running clubs, race awards",
    categories: "Medals, Running Medals",
    quoteProduct: "Medals",
    lead: "This Wimbledon Common half marathon medal combines detailed landmark artwork, gold plating and ribbon presentation for running clubs, half marathons, charity races and race awards."
  },
  "carnival-family-ribbon-medal": {
    title: "Carnival Family Ribbon Medal",
    image: "assets/images/type-medals-carnival-family-ribbon.jpg",
    alt: "Carnival family ribbon medal",
    categoryLabel: "Medals",
    categoryHref: "/products/custom-medals",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-MEDAL-008",
    usage: "Carnival events, festivals, awards",
    categories: "Medals, Ribbon Medals",
    quoteProduct: "Medals",
    lead: "This Carnival Family ribbon medal features colorful character artwork, bright enamel detail and a striped ribbon for carnival events, festival awards, school activities and commemorative programs."
  },
  "ocher-bojjerwenn-anniversary-ribbon-medal": {
    title: "Ocher Bojjerwenn Anniversary Ribbon Medal",
    image: "assets/images/type-medals-ocher-bojjerwenn-anniversary.png",
    alt: "Ocher Bojjerwenn anniversary ribbon medal",
    categoryLabel: "Medals",
    categoryHref: "/products/custom-medals",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-MEDAL-007",
    usage: "Anniversaries, festivals, commemorative awards",
    categories: "Medals, Ribbon Medals",
    quoteProduct: "Medals",
    lead: "This Ocher Bojjerwenn anniversary ribbon medal uses openwork floral detail, enamel color and custom ribbon printing for anniversary celebrations, festival awards and commemorative gift programs."
  },
  "wish-cup-hockey-ribbon-medal": {
    title: "Wish Cup Hockey Ribbon Medal",
    image: "assets/images/type-medals-wish-cup-hockey.png",
    alt: "Wish Cup hockey ribbon medal",
    categoryLabel: "Medals",
    categoryHref: "/products/custom-medals",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-MEDAL-006",
    usage: "Hockey tournaments, sports awards, events",
    categories: "Medals, Sports Medals",
    quoteProduct: "Medals",
    lead: "This Wish Cup hockey ribbon medal combines a custom sport shape, blue enamel, hockey artwork and printed ribbon for tournaments, school events, sports awards and team recognition."
  },
  "silver-basketball-sports-medal-with-ribbon": {
    title: "Silver Basketball Sports Medal with Ribbon",
    image: "assets/images/type-medals-sports.png",
    alt: "Silver basketball sports medal with ribbon",
    categoryLabel: "Medals",
    categoryHref: "/products/custom-medals",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-MEDAL-001",
    usage: "Sports events, tournaments, awards",
    categories: "Medals, Sports Medals",
    quoteProduct: "Medals",
    lead: "This silver basketball medal includes raised sports detail and a presentation ribbon. It is designed for school tournaments, team awards, sports days and community competitions."
  },
  "3d-shield-logo-award-medal": {
    title: "3D Shield Logo Award Medal",
    image: "assets/images/type-medals-3d.png",
    alt: "3D shield logo award medal",
    categoryLabel: "Medals",
    categoryHref: "/products/custom-medals",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-MEDAL-002",
    usage: "Award programs, races, ceremonies",
    categories: "Medals, 3D Medals",
    quoteProduct: "Medals",
    lead: "This shield-shaped medal uses a 3D raised logo area for a strong award presentation. It is a good fit for races, corporate awards, school ceremonies and recognition events."
  },
  "silver-race-award-medal-with-ribbon": {
    title: "Silver Race Award Medal with Ribbon",
    image: "assets/images/type-medals-award.png",
    alt: "Silver race award medal with ribbon",
    categoryLabel: "Medals",
    categoryHref: "/products/custom-medals",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-MEDAL-003",
    usage: "Race events, awards, competitions",
    categories: "Medals, Award Medals",
    quoteProduct: "Medals",
    lead: "This silver race medal presents event artwork with clean relief and a ribbon attachment. It is suitable for marathon events, competitions, school meets and participant awards."
  },
  "blue-marathon-ribbon-medal": {
    title: "Blue Marathon Ribbon Medal",
    image: "assets/images/type-medals-ribbon.png",
    alt: "Blue marathon ribbon medal",
    categoryLabel: "Medals",
    categoryHref: "/products/custom-medals",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-MEDAL-004",
    usage: "Marathons, running clubs, events",
    categories: "Medals, Ribbon Medals",
    quoteProduct: "Medals",
    lead: "This marathon medal pairs detailed metal casting with a blue event ribbon. It works well for running events, charity races, sports clubs and finisher recognition."
  },
  "gold-scn-ribbon-medal": {
    title: "Gold SCN Ribbon Medal",
    image: "assets/images/latest-gold-scn-ribbon-medal.webp",
    alt: "Gold SCN ribbon medal",
    categoryLabel: "Medals",
    categoryHref: "/products/custom-medals",
    material: "Zinc alloy",
    process: "Die casting and plating",
    sku: "UP-MEDAL-005",
    usage: "Sports events, awards, finisher medals",
    categories: "Medals, Ribbon Medals",
    quoteProduct: "Medals",
    lead: "This gold SCN ribbon medal combines polished gold plating, black enamel details and a red, white and blue ribbon for race events, sports awards and branded finisher programs."
  },
  "oval-office-leather-emblem-keychain": {
    title: "Oval Office Leather Emblem Keychain",
    image: "assets/images/type-keychains-oval-office-leather-emblem.jpg",
    alt: "Oval office leather emblem keychain",
    categoryLabel: "Keychains",
    categoryHref: "/products/custom-metal-keychains",
    material: "Leather and zinc alloy",
    process: "Leather cutting, stitching and metal emblem assembly",
    sku: "UP-KEY-038",
    usage: "Government gifts, corporate events, promotions",
    categories: "Keychains, Leather Keychains",
    quoteProduct: "Keychains",
    lead: "This oval office leather emblem keychain combines a stitched leather holder, metal emblem and swivel clasp hardware for government gifts, corporate events, commemorative programs and promotional accessories."
  },
  "bradley-leather-emblem-keychain": {
    title: "Bradley Leather Emblem Keychain",
    image: "assets/images/type-keychains-bradley-leather-emblem.jpg",
    alt: "Bradley leather emblem keychain",
    categoryLabel: "Keychains",
    categoryHref: "/products/custom-metal-keychains",
    material: "Leather and zinc alloy",
    process: "Leather cutting, stitching and metal emblem assembly",
    sku: "UP-KEY-037",
    usage: "School gifts, alumni events, retail",
    categories: "Keychains, Leather Keychains",
    quoteProduct: "Keychains",
    lead: "This Bradley leather emblem keychain uses a brown stitched leather body, round metal emblem and split ring hardware for school gifts, alumni events, retail merchandise and custom promotions."
  },
  "wolf-emblem-leather-keychain": {
    title: "Wolf Emblem Leather Keychain",
    image: "assets/images/type-keychains-wolf-emblem-leather.jpg",
    alt: "Wolf emblem leather keychain",
    categoryLabel: "Keychains",
    categoryHref: "/products/custom-metal-keychains",
    material: "Leather and zinc alloy",
    process: "Leather cutting, stitching and metal emblem assembly",
    sku: "UP-KEY-036",
    usage: "Club gifts, team merchandise, promotions",
    categories: "Keychains, Leather Keychains",
    quoteProduct: "Keychains",
    lead: "This wolf emblem leather keychain pairs a black stitched leather holder with a dimensional metal emblem and split ring hardware for club gifts, team merchandise and promotional programs."
  },
  "shield-emblem-leather-keychain": {
    title: "Shield Emblem Leather Keychain",
    image: "assets/images/type-keychains-shield-emblem-leather.jpg",
    alt: "Shield emblem leather keychain",
    categoryLabel: "Keychains",
    categoryHref: "/products/custom-metal-keychains",
    material: "Leather and zinc alloy",
    process: "Leather cutting, stitching and metal crest assembly",
    sku: "UP-KEY-035",
    usage: "Organization gifts, uniforms, promotions",
    categories: "Keychains, Leather Keychains",
    quoteProduct: "Keychains",
    lead: "This shield emblem leather keychain features a black stitched leather body, raised metal crest and split ring hardware for organization gifts, uniform accessories and custom promotional merchandise."
  },
  "netherlands-map-leather-keychain": {
    title: "Netherlands Map Leather Keychain",
    image: "assets/images/type-keychains-netherlands-map-leather.jpg",
    alt: "Netherlands map leather keychain",
    categoryLabel: "Keychains",
    categoryHref: "/products/custom-metal-keychains",
    material: "Leather and zinc alloy",
    process: "Leather cutting, stitching and metal emblem assembly",
    sku: "UP-KEY-034",
    usage: "Travel gifts, organization events, retail",
    categories: "Keychains, Leather Keychains",
    quoteProduct: "Keychains",
    lead: "This Netherlands map leather keychain combines a round black leather base, custom metal emblem and split ring hardware for travel gifts, organization events, commemorative programs and retail accessories."
  },
  "rainbow-balloon-pvc-keychain-set": {
    title: "Rainbow Balloon PVC Keychain Set",
    image: "assets/images/type-keychains-rainbow-balloon-pvc.jpg",
    alt: "Rainbow balloon PVC keychain set",
    categoryLabel: "Keychains",
    categoryHref: "/products/custom-metal-keychains",
    material: "Soft PVC and metal ring",
    process: "PVC molding and color filling",
    sku: "UP-KEY-033",
    usage: "Tourism gifts, events, retail",
    categories: "Keychains, PVC Keychains",
    quoteProduct: "Keychains",
    lead: "This rainbow balloon PVC keychain set uses colorful soft PVC artwork, raised details and metal key rings for tourism gifts, event merchandise, retail collections and promotional giveaways."
  },
  "monster-round-pvc-keychain-set": {
    title: "Monster Round PVC Keychain Set",
    image: "assets/images/type-keychains-monster-round-pvc.jpg",
    alt: "Monster round PVC keychain set",
    categoryLabel: "Keychains",
    categoryHref: "/products/custom-metal-keychains",
    material: "Soft PVC and metal ring",
    process: "PVC molding and color filling",
    sku: "UP-KEY-032",
    usage: "Movie gifts, fan merchandise, retail",
    categories: "Keychains, PVC Keychains",
    quoteProduct: "Keychains",
    lead: "This monster round PVC keychain set features bold red and black soft PVC artwork, raised character detail and metal key rings for fan merchandise, event gifts, retail programs and custom promotions."
  },
  "spooky-pumpkin-pvc-keychain": {
    title: "Spooky Pumpkin PVC Keychain",
    image: "assets/images/type-keychains-spooky-pumpkin-pvc.jpg",
    alt: "Spooky pumpkin PVC keychain",
    categoryLabel: "Keychains",
    categoryHref: "/products/custom-metal-keychains",
    material: "Soft PVC and metal ring",
    process: "PVC molding and color filling",
    sku: "UP-KEY-031",
    usage: "Halloween events, charity walks, retail",
    categories: "Keychains, PVC Keychains",
    quoteProduct: "Keychains",
    lead: "This spooky pumpkin PVC keychain uses a custom cut soft PVC shape, orange pumpkin artwork and metal ring hardware for Halloween events, charity walks, seasonal retail and promotional gifts."
  },
  "297-society-pvc-keychain": {
    title: "297 Society PVC Keychain",
    image: "assets/images/type-keychains-297-society-pvc.jpg",
    alt: "297 Society PVC keychain",
    categoryLabel: "Keychains",
    categoryHref: "/products/custom-metal-keychains",
    material: "Soft PVC and metal chain",
    process: "PVC molding and color filling",
    sku: "UP-KEY-030",
    usage: "Club gifts, lifestyle brands, retail",
    categories: "Keychains, PVC Keychains",
    quoteProduct: "Keychains",
    lead: "This 297 Society PVC keychain combines a clean rectangular soft PVC design, black-and-white raised artwork and metal chain hardware for club gifts, lifestyle brands, retail accessories and promotions."
  },
  "yellow-mouse-pvc-keychain": {
    title: "Yellow Mouse PVC Keychain",
    image: "assets/images/type-keychains-yellow-mouse-pvc.jpg",
    alt: "Yellow mouse PVC keychain",
    categoryLabel: "Keychains",
    categoryHref: "/products/custom-metal-keychains",
    material: "Soft PVC and ball chain",
    process: "PVC molding and color filling",
    sku: "UP-KEY-029",
    usage: "Character gifts, kids events, retail",
    categories: "Keychains, PVC Keychains",
    quoteProduct: "Keychains",
    lead: "This yellow mouse PVC keychain features a playful soft PVC character shape, raised facial details and ball chain hardware for character gifts, kids events, retail collections and promotional programs."
  },
  "never-give-up-woven-label-keychain": {
    title: "Never Give Up Woven Label Keychain",
    image: "assets/images/type-keychains-never-give-up-woven-label.jpg",
    alt: "Never give up woven label keychain",
    categoryLabel: "Keychains",
    categoryHref: "/products/custom-metal-keychains",
    material: "Polyester woven label and metal ring",
    process: "Woven label, merrowed edge and eyelet assembly",
    sku: "UP-KEY-028",
    usage: "Retail gifts, anime merchandise, promotions",
    categories: "Keychains, Woven Label Keychains",
    quoteProduct: "Keychains",
    lead: "This never give up woven label keychain uses soft woven fabric, stitched edges, metal eyelets and split rings for anime merchandise, retail gifts, event giveaways and custom promotional accessories."
  },
  "anime-eyes-woven-label-keychain-set": {
    title: "Anime Eyes Woven Label Keychain Set",
    image: "assets/images/type-keychains-anime-eyes-woven-label.jpg",
    alt: "Anime eyes woven label keychain set",
    categoryLabel: "Keychains",
    categoryHref: "/products/custom-metal-keychains",
    material: "Polyester woven label and metal ring",
    process: "Woven label, overlocked edge and eyelet assembly",
    sku: "UP-KEY-027",
    usage: "Anime goods, fan events, retail",
    categories: "Keychains, Woven Label Keychains",
    quoteProduct: "Keychains",
    lead: "This anime eyes woven label keychain set features detailed woven artwork, black stitched borders and metal key rings for anime goods, fan events, retail collections and custom merchandise."
  },
  "japan-travel-woven-label-keychain-set": {
    title: "Japan Travel Woven Label Keychain Set",
    image: "assets/images/type-keychains-japan-travel-woven-label.jpg",
    alt: "Japan travel woven label keychain set",
    categoryLabel: "Keychains",
    categoryHref: "/products/custom-metal-keychains",
    material: "Polyester woven label and metal ring",
    process: "Woven label, embroidered detail and eyelet assembly",
    sku: "UP-KEY-026",
    usage: "Travel souvenirs, tourism gifts, retail",
    categories: "Keychains, Woven Label Keychains",
    quoteProduct: "Keychains",
    lead: "This Japan travel woven label keychain set combines embroidered text, woven landscape artwork and durable split rings for tourism souvenirs, travel gifts, retail programs and branded accessories."
  },
  "red-performance-woven-label-keychain-set": {
    title: "Red Performance Woven Label Keychain Set",
    image: "assets/images/type-keychains-red-performance-woven-label.jpg",
    alt: "Red performance woven label keychain set",
    categoryLabel: "Keychains",
    categoryHref: "/products/custom-metal-keychains",
    material: "Polyester woven label and metal ring",
    process: "Woven label, stitched border and eyelet assembly",
    sku: "UP-KEY-025",
    usage: "Motorsport gifts, team merchandise, events",
    categories: "Keychains, Woven Label Keychains",
    quoteProduct: "Keychains",
    lead: "This red performance woven label keychain set uses bold woven lettering, contrast stitched borders and metal key rings for motorsport gifts, team merchandise, event giveaways and brand promotions."
  },
  "powerdays-woven-label-keychain-set": {
    title: "Powerdays Woven Label Keychain Set",
    image: "assets/images/type-keychains-powerdays-woven-label.png",
    alt: "Powerdays woven label keychain set",
    categoryLabel: "Keychains",
    categoryHref: "/products/custom-metal-keychains",
    material: "Polyester woven label and metal ring",
    process: "Woven label, stitched edge and eyelet assembly",
    sku: "UP-KEY-024",
    usage: "Club events, racing gifts, promotions",
    categories: "Keychains, Woven Label Keychains",
    quoteProduct: "Keychains",
    lead: "This Powerdays woven label keychain set features black fabric, bright woven lettering, yellow border stitching and metal rings for club events, racing gifts, promotional programs and retail accessories."
  },
  "black-pet-paw-leather-keychain": {
    title: "Black Pet Paw Leather Keychain",
    image: "assets/images/type-keychains-black-pet-paw-leather.jpg",
    alt: "Black pet paw leather keychain",
    categoryLabel: "Keychains",
    categoryHref: "/products/custom-metal-keychains",
    material: "Leather and zinc alloy",
    process: "Leather cutting, stitching and metal assembly",
    sku: "UP-KEY-023",
    usage: "Pet gifts, memorial keepsakes, retail",
    categories: "Keychains, Leather Keychains",
    quoteProduct: "Keychains",
    lead: "This black pet paw leather keychain combines a stitched paw-shaped leather holder, metal ring and lobster clasp for pet gifts, memorial keepsakes, rescue events and retail accessories."
  },
  "memorial-paw-leather-keychain-set": {
    title: "Memorial Paw Leather Keychain Set",
    image: "assets/images/type-keychains-memorial-paw-leather-set.jpg",
    alt: "Memorial paw leather keychain set",
    categoryLabel: "Keychains",
    categoryHref: "/products/custom-metal-keychains",
    material: "Leather and zinc alloy",
    process: "Leather cutting, stitching and charm assembly",
    sku: "UP-KEY-022",
    usage: "Pet memorials, gift sets, retail",
    categories: "Keychains, Leather Keychains",
    quoteProduct: "Keychains",
    lead: "This memorial paw leather keychain set features paw-shaped leather holders, metal keepsake charms and split ring hardware for pet memorial gifts, retail sets and custom remembrance merchandise."
  },
  "brown-memorial-paw-leather-keychain": {
    title: "Brown Memorial Paw Leather Keychain",
    image: "assets/images/type-keychains-brown-memorial-paw-leather.jpg",
    alt: "Brown memorial paw leather keychain",
    categoryLabel: "Keychains",
    categoryHref: "/products/custom-metal-keychains",
    material: "Leather and zinc alloy",
    process: "Leather cutting, stitching and heat transfer printing",
    sku: "UP-KEY-021",
    usage: "Pet memorial gifts, boutiques, promotions",
    categories: "Keychains, Leather Keychains",
    quoteProduct: "Keychains",
    lead: "This brown memorial paw leather keychain uses a paw-shaped stitched leather design with custom text printing and metal key ring hardware for pet memorial gifts, boutiques and promotional programs."
  },
  "colorful-leather-strap-keychain-set": {
    title: "Colorful Leather Strap Keychain Set",
    image: "assets/images/type-keychains-colorful-leather-strap-set.jpg",
    alt: "Colorful leather strap keychain set",
    categoryLabel: "Keychains",
    categoryHref: "/products/custom-metal-keychains",
    material: "Leather and zinc alloy",
    process: "Leather cutting, stitching and metal assembly",
    sku: "UP-KEY-020",
    usage: "Corporate gifts, retail, brand merchandise",
    categories: "Keychains, Leather Keychains",
    quoteProduct: "Keychains",
    lead: "This colorful leather strap keychain set offers multiple leather colors with dark metal hardware, stitched straps and round clasp rings for corporate gifts, retail programs and brand merchandise."
  },
  "basketball-bottle-opener-keychain": {
    title: "Basketball Bottle Opener Keychain",
    image: "assets/images/type-keychains-basketball-bottle-opener.jpg",
    alt: "Basketball bottle opener keychain",
    categoryLabel: "Keychains",
    categoryHref: "/products/custom-metal-keychains",
    material: "Zinc alloy",
    process: "Die casting, plating and printed insert",
    sku: "UP-KEY-019",
    usage: "Sports gifts, fan merchandise, promotions",
    categories: "Keychains, Bottle Opener Keychains",
    quoteProduct: "Keychains",
    lead: "This basketball bottle opener keychain combines a polished metal opener body, round printed insert and split ring hardware for sports gifts, fan merchandise, team promotions and retail accessories."
  },
  "thin-blue-line-spinner-bottle-opener-keychain": {
    title: "Thin Blue Line Spinner Bottle Opener Keychain",
    image: "assets/images/type-keychains-thin-blue-line-spinner-bottle-opener.jpg",
    alt: "Thin blue line spinner bottle opener keychain",
    categoryLabel: "Keychains",
    categoryHref: "/products/custom-metal-keychains",
    material: "Zinc alloy",
    process: "Die casting, plating and spinner assembly",
    sku: "UP-KEY-018",
    usage: "Police gifts, event merchandise, promotions",
    categories: "Keychains, Bottle Opener Keychains",
    quoteProduct: "Keychains",
    lead: "This thin blue line spinner bottle opener keychain features a rotating center emblem, polished metal opener frame and key ring hardware for police gifts, event merchandise and promotional programs."
  },
  "silver-logo-bottle-opener-keychain": {
    title: "Silver Logo Bottle Opener Keychain",
    image: "assets/images/type-keychains-silver-logo-bottle-opener.jpg",
    alt: "Silver logo bottle opener keychain",
    categoryLabel: "Keychains",
    categoryHref: "/products/custom-metal-keychains",
    material: "Zinc alloy",
    process: "Die casting, plating and printed insert",
    sku: "UP-KEY-017",
    usage: "Team gifts, corporate events, retail",
    categories: "Keychains, Bottle Opener Keychains",
    quoteProduct: "Keychains",
    lead: "This silver logo bottle opener keychain uses a smooth plated opener body, custom round logo insert and durable key ring for team gifts, corporate events, retail merchandise and practical giveaways."
  },
  "yellow-team-bottle-opener-keychain": {
    title: "Yellow Team Bottle Opener Keychain",
    image: "assets/images/type-keychains-yellow-team-bottle-opener.jpg",
    alt: "Yellow team bottle opener keychain",
    categoryLabel: "Keychains",
    categoryHref: "/products/custom-metal-keychains",
    material: "Zinc alloy",
    process: "Die casting, plating and printed insert",
    sku: "UP-KEY-016",
    usage: "Sports teams, school events, promotions",
    categories: "Keychains, Bottle Opener Keychains",
    quoteProduct: "Keychains",
    lead: "This yellow team bottle opener keychain pairs a polished metal opener frame with a custom sports logo insert and split ring hardware for school events, team merchandise and promotional gifts."
  },
  "snowflake-charm-cluster-keychain": {
    title: "Snowflake Charm Cluster Keychain",
    image: "assets/images/type-keychains-snowflake-charm-cluster.jpg",
    alt: "Snowflake charm cluster keychain",
    categoryLabel: "Keychains",
    categoryHref: "/products/custom-metal-keychains",
    material: "Zinc alloy",
    process: "Die casting and rhinestone setting",
    sku: "UP-KEY-015",
    usage: "Holiday gifts, winter events, retail",
    categories: "Keychains, Charm Keychains",
    quoteProduct: "Keychains",
    lead: "This snowflake charm cluster keychain combines multiple metal snowflake charms, rhinestone detail and a polished ring for holiday gifts, winter events, seasonal retail and promotional accessories."
  },
  "tire-wheel-rim-keychain": {
    title: "Tire Wheel Rim Keychain",
    image: "assets/images/type-keychains-tire-wheel-rim.jpg",
    alt: "Tire wheel rim keychain",
    categoryLabel: "Keychains",
    categoryHref: "/products/custom-metal-keychains",
    material: "Zinc alloy and rubber",
    process: "Die casting and assembly",
    sku: "UP-KEY-014",
    usage: "Automotive gifts, clubs, promotions",
    categories: "Keychains, Automotive Keychains",
    quoteProduct: "Keychains",
    lead: "This tire wheel rim keychain uses a dimensional wheel design with rubber tire detail and metal hardware for automotive gifts, car clubs, dealership promotions and retail accessories."
  },
  "black-braided-leather-loop-keychain": {
    title: "Black Braided Leather Loop Keychain",
    image: "assets/images/type-keychains-black-braided-leather-loop.jpg",
    alt: "Black braided leather loop keychain",
    categoryLabel: "Keychains",
    categoryHref: "/products/custom-metal-keychains",
    material: "Zinc alloy and leather",
    process: "Metal plating and leather assembly",
    sku: "UP-KEY-013",
    usage: "Corporate gifts, automotive brands, retail",
    categories: "Keychains, Leather Keychains",
    quoteProduct: "Keychains",
    lead: "This black braided leather loop keychain combines woven leather texture, metal end caps and a split ring for corporate gifts, automotive brands, retail accessories and premium giveaways."
  },
  "purple-flower-pot-metal-keychain": {
    title: "Purple Flower Pot Metal Keychain",
    image: "assets/images/type-keychains-purple-flower-pot.jpg",
    alt: "Purple flower pot metal keychain",
    categoryLabel: "Keychains",
    categoryHref: "/products/custom-metal-keychains",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-KEY-012",
    usage: "Retail gifts, plant shops, promotions",
    categories: "Keychains, Enamel Keychains",
    quoteProduct: "Keychains",
    lead: "This purple flower pot metal keychain uses gold plating, floral enamel artwork and a lobster clasp for plant shops, retail gifts, boutique merchandise and promotional giveaways."
  },
  "plant-shop-storefront-keychain": {
    title: "Plant Shop Storefront Keychain",
    image: "assets/images/type-keychains-plant-shop-storefront.jpg",
    alt: "Plant shop storefront keychain",
    categoryLabel: "Keychains",
    categoryHref: "/products/custom-metal-keychains",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-KEY-011",
    usage: "Boutiques, plant shops, retail souvenirs",
    categories: "Keychains, Enamel Keychains",
    quoteProduct: "Keychains",
    lead: "This plant shop storefront keychain presents a detailed retail facade with pastel enamel and gold metal trim for boutiques, plant shops, souvenir collections and brand merchandise."
  },
  "graduate-school-logo-keychain-set": {
    title: "Graduate School Logo Keychain Set",
    image: "assets/images/type-keychains-graduate-school-logo-set.jpg",
    alt: "Graduate school logo keychain set",
    categoryLabel: "Keychains",
    categoryHref: "/products/custom-metal-keychains",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-KEY-010",
    usage: "Schools, graduations, alumni gifts",
    categories: "Keychains, School Logo Keychains",
    quoteProduct: "Keychains",
    lead: "This graduate school logo keychain set uses round enamel school emblems, plated metal and chain attachments for graduation gifts, alumni programs, campus events and school merchandise."
  },
  "variegated-leaf-enamel-keychain": {
    title: "Variegated Leaf Enamel Keychain",
    image: "assets/images/type-keychains-variegated-leaf.jpg",
    alt: "Variegated leaf enamel keychain",
    categoryLabel: "Keychains",
    categoryHref: "/products/custom-metal-keychains",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-KEY-009",
    usage: "Plant shops, lifestyle brands, retail gifts",
    categories: "Keychains, Enamel Keychains",
    quoteProduct: "Keychains",
    lead: "This variegated leaf enamel keychain features a heart-shaped foliage design with layered green enamel and gold plating for plant shops, lifestyle brands, retail gifts and botanical collections."
  },
  "monstera-leaf-glitter-keychain": {
    title: "Monstera Leaf Glitter Keychain",
    image: "assets/images/type-keychains-monstera-leaf-glitter.jpg",
    alt: "Monstera leaf glitter keychain",
    categoryLabel: "Keychains",
    categoryHref: "/products/custom-metal-keychains",
    material: "Zinc alloy",
    process: "Die casting and glitter enamel",
    sku: "UP-KEY-008",
    usage: "Plant shops, gift stores, brand merch",
    categories: "Keychains, Glitter Keychains",
    quoteProduct: "Keychains",
    lead: "This monstera leaf glitter keychain combines cutout leaf detail, green sparkle enamel and gold metal lines for plant shops, gift stores, lifestyle brands and retail merchandise."
  },
  "green-heart-leaf-metal-keychain": {
    title: "Green Heart Leaf Metal Keychain",
    image: "assets/images/type-keychains-green-heart-leaf.jpg",
    alt: "Green heart leaf metal keychain",
    categoryLabel: "Keychains",
    categoryHref: "/products/custom-metal-keychains",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-KEY-007",
    usage: "Botanical gifts, plant shops, retail",
    categories: "Keychains, Enamel Keychains",
    quoteProduct: "Keychains",
    lead: "This green heart leaf metal keychain uses a simple botanical outline, smooth enamel color and gold plating for botanical gifts, plant shops, retail collections and promotional accessories."
  },
  "round-christmas-logo-keychain-set": {
    title: "Round Christmas Logo Keychain Set",
    image: "assets/images/type-keychains-round-christmas-logo-set.jpg",
    alt: "Round Christmas logo keychain set",
    categoryLabel: "Keychains",
    categoryHref: "/products/custom-metal-keychains",
    material: "Zinc alloy",
    process: "Die casting and printed insert",
    sku: "UP-KEY-006",
    usage: "Holiday gifts, brand promotions, events",
    categories: "Keychains, Printed Keychains",
    quoteProduct: "Keychains",
    lead: "This round Christmas logo keychain set uses full-color printed artwork in a metal frame for holiday gifts, seasonal promotions, brand events and custom retail giveaways."
  },
  "san-andres-shark-enamel-keychain": {
    title: "San Andres Shark Enamel Keychain",
    image: "assets/images/type-keychains-san-andres-shark.jpg",
    alt: "San Andres shark enamel keychain",
    categoryLabel: "Keychains",
    categoryHref: "/products/custom-metal-keychains",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-KEY-005",
    usage: "Tourism gifts, resorts, retail souvenirs",
    categories: "Keychains, Enamel Keychains",
    quoteProduct: "Keychains",
    lead: "This San Andres shark enamel keychain features a playful mascot, wave banner and colored enamel for tourism gifts, resort shops, travel souvenirs and destination merchandise."
  },
  "colorful-flower-metal-keychains": {
    title: "Colorful Flower Metal Keychain Set",
    image: "assets/images/type-keychains-metal.jpg",
    alt: "Colorful flower metal keychain set",
    categoryLabel: "Keychains",
    categoryHref: "/products/custom-metal-keychains",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-KEY-001",
    usage: "Retail gifts, promotions, souvenirs",
    categories: "Keychains, Metal Keychains",
    quoteProduct: "Keychains",
    lead: "These colorful flower keychains use metal outlines and bright enamel fills. They are suitable for souvenir shops, brand giveaways, event merchandise and retail gift programs."
  },
  "palm-island-enamel-keychain": {
    title: "Palm Island Enamel Keychain",
    image: "assets/images/type-keychains-enamel.jpg",
    alt: "Palm island enamel keychain",
    categoryLabel: "Keychains",
    categoryHref: "/products/custom-metal-keychains",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-KEY-002",
    usage: "Tourism gifts, resorts, retail",
    categories: "Keychains, Enamel Keychains",
    quoteProduct: "Keychains",
    lead: "This palm island keychain combines destination artwork with enamel color. It is ideal for tourism souvenirs, resort gifts, travel campaigns and destination retail collections."
  },
  "round-school-logo-bottle-opener-keychain": {
    title: "Round School Logo Keychain",
    image: "assets/images/type-keychains-opener.jpg",
    alt: "Round school logo keychain",
    categoryLabel: "Keychains",
    categoryHref: "/products/custom-metal-keychains",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-KEY-003",
    usage: "Schools, events, promotional gifts",
    categories: "Keychains, School Logo Keychains",
    quoteProduct: "Keychains",
    lead: "This round school logo keychain presents campus artwork in a compact metal gift format. It is well suited for alumni gifts, event merch, fundraisers and promotional giveaways."
  },
  "travel-charm-spinner-keychain": {
    title: "Travel Charm Spinner Keychain",
    image: "assets/images/type-keychains-spinner.jpg",
    alt: "Travel charm spinner keychain",
    categoryLabel: "Keychains",
    categoryHref: "/products/custom-metal-keychains",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-KEY-004",
    usage: "Tourism, retail gifts, promotions",
    categories: "Keychains, Spinner Keychains",
    quoteProduct: "Keychains",
    lead: "This travel charm spinner keychain presents multiple small icons in one moving accessory. It works for tourism campaigns, souvenir stores, brand gifts and event giveaways."
  },
  "celtic-knot-antique-silver-belt-buckle": {
    title: "Celtic Knot Antique Silver Belt Buckle",
    image: "assets/images/type-buckles-celtic-knot-silver.jpg",
    alt: "Celtic knot antique silver belt buckle",
    categoryLabel: "Belt Buckles",
    categoryHref: "/products/custom-belt-buckles",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-BUCKLE-020",
    usage: "Fashion belts, heritage gifts, retail",
    categories: "Belt Buckles, Antique Buckles",
    quoteProduct: "Belt Buckles",
    lead: "This antique silver belt buckle features a raised Celtic knot pattern with polished edges and black recessed enamel. It works for fashion belts, heritage gifts, retail accessories and custom merchandise."
  },
  "united-states-eagle-flag-belt-buckle": {
    title: "United States Eagle Flag Belt Buckle",
    image: "assets/images/type-buckles-usa-eagle-flag.jpg",
    alt: "United States eagle flag belt buckle",
    categoryLabel: "Belt Buckles",
    categoryHref: "/products/custom-belt-buckles",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-BUCKLE-019",
    usage: "Patriotic gifts, events, retail",
    categories: "Belt Buckles, Enamel Buckles",
    quoteProduct: "Belt Buckles",
    lead: "This oval belt buckle combines eagle artwork, flag enamel details and antique metal texture. It is suitable for patriotic gifts, event merchandise, western stores and retail belt programs."
  },
  "australia-horse-relief-belt-buckle": {
    title: "Australia Horse Relief Belt Buckle",
    image: "assets/images/type-buckles-australia-horse-relief.jpg",
    alt: "Australia horse relief belt buckle",
    categoryLabel: "Belt Buckles",
    categoryHref: "/products/custom-belt-buckles",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-BUCKLE-018",
    usage: "Tourism gifts, western wear, retail",
    categories: "Belt Buckles, Relief Buckles",
    quoteProduct: "Belt Buckles",
    lead: "This rectangular Australia horse belt buckle uses deep relief, antique silver plating and western border details. It fits tourism gifts, equestrian events, western wear and retail accessories."
  },
  "kowow-star-enamel-belt-buckle": {
    title: "KOWOW Star Enamel Belt Buckle",
    image: "assets/images/type-buckles-kowow-star-enamel.jpg",
    alt: "KOWOW star enamel belt buckle",
    categoryLabel: "Belt Buckles",
    categoryHref: "/products/custom-belt-buckles",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-BUCKLE-017",
    usage: "Team gifts, clubs, retail accessories",
    categories: "Belt Buckles, Enamel Buckles",
    quoteProduct: "Belt Buckles",
    lead: "This shaped enamel belt buckle features star artwork, polished plating and a custom logo layout. It is a strong choice for team gifts, clubs, branded merchandise and retail belt collections."
  },
  "blue-knights-mc-antique-belt-buckle": {
    title: "Blue Knights MC Antique Belt Buckle",
    image: "assets/images/type-buckles-blue-knights-mc.jpg",
    alt: "Blue Knights MC antique belt buckle",
    categoryLabel: "Belt Buckles",
    categoryHref: "/products/custom-belt-buckles",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-BUCKLE-016",
    usage: "Motorcycle clubs, member gifts, events",
    categories: "Belt Buckles, Club Buckles",
    quoteProduct: "Belt Buckles",
    lead: "This Blue Knights MC belt buckle combines antique gold plating, raised scroll details and a central enamel shield. It suits motorcycle clubs, member gifts, events and custom uniform accessories."
  },
  "sunflower-horse-western-belt-buckle": {
    title: "Sunflower Horse Western Belt Buckle",
    image: "assets/images/type-buckles-sunflower-horse-western.jpg",
    alt: "Sunflower horse western belt buckle",
    categoryLabel: "Belt Buckles",
    categoryHref: "/products/custom-belt-buckles",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-BUCKLE-015",
    usage: "Western wear, equestrian gifts, retail",
    categories: "Belt Buckles, Western Buckles",
    quoteProduct: "Belt Buckles",
    lead: "This western belt buckle presents a horse head with sunflower enamel accents and antique gold texture. It is ideal for equestrian gifts, western wear, retail stores and themed events."
  },
  "california-highway-patrol-western-belt-buckle": {
    title: "California Highway Patrol Western Belt Buckle",
    image: "assets/images/type-buckles-california-highway-patrol.jpg",
    alt: "California Highway Patrol western belt buckle",
    categoryLabel: "Belt Buckles",
    categoryHref: "/products/custom-belt-buckles",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-BUCKLE-014",
    usage: "Police gifts, western wear, retail accessories",
    categories: "Belt Buckles, Western Buckles",
    quoteProduct: "Belt Buckles",
    lead: "This California Highway Patrol belt buckle uses antique gold plating, blue enamel lettering and raised badge details. It suits police gifts, western retail, collector merchandise and event accessories."
  },
  "motorcycle-rider-relief-belt-buckle": {
    title: "Motorcycle Rider Relief Belt Buckle",
    image: "assets/images/type-buckles-motorcycle-relief.jpg",
    alt: "Motorcycle rider relief belt buckle",
    categoryLabel: "Belt Buckles",
    categoryHref: "/products/custom-belt-buckles",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-BUCKLE-013",
    usage: "Motorcycle clubs, events, retail gifts",
    categories: "Belt Buckles, Relief Buckles",
    quoteProduct: "Belt Buckles",
    lead: "This motorcycle rider buckle presents a bold rider and bike in polished relief. It is suitable for motorcycle clubs, biker events, themed stores and custom accessory programs."
  },
  "arizona-antique-relief-belt-buckle": {
    title: "Arizona Antique Relief Belt Buckle",
    image: "assets/images/type-buckles-arizona-antique-relief.jpg",
    alt: "Arizona antique relief belt buckle",
    categoryLabel: "Belt Buckles",
    categoryHref: "/products/custom-belt-buckles",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-BUCKLE-012",
    usage: "Tourism gifts, western wear, retail",
    categories: "Belt Buckles, Antique Buckles",
    quoteProduct: "Belt Buckles",
    lead: "This Arizona belt buckle combines antique metal texture with landmark artwork and large raised lettering. It works for tourism gifts, western wear collections, event merchandise and retail accessories."
  },
  "cowboys-music-festival-belt-buckle": {
    title: "Cowboys Music Festival Belt Buckle",
    image: "assets/images/type-buckles-cowboys-music-festival.jpg",
    alt: "Cowboys music festival belt buckle",
    categoryLabel: "Belt Buckles",
    categoryHref: "/products/custom-belt-buckles",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-BUCKLE-011",
    usage: "Festivals, western events, retail gifts",
    categories: "Belt Buckles, Festival Buckles",
    quoteProduct: "Belt Buckles",
    lead: "This rectangular festival belt buckle features raised star artwork, beaded borders and antique finishing. It is ideal for music festivals, western events, brand merchandise and gift shops."
  },
  "wood-badge-staff-belt-buckle": {
    title: "Wood Badge Staff Belt Buckle",
    image: "assets/images/type-buckles-wood-badge-staff.jpg",
    alt: "Wood Badge staff belt buckle",
    categoryLabel: "Belt Buckles",
    categoryHref: "/products/custom-belt-buckles",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-BUCKLE-010",
    usage: "Staff gifts, clubs, awards",
    categories: "Belt Buckles, Award Buckles",
    quoteProduct: "Belt Buckles",
    lead: "This Wood Badge staff buckle uses antique texture, raised lettering and detailed emblem artwork. It is a strong choice for staff recognition, club gifts, awards and uniform accessories."
  },
  "elephant-triangle-enamel-belt-buckle": {
    title: "Elephant Triangle Enamel Belt Buckle",
    image: "assets/images/type-buckles-elephant-triangle.jpg",
    alt: "Elephant triangle enamel belt buckle",
    categoryLabel: "Belt Buckles",
    categoryHref: "/products/custom-belt-buckles",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-BUCKLE-009",
    usage: "Club gifts, retail accessories, events",
    categories: "Belt Buckles, Enamel Buckles",
    quoteProduct: "Belt Buckles",
    lead: "This oval elephant belt buckle pairs textured antique metal with red enamel accents. It fits club gifts, themed retail collections, events and custom brand accessories."
  },
  "nupe-logo-rectangle-belt-buckle": {
    title: "NUPE Logo Rectangle Belt Buckle",
    image: "assets/images/type-buckles-nupe-logo.jpg",
    alt: "NUPE logo rectangle belt buckle",
    categoryLabel: "Belt Buckles",
    categoryHref: "/products/custom-belt-buckles",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-BUCKLE-008",
    usage: "Organization gifts, clubs, retail",
    categories: "Belt Buckles, Logo Buckles",
    quoteProduct: "Belt Buckles",
    lead: "This rectangular NUPE logo buckle uses red enamel, polished metal outlines and a clean silver background. It is suitable for organization gifts, club merchandise, events and retail accessories."
  },
  "purple-horseshoe-oval-belt-buckle": {
    title: "Purple Horseshoe Oval Belt Buckle",
    image: "assets/images/type-buckles-purple-horseshoe.jpg",
    alt: "Purple horseshoe oval belt buckle",
    categoryLabel: "Belt Buckles",
    categoryHref: "/products/custom-belt-buckles",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-BUCKLE-007",
    usage: "Western wear, clubs, events",
    categories: "Belt Buckles, Enamel Buckles",
    quoteProduct: "Belt Buckles",
    lead: "This oval belt buckle combines antique gold plating with purple enamel horseshoe artwork and raised accents. It works for western wear, club gifts, events and retail collections."
  },
  "gold-monogram-frame-belt-buckle": {
    title: "Gold Monogram Frame Belt Buckle",
    image: "assets/images/type-buckles-gold-monogram-frame.jpg",
    alt: "Gold monogram frame belt buckle",
    categoryLabel: "Belt Buckles",
    categoryHref: "/products/custom-belt-buckles",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-BUCKLE-006",
    usage: "Fashion accessories, brand gifts, retail",
    categories: "Belt Buckles, Fashion Buckles",
    quoteProduct: "Belt Buckles",
    lead: "This gold monogram frame belt buckle uses polished plating and openwork logo details for a fashion accessory look. It suits brand gifts, retail belts, apparel lines and promotional products."
  },
  "gold-anchor-monogram-belt-buckle": {
    title: "Gold Anchor Monogram Belt Buckle",
    image: "assets/images/type-buckles-gold-anchor-monogram.jpg",
    alt: "Gold anchor monogram belt buckle",
    categoryLabel: "Belt Buckles",
    categoryHref: "/products/custom-belt-buckles",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-BUCKLE-005",
    usage: "Fashion belts, retail, brand accessories",
    categories: "Belt Buckles, Fashion Buckles",
    quoteProduct: "Belt Buckles",
    lead: "This gold anchor monogram buckle features polished plating, rope detail and a shaped logo layout. It is suitable for fashion belts, retail accessories, branded gifts and custom apparel programs."
  },
  "western-skull-relief-belt-buckle": {
    title: "Western Skull Relief Belt Buckle",
    image: "assets/images/type-buckles-western.jpg",
    alt: "Western skull relief belt buckle",
    categoryLabel: "Belt Buckles",
    categoryHref: "/products/custom-belt-buckles",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-BUCKLE-001",
    usage: "Western wear, clubs, retail gifts",
    categories: "Belt Buckles, Relief Buckles",
    quoteProduct: "Belt Buckles",
    lead: "This western belt buckle uses bold skull relief and antique metal styling. It is suitable for western wear brands, clubs, themed events and retail accessories."
  },
  "oval-relief-logo-metal-belt-buckle": {
    title: "Oval Relief Logo Metal Belt Buckle",
    image: "assets/images/type-buckles-logo.jpg",
    alt: "Oval relief logo metal belt buckle",
    categoryLabel: "Belt Buckles",
    categoryHref: "/products/custom-belt-buckles",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-BUCKLE-002",
    usage: "Brand accessories, awards, clubs",
    categories: "Belt Buckles, Logo Buckles",
    quoteProduct: "Belt Buckles",
    lead: "This oval logo buckle uses raised relief to highlight brand artwork. It is a strong choice for club identity, company gifts, uniform accessories and award merchandise."
  },
  "antique-silver-rectangle-logo-belt-buckle": {
    title: "Antique Silver Rectangle Logo Belt Buckle",
    image: "assets/images/type-buckles-antique.jpg",
    alt: "Antique silver rectangle logo belt buckle",
    categoryLabel: "Belt Buckles",
    categoryHref: "/products/custom-belt-buckles",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-BUCKLE-003",
    usage: "Corporate gifts, clubs, uniforms",
    categories: "Belt Buckles, Antique Buckles",
    quoteProduct: "Belt Buckles",
    lead: "This rectangular antique silver buckle presents logo artwork with a durable metal finish. It fits uniform accessories, clubs, corporate gifts and retail belt programs."
  },
  "oval-club-logo-enamel-belt-buckle": {
    title: "Oval Club Logo Enamel Belt Buckle",
    image: "assets/images/type-buckles-enamel.jpg",
    alt: "Oval club logo enamel belt buckle",
    categoryLabel: "Belt Buckles",
    categoryHref: "/products/custom-belt-buckles",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-BUCKLE-004",
    usage: "Clubs, teams, retail accessories",
    categories: "Belt Buckles, Enamel Buckles",
    quoteProduct: "Belt Buckles",
    lead: "This oval enamel buckle combines club artwork with colored enamel areas. It is suitable for sports teams, member gifts, western stores and promotional accessories."
  },
  "worlds-okayist-golfer-golf-hat-clip": {
    title: "World's Okayist Golfer Golf Hat Clip",
    image: "assets/images/type-golf-okayist-golfer-hat-clip.jpg",
    alt: "World's Okayist Golfer golf hat clip ball marker",
    categoryLabel: "Golf Accessories",
    categoryHref: "/products/custom-golf-accessories",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-GOLF-019",
    usage: "Golf gifts, club shops, tournaments",
    categories: "Golf Accessories, Hat Clip Markers",
    quoteProduct: "Golf Accessories",
    lead: "This round golf hat clip marker uses a humorous quote design with clean black-and-white artwork. It is a practical choice for golf gifts, tournament giveaways, club shops and casual retail sets."
  },
  "just-tap-it-in-golf-hat-clip": {
    title: "Just Tap It In Golf Hat Clip",
    image: "assets/images/type-golf-just-tap-it-in-hat-clip.jpg",
    alt: "Just Tap It In golf hat clip ball marker",
    categoryLabel: "Golf Accessories",
    categoryHref: "/products/custom-golf-accessories",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-GOLF-018",
    usage: "Golf outings, retail gifts, events",
    categories: "Golf Accessories, Hat Clip Markers",
    quoteProduct: "Golf Accessories",
    lead: "This golf hat clip marker features bold typography and a simple ball graphic for easy recognition. It works well for golf outings, sponsor gifts, club merchandise and retail accessories."
  },
  "hole-in-one-club-golf-hat-clip": {
    title: "Hole In One Club Golf Hat Clip",
    image: "assets/images/type-golf-hole-in-one-club-hat-clip.jpg",
    alt: "Hole In One Club golf hat clip ball marker",
    categoryLabel: "Golf Accessories",
    categoryHref: "/products/custom-golf-accessories",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-GOLF-017",
    usage: "Golf awards, clubs, retail gifts",
    categories: "Golf Accessories, Hat Clip Markers",
    quoteProduct: "Golf Accessories",
    lead: "This black and gold hat clip marker highlights a Hole In One Club design with strong contrast. It is suited for golf award programs, club gifts, tournament prizes and premium retail sets."
  },
  "golfing-bad-golf-hat-clip": {
    title: "Golfing Bad Golf Hat Clip",
    image: "assets/images/type-golf-golfing-bad-hat-clip.jpg",
    alt: "Golfing Bad golf hat clip ball marker",
    categoryLabel: "Golf Accessories",
    categoryHref: "/products/custom-golf-accessories",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-GOLF-016",
    usage: "Golf gifts, club shops, promotions",
    categories: "Golf Accessories, Hat Clip Markers",
    quoteProduct: "Golf Accessories",
    lead: "This custom golf hat clip uses a playful wordmark layout on a round marker. It is useful for novelty golf gifts, club shop displays, promotional campaigns and event merchandise."
  },
  "weekend-forecast-golf-hat-clip": {
    title: "Weekend Forecast Golf Hat Clip",
    image: "assets/images/type-golf-weekend-forecast-hat-clip.jpg",
    alt: "Weekend Forecast golf hat clip ball marker",
    categoryLabel: "Golf Accessories",
    categoryHref: "/products/custom-golf-accessories",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-GOLF-015",
    usage: "Golf gifts, outings, retail",
    categories: "Golf Accessories, Hat Clip Markers",
    quoteProduct: "Golf Accessories",
    lead: "This weekend forecast golf marker combines a fun beer and golf message with a round hat clip format. It is a good fit for golf outings, social tournaments, retail gifts and brand promotions."
  },
  "usa-flag-golf-divot-tool": {
    title: "USA Flag Golf Divot Tool",
    image: "assets/images/type-golf-usa-flag-divot-tool.jpg",
    alt: "USA flag golf divot tool with ball marker",
    categoryLabel: "Golf Accessories",
    categoryHref: "/products/custom-golf-accessories",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-GOLF-014",
    usage: "Golf clubs, patriotic events, gifts",
    categories: "Golf Accessories, Divot Tools",
    quoteProduct: "Golf Accessories",
    lead: "This silver golf divot tool includes a round USA flag marker for course use. It is suitable for patriotic golf events, club gifts, tournaments and souvenir retail."
  },
  "jk-logo-golf-divot-tool-marker": {
    title: "JK Logo Golf Divot Tool Marker",
    image: "assets/images/type-golf-jk-divot-tool-marker.jpg",
    alt: "JK logo golf divot tool ball marker",
    categoryLabel: "Golf Accessories",
    categoryHref: "/products/custom-golf-accessories",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-GOLF-013",
    usage: "Golf clubs, corporate gifts, events",
    categories: "Golf Accessories, Divot Tools",
    quoteProduct: "Golf Accessories",
    lead: "This gold-tone divot tool pairs a textured handle with a removable round logo marker. It supports custom club marks, event branding, corporate gifts and premium golf sets."
  },
  "golf-player-divot-tool-gift-set": {
    title: "Golf Player Divot Tool Gift Set",
    image: "assets/images/type-golf-player-divot-tool-set.jpg",
    alt: "Golf player divot tool gift set with ball markers",
    categoryLabel: "Golf Accessories",
    categoryHref: "/products/custom-golf-accessories",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-GOLF-012",
    usage: "Corporate golf, tournaments, gift boxes",
    categories: "Golf Accessories, Divot Tool Sets",
    quoteProduct: "Golf Accessories",
    lead: "This golf gift set combines a player-shaped divot tool with matching markers and presentation packaging. It is designed for tournament gifts, resort shops, corporate golf days and sponsor promotions."
  },
  "price-is-wrong-golf-hat-clip": {
    title: "Price Is Wrong Golf Hat Clip",
    image: "assets/images/type-golf-price-is-wrong-hat-clip.jpg",
    alt: "Price Is Wrong golf hat clip ball marker",
    categoryLabel: "Golf Accessories",
    categoryHref: "/products/custom-golf-accessories",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-GOLF-011",
    usage: "Golf gifts, club shops, events",
    categories: "Golf Accessories, Hat Clip Markers",
    quoteProduct: "Golf Accessories",
    lead: "This golf hat clip marker uses colorful character artwork and a bold novelty message. It is suitable for golf gift programs, club shops, social events and custom retail merchandise."
  },
  "bogey-king-logo-golf-hat-clip": {
    title: "Bogey King Logo Golf Hat Clip",
    image: "assets/images/type-golf-bogey-king-logo-hat-clip.jpg",
    alt: "Bogey King logo golf hat clip ball marker",
    categoryLabel: "Golf Accessories",
    categoryHref: "/products/custom-golf-accessories",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-GOLF-010",
    usage: "Golf shops, tournaments, gifts",
    categories: "Golf Accessories, Hat Clip Markers",
    quoteProduct: "Golf Accessories",
    lead: "This Bogey King hat clip marker presents a clean logo-style design in red, blue and yellow. It fits golf shop merchandise, tournament giveaways, member gifts and promotional accessories."
  },
  "donut-golf-hat-clip-ball-marker": {
    title: "Donut Golf Hat Clip Ball Marker",
    image: "assets/images/type-golf-donut-hat-clip.jpg",
    alt: "Donut golf hat clip ball marker",
    categoryLabel: "Golf Accessories",
    categoryHref: "/products/custom-golf-accessories",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-GOLF-009",
    usage: "Golf gifts, retail, events",
    categories: "Golf Accessories, Hat Clip Markers",
    quoteProduct: "Golf Accessories",
    lead: "This donut-shaped golf hat clip marker adds playful color to practical course accessories. It is suited for novelty golf gifts, event merchandise, club shops and retail promotions."
  },
  "animal-character-golf-ball-marker-set": {
    title: "Animal Character Golf Ball Marker Set",
    image: "assets/images/type-golf-animal-marker-set.jpg",
    alt: "Animal character golf ball marker set",
    categoryLabel: "Golf Accessories",
    categoryHref: "/products/custom-golf-accessories",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-GOLF-008",
    usage: "Golf gifts, clubs, retail sets",
    categories: "Golf Accessories, Ball Marker Sets",
    quoteProduct: "Golf Accessories",
    lead: "This golf marker set includes multiple animal character designs with bright enamel color. It is useful for club shop assortments, themed gifts, tournament packs and souvenir retail."
  },
  "tap-tap-taparoo-golf-hat-clip": {
    title: "Tap Tap Taparoo Golf Hat Clip",
    image: "assets/images/type-golf-tap-taparoo-hat-clip.jpg",
    alt: "Tap Tap Taparoo golf hat clip ball marker",
    categoryLabel: "Golf Accessories",
    categoryHref: "/products/custom-golf-accessories",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-GOLF-007",
    usage: "Golf events, club shops, gifts",
    categories: "Golf Accessories, Hat Clip Markers",
    quoteProduct: "Golf Accessories",
    lead: "This round golf hat clip marker uses illustrated player artwork and bright enamel fields. It is suited for golf events, club shops, team gifts and casual golf merchandise."
  },
  "bogey-king-golf-hat-clip": {
    title: "Bogey King Golf Hat Clip",
    image: "assets/images/type-golf-bogey-king-hat-clip.jpg",
    alt: "Bogey King golf hat clip ball marker",
    categoryLabel: "Golf Accessories",
    categoryHref: "/products/custom-golf-accessories",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-GOLF-006",
    usage: "Golf gifts, tournaments, shops",
    categories: "Golf Accessories, Hat Clip Markers",
    quoteProduct: "Golf Accessories",
    lead: "This Bogey King golf hat clip features raised enamel logo artwork on a round marker. It is a strong option for golf gifts, tournament merchandise, club shops and promotional campaigns."
  },
  "born-to-golf-ball-marker": {
    title: "Born To Golf Ball Marker",
    image: "assets/images/type-golf-born-to-golf-ball-marker.jpg",
    alt: "Born To Golf ball marker with golf quote",
    categoryLabel: "Golf Accessories",
    categoryHref: "/products/custom-golf-accessories",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-GOLF-005",
    usage: "Golf clubs, events, retail gifts",
    categories: "Golf Accessories, Ball Markers",
    quoteProduct: "Golf Accessories",
    lead: "This round golf ball marker uses a clean white quote design with black artwork. It is suitable for golf clubs, tournament gift bags, resort shops and promotional retail programs."
  },
  "life-is-always-good-golf-ball-marker": {
    title: "Life Is Always Good Golf Ball Marker",
    image: "assets/images/type-golf-life-good-ball-marker.jpg",
    alt: "Life Is Always Good golf ball marker",
    categoryLabel: "Golf Accessories",
    categoryHref: "/products/custom-golf-accessories",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-GOLF-004",
    usage: "Golf clubs, resort gifts, tournaments",
    categories: "Golf Accessories, Ball Markers",
    quoteProduct: "Golf Accessories",
    lead: "This black and gold golf ball marker highlights a course-themed message with crisp custom artwork. It is ideal for golf clubs, resort gifts, event giveaways and retail accessory sets."
  },
  "antique-golf-club-divot-tool-ball-marker": {
    title: "Antique Golf Club Divot Tool Ball Marker",
    image: "assets/images/type-golf-ball-marker.jpg",
    alt: "Antique golf club divot tool ball marker",
    categoryLabel: "Golf Accessories",
    categoryHref: "/products/custom-golf-accessories",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-GOLF-001",
    usage: "Golf clubs, tournaments, gifts",
    categories: "Golf Accessories, Ball Markers",
    quoteProduct: "Golf Accessories",
    lead: "This antique golf divot tool includes a custom ball marker for practical course use. It is ideal for golf clubs, tournaments, sponsor gifts and premium retail sets."
  },
  "avocado-golf-hat-clip-ball-marker": {
    title: "Avocado Golf Hat Clip Ball Marker",
    image: "assets/images/type-golf-hat-clip.jpg",
    alt: "Avocado golf hat clip ball marker",
    categoryLabel: "Golf Accessories",
    categoryHref: "/products/custom-golf-accessories",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-GOLF-002",
    usage: "Golf events, retail, club gifts",
    categories: "Golf Accessories, Hat Clip Markers",
    quoteProduct: "Golf Accessories",
    lead: "This avocado hat clip marker adds playful artwork to a practical golf accessory. It is suited for golf events, club shops, promotional gifts and branded merchandise."
  },
  "color-logo-golf-divot-tool-set": {
    title: "Color Logo Golf Divot Tool Set",
    image: "assets/images/type-golf-divot-tool.jpg",
    alt: "Color logo golf divot tool set",
    categoryLabel: "Golf Accessories",
    categoryHref: "/products/custom-golf-accessories",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-GOLF-003",
    usage: "Golf tournaments, resorts, gifts",
    categories: "Golf Accessories, Divot Tool Sets",
    quoteProduct: "Golf Accessories",
    lead: "This golf divot tool set features custom logo color inserts and useful accessories. It is a good fit for tournaments, resort shops, membership gifts and sponsor promotions."
  },
  "playing-card-metal-bottle-opener": {
    title: "Playing Card Metal Bottle Opener",
    image: "assets/images/type-openers-coin.jpg",
    alt: "Playing card metal bottle opener",
    categoryLabel: "Bottle Openers",
    categoryHref: "/products/custom-bottle-openers",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-OPEN-001",
    usage: "Bars, events, promotions, retail",
    categories: "Bottle Openers, Metal Openers",
    quoteProduct: "Bottle Openers",
    lead: "This playing card bottle opener combines themed artwork with a functional metal opener. It works for bars, game events, brand promotions and retail gift sets."
  },
  "skull-coin-keychain-bottle-opener": {
    title: "Skull Coin Keychain Bottle Opener",
    image: "assets/images/type-openers-keychain.jpg",
    alt: "Skull coin keychain bottle opener",
    categoryLabel: "Bottle Openers",
    categoryHref: "/products/custom-bottle-openers",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-OPEN-002",
    usage: "Events, retail gifts, promotions",
    categories: "Bottle Openers, Keychain Openers",
    quoteProduct: "Bottle Openers",
    lead: "This skull coin keychain opener adds a bold collectible look to a practical item. It is suited for event merchandise, themed retail gifts, bars and promotional campaigns."
  },
  "round-logo-keychain-bottle-opener": {
    title: "Round Logo Keychain Bottle Opener",
    image: "assets/images/type-openers-round-logo-keychain.jpg",
    alt: "Round logo keychain bottle opener",
    categoryLabel: "Bottle Openers",
    categoryHref: "/products/custom-bottle-openers",
    material: "Zinc alloy",
    process: "Die casting and plating",
    sku: "UP-OPEN-010",
    usage: "Brand promotions, retail gifts, events",
    categories: "Bottle Openers, Keychain Openers",
    quoteProduct: "Bottle Openers",
    lead: "This round logo keychain bottle opener combines a polished metal frame, logo insert and split ring hardware for brand promotions, event gifts, retail accessories and everyday use."
  },
  "fish-shape-keychain-bottle-opener": {
    title: "Fish Shape Keychain Bottle Opener",
    image: "assets/images/type-openers-fish-keychain.jpg",
    alt: "Fish shape keychain bottle opener",
    categoryLabel: "Bottle Openers",
    categoryHref: "/products/custom-bottle-openers",
    material: "Zinc alloy",
    process: "Die casting and plating",
    sku: "UP-OPEN-009",
    usage: "Resorts, events, retail gifts",
    categories: "Bottle Openers, Shaped Openers",
    quoteProduct: "Bottle Openers",
    lead: "This fish shape keychain bottle opener uses a smooth plated silhouette with key ring hardware. It is useful for resorts, fishing events, coastal shops, promotional gifts and themed retail programs."
  },
  "guitar-metal-bottle-opener": {
    title: "Guitar Metal Bottle Opener",
    image: "assets/images/type-openers-guitar.jpg",
    alt: "Guitar metal bottle opener",
    categoryLabel: "Bottle Openers",
    categoryHref: "/products/custom-bottle-openers",
    material: "Zinc alloy",
    process: "Die casting and printing",
    sku: "UP-OPEN-008",
    usage: "Music events, bars, retail gifts",
    categories: "Bottle Openers, Shaped Openers",
    quoteProduct: "Bottle Openers",
    lead: "This guitar bottle opener turns music-themed artwork into a functional metal gift. It is suitable for concerts, bars, festivals, band merchandise and custom retail collections."
  },
  "red-logo-keychain-bottle-opener": {
    title: "Red Logo Keychain Bottle Opener",
    image: "assets/images/type-openers-red-keychain.jpg",
    alt: "Red logo keychain bottle opener",
    categoryLabel: "Bottle Openers",
    categoryHref: "/products/custom-bottle-openers",
    material: "Zinc alloy",
    process: "Die casting and enamel filling",
    sku: "UP-OPEN-007",
    usage: "Sports gifts, events, promotions",
    categories: "Bottle Openers, Keychain Openers",
    quoteProduct: "Bottle Openers",
    lead: "This red logo keychain bottle opener features a bright enamel body, raised logo detail and practical opener cutout for sports gifts, event merchandise, brand promotions and retail giveaways."
  },
  "cap-lifter-keychain-bottle-opener": {
    title: "Cap Lifter Keychain Bottle Opener",
    image: "assets/images/type-openers-cap-lifter-keychain.jpg",
    alt: "Cap lifter keychain bottle opener",
    categoryLabel: "Bottle Openers",
    categoryHref: "/products/custom-bottle-openers",
    material: "Zinc alloy",
    process: "Die casting and polishing",
    sku: "UP-OPEN-006",
    usage: "Bars, breweries, promotional gifts",
    categories: "Bottle Openers, Keychain Openers",
    quoteProduct: "Bottle Openers",
    lead: "This cap lifter keychain opener has a curved metal lifting edge and compact ring attachment for bars, breweries, outdoor events, promotional programs and practical giveaway sets."
  },
  "ring-bottle-opener": {
    title: "Ring Bottle Opener",
    image: "assets/images/type-openers-ring.jpg",
    alt: "Ring bottle opener set",
    categoryLabel: "Bottle Openers",
    categoryHref: "/products/custom-bottle-openers",
    material: "Stainless steel or zinc alloy",
    process: "Casting, plating and polishing",
    sku: "UP-OPEN-005",
    usage: "Bars, parties, event gifts",
    categories: "Bottle Openers, Ring Openers",
    quoteProduct: "Bottle Openers",
    lead: "This ring bottle opener is a wearable opener style available in multiple finishes. It works well for bars, parties, brewery merchandise, event gifts and fun promotional programs."
  },
  "colorful-aluminum-keychain-bottle-opener": {
    title: "Colorful Aluminum Keychain Bottle Opener",
    image: "assets/images/type-openers-colorful-aluminum-keychain.jpg",
    alt: "Colorful aluminum keychain bottle opener set",
    categoryLabel: "Bottle Openers",
    categoryHref: "/products/custom-bottle-openers",
    material: "Aluminum alloy",
    process: "Stamping and anodizing",
    sku: "UP-OPEN-004",
    usage: "Promotions, giveaways, outdoor events",
    categories: "Bottle Openers, Aluminum Openers",
    quoteProduct: "Bottle Openers",
    lead: "This colorful aluminum keychain bottle opener is lightweight, practical and available in multiple anodized colors for promotional giveaways, outdoor events and retail programs."
  },
  "souvenir-shape-bottle-opener": {
    title: "Souvenir Shape Bottle Opener",
    image: "assets/images/type-openers-souvenir-shape.jpg",
    alt: "Souvenir shape bottle opener set",
    categoryLabel: "Bottle Openers",
    categoryHref: "/products/custom-bottle-openers",
    material: "Zinc alloy",
    process: "Die casting, antique plating and enamel filling",
    sku: "UP-OPEN-003",
    usage: "Tourism souvenirs, city gifts, retail",
    categories: "Bottle Openers, Souvenir Openers",
    quoteProduct: "Bottle Openers",
    lead: "This souvenir shape bottle opener uses custom silhouettes, antique finishes and enamel details for tourism souvenirs, city gifts, museum shops, destination merchandise and retail collections."
  },
  "blue-carbon-fiber-metal-cufflinks": {
    title: "Blue Carbon Fiber Metal Cufflinks",
    image: "assets/images/type-cufflinks-metal.jpg",
    alt: "Blue carbon fiber metal cufflinks",
    categoryLabel: "Cufflinks & Tie Clips",
    categoryHref: "/products/custom-cufflinks-tie-clips",
    material: "Stainless steel",
    process: "Polishing and inlay",
    sku: "UP-CUFF-001",
    usage: "Corporate gifts, formal wear, retail",
    categories: "Cufflinks, Metal Cufflinks",
    quoteProduct: "Cufflinks & Tie Clips",
    lead: "These blue carbon fiber cufflinks combine polished metal with a refined inlay surface. They are suitable for corporate gifts, formal collections, executive sets and retail accessories."
  },
  "color-plated-metal-tie-clips": {
    title: "Color Plated Metal Tie Clips",
    image: "assets/images/type-cufflinks-enamel.jpg",
    alt: "Color plated metal tie clips",
    categoryLabel: "Cufflinks & Tie Clips",
    categoryHref: "/products/custom-cufflinks-tie-clips",
    material: "Stainless steel",
    process: "Stamping and plating",
    sku: "UP-CUFF-002",
    usage: "Corporate gifts, uniforms, retail",
    categories: "Tie Clips, Color Plated Clips",
    quoteProduct: "Cufflinks & Tie Clips",
    lead: "These plated metal tie clips use clean shapes and color finishes for a professional accessory. They fit corporate gifts, uniforms, event kits and retail menswear collections."
  },
  "black-skull-logo-cufflinks": {
    title: "Black Skull Logo Cufflinks",
    image: "assets/images/type-tie-clips-logo.jpg",
    alt: "Black skull logo cufflinks",
    categoryLabel: "Cufflinks & Tie Clips",
    categoryHref: "/products/custom-cufflinks-tie-clips",
    material: "Stainless steel",
    process: "Polishing and plating",
    sku: "UP-CUFF-003",
    usage: "Formal gifts, themed merch, retail",
    categories: "Cufflinks, Logo Cufflinks",
    quoteProduct: "Cufflinks & Tie Clips",
    lead: "These black skull logo cufflinks provide a sharp themed accessory with a polished finish. They are useful for formal gifts, club merchandise, themed events and boutique retail."
  },
  "ornate-building-enamel-fridge-magnet": {
    title: "Ornate Building Enamel Fridge Magnet",
    image: "assets/images/type-magnets-enamel.png",
    alt: "Ornate building enamel fridge magnet",
    categoryLabel: "Fridge Magnets",
    categoryHref: "/products/custom-fridge-magnets",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-MAG-001",
    usage: "Tourism, city gifts, retail souvenirs",
    categories: "Fridge Magnets, Enamel Magnets",
    quoteProduct: "Fridge Magnets",
    lead: "This ornate building fridge magnet uses enamel color and raised metal detail to show landmark artwork. It is ideal for tourist souvenirs, museum shops, city gifts and retail programs."
  },
  "ferris-wheel-3d-metal-fridge-magnet": {
    title: "Ferris Wheel 3D Metal Fridge Magnet",
    image: "assets/images/type-magnets-3d.png",
    alt: "Ferris wheel 3D metal fridge magnet",
    categoryLabel: "Fridge Magnets",
    categoryHref: "/products/custom-fridge-magnets",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-MAG-002",
    usage: "Attractions, events, souvenir retail",
    categories: "Fridge Magnets, 3D Metal Magnets",
    quoteProduct: "Fridge Magnets",
    lead: "This 3D ferris wheel magnet highlights attraction artwork with raised metal structure. It fits amusement parks, travel destinations, events and souvenir retail collections."
  },
  "cartoon-character-soft-pvc-fridge-magnet": {
    title: "Cartoon Character Soft Fridge Magnet",
    image: "assets/images/type-magnets-soft-pvc.png",
    alt: "Cartoon character soft fridge magnet",
    categoryLabel: "Fridge Magnets",
    categoryHref: "/products/custom-fridge-magnets",
    material: "Soft PVC",
    process: "PVC molding",
    sku: "UP-MAG-003",
    usage: "Kids gifts, retail, promotions",
    categories: "Fridge Magnets, Soft Magnets",
    quoteProduct: "Fridge Magnets",
    lead: "This cartoon soft magnet uses flexible material and bright character artwork. It is suitable for children's gifts, promotional campaigns, retail souvenirs and mascot merchandise."
  },
  "city-landmark-souvenir-fridge-magnet": {
    title: "City Landmark Souvenir Fridge Magnet",
    image: "assets/images/type-magnets-souvenir.png",
    alt: "City landmark souvenir fridge magnet",
    categoryLabel: "Fridge Magnets",
    categoryHref: "/products/custom-fridge-magnets",
    material: "Zinc alloy",
    process: "Die casting",
    sku: "UP-MAG-004",
    usage: "City gifts, tourism, retail souvenirs",
    categories: "Fridge Magnets, Souvenir Magnets",
    quoteProduct: "Fridge Magnets",
    lead: "This city landmark magnet presents local architecture and destination details in a compact gift format. It is well suited for tourist shops, city promotions, museums and travel retail."
  }
};

const trimMetaDescription = (value) => {
  if (value.length <= 158) return value;
  return `${value.slice(0, 155).replace(/\s+\S*$/, "")}...`;
};

export const getProductItemMetaDescription = (item) => {
  const category = (item.quoteProduct || item.categoryLabel || "metal gifts").toLowerCase();
  const usage = item.usage ? item.usage.toLowerCase() : "brand and event orders";
  const description = `${item.title} custom ${category} for ${usage}. OEM/ODM support, artwork review and export quotation from Unique Pin.`;

  return trimMetaDescription(description);
};

export async function generateMetadata({ searchParams }) {
  const params = await searchParams;
  const requestedItem = params?.item || Object.keys(productItems)[0];
  const item = productItems[requestedItem] || productItems[Object.keys(productItems)[0]];

  return {
    title: `${item.title} | Product Detail | Unique Pin`,
    description: getProductItemMetaDescription(item)
  };
}

const html = String.raw`
  <script type="application/json" data-product-item-data>${JSON.stringify(productItems)}</script>
  ${siteHeaderHtml({ active: "products" })}

  <main class="single-product-page" data-product-item-page>
    <section class="single-product-hero">
      <div class="container single-product-layout">
        <div class="single-product-gallery" aria-label="Product gallery">
          <nav class="single-product-breadcrumbs" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span class="breadcrumb-separator" aria-hidden="true">&gt;</span>
            <a href="/products">Products</a>
            <span class="breadcrumb-separator" aria-hidden="true">&gt;</span>
            <a href="/products/custom-enamel-pins" data-product-item-category-link><span data-product-item-category>Lapel Pins</span></a>
            <span class="breadcrumb-separator" aria-hidden="true">&gt;</span>
            <span data-product-item-title>Green Character Soft Enamel Pin Set</span>
          </nav>
          <div class="single-product-main">
            <img class="single-product-main-image" data-product-item-image src="assets/images/type-pins-soft-enamel.jpg" alt="Green character soft enamel pin set">
          </div>
          <div class="single-product-example-thumb" aria-hidden="true">
            <img data-product-item-image src="assets/images/type-pins-soft-enamel.jpg" alt="">
          </div>
        </div>

        <div class="single-product-summary">
          <h1 data-product-item-title>Green Character Soft Enamel Pin Set</h1>
          <p class="single-product-lead" data-product-item-lead>This custom soft enamel pin set features raised metal outlines and colorful recessed enamel. It is suitable for brand merchandise, club rewards, event giveaways, fan collectibles and retail accessories.</p>
          <div class="single-product-specs" aria-label="Product specifications">
            <div><strong>Material</strong><span data-product-spec="material">Zinc alloy</span></div>
            <div><strong>Product Process</strong><span data-product-spec="process">Die casting</span></div>
            <div><strong>SKU</strong><span data-product-spec="sku">UP-PIN-001</span></div>
            <div><strong>Usage</strong><span data-product-spec="usage">Brand events, clubs, retail gifts</span></div>
            <div><strong>Categories</strong><span data-product-spec="categories">Lapel Pins, Soft Enamel Pins</span></div>
          </div>
          <a class="single-product-inquiry" href="/contact" data-product-inquiry-trigger data-product-inquiry-product="Lapel Pins">Request a Similar Custom Design</a>
          <div class="single-product-quote-benefits" aria-label="Quote benefits">
            <div><span class="quote-benefit-icon quote-benefit-icon-moq" aria-hidden="true"></span><span>No MOQ</span></div>
            <div><span class="quote-benefit-icon quote-benefit-icon-design" aria-hidden="true"></span><span>FREE DESIGN</span></div>
            <div><span class="quote-benefit-icon quote-benefit-icon-factory" aria-hidden="true"></span><span>FACTORY DIRECT</span></div>
            <div><span class="quote-benefit-icon quote-benefit-icon-oem" aria-hidden="true"></span><span>OEM/ODM</span></div>
          </div>
        </div>
      </div>
    </section>

    <section class="design-respect-section" aria-label="Customer design protection">
      <div class="container">
        <div class="design-respect-card">
          <div class="design-respect-visual" aria-hidden="true"><img class="design-respect-shield-image" src="assets/images/design-protection-shield.webp" alt=""></div>
          <div class="design-respect-copy">
            <h2>Your Design, Your Ownership</h2>
            <p>Every custom metal product we create is made exclusively for the customer who provides the concept, artwork, or specifications.</p>
            <p>Our project gallery is intended only to demonstrate our manufacturing experience and craftsmanship. Customer designs, logos, and trademarks remain confidential and will not be copied or reused without permission.</p>
            <p>Need a similar style? Our designers can develop a fresh and original design tailored to your brand identity and project goals.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="single-product-description">
      <div class="container">
        <div class="custom-solutions-layout">
          <table class="custom-solutions-table">
            <thead><tr><th colspan="3">CUSTOM SOLUTIONS</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>Material</td><td>Zinc alloy</td></tr>
              <tr><td>2</td><td>Process</td><td>Soft enamel, hard enamel, printing or plating selected by artwork.</td></tr>
              <tr><td>3</td><td>Size</td><td>Custom size based on artwork and use case.</td></tr>
              <tr><td>4</td><td>Thickness</td><td>Project-based thickness confirmed with the digital proof.</td></tr>
              <tr><td>5</td><td>Accessories</td><td>Attachment options selected for the product type.</td></tr>
              <tr><td>6</td><td>Packaging</td><td>Standard or retail packaging quoted by project.</td></tr>
              <tr><td>7</td><td>Lead Time</td><td>Confirmed after artwork review and proof approval.</td></tr>
            </tbody>
          </table>
          <div class="custom-solutions-visual"><img data-product-item-image src="assets/images/type-pins-soft-enamel.jpg" alt="Custom product sample"></div>
        </div>
      </div>
    </section>

    <section class="single-product-faq-section" aria-label="Frequently asked questions">
      <div class="container">
        <div class="single-product-faq-heading"><span class="single-product-faq-icon" aria-hidden="true"></span><h2>Frequently Asked Questions</h2></div>
        <div class="single-product-faq-list">
          <details><summary><span class="faq-plus" aria-hidden="true"></span><span>What is your MOQ?</span></summary><p>No MOQ. Flexible quantities are welcome, and mold fees and unit prices are calculated by project.</p></details>
          <details><summary><span class="faq-plus" aria-hidden="true"></span><span>Do you offer free art proofs?</span></summary><p>Yes. Every order includes a free digital art proof before production begins. You can request revisions until the design matches your vision. Production does not start until you approve the proof.</p></details>
          <details><summary><span class="faq-plus" aria-hidden="true"></span><span>What file formats do you accept?</span></summary><p>Vector files such as AI, PDF, EPS, CDR and SVG are best. High-resolution PNG, JPG and PSD files can also be used when vector artwork is not available.</p></details>
          <details><summary><span class="faq-plus" aria-hidden="true"></span><span>How to choose the suitable material?</span></summary><p>For designs that need a strong 3D effect, we usually recommend zinc alloy because it is easier to cast detailed raised shapes and dimensional surfaces. If your priority is reducing cost for a simple flat design, iron can be a more economical option.</p></details>
          <details><summary><span class="faq-plus" aria-hidden="true"></span><span>Can urgent orders be expedited?</span></summary><p>We can review the schedule and prioritize urgent projects when production capacity allows. Share your event date as early as possible.</p></details>
        </div>
      </div>
    </section>

    <section class="single-product-related-section" aria-label="You may also like">
      <div class="container">
        <div class="single-product-related-heading">
          <h2>YOU MAY ALSO LIKE</h2>
          <p>Choose a product and start customizing!</p>
        </div>
        <div class="single-product-related-grid" data-product-related-content></div>
      </div>
    </section>

    <div class="product-inquiry-modal" data-product-inquiry-modal hidden>
      <div class="product-inquiry-dialog" role="dialog" aria-modal="true" aria-labelledby="product-item-quote-title">
        <button class="product-inquiry-close" type="button" aria-label="Close inquiry form" data-product-inquiry-close>&times;</button>
        <div class="contact-card product-inquiry-card">
          <h2 id="product-item-quote-title" class="contact-form-title">Request a Similar Custom Design</h2>
          <p class="product-inquiry-note">Use this sample as a style reference. Share your own artwork, logo or deadline, and our team will prepare an original custom quote.</p>
          <form class="form" data-inquiry-form>
            <div class="form-row"><input type="text" name="name" placeholder="Name" required><input type="email" name="email" placeholder="Email" required></div>
            <div class="form-row"><input type="text" name="country" placeholder="Country / Region" required><input type="text" name="whatsapp" placeholder="Phone Number"></div>
            <div class="form-row">
              <select name="product" required><option value="">Product Type</option><option>Lapel Pins</option><option>Medals</option><option>Challenge Coins</option><option>Keychains</option><option>Belt Buckles</option><option>Golf Accessories</option><option>Fridge Magnets</option><option>Bottle Openers</option><option>Cufflinks &amp; Tie Clips</option><option>Other</option></select>
              <input type="text" name="quantity" placeholder="Quantity">
            </div>
            <div class="form-field form-field-full"><label for="product-item-quote-details">What can we help you with?</label><textarea id="product-item-quote-details" name="details" placeholder="Notes, Comments, etc."></textarea></div>
            <div class="form-field form-field-full"><label for="product-item-quote-artwork">Upload files</label><label class="upload-box" for="product-item-quote-artwork"><input id="product-item-quote-artwork" type="file" name="artwork" accept=".jpg,.jpeg,.png,.pdf,.ai,.eps,.psd,.cdr" aria-label="Upload artwork"><span class="upload-icon" aria-hidden="true">&#8593;</span><span>Drag and drop a file here or click to choose</span></label></div>
            <button class="btn btn-primary" type="submit">Submit Inquiry</button>
            <p class="form-privacy-note">We use the information you submit to respond to your inquiry. See our <a href="/privacy-policy">Privacy Policy</a>.</p>
            <p data-form-notice aria-live="polite" style="color: var(--navy); font-weight: 800;"></p>
          </form>
        </div>
      </div>
    </div>
  </main>
  ${footerHtml}`;

const escapeHtml = (value = "") => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;");

const DEFAULT_CUSTOM_SOLUTION_PROFILE = {
  size: "Custom size based on artwork, product use and budget.",
  thickness: "Project-based thickness confirmed with the digital proof.",
  accessories: "Product-specific hardware, attachments or display options available.",
  packaging: "OPP bag as standard; backing card, velvet box, gift box or retail packaging available.",
  leadTime: "Artwork proof, mold fee, unit price and production schedule are calculated by project."
};

const CUSTOM_SOLUTION_PROFILES = {
  "Lapel Pins": {
    size: "Custom shape and size, commonly 0.75-2.0 inches for pin badges.",
    thickness: "Commonly 1.2-2.0 mm, adjusted for 3D relief, printing or enamel areas.",
    accessories: "Butterfly clutch, rubber clutch, deluxe clutch, safety pin, magnet or backing card.",
    packaging: "OPP bag as standard; backing card, carded bag, velvet pouch or retail box available.",
    leadTime: "Digital proof before production; mold fees and unit prices are calculated by project."
  },
  "Medals": {
    size: "Custom medal diameter or shape, commonly 1.75-3.5 inches.",
    thickness: "Commonly 2.5-5.0 mm depending on relief depth, weight and event budget.",
    accessories: "Ribbon, neck drape, jump ring, medal loop, presentation box or display case.",
    packaging: "Individual OPP bag, velvet box, medal case, gift box or event-ready packing.",
    leadTime: "Schedule is confirmed after artwork, ribbon and packaging details are approved."
  },
  "Challenge Coins": {
    size: "Custom round or shaped coin, commonly 1.5-2.5 inches.",
    thickness: "Commonly 3.0-5.0 mm for single-sided or double-sided coin designs.",
    accessories: "Coin capsule, velvet pouch, acrylic case, coin stand or presentation box.",
    packaging: "Individual OPP bag, capsule, velvet box, acrylic case or retail gift box.",
    leadTime: "Artwork proof, mold fee, unit price and production time are quoted by project."
  },
  "Keychains": {
    size: "Custom charm size, commonly 1.0-3.0 inches before ring or chain.",
    thickness: "Commonly 2.0-4.0 mm depending on metal weight, shape and finish.",
    accessories: "Split ring, chain, swivel hook, lobster clasp, bottle opener or custom fitting.",
    packaging: "OPP bag as standard; backing card, hang card, velvet pouch or gift box available.",
    leadTime: "Lead time is confirmed after artwork, hardware and packaging details are approved."
  },
  "Belt Buckles": {
    size: "Custom buckle size, commonly 2.5-4.5 inches by belt width.",
    thickness: "Commonly 3.5-5.5 mm, adjusted for relief, enamel and back hardware.",
    accessories: "Buckle loop, prong, belt-fit hardware and finish options.",
    packaging: "Individual protective bag, velvet pouch, gift box or retail packaging.",
    leadTime: "Mold fee, unit price and production schedule are calculated by buckle design."
  },
  "Golf Accessories": {
    size: "Ball marker, hat clip, divot tool or gift set size based on intended use.",
    thickness: "Commonly 1.2-3.0 mm for markers and clips; adjusted for tool structure.",
    accessories: "Magnetic hat clip, divot tool, ball marker tray, backing card or gift set box.",
    packaging: "OPP bag, backing card, clamshell, velvet pouch or golf gift box available.",
    leadTime: "Production timing is confirmed after artwork, accessory and set details are approved."
  },
  "Bottle Openers": {
    size: "Custom opener size, commonly 2.5-4.5 inches depending on function and shape.",
    thickness: "Commonly 2.5-5.0 mm for durable opening strength and comfortable handling.",
    accessories: "Key ring, chain, magnet, opener insert or custom hanging hardware.",
    packaging: "OPP bag, backing card, gift box or retail-ready packaging available.",
    leadTime: "Lead time is quoted after artwork, opener structure and packaging are confirmed."
  },
  "Cufflinks & Tie Clips": {
    size: "Cufflink face and tie clip length are customized for formal accessory use.",
    thickness: "Profile thickness is adjusted for comfort, plating and accessory hardware.",
    accessories: "Cufflink backs, tie clip springs, gift card, velvet pouch or presentation box.",
    packaging: "Individual bag, velvet pouch, cufflink box or premium gift box available.",
    leadTime: "Schedule is confirmed after artwork, hardware and packaging details are approved."
  },
  "Fridge Magnets": {
    size: "Custom magnet size, commonly 1.5-4.0 inches for souvenir or retail use.",
    thickness: "Commonly 2.0-5.0 mm depending on metal, PVC or magnet structure.",
    accessories: "Rubber magnet, ferrite magnet, soft magnetic sheet, backing card or display card.",
    packaging: "OPP bag, backing card, retail card or gift packaging available.",
    leadTime: "Lead time is confirmed after artwork, magnet type and packaging are approved."
  }
};

const getProductSearchText = (item) => [
  item.title,
  item.process,
  item.categories,
  item.material,
  item.lead
].filter(Boolean).join(" ").toLowerCase();

const getCustomSolutionProfile = (item) => {
  const productType = item.quoteProduct || item.categoryLabel;
  const profile = {
    ...DEFAULT_CUSTOM_SOLUTION_PROFILE,
    ...(CUSTOM_SOLUTION_PROFILES[productType] || {})
  };
  const text = getProductSearchText(item);

  if (text.includes("uv printed") || text.includes("uv printing") || text.includes("full color printed")) {
    return {
      ...profile,
      material: `${item.material} base with a smooth printable face.`,
      process: "Full color UV printing, clear epoxy coating and plating as required.",
      thickness: "Commonly 1.0-2.0 mm, adjusted for print area, edge shape and epoxy coating.",
      accessories: "Butterfly clutch, rubber clutch, magnet, safety pin or backing card."
    };
  }

  if (text.includes("soft pvc") || text.includes("pvc molding")) {
    return {
      ...profile,
      material: "Soft PVC or flexible rubber material matched to the design.",
      process: "PVC molding, color filling and magnet or accessory assembly.",
      thickness: "Custom molded thickness based on character relief and flexibility.",
      accessories: "Magnet backing, key ring, hanging loop, backing card or retail package."
    };
  }

  if (text.includes("printed") || text.includes("printing")) {
    return {
      ...profile,
      process: `${item.process}. Printing details are matched to your submitted artwork.`
    };
  }

  return profile;
};

const getCustomSolutionRows = (item) => {
  const profile = getCustomSolutionProfile(item);

  return [
    ["Material", profile.material || `${item.material} selected for the product structure and finish.`],
    ["Process", profile.process || `${item.process} matched to the approved artwork.`],
    ["Size", profile.size],
    ["Thickness", profile.thickness],
    ["Accessories", profile.accessories],
    ["Packaging", profile.packaging],
    ["Lead Time", profile.leadTime]
  ];
};

const buildCustomSolutionRowsHtml = (item) => getCustomSolutionRows(item)
  .map(([label, value], index) => `              <tr><td>${index + 1}</td><td>${escapeHtml(label)}</td><td>${escapeHtml(value)}</td></tr>`)
  .join("\n");

const buildRelatedProductsHtml = (currentSlug, item) => {
  const relatedProducts = Object.entries(productItems)
    .filter(([slug, product]) => slug !== currentSlug && product.categoryLabel === item.categoryLabel)
    .sort(compareProductEntriesBySkuDesc)
    .slice(0, 4);

  return relatedProducts.map(([slug, product]) => {
    const description = product.lead.split(".")[0] + ".";
    const productPath = getProductPath(slug, product);
    const quoteProduct = product.quoteProduct || product.categoryLabel;
    const quotePath = `/contact?product=${encodeURIComponent(quoteProduct)}&item=${encodeURIComponent(product.title)}`;
    return `
          <article class="single-product-related-card">
            <a class="single-product-related-media" href="${escapeHtml(productPath)}"><img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.alt || product.title)}"></a>
            <h3><a href="${escapeHtml(productPath)}">${escapeHtml(product.title)}</a></h3>
            <p>${escapeHtml(description)}</p>
            <div class="single-product-related-actions">
              <a href="${escapeHtml(productPath)}">View Details</a>
              <a href="${escapeHtml(quotePath)}" data-product-inquiry-trigger data-product-inquiry-product="${escapeHtml(quoteProduct)}" data-product-inquiry-title="${escapeHtml(product.title)}">CUSTOMIZE NOW</a>
            </div>
          </article>`;
  }).join("");
};

export const renderProductItemHtml = (item, currentSlug) => {
  const safe = Object.fromEntries(
    Object.entries(item).map(([key, value]) => [key, escapeHtml(value)])
  );
  const quoteProduct = item.quoteProduct || item.categoryLabel;
  const quotePath = escapeHtml(`/contact?product=${encodeURIComponent(quoteProduct)}&item=${encodeURIComponent(item.title)}`);

  return html
    .replace(/^\s*<script type="application\/json" data-product-item-data>[\s\S]*?<\/script>\s*/, "")
    .replace(/<a href="[^"]+" data-product-item-category-link>/, `<a href="${safe.categoryHref}" data-product-item-category-link>`)
    .replace(/<span data-product-item-category>[^<]*<\/span>/g, `<span data-product-item-category>${safe.categoryLabel}</span>`)
    .replace(/<span data-product-item-title>[^<]*<\/span>/g, `<span data-product-item-title>${safe.title}</span>`)
    .replace(/<h1 data-product-item-title>[^<]*<\/h1>/g, `<h1 data-product-item-title>${safe.title}</h1>`)
    .replace(/<p class="single-product-lead" data-product-item-lead>[\s\S]*?<\/p>/, `<p class="single-product-lead" data-product-item-lead>${safe.lead}</p>`)
    .replace(/<span data-product-spec="material">[^<]*<\/span>/g, `<span data-product-spec="material">${safe.material}</span>`)
    .replace(/<span data-product-spec="process">[^<]*<\/span>/g, `<span data-product-spec="process">${safe.process}</span>`)
    .replace(/<span data-product-spec="sku">[^<]*<\/span>/g, `<span data-product-spec="sku">${safe.sku}</span>`)
    .replace(/<span data-product-spec="usage">[^<]*<\/span>/g, `<span data-product-spec="usage">${safe.usage}</span>`)
    .replace(/<span data-product-spec="categories">[^<]*<\/span>/g, `<span data-product-spec="categories">${safe.categories}</span>`)
    .replace(/<img([^>]*data-product-item-image[^>]*)src="[^"]*"([^>]*)alt="[^"]*"/g, `<img$1src="${safe.image}"$2alt="${safe.alt || safe.title}"`)
    .replace(/<a class="single-product-inquiry" href="[^"]*"[^>]*>/, `<a class="single-product-inquiry" href="${quotePath}" data-product-inquiry-trigger data-product-inquiry-product="${escapeHtml(quoteProduct)}" data-product-inquiry-title="${safe.title}">`)
    .replace(/<tbody>\s*<tr><td>1<\/td><td>Material<\/td><td>[\s\S]*?<\/tbody>/, `<tbody>\n${buildCustomSolutionRowsHtml(item)}\n            </tbody>`)
    .replace(/<div class="single-product-related-grid" data-product-related-content><\/div>/, `<div class="single-product-related-grid" data-product-related-content>${buildRelatedProductsHtml(currentSlug, item)}
        </div>`)
    .replace(/data-product-inquiry-product="[^"]*"/g, `data-product-inquiry-product="${escapeHtml(quoteProduct)}"`);
};

export default async function Page({ searchParams }) {
  const params = await searchParams;
  const requestedItem = params?.item || Object.keys(productItems)[0];
  const currentSlug = productItems[requestedItem] ? requestedItem : Object.keys(productItems)[0];
  const item = productItems[currentSlug];

  return <StaticPage html={renderProductItemHtml(item, currentSlug)} />;
}
