import HorrorImg from "../public/images/Experience1.jpg"
import ThrillerImg from "../public/images/Experience2.jpg"
import NightImg from "../public/images/Experience3.jpg"

const experienceData = [
  {
    src: HorrorImg,
    alt: "Logo de l'expérience Horror",
    name: "Horror",
    price: "35€",
    description:
      "Plongez dans les ténèbres, résolvez les énigmes terrifiantes et échappez aux griffes du mal dans cette expérience d'épouvante.",
    peopleNumber: "2 personnes",
    duration: "45 minutes",
  },
  {
    src: ThrillerImg,
    alt: "Logo de l'expérience Thriller",
    name: "Thriller",
    price: "30€",
    description:
      "Vivez une montée d'adrénaline palpitante alors que vous explorez des mystères sombres et des secrets sinistres.",
    peopleNumber: "3 à 4 personnes",
    duration: "1 heure",
  },
  {
    src: NightImg,
    alt: "Logo de l'expérience Night",
    name: "Night",
    price: "25€",
    description:
      "Soyez prêt à affronter vos pires cauchemars et à découvrir ce qui se cache dans l'obscurité de cette aventure nocturne.",
    peopleNumber: "5 à 6 personnes",
    duration: "1 heure 15",
  },
];

export default experienceData;
