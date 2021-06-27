import React, { useContext, useState, useEffect } from "react";
import { contacts } from "../../contacts";
import AppContext from "../../context/context";
import "./contacts.scss";
const Contacts = ({ name, img, msj }) => {
  const { selectUser, selectedUser, sidebar, setSidebar } = useContext(
    AppContext
  );
  const contactsHandler = (name) => {
    selectUser(name);
    setSidebar(!sidebar);
  };
  const lastMsj = msj.length
    ? msj[0].length < 15
      ? msj[0]
      : `${msj[0].substr(0, 15)}...`
    : "";

  return (
    <div
      className={
        selectedUser.name === name ? "chatContainerSelected" : "chatContainer"
      }
      onClick={() => contactsHandler(name)}
    >
      <img src={img} />
      <div>
        <p className="contactName">{name}</p>
        <p className="lastMsj">{lastMsj}</p>
      </div>
    </div>
  );
};
export default Contacts;
