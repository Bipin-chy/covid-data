import React, { useEffect, useState } from "react";
import "./Filter.css";
import { useData } from "../../dataContexts/dataContexts";
import { DatePicker } from "antd";
import axios from "axios";
import { Table } from "antd";

const Filter = () => {
  //   const { dataByDate, getDataByDate(date) } = useData();
  const [date, setdate] = useState();
  const [dataByDate, setdataByDate] = useState([]);
  //   const [renderData, setRenderdata] = useState();
  const onChange = (date, dateString) => {
    setdate(dateString);
  };

  //   fetching data by date
  const getDataByDate = (date) => {
    axios
      .get(
        `https://raw.githack.com/skhatri/covid-19-json-api-data/master/data/by-date/${date}.json`
      )
      .then((res) => {
        const data = res.data;
        setdataByDate(data);
      });
  };

  //   const renderData = dataByDate.items.map((data) => {
  //     return {
  //       name: data.country_region,
  //       recovered: data.timeline.counts.recovered,
  //       deaths: data.timeline.counts.deaths,
  //       confirmed: data.timeline.counts.confirmed,
  //     };
  //   });

  useEffect(() => {
    getDataByDate(date);
  }, [date]);

  console.log(dataByDate);

  //   columns for table

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
      <div className="filter_container">
        <div className="filter_content">
          <DatePicker onChange={onChange} />
        </div>
        {Object.keys(dataByDate).length !== 0 ? (
          <Table
            columns={columns}
            // dataSource={renderData}
            pagination={{ pageSize: 6 }}
          />
        ) : null}
      </div>
    </>
  );
};

export default Filter;
