import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

import { isAuthenticated } from "./services/auth";
// paginas
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
// paginas privadas
import Home from "./pages/App/Home";
import Spends from "./pages/App/Spends";
import SpendGroups from "./pages/App/SpendGroups";
// components
import Main from "./components/Main";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <>
          <Main myComponent={Component} componentProps={props} />
        </>
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <PrivateRoute exatc path="/app" component={Home} />
      <PrivateRoute exatc path="/spends" component={Spends} />
      <PrivateRoute exatc path="/spend-groups" component={SpendGroups} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
