import React from "react";
import "./message.scss";

const Message = ({ msj, img, msjReceived }) => {
  return (
    <div className="msj">
      <div className="messageContainer arrow-left">
        <img src={img} />
        <p>{msj}</p>
      </div>
      {msjReceived &&
        msjReceived.map(({ msj, user, hour }, i) => (
          <div key={i} className="msjUser arrow-right">
            <img src={user.img} />
            <p>
              {msj}
              <p className="msjHour">{hour}</p>
            </p>
          </div>
        ))}
    </div>
  );
};

export default Message;
