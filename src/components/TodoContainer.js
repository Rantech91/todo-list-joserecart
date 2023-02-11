import React, { useState } from "react";
import TodoForm from "./TodoForm";
import "../stylesheets/TodoContainer.css";
import Todo from "./Todo";

export default function TodoContainer() {
  const [todos, setTodos] = useState([]);

  const addTask = (todo) => {
    if (todo.text.trim()) {
      todo.text = todo.text.trim();
      const updatedTodos = [todo, ...todos];
      setTodos(updatedTodos);
    }
  };

  const removeTask = (id) => {
    const updatedTodos = todos.filter((task) => task.id !== id);
    setTodos(updatedTodos);
    console.log(todos);
  };

  const completeTask = (id) => {
    const updatedTodos = todos.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTodos(updatedTodos);
  };
  return (
    <>
      <TodoForm onSubmit={addTask} />
      <div className="todo-list-container">
        {todos.map((todo) => {
          return (
            <Todo
              text={todo.text}
              completed={todo.completed}
              key={todo.id}
              id={todo.id}
              removeTask={removeTask}
              completeTask={completeTask}
            />
          );
        })}
      </div>
    </>
  );
}
