import React, { useState } from "react";

import students from "./json/students.json";
import departments from "./json/departments.json";

import Filter from "./json/components/Filter";
import Students from "./json/components/Students";

const App = () => {
  const studentArr = students.body.studentData.students;
  const departmentArr = departments.departments;

  const [studentsArr, setStudentsArr] = useState(studentArr);

  const changeStudentsArr = (arr, subject) => {
    return setStudentsArr(arr);
  };

  return (
    <div className="body">
      <div className="body-wrapper">
        <Filter
          departmentArr={departmentArr}
          changeStudentsArr={changeStudentsArr}
        />
        <Students studentArr={studentsArr} />
      </div>
    </div>
  );
};

export default App;
