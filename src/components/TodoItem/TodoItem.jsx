import React from "react";
import TodoItemList from "../TodoItemList/TodoItemList";
import "./TodoItem.css";

const TodoItem = (props) => {
  const { todos, onToggleLike, onToggleImp, onDeleteItem } = props;
  return (
    <ul className="app-list list-group">
      {todos.map((todo) => {
        return (
          <TodoItemList
            key={todo.id}
            title={todo.title}
            important={todo.important}
            like={todo.like}
            onToggleLike={() => {
              onToggleLike(todo.id);
            }}
            onToggleImp={() => {
              onToggleImp(todo.id);
            }}
            onDeleteItem={() => {
              onDeleteItem(todo.id);
            }}
          />
        );
      })}
    </ul>
  );
};

export default TodoItem;
