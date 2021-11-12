import React, { useEffect, useState } from "react";
import "./Filter.css";
import { DatePicker } from "antd";
import axios from "axios";
import { Table } from "antd";

const Filter = () => {
  const [date, setdate] = useState();
  const [renderData, setRenderData] = useState([]);

  const [dataByDate, setdataByDate] = useState([]);

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
        const renderD = data.items.map((data) => {
          console.log(
            data.timeline[Object.keys(data.timeline)[0]].confirmed,
            "timeline"
          );
          return {
            name: data.country_region,
            recovered: data.timeline[Object.keys(data.timeline)[0]].recovered,
            deaths: data.timeline[Object.keys(data.timeline)[0]].deaths,
            confirmed: data.timeline[Object.keys(data.timeline)[0]].confirmed,
          };
        });
        setRenderData(renderD);
        // console.log(renderD, "renderData");
      });
  };

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
        <h1>Covid Data</h1>
        <div className="filter_content">
          <DatePicker onChange={onChange} />

          <p>Data By Date</p>

          <div className="filter_table_container">
            {Object.keys(dataByDate).length !== 0 ? (
              <Table
                columns={columns}
                dataSource={renderData}
                pagination={{ pageSize: 6 }}
              />
            ) : (
              <Table columns={columns} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
