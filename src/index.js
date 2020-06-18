import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./assets/css/nucleo-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Index from "./views/index.js";
import LoginPage from "./views/login.js";
import Games from "./views/games.js";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/home" render={(props) => <Index {...props} />} />
      <Route path="/login" render={(props) => <LoginPage {...props} />} />
      <Route path="/games" render={(props) => <Games {...props} />} />
      <Redirect from="/" to="/home" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
