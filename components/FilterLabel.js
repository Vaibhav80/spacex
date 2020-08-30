import React from "react";

const FilterLabel = ({ name, value, onChange, active }) => {
  return (
    <label
      name={name}
      className={`filter-label ${active === value ? "active-label" : ""}`}
      onClick={() => onChange({ key: name, value })}
    >
      {value}
    </label>
  );
};

export default FilterLabel;
