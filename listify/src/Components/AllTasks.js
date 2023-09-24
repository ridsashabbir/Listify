import React, { useState } from "react";

function AllTasks() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Todo Title 1",
      description: "Todo Description 1",
      status: "In Progress",
    },
    {
      id: 2,
      title: "Todo Title 2",
      description: "Todo Description 2",
      status: "Complete",
    },
  ]);

  const deleteTodo = (todoId) => {
    // Perform delete todo logic here
  };

  return (
    <div>
      <h1>All Tasks</h1>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h2>{todo.title}</h2>
          <p>{todo.description}</p>
          <p>Status: {todo.status}</p>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default AllTasks;
