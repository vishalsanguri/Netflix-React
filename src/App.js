import React, { useState } from "react";
import Content from "./components/Content/Content";
import "./App.css";
import Start from "./components/StartPage/Start";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Firebase from "./lib/Firebase";

export default function App() {
  const [show, setshow] = useState(true);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Start />
        </Route>
        <Route exact path="/auth">
          <Firebase />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}
