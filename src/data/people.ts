export type Person = {
  name: string;
  role: string;
  email?: string;
  image: string;
};

export const trainers: Person[] = [
  {
    name: "Anton Hansen",
    role: "Sabeltræner",
    email: "kontakt@example.dk",
    image: "/images/people/Anton_sabel.jpg",
  },
  {
    name: "Karsten Hørup",
    role: "Langsværdstræner",
    email: "kontakt@example.dk",
    image: "/images/people/Karsten.png",
  },
  {
    name: "Malte Brænder",
    role: "Langsværdstræner",
    email: "kontakt@example.dk",
    image: "/images/people/Malte.JPG",
  },
  {
    name: "Miro Hradsky",
    role: "Sabeltræner",
    email: "kontakt@example.dk",
    image: "/images/people/Miro.jpg",
  },
  {
    name: "Simon Nyborg",
    role: "Langsværd- og sabeltræner",
    email: "simon-nj@hotmail.com",
    image: "/images/people/Simon.jpeg",
  },
  {
    name: "Troels Jensen",
    role: "Langsværdstræner",
    email: "kontakt@example.dk",
    image: "/images/people/Troels.jpg",
  },
];

export const board: Person[] = [
  {
    name: "Simon Nyborg",
    role: "Forperson",
    email: "simon-nj@hotmail.com",
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
    role: "Kasserer",
    email: "kontakt@example.dk",
    image: "/images/people/Malte.JPG",
  },
];
