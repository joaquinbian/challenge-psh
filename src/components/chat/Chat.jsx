import React, { useState } from "react";
import "./chat.scss";
import Message from "../message/Message";
import ChatHeader from "../chatHeader/ChatHeader";
import { user } from "../../contacts";
import getTime from "../../assets/getDate";

const Chat = ({ selectedUser }) => {
  const [message, setMessage] = useState("");
  const { img, msj, msjReceived, lastMsj } = selectedUser;

  const onSubmit = (e) => {
    e.preventDefault();
    if (!message) {
      return alert("please write something before submit");
    }

    msjReceived.push({ msj: message, user, hour: getTime() });
    lastMsj.pop();
    lastMsj.push({ msj: message, hour: getTime() });
    setMessage("");
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setMessage(value);
  };

  return (
    <div className="chatCont">
      <ChatHeader selectedUser={selectedUser} />
      <div className="messagesContainer">
        <Message msj={msj} img={img} msjReceived={msjReceived} />
      </div>
      <div className="formContainer">
        <form onSubmit={onSubmit} className="form">
          <input
            placeholder="Type your message..."
            onChange={handleChange}
            className="input"
            value={message}
          />
          <button className="btn">
            <p>SEND</p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
