import React, { useState } from "react";
import "./app.scss";
import Chats from "./components/chats/Chats";
import Chat from "./components/chat/Chat";
import { contacts } from "./contacts";

function App() {
  const [selectedUser, setSelectedUser] = useState(contacts[0]);

  console.log(selectedUser, "soy el user");

  const selectUser = (name) => {
    const user = contacts.filter((u) => u.name === name);
    setSelectedUser({ ...user[0] });
  };

  return (
    <div className="container">
      <div className="appContainer">
        <Chats contacts={contacts} selectUser={selectUser} />
        <Chat selectedUser={selectedUser} />
      </div>
    </div>
  );
}

export default App;
