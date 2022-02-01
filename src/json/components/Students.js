import React from "react";
import Student from "./Student";

const Students = (props) => {
  const { studentArr } = props;
  return (
    <section>
      <div className="data-wrapper">
        <ul className="filtered-student">
          {studentArr.map((student) => {
            return <Student student={student} key={student.id} />;
          })}
        </ul>
      </div>
    </section>
  );
};

export default Students;
