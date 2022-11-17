import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import PropTypes from "prop-types";

const Table = ({ currentSort, onSort, columns, onDelete, data }) => {
  return (
    <table className="table table-striped table-hover ">
      <TableHeader {...{ currentSort, onSort, columns }} />
      <TableBody {...{ columns, onDelete, data }} />
    </table>
  );
};

Table.propTypes = {
  onDelete: PropTypes.func,
  onSort: PropTypes.func,
  currentSort: PropTypes.object,
  data: PropTypes.array,
  columns: PropTypes.object,
};
export default Table;
