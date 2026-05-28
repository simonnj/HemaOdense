export type GearSection = {
  title: string;
  items: string[];
};

export type GearRecommendation = {
  category: string;
  recommendation: string;
  notes: string;
  link?: string;
};

export const gearSections: GearSection[] = [
  {
    title: "Til første prøvetræning",
    items: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    ],
  },
  {
    title: "Begynderudstyr",
    items: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    ],
  },
  {
    title: "Fuld sparring",
    items: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    ],
  },
];

export const gearRecommendations: GearRecommendation[] = [
  {
    category: "Maske",
    recommendation: "Lorem ipsum dolor sit amet.",
    notes: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    link: "https://example.dk",
  },
  {
    category: "Handsker",
    recommendation: "Lorem ipsum dolor sit amet.",
    notes: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    link: "https://example.dk",
  },
  {
    category: "Træningsvåben",
    recommendation: "Lorem ipsum dolor sit amet.",
    notes: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    category: "Beskyttelse",
    recommendation: "Lorem ipsum dolor sit amet.",
    notes: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
];
