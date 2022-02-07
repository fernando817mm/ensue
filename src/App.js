import React, { useState, useEffect } from "react";

import students from "./json/students.json";
import departments from "./json/departments.json";

import Filter from "./components/Filter";
import Students from "./components/Students";

const App = () => {
  const studentArr = students.body.studentData.students;
  const departmentArr = departments.departments;

  const [studentsArr, setStudentsArr] = useState(studentArr);
  const [subject, setSubject] = useState(null);

  const changeStudentsArr = (arr) => {
    return setStudentsArr(arr);
  };

  const changeSubject = (sub) => {
    setSubject(sub);
  };

  useEffect(() => {
    const arr = [];
    studentArr.map((student) => {
      if (student.subject === subject) {
        arr.push(student);
      }
    });
    changeStudentsArr(arr);
  }, [subject]);

  useEffect(() => {
    setStudentsArr(studentArr);
  }, []);

  return (
    <div className="body">
      <div className="body-wrapper">
        <Filter
          departmentArr={departmentArr}
          changeSubject={changeSubject}
          subject={subject}
        />
        <Students
          studentsArr={studentsArr}
          changeStudentsArr={changeStudentsArr}
        />
      </div>
    </div>
  );
};

export default App;
