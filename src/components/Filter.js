import React, { useState } from "react";

import CollapsedFilter from "./CollapsedFilter";
import ExpandedFilter from "./ExpandedFilter";
import ActiveFilter from "./ActiveFilter";

const Filter = (props) => {
  const [filterData, setFilterData] = useState("");
  const [filter, setFilter] = useState(null);
  const { departmentArr, changeSubject } = props;

  const switchCase = (arg) => {
    return setFilter(arg);
  };

  const handleFilterData = (obj) => {
    setFilterData(obj);
  };

  const expanded = "expanded";
  const active = "active";

  switch (filter) {
    case expanded:
      return (
        <ExpandedFilter
          departments={departmentArr}
          switchCase={switchCase}
          handleFilterData={handleFilterData}
          changeSubject={changeSubject}
        />
      );
    case active:
    case filterData !== null:
      return (
        <ActiveFilter
          switchCase={switchCase}
          filterData={filterData}
          changeSubject={changeSubject}
          setFilterData={setFilterData}
        />
      );
    default:
      return <CollapsedFilter switchCase={switchCase} />;
  }
};

export default Filter;
