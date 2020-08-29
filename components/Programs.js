import React from "react";
import ProgramCard from "./ProgramCard";

const Programs = ({ data }) => {
  return (
    <div className="row programs-list">
      {data &&
        data.map((item, index) => (
          <ProgramCard key={item.mission_name + index} {...item} />
        ))}
    </div>
  );
};

export default Programs;
