import React from "react";
import Home from "./../pages/Home/Home";
import { Route } from "react-router-dom";
import Filter from "./../pages/Filter/Filter";

const Router = () => {
  const ROUTES = [
    {
      path: "/",
      component: Home,
    },

    {
      path: "/filter",
      component: Filter,
    },
  ];
  return (
    <>
      {ROUTES.map(({ path, component }, index) => (
        <Route key={index} path={path} component={component} exact />
      ))}
    </>
  );
};

export default Router;
