import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link

function AddTodos() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    // Perform add todo logic here
  };

  return (
    <div>
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
      Go to see all of your todos <Link to="/alltasks">All Tasks</Link>{" "}
    </div>
  );
}

export default AddTodos;
