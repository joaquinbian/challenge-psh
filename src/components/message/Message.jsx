import React from "react";
import "./message.scss";

const Message = ({ msj: { msj, hour }, img, msjReceived }) => {
  return (
    <div className="msj">
      <div className="messageContainer arrow-left">
        <img src={img} alt="profileimg" />
        <p>
          {msj}
          <p className="msjHourContact">{hour}</p>
        </p>
      </div>
      {msjReceived &&
        msjReceived.map(({ msj, user, hour }, i) => (
          <div key={i} className="msjUser arrow-right">
            <img src={user.img} alt="profileimg" />
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
