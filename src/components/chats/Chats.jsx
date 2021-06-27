import React, { useContext, useEffect, useState } from "react";
import "./chats.scss";
import Header from "./Header";
import Contacts from "../contacts/Contacts";
import AppContext from "../../context/context";

const Chats = () => {
  // const [scrollX, setScrollX] = useState(0);
  const { contacts, selectUser, sidebar } = useContext(AppContext);

  // const xScroll = () => {
  //   const position = document.body.clientWidth;
  //   setScrollX(position);
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", xScroll, { passive: true });
  //   scrollX > 990 && setSidebar(true);
  // }, [document.body.clientWidth]);

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
