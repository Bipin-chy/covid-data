import React from "react";
import "./CovidTable.css";
import { Table } from "antd";
import { useData } from "../../../dataContexts/dataContexts";

const CovidTable = () => {
  const { dataByCountry } = useData();

  const renderData = dataByCountry.items.map((data) => {
    return {
      name: data.country_region,
      recovered: data.timeline.counts.recovered,
      deaths: data.timeline.counts.deaths,
      confirmed: data.timeline.counts.confirmed,
    };
  });

  const columns = [
    {
      title: "Country Name",
      dataIndex: "name",
    },
    {
      title: "Recovered Cases",
      dataIndex: "recovered",
      sorter: {
        compare: (a, b) => a.recovered - b.recovered,
        multiple: 3,
      },
    },
    {
      title: "Death Cases",
      dataIndex: "deaths",
      sorter: {
        compare: (a, b) => a.deaths - b.deaths,
        multiple: 2,
      },
    },
    {
      title: "Confirmed Cases",
      dataIndex: "confirmed",
      sorter: {
        compare: (a, b) => a.confirmed - b.confirmed,
        multiple: 1,
      },
    },
  ];

  return (
    <>
      {Object.keys(dataByCountry).length !== 0 ? (
        <div className="covid_table_container">
          {/* <h4>Cases By Country</h4> */}
          <div className="covid_table_content">
            <Table
              columns={columns}
              dataSource={renderData}
              pagination={{ pageSize: 6 }}
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CovidTable;
