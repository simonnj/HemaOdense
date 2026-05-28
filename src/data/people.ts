export type Person = {
  name: string;
  role: string;
  email?: string;
  image: string;
};

export const trainers: Person[] = [
  {
    name: "Anton Hansen",
    role: "Sabel Træner",
    email: "kontakt@example.dk",
    image: "/images/people/Anton_sabel.jpg",
  },
  {
    name: "Karsten Hørup",
    role: "Langsværd træner",
    email: "kontakt@example.dk",
    image: "/images/people/Karsten.png",
  },
  {
    name: "Malte Brænder",
    role: "Langsværd træner",
    email: "kontakt@example.dk",
    image: "/images/people/Malte.JPG",
  },
  {
    name: "Miro Hradsky",
    role: "Sabel træner",
    email: "kontakt@example.dk",
    image: "/images/people/Miro.jpg",
  },
  {
    name: "Simon Nyborg",
    role: "Langsværd / sabel træner",
    email: "kontakt@example.dk",
    image: "/images/people/Simon.jpeg",
  },
  {
    name: "Troels Jensen",
    role: "Langsværd træner",
    email: "kontakt@example.dk",
    image: "/images/people/Troels.jpg",
  },
];

export const board: Person[] = [
  {
    name: "Simon Nyborg",
    role: "Forperson",
    email: "kontakt@example.dk",
    image: "/images/people/Simon.jpeg",
  },
  {
    name: "Karsten Hørup",
    role: "Næstforperson",
    email: "kontakt@example.dk",
    image: "/images/people/Karsten.png",
  },
  {
    name: "Malte Brænder",
    role: "Kassere",
    email: "kontakt@example.dk",
    image: "/images/people/Malte.JPG",
  },
];
