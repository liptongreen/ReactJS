import React from "react";
import "./TodoItemList.css";

/* const important = "important";
const like = "like"; */

class TodoItemList extends React.Component {
  state = {
    important: "important",
  };
  render() {
    return (
      <li className="list-group-item">
        <div className="app-list-item d-flex justify-content-between">
          <span
            className="app-list-item-label"
            id={this.props.id}
            onClick={this.props.makeLike}
          >
            {this.props.title}
          </span>
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-center align-items-center">
              <button
                type="button"
                className="btn-check btn-sm"
                onClick={this.props.makeCheck}
              >
                <i className="fa fa-check"></i>
              </button>
              <button type="button" className="btn-trash btn-sm">
                <i className="fa fa-trash-o"></i>
              </button>
              <i className="fa fa-heart"></i>
            </div>
          </div>
        </div>
      </li>
    );
  }
}
/* const TodoListItem = (props) => {
  return (
    <li className="list-group-item">
      <div className="app-list-item d-flex justify-content-between">
        <span className="app-list-item-label" id={props.id}>
          {props.title}
        </span>
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-center align-items-center">
            <button type="button" className="btn-check btn-sm">
              <i className="fa fa-check"></i>
            </button>
            <button type="button" className="btn-trash btn-sm">
              <i className="fa fa-trash-o"></i>
            </button>
            <i className="fa fa-heart"></i>
          </div>
        </div>
      </div>
    </li>
  );
}; */

export default TodoItemList;
