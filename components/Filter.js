import React, { useState } from "react";
import { status, getYears } from "../utils";

const Filter = ({ onFilterChange }) => {
  const [activeYear, setActiveYear] = useState("");
  const [launchSuccess, setLaunchSuccess] = useState("");
  const [landSuccess, setLandSuccess] = useState("");
  const [filters, setFilters] = useState({});

  const years = getYears();

  const filterChanged = ({ key, value }) => {
    let data = "";
    let filterData = { ...filters };
    switch (key) {
      case "launch_year":
        data = getActiveItem(activeYear, value);
        setActiveYear(data);
        break;
      case "launch_success":
        data = getActiveItem(launchSuccess, value);
        setLaunchSuccess(data);
        break;
      case "land_success":
        data = getActiveItem(landSuccess, value);
        setLandSuccess(data);
        break;
    }
    filterData[key] = data.toString().toLowerCase();

    setFilters(filterData);

    onFilterChange(filterData);
  };

  const getActiveItem = (value1, value2) => {
    if (value1 === value2) {
      return "";
    }
    return value2;
  };

  return (
    <div className="filter">
      <h2>Filters</h2>
      <div className="filter-section">
        <div className="filter-title">Launch Years</div>
        <hr className="solid" />
        <div className="row">
          {years &&
            years.map((year) => (
              <span className="col-6" key={year}>
                <label
                  name="year"
                  className={`filter-label ${
                    activeYear == year ? "active-label" : ""
                  }`}
                  onClick={() =>
                    filterChanged({ key: "launch_year", value: year })
                  }
                >
                  {year}
                </label>
              </span>
            ))}
        </div>
      </div>
      <div className="filter-section">
        <div className="filter-title">Successful Launch</div>
        <hr className="solid" />
        <div className="row">
          {status &&
            status.map((isLaunched) => (
              <span className="col-6" key={`launch${isLaunched}`}>
                <label
                  name="launch"
                  className={`filter-label ${
                    launchSuccess === isLaunched ? "active-label" : ""
                  }`}
                  onClick={() =>
                    filterChanged({ key: "launch_success", value: isLaunched })
                  }
                >
                  {isLaunched}
                </label>
              </span>
            ))}
        </div>
      </div>
      <div className="filter-section">
        <div className="filter-title">Successful Landing</div>
        <hr className="solid" />
        <div className="row">
          {status &&
            status.map((isLanded) => (
              <span className="col-6" key={`land${isLanded}`}>
                <label
                  name="land"
                  className={`filter-label ${
                    landSuccess === isLanded ? "active-label" : ""
                  }`}
                  onClick={() =>
                    filterChanged({ key: "land_success", value: isLanded })
                  }
                >
                  {isLanded}
                </label>
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
