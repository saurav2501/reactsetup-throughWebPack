import React from "react";
import { Switch, Route } from "react-router-dom";
import ConterContainer from "./modules/counterContainer";

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={ConterContainer} />
    </Switch>
  );
}

export default Router;
