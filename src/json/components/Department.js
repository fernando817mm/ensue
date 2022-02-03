import React from "react";
import Subjects from "./Subjects";

const Department = (props) => {
  const { department, switchCase, handleFilterData, changeSubject } = props;

  return (
    <div className="department">
      <div className="dept-name">{department.name}</div>
      <Subjects
        subjects={department.subjects}
        switchCase={switchCase}
        department={department}
        handleFilterData={handleFilterData}
        changeSubject={changeSubject}
      />
    </div>
  );
};

export default Department;
