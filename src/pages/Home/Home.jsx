import React from "react";
import "./Home.css";
import { Sidebar } from "../../components/UI";
// import Router from "./../../routes/router";

const Home = () => {
  return (
    <>
      <div className="home_container">
        <div className="home_content">
          <Sidebar />
          <div className="side_content">
              
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
