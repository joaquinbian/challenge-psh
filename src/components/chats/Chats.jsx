import React, { useContext, useEffect, useState } from "react";
import "./chats.scss";
import Header from "./Header";
import Contacts from "../contacts/Contacts";
import AppContext from "../../context/context";

const Chats = () => {
  const { contacts, selectUser, selectedUser } = useContext(AppContext);
  // const { lastMsj } = selectedUser;
  // const msj = lastMsj.length ? lastMsj[0] : "";

  return (
    <section className="chatsContainer">
      <Header />
      {contacts.map((c, i) => (
        <Contacts
          key={i}
          name={c.name}
          img={c.img}
          msj={c.lastMsj}
          selectUser={selectUser}
        />
      ))}
    </section>
  );
};
export default Chats;
