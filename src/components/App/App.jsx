import React from "react";
import TodoTitle from "../TodoTitle/TodoTitle";
import TodoSearch from "../TodoSearch/TodoSearch";
import TodoAdd from "../TodoAdd/TodoAdd";
import TodoItem from "../TodoItem/TodoItem";
import "./App.css";
import nextId from "react-id-generator";

class App extends React.Component {
  state = {
    todos: [
      { id: nextId(), title: "Learn React", important: false, like: false },
      { id: nextId(), title: "Learn Redax", important: false, like: false },
      { id: nextId(), title: "Learn Hooks", important: false, like: false },
    ],
    filter: "All",
    term: "",
    numberLike: "0",
    all: "0",
  };

  addItem = (title) => {
    const newTodo = {
      id: nextId(),
      title: title,
      important: false,
      like: false,
    };

    this.setState((prevState) => {
      return {
        todos: [...prevState.todos, newTodo],
      };
    });
  };

  deleteItem = (id) => {
    this.setState((prevState) => {
      return {
        todos: prevState.todos.filter((todo) => todo.id !== id),
      };
    });
  };

  toggleLike = (id) => {
    this.setState((prevState) => {
      const newArr = prevState.todos.map((todo) => {
        if (todo.id === id) {
          todo.like = !todo.like;
        }
        return todo;
      });
      return {
        todos: newArr,
      };
    });
  };

  toggleImportant = (id) => {
    this.setState((prevState) => {
      const newArr = prevState.todos.map((todo) => {
        if (todo.id === id) {
          todo.important = !todo.important;
        }
        return todo;
      });
      return {
        todos: newArr,
      };
    });
  };

  searchItems = (filter) => {
    this.setState(() => {
      return {
        filter: filter,
      };
    });
  };

  searchValues = (term) => {
    this.setState(() => {
      return {
        term: term,
      };
    });
  };

  filteredSearchItems = (arr, term) => {
    if (term.lenght === 0) {
      return arr;
    } else {
      return arr.filter((item) => item.title.includes(term));
    }
  };

  filteredItems = (arr, filter) => {
    if (filter === "liked") {
      return arr.filter((item) => item.like === true);
    } else if (filter === "important") {
      return arr.filter((item) => item.important === true);
    } else {
      return arr;
    }
  };

  render() {
    const { todos, filter, term } = this.state;
    const visibleTodos = this.filteredItems(
      this.filteredSearchItems(todos, term),
      filter
    );
    const numberOfItem = () => {
      return todos.length;
    };
    const numberOfLike = () => {
      let arrLike = todos.filter((element) => element.like === true);
      return arrLike.length;
    };

    const arrNote = ["запись", "записи", "записей"];
    const note = () => {
      let sEnding, i, iNumber;
      iNumber = numberOfItem() % 100;

      if (iNumber >= 11 && iNumber <= 19) {
        sEnding = arrNote[2];
      } else {
        i = iNumber % 10;
        switch (i) {
          case 1:
            sEnding = arrNote[0];
            break;
          case 2:
          case 3:
          case 4:
            sEnding = arrNote[1];
            break;
          default:
            sEnding = arrNote[2];
        }
      }
      return sEnding;
    };

    return (
      <div className="app">
        <TodoTitle
          numberOfItem={numberOfItem}
          numberOfLike={numberOfLike}
          note={note}
        />
        <TodoSearch
          searchItems={this.searchItems}
          searchValues={this.searchValues}
        />
        <TodoItem
          todos={visibleTodos}
          onToggleLike={this.toggleLike}
          onToggleImp={this.toggleImportant}
          onDeleteItem={this.deleteItem}
        />
        <TodoAdd addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
