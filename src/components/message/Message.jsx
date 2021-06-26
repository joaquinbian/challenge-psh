import React from "react";
import "./message.scss";

const Message = ({ msj, img }) => {
  return (
    <div className="messageContainer">
      <img src={img} />
      <p>{msj}</p>
    </div>
  );
};

export default Message;
