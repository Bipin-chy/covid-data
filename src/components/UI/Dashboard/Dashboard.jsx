import React from "react";
import "./Dashboard.css";
import { Sidebar } from "..";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { CovidHome } from "../CovidHome";
import { CovidTable } from "../CovidTable";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard_container">
        <div className="dashboard_content">
          {/* <Sidebar /> */}
          <div className="side_content">
            <Switch>
              {/* <Route path="/homee" component={CovidHome} exact={true} /> */}
              {/* <Route path="/filter" component={CovidTable} /> */}
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
