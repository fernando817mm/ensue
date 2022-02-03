import React from "react";

const Subject = (props) => {
  const { subject, handleActive, department, handleFilterData, changeSubject } =
    props;

  const activeData = { ...department, activeSubject: subject };

  return (
    <div
      className="subject-name"
      onClick={(e) => {
        changeSubject(subject);
        handleFilterData(activeData);
        return handleActive(e);
      }}
    >
      {subject}
    </div>
  );
};

export default Subject;
