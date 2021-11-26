import Trash from "./trash.png";

const Todo = ({ index, todo, deleteTodo, setChecked }) => {
  return (
    <div className="todo-task">
      <div className="row">
        <input
          type="checkbox"
          checked={todo.checked}
          name="todo-checkbox"
          onChange={(e) => {
            setChecked(e.target.checked, index);
          }}
        />
        <div
          className="todo-text"
          style={
            todo.checked
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          {todo.text}
        </div>
      </div>
      <img
        src={Trash}
        className="delete-btn"
        alt="Delete"
        onClick={(e) => {
          deleteTodo(index);
        }}
      />
    </div>
  );
};

export default Todo;
