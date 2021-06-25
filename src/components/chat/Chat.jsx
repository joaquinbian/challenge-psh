import React from "react";
import "./chat.scss";
const Chat = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("me aprete");
  };
  return (
    <div className="chatContainer">
      <div className="chat">
        <span>Hola soy el chat</span>
      </div>
      <form className="formContainer" onSubmit={onSubmit}>
        <input />
        <button>send</button>
      </form>
    </div>
  );
};

export default Chat;
