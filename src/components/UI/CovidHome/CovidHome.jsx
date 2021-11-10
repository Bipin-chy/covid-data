import React from "react";
import "./CovidHome.css";
import {
  FcDataRecovery,
  GrStatusCritical,
  GiDeathJuice,
} from "react-icons/all";
import { CovidTable } from "../CovidTable";
import { useData } from "../../../dataContexts/dataContexts";

const CovidHome = () => {
  const { dataByCountry } = useData();

  // const country_region = items.map(({country_region}) => country_region)
  // const items = Object.keys(dataByCountry).map(({items}) => items)
  // console.log(country_region);

  return (
    <>
      {Object.keys(dataByCountry).length !== 0 ? (
        <div className="covid_home_container">
          <h1>Covid Data</h1>
          <div className="covid_home_content">
            <div className="card_container">
              <div className="case_card recovered">
                <p>
                  <FcDataRecovery /> Recovered Cases
                </p>
                <span>{dataByCountry.counts.recovered}</span>
              </div>

              <div className="case_card death">
                <p>
                  <GiDeathJuice /> Death Cases
                </p>
                <span>{dataByCountry.counts.deaths}</span>
              </div>

              <div className="case_card confirmed">
                <p>
                  <GrStatusCritical /> Confirmed Cases
                </p>
                <span>{dataByCountry.counts.confirmed}</span>
              </div>
            </div>
            <div className="covid_table_container">
              <CovidTable />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CovidHome;
