import React from "react";
import "./app.scss";

import MainPage from "./components/mainPage/MainPage";
import FormCreateNew from "./components/createNewScreen/CreateNewScreen";
import { Provider } from "./context/context";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Provider>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/form" component={FormCreateNew} />
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
