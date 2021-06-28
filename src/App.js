import React from "react";
import "./app.scss";

import MainPage from "./components/mainPage/MainPage";
import FormCreateNew from "./components/createNewScreen/CreateNewScreen";
import { Provider } from "./context/context";
import { Route } from "react-router-dom";

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
