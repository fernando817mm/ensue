import React from "react";
import Subjects from "./Subjects";

const Department = (props) => {
  const { department, handleActive, handleFilterData, changeSubject } = props;

  return (
    <div className="department">
      <div className="dept-name">{department.name}</div>
      <Subjects
        subjects={department.subjects}
        handleActive={handleActive}
        department={department}
        handleFilterData={handleFilterData}
        changeSubject={changeSubject}
      />
    </div>
  );
};

export default Department;
