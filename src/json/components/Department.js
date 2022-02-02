import React from "react";
import Subjects from "./Subjects";

const Department = (props) => {
  const { department, handleActive, handleFilterData } = props;

  return (
    <div className="department">
      <div className="dept-name">{department.name}</div>
      <Subjects
        subjects={department.subjects}
        handleActive={handleActive}
        department={department}
        handleFilterData={handleFilterData}
      />
    </div>
  );
};

export default Department;
