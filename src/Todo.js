import { useState } from "react";
import Trash from "./trash.png";

const Todo = ({ index, list, setList }) => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="todo-task">
      <div className="row">
        <input
          type="checkbox"
          checked={checked}
          name="todo-checkbox"
          onClick={(e) => {
            setChecked(e.target.checked);
          }}
        />
        <div
          className="todo-text"
          style={
            checked
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          {list[index]}
        </div>
      </div>
      <img
        src={Trash}
        class="delete-btn fas fa-trash"
        alt="Delete"
        onClick={(e) => {
          const ls = [...list];
          ls.splice(index, 1);
          setList(ls);
        }}
        // onclick={}
      />
    </div>
  );
};

export default Todo;
