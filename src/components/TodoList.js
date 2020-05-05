import React, { Component } from "react";
import TodoItem from "./TodoItem";
export default class TodoList extends Component {
  render() {
    const { list, clearList, handleDelete, handleEdit } = this.props;
    return (
      <div>
        <ul className="list-group my-5">
          <h3 className="text-capitalize text-center">todo list</h3>
          {list.map((element) => {
            return (
              <TodoItem
                key={element.id}
                title={element.title}
                handleDelete={() => handleDelete(element.id)}
                handleEdit={() => handleEdit(element.id)}
              />
            );
          })}
          <button
            type="button"
            className=" btn btn-danger btn-block text-capitalize mt-5"
            onClick={clearList}
          >
            clear list
          </button>
        </ul>
      </div>
    );
  }
}
