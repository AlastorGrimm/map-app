import React from "react";
import PropTypes from "prop-types";
import Table from "./Table";

const TravellingTable = ({ onDelete, cropedPages, onSort, currentSort }) => {
  const columns = {
    travelName: {
      iter: "travelName",
      name: "Название путешествия",
      path: "travelName",
    },
    country: { name: "Страна", path: "country" },
    dateBegin: { name: "Начало", path: "dateBegin" },
    dateEnd: { name: "Конец", path: "dateEnd" },
    isfinished: { name: "Статус путешествия", path: "isfinished" },
    delete: { component: "delete" },
  };

  return (
    <Table
      currentSort={currentSort}
      onSort={onSort}
      columns={columns}
      onDelete={onDelete}
      data={cropedPages}
    />
  );
};

TravellingTable.propTypes = {
  onDelete: PropTypes.func,
  cropedPages: PropTypes.array.isRequired,
  onSort: PropTypes.func,
  currentSort: PropTypes.object,
};
export default TravellingTable;
