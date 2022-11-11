import PropTypes from "prop-types";

const GroupList = ({
  items,
  onItemSelect,
  itemKey,
  itemValue,
  selectedItem,
}) => {
  // создаем универсальный grouplist для разных данных
  return (
    <ul className="list-group m-4">
      {Object.keys(items).map((c) => (
        <li
          key={items[c][itemKey]}
          className={
            "list-group-item" + (selectedItem === items[c] ? " active" : "")
          }
          onClick={() => onItemSelect(items[c])}
          role="button">
          {items[c][itemValue]}
        </li>
      ))}
    </ul>
  );
};

GroupList.propTypes = {
  items: PropTypes.object.isRequired,
  itemKey: PropTypes.string.isRequired,
  itemValue: PropTypes.string.isRequired,
  onItemSelect: PropTypes.func,
  selectedItem: PropTypes.object,
};

//установка входящих свойств по-умолчанию
GroupList.defaultProps = {
  itemKey: "_id",
  itemValue: "name",
};

export default GroupList;
