import React from "react";

const CollapsedFilter = (props) => {
  const { handleFilter } = props;

  return (
    <div className="body-wrapper">
      <header>
        <section className="filter-list">
          <a className="btn btn-expand" onClick={handleFilter}>
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
