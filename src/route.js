import React from "react";
import { Switch, Route } from "react-router-dom";
import ConterContainer from "./modules/counterContainer";
import Abc from "./modules/abc";

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={ConterContainer} />
      <Route path="/next" component={Abc} />
    </Switch>
  );
}

export default Router;
