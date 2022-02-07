import React from "react";

const Subject = (props) => {
  const { subject, switchCase, department, handleFilterData, changeSubject } =
    props;

  const activeData = { ...department, activeSubject: subject };

  return (
    <div
      className="subject-name"
      onClick={(e) => {
        e.preventDefault();
        changeSubject(subject);
        handleFilterData(activeData);
        switchCase("active");
      }}
    >
      {subject}
    </div>
  );
};

export default Subject;
