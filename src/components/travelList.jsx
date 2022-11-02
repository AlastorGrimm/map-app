import React from "react";

const TravelList = (props) => {
  console.log(props);
  const travellings = props.data;

  return (
    <div className="m-4">
      <div className="d-flex justify-content-between">
        <div>
          <h2>Список путешествий</h2>
        </div>
        <div>
          <h3>
            <span className="text-info">
              Всего путешествий: {travellings.length}
            </span>
          </h3>
        </div>
      </div>

      {travellings.length > 0 && (
        <table className="table table-striped table-hover">
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
            {travellings.map((travel, index) => (
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
      )}
    </div>
  );
};

export default TravelList;
