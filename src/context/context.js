import React, { useState, createContext } from "react";
import { contacts, user } from "../contacts";
import img1 from "../assets/avatar-1.png";
import img3 from "../assets/avatar-2.png";
import img2 from "../assets/avatar-3.png";

const AppContext = createContext();

const Provider = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  const [myContacts, setMyContacts] = useState([...contacts]);

  const data = {
    contacts: [...myContacts],
    sidebar,
    setSidebar,
    addContact,
  };

  function addContact(contact) {
    setMyContacts([...myContacts, contact]);
  }

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};
export { Provider };
export default AppContext;
