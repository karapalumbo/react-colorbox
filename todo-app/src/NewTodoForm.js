import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function NewTodoForm({ createTodo }) {

  const [todo, setTodo] = useState("");

  const handleSubmit = evt => {
    evt.preventDefault();
    createTodo({todo, id: uuid()});
    setTodo("");
  };

  const handleChange = evt => {
    setTodo(evt.target.value);
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label htmlFor="todo">Todo:</label>
        <input
         id="todo"
         name="todo"
         value={todo}
         onChange={handleChange}
        />
      <button>Add a new todo!</button>
        </form>
    </div>
  );
};


export default NewTodoForm;