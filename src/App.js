import React from "react";
import students from "./json/students.json";
import departments from "./json/departments.json";

import Filter from "./json/components/Filter";
import Student from "./json/components/Student";

const formatDOB = (inputDate) => {
  const date = new Date(inputDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const dateSplit = date.split("/");
  const correctDay = parseInt(dateSplit[1]) + 1;

  return dateSplit[0] + "/" + correctDay + "/" + dateSplit[2];
};

const formatAdmitted = (inputDate) => {
  return new Date(inputDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const formatGrad = (inputDate) => {
  return new Date(inputDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });
};

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
                return (
                  <Student
                    student={student}
                    formatGrad={formatGrad}
                    formatDOB={formatDOB}
                    formatAdmitted={formatAdmitted}
                  />
                );
              })}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
