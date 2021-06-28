import React, { useContext, useEffect, useState } from "react";
import "./chats.scss";
import Header from "./Header";
import Contacts from "../contacts/Contacts";
import AppContext from "../../context/context";
import { HiOutlinePlus } from "react-icons/hi";
import { Link } from "react-router-dom";

const Chats = ({ selectUser, selectedUser }) => {
  const { contacts, sidebar } = useContext(AppContext);

  return (
    <>
      <div className={sidebar ? `sidebar active` : `sidebar`}>
        <Header />
        {contacts.map((c, i) => (
          <Contacts
            key={i}
            name={c.name}
            img={c.img}
            msj={c.lastMsj}
            selectedUser={selectedUser}
            selectUser={selectUser}
          />
        ))}
        <Link to="form">
          <div className="createNewContainer">
            <HiOutlinePlus className="plusIcon" />
            <p className="text">Create new</p>
          </div>
        </Link>
      </div>
    </>
  );
};
export default Chats;
