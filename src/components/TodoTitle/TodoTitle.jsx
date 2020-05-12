import React from "react";
import "./TodoTitle.css";

const TodoTitle = (props) => {
  const { numberOfItem, numberOfLike, note } = props;
  return (
    <div className="app-header d-flex">
      <h1>Имя</h1>
      <h2>
        {numberOfItem()} {note()}, из них понравилось {numberOfLike()}
      </h2>
    </div>
  );
};

export default TodoTitle;
