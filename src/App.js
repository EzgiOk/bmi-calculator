import React from "react";
import "./styles.css";
import Home from "./pages/Home/Home.page";
import Result from "./pages/Result/Result.page";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {ContextProvider} from "./context/ContextProvider";

export default function App() {
  return (
    <ContextProvider>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/result">
              <Result />
            </Route>
          </Switch>
        </Router>
    </ContextProvider>
  );
}