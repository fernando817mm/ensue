import React from "react";

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

const Student = (props) => {
  const { student } = props;
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
