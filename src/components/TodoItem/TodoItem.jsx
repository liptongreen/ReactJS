import React from "react";
import TodoItemList from "../TodoItemList/TodoItemList";
import "./TodoItem.css";

const TodoItem = (props) => {
  const { todos, makeCheck, makeLike } = props;
  return (
    <ul className="app-list list-group">
      {todos.map((todo) => {
        return (
          <TodoItemList
            id={todo.id}
            title={todo.title}
            makeCheck={() => {
              makeCheck(todo.id);
            }}
            makeLike={() => {
              makeLike(todo.id);
            }}
          />
        );
      })}
    </ul>
  );
};

export default TodoItem;
