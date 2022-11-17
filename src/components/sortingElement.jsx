import React from "react";
import PropTypes from "prop-types";

const SortingElement = ({ column, currentSort, onToggleSort }) => {
  return (
    <>
      {column.iter && (
        <div>
          {currentSort.order === "asc" && (
            <i
              className="bi bi-sort-down"
              onClick={() => onToggleSort(column.iter)}
              role="button"></i>
          )}

          {currentSort.order === "desc" && (
            <i
              className="bi bi-sort-up"
              onClick={() => onToggleSort(column.iter)}
              role="button"></i>
          )}
        </div>
      )}
    </>
  );
};

SortingElement.propTypes = {
  column: PropTypes.object,
  currentSort: PropTypes.object,
  onToggleSort: PropTypes.func,
};
export default SortingElement;
