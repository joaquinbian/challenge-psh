import React, { useState } from "react";
import "./app.scss";
import Chats from "./components/chats/Chats";
import Chat from "./components/chat/Chat";
import { contacts } from "./contacts";
import { Provider } from "./context/context";

function App() {
  const [selectedUser, setSelectedUser] = useState(contacts[0]);

  // console.log(selectedUser, "soy el user");

  const selectUser = (name) => {
    const user = contacts.filter((u) => u.name === name);
    setSelectedUser({ ...user[0] });
  };

  return (
    <div className="container">
      <div className="appContainer">
        <Provider>
          <Chats />
          <Chat />
        </Provider>
      </div>
    </div>
  );
}

export default App;
