import React, { useEffect } from "react";
import "./Home.css";
import { Sidebar } from "../../components/UI";
import { Route, Switch } from "react-router-dom";
import { CovidHome } from "../../components/UI/CovidHome";
import { CovidTable } from "../../components/UI/CovidTable";


const Home = () => {
  return (
    <>
      <div className="home_container">
        <div className="home_content">
          <Sidebar />
          <div className="side_content">
            <Switch>
              <Route path="/" component={CovidHome} exact />
              {/* <Route path="/filter" component={CovidTable} /> */}
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
