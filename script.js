var currentId = 0;

document.getElementById("todo-form").addEventListener("submit", (e) => {
  e.preventDefault();
});

const addTodo = () => {
  var todoText = document.getElementById("todo-text").value;
  document.getElementById("todo-text").value = "";
  const elem = `
        <div class="todo-task" id="todo-task-${currentId}">
          <div class="row">
            <input type="checkbox" name="todo-checkbox" onclick="cutTodo('todo-task-${currentId}')" />
            <div class="todo-text">${todoText}</div>
          </div>
          <i class="delete-btn fas fa-trash" onclick="deleteTodo('todo-task-${currentId}')"></i>
        </div>`;
  // const elem = document.createElement(content);
  document.getElementById("list-wrapper").innerHTML += elem;
  currentId++;
};

const cutTodo = (id) => {
  const todo = document.getElementById(id);
  if (todo.children[0].children[0].checked)
    todo.children[0].children[1].style.textDecoration = "line-through";
  else todo.children[0].children[1].style.textDecoration = "none";
};

const deleteTodo = (id) => {
  document.getElementById(id).remove();
};
