import React, { useState } from "react";
import "./contacts.scss";
const Contacts = ({ name, img, selectUser }) => {
  // const setUser = () => {
  //   setSelectedUser(name);
  // };

  return (
    <section className="chatContainer" onClick={() => selectUser(name)}>
      <img src={img} />
      <p>{name}</p>
    </section>
  );
};
export default Contacts;
