import React, { useState } from "react";
import "./AllTasks.css"; // Import the CSS file

function AllTasks() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Todo Title 1",
      description: "Todo Description 1",
      status: "In Progress",
      timestamp: new Date(),
    },
    {
      id: 2,
      title: "Todo Title 2",
      description: "Todo Description 2",
      status: "In Progress",
      timestamp: new Date(),
    },
    {
      id: 3,
      title: "Todo Title 1",
      description: "Todo Description 1",
      status: "Completed",
      timestamp: new Date(),
    },
  ]);

  const deleteTodo = (todoId) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  const toggleStatus = (todoId) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId
          ? {
              ...todo,
              status:
                todo.status === "In Progress" ? "Completed" : "In Progress",
            }
          : todo
      )
    );
  };

  return (
    <div>
      <h1>All Tasks</h1>
      <div className="all-tasks-container">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className={`task-card ${
              todo.status === "In Progress" ? "in-progress" : "completed"
            }`}
          >
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
            <p className="status">Status: {todo.status}</p>
            <p className="timestamp">
              Added on: {todo.timestamp.toLocaleString()}
            </p>
            <button
              className="delete-button"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
            <button
              className="toggle-button"
              onClick={() => toggleStatus(todo.id)}
            >
              Toggle Status to{" "}
              {todo.status === "In Progress" ? "Completed" : "In Progress"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllTasks;
