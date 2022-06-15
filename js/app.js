import UI from "./ui.js";
import Storage from "./storage.js";

// events
document.querySelector(".todo-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const todoInputValue = document.querySelector(".todo-input").value;
  if (todoInputValue === "" || todoInputValue === null) {
    UI.showAlert("Please add a todo", "danger");
  } else {
    UI.addItemToList(todoInputValue);
    UI.showAlert("Todo Added", "warning");
    Storage.saveItems(todoInputValue);
    UI.clearFields();
  }
});

document.querySelector(".todo-list").addEventListener("click", (e) => {
  UI.deleteTodo(e.target);
  UI.addLineThrough(e.target);
});

document.addEventListener("DOMContentLoaded", Storage.getItems());
