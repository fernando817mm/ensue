import React from "react";
import Departments from "./Departments";

const ExpandedFilter = (props) => {
  const {
    handleFilter,
    departments,
    handleActive,
    handleFilterData,
    changeSubject,
  } = props;

  return (
    <div className="body-wrapper">
      <header>
        <section className="filter-list expanded">
          <a className="btn btn-close" onClick={handleFilter}>
            -
          </a>
          <Departments
            departments={departments}
            handleActive={handleActive}
            handleFilterData={handleFilterData}
            changeSubject={changeSubject}
          />
        </section>
      </header>
    </div>
  );
};

export default ExpandedFilter;
