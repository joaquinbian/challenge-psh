import React, { useState } from "react";
import "./chats.scss";
import Header from "./Header";
import Contacts from "../contacts/Contacts";

const Chats = ({ contacts, selectUser }) => {
  return (
    <section className="chatsContainer">
      <Header />
      {contacts.map((c, i) => (
        <Contacts key={i} name={c.name} img={c.img} selectUser={selectUser} />
      ))}
    </section>
  );
};
export default Chats;
