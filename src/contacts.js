import img1 from "./assets/img/avatar-1.png";
import img3 from "./assets/img/avatar-2.png";
import img2 from "./assets/img/avatar-3.png";
import img4 from "./assets/img/avatar-4.png";
import getTime from "./assets/getDate";

const time = getTime();
const contacts = [
  {
    name: "Luciana Gutierrez",
    img: img1,
    msj: { msj: "hola como estas?", hour: time },
    job: "Software Developer",
    msjReceived: [],
    lastMsj: [],
  },
  {
    name: "Micaela Alvarez",
    img: img3,
    msj: { msj: "estas preparado para la reunion de hoy?", hour: time },
    job: "Marketing Manager",
    msjReceived: [],
    lastMsj: [],
  },
  {
    name: "Manuel Hoffmann",
    img: img2,
    msj: { msj: "Hola! Como va tu dia?", hour: time },
    job: "DevOps",
    msjReceived: [],
    lastMsj: [],
  },
];

const user = {
  name: "name",
  img: img4,
};
export { contacts, user };
