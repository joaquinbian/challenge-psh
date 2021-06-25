import React, { useState } from "react";
import "./contacts.scss";
const Contacts = ({ name, img }) => {
  const presentation = () => {
    console.log(`hola soy ${name}`);
  };

  return (
    <section className="chatContainer" onClick={presentation}>
      <img src={img} />
      <p>{name}</p>
    </section>
  );
};
export default Contacts;
