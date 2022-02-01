import React from "react";

const Student = (props) => {
  const { student, formatAdmitted, formatDOB, formatGrad } = props;
  return (
    <li key={student.id}>
      <span className="name">
        {student.familyName}, {student.givenName}
      </span>
      <span className="dob">
        DOB: <span className="value">{formatDOB(student.dob)}</span>
      </span>
      <span className="admit-date">
        Admitted:{" "}
        <span className="value">{formatAdmitted(student.admitDate)}</span>
      </span>
      <span className="grad-date">
        Anticipated Graduation:{" "}
        <span className="value">
          {formatGrad(student.anticipatedGraduationDate)}
        </span>
      </span>
      <span className="mentor">
        Mentor:{" "}
        <span className="value">
          {student.mentor.familyName}, {student.mentor.givenName}
        </span>
      </span>
    </li>
  );
};

export default Student;
