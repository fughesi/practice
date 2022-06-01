import { nanoid } from "nanoid";
import BlackHistory from './../resources/buttons/BlackHistory.png'
import Charicatures from './../resources/buttons/Charicatures.png'
import Popart from './../resources/buttons/Popart.png'
import Presidents from './../resources/buttons/Presidents.png'
import Random from './../resources/buttons/Random.png'
import SuperHeroes from './../resources/buttons/SuperHeroes.png'

const inventory = [
  {
    id: nanoid(),
    src: BlackHistory,
    alt: "Black History",
    name: "Black History",
    quantity: 2,
  },
  {
    id: nanoid(),
    src: Charicatures,
    alt: "Charicatures",
    name: "Charicatures",
    quantity: 2,
  },
  {
    id: nanoid(),
    src: Popart,
    alt: "",
    name: "",
    quantity: 2,
  },
  {
    id: nanoid(),
    src: Presidents,
    alt: "",
    name: "",
    quantity: 2,
  },
  {
    id: nanoid(),
    src: Random,
    alt: "",
    name: "",
    quantity: 2,
  },
  {
    id: nanoid(),
    src: SuperHeroes,
    alt: "",
    name: "",
    quantity: 2,
  },
  {
    id: nanoid(),
    src: "https://picsum.photos/200",
    alt: "",
    name: "",
    quantity: 2,
  },
  {
    id: nanoid(),
    src: "https://picsum.photos/200",
    alt: "",
    name: "",
    quantity: 2,
  },
  {
    id: nanoid(),
    src: "https://picsum.photos/200",
    alt: "",
    name: "",
    quantity: 2,
  },
  {
    id: nanoid(),
    src: "https://picsum.photos/200",
    alt: "",
    name: "",
    quantity: 2,
  },
  {
    id: nanoid(),
    src: "https://picsum.photos/200",
    alt: "",
    name: "",
    quantity: 2,
  },
];

export default inventory;
