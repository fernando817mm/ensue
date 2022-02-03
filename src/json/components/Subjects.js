import React from "react";
import Subject from "./Subject";

const Subjects = (props) => {
  const {
    subjects,
    handleActive,
    department,
    handleFilterData,
    changeSubject,
  } = props;

  return (
    <div className="subjects-wrapper">
      {subjects.map((subject, idx) => {
        return (
          <Subject
            key={subject + idx}
            subject={subject}
            handleActive={handleActive}
            department={department}
            handleFilterData={handleFilterData}
            changeSubject={changeSubject}
          />
        );
      })}
    </div>
  );
};

export default Subjects;
