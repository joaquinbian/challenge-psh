import img1 from "./assets/avatar-1.png";
import img3 from "./assets/avatar-2.png";
import img2 from "./assets/avatar-3.png";
import img4 from "./assets/avatar-4.png";
const contacts = [
  {
    name: "Luciana Gutierrez",
    img: img1,
    msj: "hola como estas?",
    ocupation: "Software Developer",
    msjReceived: [],
    lastMsj: [],
  },
  {
    name: "Micaela Alvarez",
    img: img2,
    msj: "estas preparado para la reunion de hoy?",
    ocupation: "Marketing Manager",
    msjReceived: [],
    lastMsj: [],
  },
  {
    name: "Manuel Hoffmann",
    img: img3,
    msj: "chau",
    ocupation: "DevOps",
    msjReceived: [],
    lastMsj: [],
  },
];

const user = {
  name: "rodrigo",
  img: img4,
};
export { contacts, user };
