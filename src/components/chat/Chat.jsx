import React, { useState } from "react";
import "./chat.scss";
import Message from "../message/Message";
import ChatHeader from "../chatHeader/ChatHeader";
import { user } from "../../contacts";

const Chat = ({ selectedUser }) => {
  const [message, setMessage] = useState("");
  const { img, msj, msjReceived, lastMsj } = selectedUser;

  const getTime = () => {
    const today = new Date();
    const hours =
      today.getHours() < 10 ? `0${today.getHours()}` : today.getHours();
    const minutes =
      today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes();

    const time = today.getHours() <= 12 && today.getHours() > 0 ? "AM" : "PM";

    return `${hours}:${minutes} ${time}`;
  };

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
            placeholder="type your message..."
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
