/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";

const CollapsedFilter = (props) => {
  const { switchCase } = props;

  return (
    <div className="body-wrapper">
      <header>
        <section className="filter-list">
          <a
            className="btn btn-expand"
            onClick={(e) => {
              e.preventDefault();
              switchCase("expanded");
            }}
          >
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
    </div>
  );
};

export default CollapsedFilter;
