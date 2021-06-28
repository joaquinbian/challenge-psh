import React, { useState, createContext } from "react";
import { contacts } from "../contacts";

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
