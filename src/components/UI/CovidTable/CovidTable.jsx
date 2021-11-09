import React from "react";
import "./CovidTable.css";
import { Table } from "antd";
import { useData } from "../../../dataContexts/dataContexts";

const CovidTable = () => {
//   const { dataByCountry } = useData();

//   console.log(dataByCountry);

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
      dataIndex: "death",
      sorter: {
        compare: (a, b) => a.death - b.death,
        multiple: 2,
      },
    },
    {
      title: "Critical Cases",
      dataIndex: "critical",
      sorter: {
        compare: (a, b) => a.critical - b.critical,
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
      <div className="covid_table_container">
        <div className="covid_table_content">
          <Table columns={columns} dataSource={data} onChange={onChange} />
        </div>
      </div>
    </>
  );
};

export default CovidTable;
