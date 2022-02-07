import React from "react";
import Subject from "./Subject";

const Subjects = (props) => {
  const { subjects, switchCase, department, handleFilterData, changeSubject } =
    props;

  return (
    <div className="subjects-wrapper">
      {subjects.map((subject, idx) => {
        return (
          <Subject
            key={subject + idx}
            subject={subject}
            switchCase={switchCase}
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
