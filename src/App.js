import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import { v1 as uuid } from "uuid";

class App extends React.Component {
  state = {
    item: "",
    list: [],
    id: uuid(),
    editItem: false,
  };
  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      title: this.state.item,
      id: this.state.id,
    };

    const updateList = [...this.state.list, newItem];
    this.setState({
      list: updateList,
      item: "",
      id: uuid(),
      editItem: false,
    });
  };
  clearList = () => {
    this.setState({
      list: [],
    });
  };
  handleDelete = (id) => {
    const filteredList = this.state.list.filter((element) => element.id !== id);
    this.setState({
      list: filteredList,
    });
  };
  handleEdit = (id) => {
    const filteredList = this.state.list.filter((element) => element.id !== id);
    const selectedItem = this.state.list.find((element) => element.id === id);

    this.setState({
      list: filteredList,
      item: selectedItem.title,
      id: id,
      editItem: true,
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              list={this.state.list}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
