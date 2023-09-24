import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AddTodos.css"; // Import the CSS file

function AddTodos() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    // Perform add todo logic here
  };

  return (
    <div className="add-todos-container">
      <h1>Add Todos</h1>
      <form onSubmit={handleAddTodo}>
        <div>
          <label>Todo Title:</label>
          <input
            type="text"
            value={todoTitle}
            onChange={(e) => setTodoTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Todo Description:</label>
          <textarea
            value={todoDescription}
            onChange={(e) => setTodoDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <button type="submit">Add Todo</button>
        </div>
      </form>
      <div className="link">
        Go to see all of your todos <Link to="/alltasks">All Tasks</Link>
      </div>
    </div>
  );
}

export default AddTodos;
