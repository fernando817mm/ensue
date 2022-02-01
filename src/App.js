import React from "react";

import students from "./json/students.json";
import departments from "./json/departments.json";

import Filter from "./json/components/Filter";
import Students from "./json/components/Students";

const App = () => {
  const studentArr = students.body.studentData.students;
  const departmentArr = departments.departments;

  return (
    <div className="body">
      <div className="body-wrapper">
        <Filter departmentArr={departmentArr} />
        <Students studentArr={studentArr} />
      </div>
    </div>
  );
};

export default App;
