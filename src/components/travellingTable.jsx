import React from "react";
import PropTypes from "prop-types";
import Table from "./Table";
import { addTravel } from '../api/travel.api';

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

  function handleAddTravel(e) {
    e.preventDefault();
    const travelName = e.target.elements.travelName.value;
    const country = e.target.elements.country.value;
    const dateBegin = e.target.elements.dateBegin.value;
    const dateEnd = e.target.elements.dateEnd.value;
    const isfinished = e.target.elements.isfinished.checked;

    addTravel({ travelName, country, dateBegin, dateEnd, isfinished });
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
