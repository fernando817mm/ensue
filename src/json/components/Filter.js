import React, { useState } from "react";

import CollapsedFilter from "./CollapsedFilter";
import ExpandedFilter from "./ExpandedFilter";

const Filter = (props) => {
  const [open, setOpen] = useState(false);
  const { departmentArr } = props;

  const handleFilter = (e) => {
    e.preventDefault();
    return setOpen(!open);
  };

  return !open ? (
    <CollapsedFilter handleFilter={handleFilter} />
  ) : (
    <ExpandedFilter handleFilter={handleFilter} departments={departmentArr} />
  );
};

export default Filter;
