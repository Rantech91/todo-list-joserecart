import React, { useState } from "react";
import "../stylesheets/TodoForm.css";
import { v4 as uuidv4 } from "uuid";

export default function TodoForm(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // I NEED TO FIND A WAY TO CLEAR THE INPUT FIELD AFTER SUBMITTING
  function handleSubmit(e) {
    e.preventDefault();
    setInput(""); // THIS ONE IS NOT DOING THE TRICK
    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false,
    };
    props.onSubmit(newTask);
    console.log(setInput);
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="Add an item to your list"
        name="text"
        onChange={handleChange}
      />
      <button className="todo-button" type="submit">
        Add task
      </button>
    </form>
  );
}
