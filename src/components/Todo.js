import React from "react";
import "../stylesheets/Todo.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function Todo({
  text,
  completed,
  id,
  completeTask,
  removeTask,
}) {
  return (
    <div className={completed ? "todo-container completed" : "todo-container"}>
      <div className="todo-text" onClick={() => completeTask(id)}>
        {text}
      </div>
      <div className="todo-icons-container">
        <AiOutlineCloseCircle
          className="todo-icon"
          onClick={() => {
            removeTask(id);
          }}
        />
      </div>
    </div>
  );
}
