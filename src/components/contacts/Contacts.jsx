import React, { useContext } from "react";
import AppContext from "../../context/context";
import "./contacts.scss";
const Contacts = ({ name, img, msj, selectedUser, selectUser }) => {
  const { sidebar, setSidebar } = useContext(AppContext);

  const contactsHandler = (name) => {
    selectUser(name);
    setSidebar(!sidebar);
  };
  const lastMsj = msj.length
    ? msj[0].msj.length < 15
      ? msj[0].msj
      : `${msj[0].msj.substr(0, 15)}...`
    : "";

  const msjHour = msj.length ? msj[0].hour : "";

  return (
    <div
      className={
        selectedUser.name === name ? "chatContainerSelected" : "chatContainer"
      }
      onClick={() => contactsHandler(name)}
    >
      <img src={img} alt="profileimg" />
      <div>
        <div className="msjInfo">
          <p className="contactName">{name}</p>
          <p className="hour">{msjHour}</p>
        </div>
        <p className="lastMsj">{lastMsj}</p>
      </div>
    </div>
  );
};
export default Contacts;
