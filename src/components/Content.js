import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import { data } from "../data";
import ItemContent from "./ItemContent";
import Home from "../pages/Home";
import About from "../pages/About";

const Content = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        {data.map((item) => (
          <Route
            key={item.key}
            exact
            path={item.href}
            render={() => <ItemContent data={item} />}
          />
        ))}
      </Switch>
    </Fragment>
  );
};

export default Content;
