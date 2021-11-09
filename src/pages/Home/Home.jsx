import React from "react";
import "./Home.css";
import { Sidebar } from "../../components/UI";
import { Route, Switch } from "react-router-dom";
import { CovidHome } from "../../components/UI/CovidHome";
// import Router from "./../../routes/router";

const Home = () => {
  return (
    <>
      <div className="home_container">
        <div className="home_content">
          <Sidebar />
          <div className="side_content">
            <Switch>
              <Route path="/" component={CovidHome} exact />
              <Route path="/filter" element={"Hello"} />
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
