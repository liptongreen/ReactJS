import React from "react";
import TodoTitle from "../TodoTitle/TodoTitle";
import TodoSearch from "../TodoSearch/TodoSearch";
import TodoAdd from "../TodoAdd/TodoAdd";
import TodoItem from "../TodoItem/TodoItem";
import "./App.css";

const makeCheck = (str) => {
  alert(str);
};
const makeLike = (str) => {
  alert(str);
};
const todos = [
  { title: "LearnReact", id: "task0" },
  { title: "LearnRedux", id: "task1" },
  { title: "LearnJS", id: "task2" },
];

function App() {
  return (
    <div className="app">
      <TodoTitle />
      <TodoSearch />
      <TodoItem makeCheck={makeCheck} todos={todos} makeLike={makeLike} />

      <TodoAdd />
    </div>
  );
}

export default App;
