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

  const data = [
    {
      key: "1",
      name: "John Brown",
      chinese: 98,
      math: 60,
      english: 70,
    },
    {
      key: "2",
      name: "Jim Green",
      chinese: 98,
      math: 66,
      english: 89,
    },
    {
      key: "3",
      name: "Joe Black",
      chinese: 98,
      math: 90,
      english: 70,
    },
    {
      key: "4",
      name: "Jim Red",
      chinese: 88,
      math: 99,
      english: 89,
    },
  ];

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <>
      {Object.keys(dataByCountry).length !== 0 ? (
        <div className="covid_table_container">
          <div className="covid_table_content">
            <Table
              columns={columns}
              dataSource={renderData}
              onChange={onChange}
              pagination={{ pageSize: 6 }}
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CovidTable;
