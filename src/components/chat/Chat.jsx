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
      <div className="formContainer">
        <form onSubmit={onSubmit} className="form">
          <input placeholder="type your message..." className="input" />
          <button>send</button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
