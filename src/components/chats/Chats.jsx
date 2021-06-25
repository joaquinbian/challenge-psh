import React, { useState } from "react";
import "./chats.scss";
import Header from "./Header";
import Contacts from "../contacts/Contacts";
import img1 from "../../assets/avatar-1.png";
import img3 from "../../assets/avatar-2.png";
import img2 from "../../assets/avatar-3.png";

const Chats = () => {
  const contacts = [
    {
      name: "Luciana Gutierrez",
      img: img1,
    },
    {
      name: "Laura Alvarez",
      img: img2,
    },
    {
      name: "Manuel Hoffmann",
      img: img3,
    },
  ];
  return (
    <section className="chatsContainer">
      <Header />
      {contacts.map((c) => (
        <Contacts name={c.name} img={c.img} />
      ))}
    </section>
  );
};
export default Chats;
