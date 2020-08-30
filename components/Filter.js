import React, { useState } from "react";
import {
  status,
  getYears,
  LAUNCH_YEAR,
  LAUNCH_SUCCESS,
  LAND_SUCCESS,
} from "../utils";
import FilterLabel from "./FilterLabel";

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
      case LAUNCH_YEAR:
        data = getActiveItem(activeYear, value);
        setActiveYear(data);
        break;
      case LAUNCH_SUCCESS:
        data = getActiveItem(launchSuccess, value);
        setLaunchSuccess(data);
        break;
      case LAND_SUCCESS:
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
                <FilterLabel
                  name={LAUNCH_YEAR}
                  value={year}
                  onChange={filterChanged}
                  active={activeYear}
                />
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
                <FilterLabel
                  name={LAUNCH_SUCCESS}
                  value={isLaunched}
                  onChange={filterChanged}
                  active={launchSuccess}
                />
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
                <FilterLabel
                  name={LAND_SUCCESS}
                  value={isLanded}
                  onChange={filterChanged}
                  active={landSuccess}
                />
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
