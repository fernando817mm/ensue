/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import Departments from "./Departments";

const ExpandedFilter = (props) => {
  const { departments, handleFilterData, changeSubject, switchCase } = props;

  return (
    <div className="body-wrapper">
      <header>
        <section className="filter-list expanded">
          <a
            className="btn btn-close"
            onClick={(e) => {
              e.preventDefault();
              switchCase("collapsed");
            }}
          >
            -
          </a>
          <Departments
            switchCase={switchCase}
            departments={departments}
            handleFilterData={handleFilterData}
            changeSubject={changeSubject}
          />
        </section>
      </header>
    </div>
  );
};

export default ExpandedFilter;
