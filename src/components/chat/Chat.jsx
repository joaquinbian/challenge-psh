import React, { useState } from "react";
import "./chat.scss";
const Chat = () => {
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    alert(message);

    console.log("me aprete");
  };
  const handleChange = (e) => {
    const { value } = e.target;
    setMessage(value);
  };
  return (
    <div className="messagesContainer">
      <div className="chat">
        <span>Hola soy el chat</span>
      </div>
      <div className="formContainer">
        <form onSubmit={onSubmit} className="form">
          <input
            placeholder="type your message..."
            onChange={handleChange}
            className="input"
          />
          <button className="btn">send</button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
