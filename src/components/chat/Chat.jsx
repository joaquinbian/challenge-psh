import React, { useState } from "react";
import "./chat.scss";
import Message from "../message/Message";

const Chat = ({ selectedUser }) => {
  const [message, setMessage] = useState("");
  const { name, img, msj } = selectedUser[0];

  console.log(name, "soy yo");

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
        <Message msj={msj} img={img} />
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
