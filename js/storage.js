import UI from "./ui.js";

export default class Storage {
  static checkLocalStorage() {
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
  }
  static getItems() {
    const todos = this.checkLocalStorage();
    todos.forEach((todo) => {
      UI.addItemToList(todo);
    });
  }
  static saveItems(todo) {
    const todos = this.checkLocalStorage();
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  static removeItems(todo) {
    const todos = this.checkLocalStorage();
    const todoIndex = todo;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
  }
}
