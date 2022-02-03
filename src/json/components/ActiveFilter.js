/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from "react";

const ActiveFilter = (props) => {
  const { filterData, changeSubject, switchCase, setFilterData } = props;
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
    return setExpanded(!expanded);
  };

  return (
    <header>
      <section className="filter-list">
        <a
          className="btn btn-expand"
          onClick={(e) => {
            switchCase("expanded");
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
                        <div
                          key={idx}
                          className="subject-name"
                          onClick={(e) => {
                            e.preventDefault();
                            const newActive = {
                              ...filterData,
                              activeSubject: sub,
                            };
                            setFilterData(newActive);
                            changeSubject(newActive.activeSubject);
                          }}
                        >
                          {sub}
                        </div>
                      );
                    })
                : subjectsArr.map((sub, idx) => {
                    return (
                      <div
                        key={idx}
                        className="subject-name"
                        onClick={(e) => {
                          e.preventDefault();
                          const newActive = {
                            ...filterData,
                            activeSubject: sub,
                          };
                          setFilterData(newActive);
                          changeSubject(newActive.activeSubject);
                        }}
                      >
                        {sub}
                      </div>
                    );
                  })}
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
