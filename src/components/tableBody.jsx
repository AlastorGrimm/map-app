import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const TableBody = ({ data, columns, onDelete }) => {
  return (
    <tbody>
      {data.map((item) => (
        <tr key={item.id}>
          {Object.keys(columns).map((c) => (
            <td key={c}>
              {columns[c].component ? (
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => onDelete(item.id)}>
                  Удалить
                </button>
              ) : c === "dateEnd" ? (
                item.dateEnd ? (
                  item.dateEnd
                ) : (
                  "По н.в."
                )
              ) : c === "isfinished" ? (
                item.isfinished ? (
                  "Завершено"
                ) : (
                  "В процессе"
                )
              ) : (
                _.get(item, columns[c].path)
              )}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

TableBody.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.object.isRequired,
  onDelete: PropTypes.func,
};
export default TableBody;
