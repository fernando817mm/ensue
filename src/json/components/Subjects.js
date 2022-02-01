import React from "react";
import Subject from "./Subject";

const Subjects = (props) => {
  const { subjects } = props;

  return (
    <div className="subjects-wrapper">
      {subjects.map((subject, idx) => {
        return <Subject key={subject + idx} subject={subject} />;
      })}
    </div>
  );
};

export default Subjects;
