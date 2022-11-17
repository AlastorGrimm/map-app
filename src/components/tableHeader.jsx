import React from "react";
import PropTypes from "prop-types";
import SortingElement from "./sortingElement";

const TableHeader = ({ currentSort, onSort, columns }) => {
  const handleSort = (item) => {
    if (currentSort.iter === item) {
      onSort({
        ...currentSort,
        order: currentSort.order === "asc" ? "desc" : "asc",
      });
    } else {
      onSort({ iter: item, order: "asc" });
    }
  };

  return (
    <thead>
      <tr>
        {Object.keys(columns).map((c) => (
          <th key={c} scope="col">
            <div className="d-flex">
              <div className="me-4">
                {columns[c].name ? columns[c].name : ""}
              </div>
              <SortingElement
                column={columns[c]}
                currentSort={currentSort}
                onToggleSort={handleSort}
              />
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

TableHeader.propTypes = {
  currentSort: PropTypes.object.isRequired,
  onSort: PropTypes.func.isRequired,
  columns: PropTypes.object.isRequired,
};

export default TableHeader;
