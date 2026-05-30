export type GearSection = {
  title: string;
  items: string[];
};

export type GearRecommendation = {
  category: string;
  recommendation: string;
  notes: string;
  products: {
    label: string;
    href: string;
    image: string;
  }[];
};

export const gearSections: GearSection[] = [
  {
    title: "Til første prøvetræning",
    items: [
      "Medbring vandflaske.",
      "Komfortabelt sportstøj.",
      "Indendørs træningssko.",
    ],
  },
  {
    title: "Begynderudstyr",
    items: [
      "Klubben stiller beskyttelsesudstyr til rådighed for begyndere.",
      "Hjælper med at vælge passende udstyr når man skal bestille sit eget.",
    ],
  },
  {
    title: "Fuld sparring",
    items: [
      "Trænere har altid ret til at nægte en lov til at bruge udstyr som træneren mener er utilstrækkelig.",
      "Forskellige våben kræver forskellige niveau'er af sikkerhed, og husk at dit udstyr skal passe til det våben du kæmper imod ikke det våben du bruger",
    ],
  },
];

export const gearRecommendations: GearRecommendation[] = [
  {
    category: "Langsværd",
    recommendation: "Regenyei Medium Flex eller Sigi Feder",
    notes:
      "Regenyei er et godt prisvenligt valg med mange års erfaring i HEMA-miljøet. Sigi er dyrere, men særligt anbefalet for sikkerhed og fleks i stød.",
    products: [
      {
        label: "Regenyei Standard Feder",
        href: "https://regenyei.com/product/standard-feder/#blade",
        image: "/images/gear/Regenyei_standard.jpg",
      },
      {
        label: "Sigi Feder",
        href: "https://sigiforge.com/products/sigi-feder/",
        image: "/images/gear/sword-placeholder.svg",
      },
    ],
  },
  {
    category: "Handsker",
    recommendation: "Clamshell til langsværd, 5-finger til lettere våben",
    notes:
      "Til fuld langsværdssparring anbefaler vi kraftige clamshell-handsker. 5-finger handsker giver mere bevægelighed og kan være gode til mindre våben som sabel og rapier.",
    products: [
      {
        label: "Sparring Glove Milanese",
        href: "https://sparringglove.com/portfolio/milaneski-hourglass-cuffs/?v=0ecbf9426bcf",
        image: "/images/gear/gloves-placeholder.svg",
      },
      {
        label: "HF Black Knight",
        href: "https://hf-armory.com/en/shop/protectors/hand-protection/fencing-gloves-black-knight/",
        image: "/images/gear/gloves-placeholder.svg",
      },
      {
        label: "Gabriel 2.0 5-finger",
        href: "https://socalswords.com/products/gabriel-2-0-5-finger-hema-glove",
        image: "/images/gear/gloves-placeholder.svg",
      },
    ],
  },
  {
    category: "Jakke",
    recommendation: "Spes AP Plus 350N eller Spes AP 800N",
    notes:
      "350N er et godt standardvalg til både lav og høj intensitet, men giver mindre polstring. 800N giver mere beskyttelse, men er tungere og varmere at træne i.",
    products: [
      {
        label: "Spes AP Plus 350N",
        href: "https://histfenc.eu/en/men/200-11501-kurtka-do-hema-ap-plus-350n-5905613471719.html",
        image: "/images/gear/jacket-placeholder.svg",
      },
      {
        label: "Spes AP 800N",
        href: "https://histfenc.eu/en/men/45-7921-ap-hema-jacket-800n-5903745159918.html",
        image: "/images/gear/jacket-placeholder.svg",
      },
    ],
  },
  {
    category: "Maske",
    recommendation: "PBT Short, Allstar Coach Inox eller PBT Long",
    notes:
      "PBT Short er vores go-to maske og fungerer godt med overlay. Allstar er kendt for komfort. PBT Long er god hvis du vil have ekstra dækning bagtil.",
    products: [
      {
        label: "PBT Short 1600N",
        href: "https://shop.pbtfencing.com/hema-fie-mask1600-n-full-black3341hema",
        image: "/images/gear/mask-placeholder.svg",
      },
      {
        label: "Allstar Coach Inox",
        href: "https://allstar.de/en/Coach-Inox-FIE-Mask-w.-Black-Bib/AMI-FM-S",
        image: "/images/gear/mask-placeholder.svg",
      },
      {
        label: "PBT Long 1600N",
        href: "https://shop.pbtfencing.com/hema-warrior-reinforced-mask-1600n-full-black3342hema",
        image: "/images/gear/mask-placeholder.svg",
      },
    ],
  },
  {
    category: "Hals og bryst",
    recommendation: "PBT eller HF brystbeskytter og gorget",
    notes:
      "Til stålsparring skal du bruge halsbeskytter. Brystbeskytter anbefales som plade under jakken; PBT er brugt meget i klubben, mens HF giver mere dækning.",
    products: [
      {
        label: "PBT brystbeskytter",
        href: "https://shop.pbtfencing.com/hema-chest-protector-for-men4180-h",
        image: "/images/gear/chest-placeholder.svg",
      },
      {
        label: "HF brystbeskytter",
        href: "https://hf-armory.com/en/shop/protectors/chest-protection/chest-protector-black-knight/?alg_currency=EUR",
        image: "/images/gear/chest-placeholder.svg",
      },
      {
        label: "PBT gorget",
        href: "https://shop.pbtfencing.com/hema-throat-protector-junior3350",
        image: "/images/gear/chest-placeholder.svg",
      },
    ],
  },
  {
    category: "Hovedbeskyttelse",
    recommendation: "Mask overlay eller separat baghovedbeskytter",
    notes:
      "Bagsiden af hovedet skal beskyttes til fuld sparring. Det kan enten være inkluderet i et mask overlay eller være en separat baghovedbeskytter.",
    products: [
      {
        label: "Spes Trinity mask overlay",
        href: "https://histfenc.eu/en/men/105-8185-trinity-mask-overlay-350n-5904868658524.html",
        image: "/images/gear/overlay-placeholder.svg",
      },
      {
        label: "Red Dragon mask overlay",
        href: "https://www.thehemashop.com/red-dragon-full-mask-overlay",
        image: "/images/gear/overlay-placeholder.svg",
      },
      {
        label: "Spes Vectir occipital overlay",
        href: "https://histfenc.eu/en/men/102-8219-vectir-occipital-overlay-ng-800n-5906374950314.html",
        image: "/images/gear/overlay-placeholder.svg",
      },
    ],
  },
  {
    category: "Arme og albuer",
    recommendation: "Spes Geko eller HF Black Knight",
    notes:
      "Underarme og albuer er udsatte i sparring. Vi anbefaler solide beskyttere, der sidder stabilt og dækker uden at begrænse bevægelsen for meget.",
    products: [
      {
        label: "Spes Geko",
        href: "https://histfenc.eu/en/men/43-geko-forearm-and-elbow-overlays-5908433172460.html",
        image: "/images/gear/arms-placeholder.svg",
      },
      {
        label: "HF underarm",
        href: "https://hf-armory.com/en/shop/protectors/hand-protection/forearms-protection-black-knight-3/",
        image: "/images/gear/arms-placeholder.svg",
      },
      {
        label: "HF albue",
        href: "https://hf-armory.com/en/shop/protectors/hand-protection/ellbow-protection-black-knight/",
        image: "/images/gear/arms-placeholder.svg",
      },
    ],
  },
  {
    category: "Ben",
    recommendation: "Spes, HF eller Red Dragon knæ- og skinnebensbeskyttere",
    notes:
      "Til fuld sparring skal knæ og skinneben være beskyttet. Vælg en løsning der sidder fast under bevægelse og passer sammen med dine bukser.",
    products: [
      {
        label: "Spes knæ",
        href: "https://histfenc.eu/en/men/88-shell-knee-overlays-5901290007739.html",
        image: "/images/gear/legs-placeholder.svg",
      },
      {
        label: "Spes skinneben",
        href: "https://histfenc.eu/en/men/89-vectir-calf-overlays-5900808730893.html",
        image: "/images/gear/legs-placeholder.svg",
      },
      {
        label: "Red Dragon knæ og skinneben",
        href: "https://faitsdarmes.com/en/shin-guard/225-red-dragon-knee-and-shin-guard.html",
        image: "/images/gear/legs-placeholder.svg",
      },
    ],
  },
  {
    category: "Bukser og skridtbeskytter",
    recommendation: "Spes Locust 350N og simpel skridtbeskytter",
    notes:
      "Bukser til sparring bør minimum være 350N. Skridtbeskytter er obligatorisk for dem, der har brug for det, og kan fås relativt billigt.",
    products: [
      {
        label: "Spes Locust 350N",
        href: "https://histfenc.eu/en/men/803-26230-locust-hema-pants-plus-350n-5909670205157.html",
        image: "/images/gear/pants-placeholder.svg",
      },
      {
        label: "HF groin guard",
        href: "https://hf-armory.com/en/shop/protectors/chest-protection/groin-guard-with-plastic-cup/",
        image: "/images/gear/pants-placeholder.svg",
      },
      {
        label: "Red Dragon groin protector",
        href: "https://www.thehemashop.com/rd-groin-protector",
        image: "/images/gear/pants-placeholder.svg",
      },
    ],
  },
  {
    category: "Ekstra",
    recommendation: "Gode træningssko, lange sokker og evt. padded skirt",
    notes:
      "Komfortable indendørs- og udendørssko gør en stor forskel. Lange sokker hjælper under benbeskyttere, og en padded skirt kan give ekstra beskyttelse omkring hofterne.",
    products: [
      {
        label: "Spes padded skirt",
        href: "https://histfenc.eu/en/legs/351-hema-padded-skirt-vg-350n-5909274541149.html",
        image: "/images/gear/extras-placeholder.svg",
      },
    ],
  },
];
