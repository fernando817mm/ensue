/* eslint-disable jsx-a11y/anchor-is-valid */
// a tags don't have h-ref ^^

import React, { useState } from "react";

const ActiveFilter = (props) => {
  const { handleFilter, handleActive, filterData } = props;
  const { subjects } = filterData;

  const [expanded, setExpanded] = useState(false);

  const subjectsArr = [];

  subjects.forEach((subject) => {
    if (subject !== filterData.activeSubject) {
      subjectsArr.push(subject);
    }
  });

  const handleChange = (e) => {
    e.preventDefault();
    console.log("click");
    return setExpanded(!expanded);
  };

  return (
    <header>
      <section className="filter-list">
        <a
          className="btn btn-expand"
          onClick={(e) => {
            handleFilter(e);
            handleActive(e);
          }}
        >
          +
        </a>
        <div className="department-list">
          <div className="department">
            <div className="dept-name active">{filterData.name}</div>
            <div className="subjects-wrapper">
              <div className="subject-name active">
                {filterData.activeSubject}
              </div>
              {!expanded
                ? subjectsArr
                    .filter((sub, idx) => idx < 3)
                    .map((sub, idx) => {
                      return (
                        <div key={idx} className="subject-name">
                          {sub}
                        </div>
                      );
                    })
                : subjectsArr.map((sub, idx) => {
                    return (
                      <div key={idx} className="subject-name">
                        {sub}
                      </div>
                    );
                  })}
              {/* {subjectsArr
                .filter((sub, idx) => idx < 3)
                .map((sub, idx) => {
                  return (
                    <div key={idx} className="subject-name">
                      {sub}
                    </div>
                  );
                })} */}
              <div className="more-less">
                <a onClick={handleChange}>
                  {!expanded
                    ? `+ ${subjectsArr.length - 3} more`
                    : `[collapse]`}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default ActiveFilter;
