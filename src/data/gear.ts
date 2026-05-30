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
        image: "/images/gear/sigi-forge-feder.jpg",
      },
    ],
  },
  {
    category: "Sabel",
    recommendation: "Regenyei Light, Sigi, Krieger",
    notes:
      "Regenyei er et godt prisvenligt valg med mange års erfaring i HEMA-miljøet. Sigi er dyrere, men særligt anbefalet for sikkerhed og fleks i stød. Krieger tilbyder også en meget velbalanceret sabel med god flex",
    products: [
      {
        label: "Light – Saber",
        href: "https://regenyei.com/product/standard-feder/#blade",
        image: "/images/gear/Regenyei_saber_light.jpg",
      },
      {
        label: "Sigi saber",
        href: "https://sigiforge.com/products/sigi-saber-big/",
        image: "/images/gear/sigi-saber-big-02.jpg",
      },
      {
        label: "Kriger S6 saber",
        href: "https://kriegerweapons.com/products/hema/s6-hema-sabre/",
        image: "/images/gear/Krieger_S6-1.png",
      },
    ],
  },
  {
    category: "Handsker Langsværd",
    recommendation: "Clamshell til langsværd, 5-finger til lettere våben",
    notes:
      "Til fuld langsværdssparring anbefaler vi kraftige clamshell-handsker. 5-finger handsker giver mere bevægelighed men mindre sikkerhed",
    products: [
      {
        label: "Sparring Glove Milanese",
        href: "https://sparringglove.com/product/37/milaneski",
        image: "/images/gear/2026_02_25_10_35_39_2_Hourglass_Cuff_Milaneski.jpg",
      },
      {
        label: "HF Black Knight",
        href: "https://hf-armory.com/en/shop/protectors/hand-protection/fencing-gloves-black-knight/",
        image: "/images/gear/blackknight_hf.jpg",
      },
      {
        label: "Gabriel 2.0 5-finger",
        href: "https://faitsdarmes.com/en/hard-shell-gloves/570-gabriel-20-shell-gloves.html",
        image: "/images/gear/gabriel-20-shell-gloves.jpg",
      },
      {
        label: "Michael Heavy Clamshell Gloves",
        href: "https://faitsdarmes.com/en/hard-shell-gloves/623-michael-shell-gloves-chfg.html",
        image: "/images/gear/michael-shell-gloves-chfg.jpg",
      },
    ],
  },
  {
    category: "Handsker Sabel",
    recommendation: "Mindre 5 fingerede handsker men stadig med enten hård plastic eller nok polstring til sabel",
    notes:
      "Til fuld sabel sparring anbefaler vi handsker som har en mindre profil end de store clamshells men som stadig har et godt niveau af beskyttelse",
    products: [
      {
        label: "HF Black Prince",
        href: "https://hf-armory.com/en/shop/protectors/hand-protection/hema-gloves-black-prince/",
        image: "public/images/gear/black-prince-gauntlets.jpg",
      },
      {
        label: "Gabriel 2.0 5-finger",
        href: "https://faitsdarmes.com/en/hard-shell-gloves/570-gabriel-20-shell-gloves.html",
        image: "/images/gear/gabriel-20-shell-gloves.jpg",
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
        image: "/images/gear/kurtka-do-hema-ap-plus-350n.jpg",
      },
      {
        label: "Spes AP 800N",
        href: "https://histfenc.eu/en/men/45-7921-ap-hema-jacket-800n-5903745159918.html",
        image: "public/images/gear/ap-hema-jacket-800n.jpg",
      },
    ],
  },
  {
    category: "Maske",
    recommendation: "FAITS D'ARMES, Allstar Coach eller HF Mask",
    notes:
      "Det er krav at ens maske er CE2 og 1600N for at kunne bruges til turneringer så tag spar ikke på din maske",
    products: [
      {
        label: "FAITS D'ARMES Fencing Mask FIE 1600N",
        href: "https://faitsdarmes.com/en/1600n-masks/193-fie-1600n-fencing-mask.html",
        image: "/images/gear/fie-1600n-fencing-mask.jpg",
      },
      {
        label: "Allstar Coach Inox",
        href: "https://allstar.de/en/Coach-Inox-FIE-Mask-w.-Black-Bib/AMI-FM-S",
        image: "/images/gear/AMI-FM_2_1920x1920.jpg",
      },
      {
        label: "HF Mask Tournament 1600N",
        href: "https://hf-armory.com/en/shop/protectors/head-protection/hema-tournament-1600n-mask/",
        image: "/images/gear/HF_Mask.png",
      },
    ],
  },
  {
    category: "Hals og bryst",
    recommendation: "Brystbekyttelse og Gorget",
    notes:
      "Til stålsparring skal du bruge halsbeskytter. Brystbeskytter under jakken",
    products: [
      {
        label: "HF brystbeskytter standard",
        href: "https://hf-armory.com/en/shop/protectors/chest-protection/mens-chest-protector/",
        image: "/images/gear/hf_brystbeskytter2.png",
      },
      {
        label: "HF brystbeskytter lang",
        href: "https://hf-armory.com/en/shop/protectors/chest-protection/chest-protector-black-knight/?alg_currency=EUR",
        image: "/images/gear/hf_brystbeskytter.png",
      },
      {
        label: "Gorgerin Swordmaster Gorget",
        href: "https://faitsdarmes.com/en/neck-protection/551-gorgerin-swordmaster.html",
        image: "/images/gear/Gorget_gorgerin-swordmaster.jpg",
      },
      {
        label: "Articulated Gorget",
        href: "https://faitsdarmes.com/en/neck-protection/460-articulated-gorget.html",
        image: "/images/gear/F_D_articulated-gorget.jpg",
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
        image: "/images/gear/trinity-mask-overlay-350n.jpg",
      },
      {
        label: "Red Dragon mask overlay",
        href: "https://www.thehemashop.com/red-dragon-full-mask-overlay",
        image: "/images/gear/reddragon_overlay.jpg",
      },
      {
        label: "Spes Vectir occipital overlay",
        href: "https://histfenc.eu/en/men/102-8219-vectir-occipital-overlay-ng-800n-5906374950314.html",
        image: "/images/gear/vectir-occipital-overlay-ng-800n.jpg",
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
        image: "/images/gear/geko-forearm-and-elbow-overlays.jpg",
      },
      {
        label: "HF underarm",
        href: "https://hf-armory.com/en/shop/protectors/hand-protection/forearms-protection-black-knight-3/",
        image: "/images/gear/hf_underarm.png",
      },
      {
        label: "HF albue",
        href: "https://hf-armory.com/en/shop/protectors/hand-protection/ellbow-protection-black-knight/",
        image: "/images/gear/hf_albue.png",
      },
    ],
  },
  {
    category: "Ben",
    recommendation: "Spes, HF eller Red Dragon knæ- og skinnebensbeskyttere",
    notes:
      "Til fuld sparring skal knæ og skinneben være beskyttet så knoglerne er dækket af plader. Vælg en løsning der sidder fast under bevægelse og passer sammen med dine bukser.",
    products: [
      {
        label: "Spes knæ",
        href: "https://histfenc.eu/en/men/88-shell-knee-overlays-5901290007739.html",
        image: "/images/gear/shell-knee-overlays.jpg",
      },
      {
        label: "Spes skinneben",
        href: "https://histfenc.eu/en/men/89-vectir-calf-overlays-5900808730893.html",
        image: "/images/gear/vectir-calf-overlays.jpg",
      },
      {
        label: "Red Dragon knæ og skinneben",
        href: "https://faitsdarmes.com/en/shin-guard/225-red-dragon-knee-and-shin-guard.html",
        image: "/images/gear/red-dragon-knee-and-shin-guard.jpg",
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
        image: "/images/gear/locust-hema-pants-plus-350n.jpg",
      },
      {
        label: "Intersport skridtbeskytter",
        href: "https://intersport.dk/products/select-skridtbeskytter-hvid-1",
        image: "/images/gear/skridtbeskytter.png",
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
        image: "/images/gear/hema-padded-skirt-vg-350n.jpg",
      },
    ],
  },
];
