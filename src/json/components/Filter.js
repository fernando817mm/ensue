import React, { useState } from "react";

import CollapsedFilter from "./CollapsedFilter";
import ExpandedFilter from "./ExpandedFilter";
import ActiveFilter from "./ActiveFilter";

const Filter = (props) => {
  const [open, setOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState(false);
  const [filterData, setFilterData] = useState(null);
  const { departmentArr, changeSubject } = props;

  const handleFilter = (e) => {
    e.preventDefault();
    return setOpen(!open);
  };

  const handleActive = (e) => {
    e.preventDefault();
    return setActiveFilter(!activeFilter);
  };

  const handleFilterData = (obj) => {
    setFilterData(obj);
  };

  if (!open) {
    return <CollapsedFilter handleFilter={handleFilter} />;
  } else if (open && !activeFilter) {
    return (
      <ExpandedFilter
        handleFilter={handleFilter}
        departments={departmentArr}
        handleActive={handleActive}
        handleFilterData={handleFilterData}
        changeSubject={changeSubject}
      />
    );
  } else if (open && activeFilter) {
    return (
      <ActiveFilter
        handleFilter={handleFilter}
        handleActive={handleActive}
        filterData={filterData}
        changeSubject={changeSubject}
      />
    );
  } else {
    return <h1>No data available</h1>;
  }
};

export default Filter;
