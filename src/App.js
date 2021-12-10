import "./App.css";
import React, { useState, useRef } from "react";
import Todo from "./Todo";

function App() {
  const [todoList, setTodoList] = useState([]);
  const InputRef = useRef();

  const addTodo = (e) => {
    e.preventDefault();
    const val = InputRef.current ? InputRef.current.value : "";
    if (val === "") {
      alert("Can't Add empty todo");
      return;
    }
    const arr = [...todoList];
    arr.push({ text: val, checked: false });
    setTodoList(arr);
    InputRef.current.value = "";
  };

  const deleteTodo = (index) => {
    const ls = [...todoList];
    ls.splice(index, 1);
    setTodoList(ls);
  };

  const setChecked = (check, i) => {
    const ls = [...todoList];
    ls[i].checked = check;
    setTodoList(ls);
  };

  return (
    <div className="main-wrapper">
      <h1>Todoist</h1>
      <div className="main-form">
        <form className="todo-form" id="todo-form" onSubmit={(e) => addTodo(e)}>
          <input
            ref={InputRef}
            type="text"
            placeholder="What will you do today?"
          />
          <input type="submit" value="ADD" />
        </form>
        <div className="list-wrapper" id="list-wrapper">
          {todoList.map((li, i) => (
            <Todo
              key={i}
              index={i}
              todo={li}
              deleteTodo={deleteTodo}
              setChecked={setChecked}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
