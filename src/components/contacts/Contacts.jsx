import React, { useState } from "react";
import "./contacts.scss";
const Contacts = ({ name, img }) => {
  return (
    <section className="chatContainer">
      <img src={img} />
      <p>{name}</p>
    </section>
  );
};
export default Contacts;
