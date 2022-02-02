import React from "react";

const Subject = (props) => {
  const { subject, handleActive, department, handleFilterData } = props;

  const activeData = { ...department, activeSubject: subject };

  return (
    <div
      className="subject-name"
      onClick={(e) => {
        handleFilterData(activeData);
        return handleActive(e);
      }}
    >
      {subject}
    </div>
  );
};

export default Subject;
