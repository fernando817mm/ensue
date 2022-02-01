import React from "react";

const Filter = () => {
  return (
    <header className="body-wrapper">
      <section className="filter-list">
        <a className="btn btn-expand" href="view2.html">
          +
        </a>
        <div className="department-list">
          <div className="department">
            <div className="dept-name active">All Departments</div>
            <div className="subjects-wrapper">
              <div className="subject-name active">All Subjects</div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Filter;
