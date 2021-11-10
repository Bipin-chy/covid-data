import React from "react";
import Home from "./../pages/Home/Home";
import { Route } from "react-router-dom";
// import CovidHome from "./../components/UI/CovidHome/CovidHome";
import { CovidTable } from "../components/UI/CovidTable";

const Router = () => {
  const ROUTES = [
    {
      path: "/",
      component: Home,
    },

    {
      path: "/filter",
      component: CovidTable,
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
