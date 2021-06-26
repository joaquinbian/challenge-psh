import React, { useState } from "react";
import "./chat.scss";
import Message from "../message/Message";
import { contacts, user } from "../../contacts";

const Chat = ({ selectedUser }) => {
  const [message, setMessage] = useState("");
  const { name, img, msj, msjReceived } = selectedUser;

  console.log(name, "soy yo");

  const onSubmit = (e) => {
    e.preventDefault();
    const sendTo = contacts.filter((u) => u.name === name);
    console.log(sendTo, "SOY EL USER PAA");
    msjReceived.push({ msj: message, user });
    setMessage("");
    // alert(message);

    // console.log("me aprete");
  };
  const handleChange = (e) => {
    const { value } = e.target;
    setMessage(value);
  };
  return (
    <div className="chatCont">
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
