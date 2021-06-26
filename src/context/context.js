import React, { useState, createContext } from "react";
import { contacts, user } from "../contacts";

const AppContext = createContext();
const Provider = ({ children }) => {
  const [selectedUser, setSelectedUser] = useState(contacts[0]);

  const selectUser = (name) => {
    const user = contacts.filter((u) => u.name === name);
    setSelectedUser({ ...user[0] });
  };
  const data = {
    contacts: [...contacts],
    user: {
      ...user,
    },
    selectedUser,
    selectUser,
  };

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};
export { Provider };
export default AppContext;
