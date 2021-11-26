import "./App.css";
import React, { useState, useRef } from "react";
import Todo from "./Todo";

function App() {
  const [todoList, setTodoList] = useState([]);
  const InputRef = useRef();

  const addTodo = (e) => {
    e.preventDefault();
    const val = InputRef.current ? InputRef.current.value : "";
    const arr = [...todoList];
    arr.push(val);
    console.log("in addTodo", arr);
    setTodoList(arr);
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
            <Todo key={i} index={i} list={todoList} setList={setTodoList} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
