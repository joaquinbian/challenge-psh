import React from "react";
import "./header.scss";
import img from "../../assets/pshLogo.svg";
const Header = () => {
  return (
    <section className="chatsHeader">
      <section className="sectionHeader">
        <img src={img} />
        <p>React Chat</p>
      </section>
    </section>
  );
};

export default Header;
