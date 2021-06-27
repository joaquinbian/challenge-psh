import React, { useContext, useEffect, useState } from "react";
import "./chats.scss";
import Header from "./Header";
import Contacts from "../contacts/Contacts";
import AppContext from "../../context/context";

const Chats = () => {
  const { contacts, selectUser, sidebar } = useContext(AppContext);

  return (
    <>
      <div className={sidebar ? `sidebar active` : `sidebar`}>
        <Header />
        {contacts.map((c, i) => (
          <Contacts key={i} name={c.name} img={c.img} msj={c.lastMsj} />
        ))}
      </div>
    </>
  );
};
export default Chats;
