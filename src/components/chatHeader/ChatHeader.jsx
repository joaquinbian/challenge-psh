import React, { useContext } from "react";
import AppContext from "../../context/context";
import { RiContactsFill } from "react-icons/ri";
import "./chatHeader.scss";
const ChatHeader = ({ selectedUser }) => {
  const { img, name, ocupation } = selectedUser;
  const { setSidebar, sidebar } = useContext(AppContext);
  return (
    <div className="chatHeaderContainer">
      <RiContactsFill
        className="hamburger"
        onClick={() => setSidebar(!sidebar)}
      />
      <img src={img} alt="profileimg" />
      <div className="infoContainer">
        <p className="name">{name}</p>
        <p className="work">{ocupation}</p>
      </div>
    </div>
  );
};

export default ChatHeader;
