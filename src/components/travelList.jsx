import React, { useState, useEffect } from "react";
import Pagination from "./pagination";
import GroupList from "./groupList";
import { cropPages } from "../utils/paginate.js";
import api from "../api/index";

const TravelList = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [countries, setCountries] = useState();
  const [selectedCountry, setSelectedCountry] = useState();
  const travellings = props.data;

  const pageSize = 5;

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const handleItemSelect = (selectedItem) => {
    setSelectedCountry(selectedItem);
  };
  //универсальные методы заводим в utils
  const filteredTravellings = selectedCountry
    ? travellings.filter((t) => t.country === selectedCountry.name)
    : travellings;

  const handleResetFilters = () => {
    setSelectedCountry();
  };
  const itemsCount = filteredTravellings.length;
  const cropedPages = cropPages(filteredTravellings, currentPage, pageSize);

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
            <table className="table table-striped table-hover ">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Название путешествия</th>
                  <th scope="col">Страна</th>
                  <th scope="col">Начало</th>
                  <th scope="col">Конец</th>
                  <th scope="col">Статус путешествия</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cropedPages.map((travel, index) => (
                  <tr key={travel.id}>
                    <th>{index + 1}</th>
                    <td>{travel.travelName}</td>
                    <td>{travel.country}</td>
                    <td>{travel.dateBegin}</td>
                    <td>{travel.dateEnd ? travel.dateEnd : "По н.в."}</td>
                    <td>{travel.isfinished ? "Завершено" : "В процессе"}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => props.onDelete(travel.id)}>
                        Удалить
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
