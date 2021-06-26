import React from "react";
import "./message.scss";

const Message = ({ msj, img, msjReceived }) => {
  return (
    <div className="msj">
      <div className="messageContainer">
        <img src={img} />
        <p>{msj}</p>
      </div>
      {msjReceived &&
        msjReceived.map(({ msj, user }, i) => (
          <div key={i} className="msjUser">
            <img src={user.img} />
            <p>{msj}</p>
          </div>
        ))}
    </div>
  );
};

export default Message;
