import React from "react";
import Departments from "./Departments";

const ExpandedFilter = (props) => {
  const { handleFilter, departments } = props;

  return (
    <div className="body-wrapper">
      <header>
        <section className="filter-list expanded">
          <a className="btn btn-close" onClick={handleFilter}>
            -
          </a>
          <Departments departments={departments} />
        </section>
      </header>
    </div>
  );
};

export default ExpandedFilter;
