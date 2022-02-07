import React from "react";
import Student from "./Student";

const Students = (props) => {
  const { studentsArr } = props;

  return (
    <section>
      <div className="data-wrapper">
        <ul className="filtered-student">
          {studentsArr.length > 0 ? (
            studentsArr.map((student) => {
              return <Student student={student} key={student.id} />;
            })
          ) : (
            <h2>No data available</h2>
          )}
        </ul>
      </div>
    </section>
  );
};

export default Students;
