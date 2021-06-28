import React, { useContext, useState } from "react";
import AppContext from "../../context/context";
import Chat from "../chat/Chat";
import Chats from "../chats/Chats";
import "./mainPage.scss";

const MainPage = () => {
  const { contacts } = useContext(AppContext);
  const [selectedUser, setSelectedUser] = useState(contacts[0]);
  function selectUser(name) {
    const user = contacts.filter((u) => u.name === name);
    setSelectedUser({ ...user[0] });
  }
  return (
    <div className="appContainer">
      <Chats selectedUser={selectedUser} selectUser={selectUser} />
      <Chat selectedUser={selectedUser} />
    </div>
  );
};

export default MainPage;
