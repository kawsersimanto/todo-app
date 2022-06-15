import Storage from "./storage.js";

export default class UI {
  static addItemToList(todo) {
    const div = document.createElement("div");
    div.className =
      "todo border-1 shadow w-50 m-auto mt-3 d-flex align-items-center justify-content-between p-3";
    div.innerHTML = `
    <li>${todo}</li>
    <div class="buttons">
      <button class="bg-warning custom_border">
        <i class="fas fa-trash c_trash text-white"></i>
      </button>
      <button class="bg-warning custom_border">
        <i class="fas fa-check-square c_check text-white"></i>
      </button>
    </div>
    `;
    const todoList = document.querySelector(".todo-list");
    todoList.append(div);
  }

  static deleteTodo(element) {
    if (element.classList.contains("c_trash")) {
      const todo = element.parentElement.parentElement.parentElement;
      Storage.removeItems(todo.children[0].innerText);
      todo.remove();
      this.showAlert("Todo Deleted", "danger");
    }
  }

  static clearFields() {
    document.querySelector(".todo-input").value = "";
  }

  static showAlert(message, color) {
    const div = document.createElement("div");
    div.className = `mt-4 w-50 m-auto p-3 alert alert-${color} text-white text-start`;
    div.innerText = message;
    const container = document.querySelector(".container");
    const title = document.querySelector(".title");
    container.insertBefore(div, title);
    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 2000);
  }

  static addLineThrough(element) {
    const todo = element.parentElement.parentElement.parentElement;
    // transition
    const transitionTime = 0.4;
    const noEase = 0;
    todo.style.transition = `all ${transitionTime}s ease ${noEase}s`;
    if (element.classList.contains("c_check")) {
      const todo = element.parentElement.parentElement.parentElement;
      const li = element.parentElement.parentElement.previousElementSibling;
      // styles
      li.style.textDecoration = "line-through";
      todo.style.opacity = ".5";
    }
  }
}
