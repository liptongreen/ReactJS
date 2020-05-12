import React from "react";
import "./TodoItemList.css";

const TodoItemList = (props) => {
  const {
    onToggleLike,
    onToggleImp,
    onDeleteItem,
    title,
    important,
    like,
  } = props;

  const importantClass = important ? "important" : "";
  const likeClass = like ? "like" : "";

  return (
    <li className="list-group-item">
      <div
        className={`app-list-item d-flex justify-content-between ${importantClass} ${likeClass}`}
      >
        <span className="app-list-item-label" onClick={onToggleLike}>
          {title}
        </span>
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-center align-items-center">
            <button
              type="button"
              className="btn-check btn-sm"
              onClick={onToggleImp}
            >
              <i className="fa fa-check"></i>
            </button>

            <button
              type="button"
              className="btn btn-trash"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              <i className="fa fa-trash-o"></i>
            </button>
            <i className="fa fa-heart"></i>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCenterTitle">
                Удаление пункта
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">Уверены, что хотите удалить пункт?</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Отмена
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={onDeleteItem}
                data-dismiss="modal"
              >
                Удалить
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default TodoItemList;
