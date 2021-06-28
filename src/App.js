import React, { useState } from "react";
import "./app.scss";
// import Chats from "./components/chats/Chats";
// import Chat from "./components/chat/Chat";
import MainPage from "./components/mainPage/MainPage";
import FormCreateNew from "./components/createNewScreen/CreateNewScreen";
// import { contacts } from "./contacts";
import { Provider } from "./context/context";
import { Route, Router, Switch } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Provider>
        <Route exact path="/" component={MainPage} />
        <Route path="/form" component={FormCreateNew} />
      </Provider>
    </div>
  );
}

export default App;
