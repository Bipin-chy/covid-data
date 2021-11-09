import React from "react";
import "./CovidHome.css";
import {
  FcDataRecovery,
  GrStatusCritical,
  GiDeathJuice,
} from "react-icons/all";

const CovidHome = () => {
  return (
    <>
      <div className="covid_home_container">
        <h1>Covid Data</h1>
        <div className="covid_home_content">
          <div className="card_container">
            <div className="case_card recovered">
              <p>
                <FcDataRecovery /> Recovered Cases
              </p>
              <span>2546</span>
            </div>

            <div className="case_card death">
              <p>
                <GiDeathJuice /> Death Cases
              </p>
              <span>2546</span>
            </div>

            <div className="case_card critical">
              <p>
                <GrStatusCritical /> Critical Cases
              </p>
              <span>2546</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CovidHome;
