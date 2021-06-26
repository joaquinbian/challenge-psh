import React, { useContext, useState, useEffect } from "react";
import AppContext from "../../context/context";
import "./contacts.scss";
const Contacts = ({ name, img, msj }) => {
  const { selectUser, selectedUser } = useContext(AppContext);
  // const { lastMsj } = selectedUser;
  // useEffect(() => {
  //   console.log(msj);
  // }, [selectedUser]);

  // console.log(msj);

  return (
    <section
      className={
        selectedUser.name === name ? "chatContainerSelected" : "chatContainer"
      }
      onClick={() => selectUser(name)}
    >
      <img src={img} />
      <div>
        <p className="contactName">{name}</p>
        <p className="lastMsj">{msj.length ? msj[0] : ""}</p>
      </div>
    </section>
  );
};
export default Contacts;
