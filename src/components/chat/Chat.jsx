import React, { useContext, useState } from "react";
import "./chat.scss";
import Message from "../message/Message";
import ChatHeader from "../chatHeader/ChatHeader";
import { user } from "../../contacts";
import AppContext from "../../context/context";

const Chat = () => {
  const [message, setMessage] = useState("");
  const { selectedUser } = useContext(AppContext);
  const { name, img, msj, msjReceived, lastMsj } = selectedUser;

  const onSubmit = (e) => {
    e.preventDefault();
    if (!message) {
      return alert("please write something before submit");
    }

    msjReceived.push({ msj: message, user });
    lastMsj.pop();
    lastMsj.push(message);
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
        {/* <div className="chat"> */}
        <Message msj={msj} img={img} msjReceived={msjReceived} />
        {/* </div> */}
      </div>
      <div className="formContainer">
        <form onSubmit={onSubmit} className="form">
          <input
            placeholder="type your message..."
            onChange={handleChange}
            className="input"
            value={message}
          />
          <button className="btn">send</button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
