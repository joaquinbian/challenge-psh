import React from "react";
import "./chatHeader.scss";
const ChatHeader = ({ selectedUser }) => {
  const { img, name, ocupation } = selectedUser;
  return (
    <div className="chatHeaderContainer">
      <img src={img} />
      <div className="infoContainer">
        <p className="name">{name}</p>
        <p className="work">{ocupation}</p>
      </div>
    </div>
  );
};

export default ChatHeader;
