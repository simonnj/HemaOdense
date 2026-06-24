export type Sponsor = {
  name: string;
  description: string;
  website?: string;
  logo: string;
};


export const sponsors: Sponsor[] = [
  {
    name: "Faits D'Armes",
    description: "Som en af klubbens partnere giver Faits D'Armes 10% rabat til klubbens medlemmer til deres store katalog af proffesionelt HEMA udstyr",
    website: "https://faitsdarmes.com/en/",
    logo: "/images/sponsors/faitsdiarmes.png",
  },
  {
    name: "Fjernvarme Fyn",
    description: "Tak til fjernvarme fyn for at give os 5000kr til at købe udstyr til at starte sabel undervisning og få et kvindesæt af beskyttelsesudstyr",
    website: "https://www.fjernvarmefyn.dk/",
    logo: "/images/sponsors/Fjernvarme-fyn.png",
  },
  {
    name: "Kriger Historical Weapons",
    description: "Som en af klubbens partnere giver Krieger rabat og ekstra service på våben vi bestiller hos dem",
    website: "https://kriegerweapons.com/",
    logo: "/images/sponsors/KriegerWeapons.jpg",
  },
  
];
