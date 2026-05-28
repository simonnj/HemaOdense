export type Sponsor = {
  name: string;
  description: string;
  website?: string;
  logo: string;
};

export const sponsors: Sponsor[] = [
  {
    name: "Fjernvarme Fyn",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    website: "https://example.dk",
    logo: "/images/sponsors/Fjernvarme-fyn.png",
  },
  {
    name: "Faits Darmes",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    website: "https://example.dk",
    logo: "/images/sponsors/faitsdiarmes.png",
  },
];
