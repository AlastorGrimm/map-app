import React, { useState, useEffect } from "react";
import Pagination from "./pagination";
import GroupList from "./groupList";
import TravellingTable from "./travellingTable";
import { cropPages } from "../utils/paginate.js";
import api from "../api/index";
import _ from "lodash";

const TravelList = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [countries, setCountries] = useState();
  const [selectedCountry, setSelectedCountry] = useState();
  const [travellings, setTravellings] = useState(props.data);
  const [sortBy, setSortBy] = useState({ iter: "travelName", order: "asc" });

  const pageSize = 10;

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const handleItemSelect = (selectedItem) => {
    setSelectedCountry(selectedItem);
  };

  const handleDeleteTravel = (id) => {
    let newTravellings = [...travellings];
    newTravellings = newTravellings.filter((t) => t.id !== id);
    setTravellings(newTravellings);
  };

  //универсальные методы заводим в utils
  const filteredTravellings = selectedCountry
    ? travellings.filter((t) => t.country === selectedCountry.name)
    : travellings;

  const sortedUsers = _.orderBy(
    filteredTravellings,
    [sortBy.iter],
    [sortBy.order]
  );
  const handleResetFilters = () => {
    setSelectedCountry();
  };

  const handleSort = (item) => {
    setSortBy(item);
  };

  const itemsCount = filteredTravellings.length;
  const cropedPages = cropPages(sortedUsers, currentPage, pageSize);

  useEffect(() => {
    api.countries.fetchAll().then((response) => setCountries(response));
  }, []);

  // делаем переход на первую страницу, когда фильтруем страны
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCountry]);

  return (
    <div className="m-4">
      <div className="d-flex justify-content-between">
        <div>
          <h2>Список путешествий</h2>
        </div>
        <div>
          <h3>
            <span className="text-info">
              Всего путешествий: {filteredTravellings.length}
            </span>
          </h3>
        </div>
      </div>

      {travellings.length > 0 && (
        <div className="d-flex w-100">
          <div className="w-25">
            {countries && (
              <>
                <GroupList
                  items={countries}
                  onItemSelect={handleItemSelect}
                  selectedItem={selectedCountry}
                />
                <button
                  className="btn btn-secondary m-4"
                  onClick={handleResetFilters}>
                  Сбросить
                </button>
              </>
            )}
          </div>
          <div className="w-75">
            <TravellingTable
              cropedPages={cropedPages}
              onDelete={handleDeleteTravel}
              onSort={handleSort}
              currentSort={sortBy}
            />
            <div className="d-flex justify-content-center">
              <Pagination
                itemsCount={itemsCount}
                pageSize={pageSize}
                onPageChange={handlePageChange}
                currentPage={currentPage}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TravelList;
