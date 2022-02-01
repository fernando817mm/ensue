import React from "react";
import students from "./json/students.json";
import departments from "./json/departments.json";

import Filter from "./json/components/Filter";
import Student from "./json/components/Student";

const App = () => {
  const studentArr = students.body.studentData.students;

  return (
    <div className="body">
      <div className="body-wrapper">
        <Filter />
        <section>
          <div className="data-wrapper">
            <ul className="filtered-student">
              {studentArr.map((student) => {
                return <Student student={student} />;
              })}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
