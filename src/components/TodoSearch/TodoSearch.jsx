import React from "react";
import "./TodoSearch.css";

const TodoSearch = () => {
  return (
    <div className="search-panel d-flex">
      <input
        className="form-control search-input"
        type="text"
        placeholder="Поиск"
      />
      <div className="btn-group">
        <button type="button" className="btn btn-info">
          Все
        </button>
        <button type="button" className="btn btn-outline-secondary">
          Понравилось
        </button>
        <button type="button" className="btn btn-danger">
          Сброс
        </button>
      </div>
    </div>
  );
};

export default TodoSearch;
