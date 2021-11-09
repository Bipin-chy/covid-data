import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext);
};

const DataProvider = ({ children }) => {
  const [dataByCountry, setdataByCountry] = useState([]);

  const getData = () => {
    axios
      .get(
        "https://raw.githack.com/skhatri/covid-19-json-api-data/master/data/latest_counters.json"
      )
      .then((res) => {
        const data = res.data;
        setdataByCountry(data);
        // console.log("data is", data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const values = {
    dataByCountry,
  };
  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

export default DataProvider;
