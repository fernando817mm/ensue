import React from "react";
import Subjects from "./Subjects";

const Department = (props) => {
  const { department } = props;

  return (
    <div className="department">
      <div className="dept-name">{department.name}</div>
      <Subjects subjects={department.subjects} />
    </div>
  );
};

export default Department;
