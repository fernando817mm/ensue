import React from "react";
import Department from "./Department";

const Departments = (props) => {
  const { departments, handleActive, handleFilterData, changeSubject } = props;
  return (
    <div className="department-list">
      {departments.map((department, idx) => {
        return (
          <Department
            key={idx}
            department={department}
            handleActive={handleActive}
            handleFilterData={handleFilterData}
            changeSubject={changeSubject}
          />
        );
      })}
      <div className="department all">
        <div className="dept-name active">All Departments</div>
        <div className="subjects-wrapper">
          <div className="subject-name active">All Subjects</div>
        </div>
      </div>
    </div>
  );
};

export default Departments;
