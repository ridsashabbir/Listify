import "./App.css";
import React from "react";
import Signup from "./Components/Signup";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import AddTodos from "./Components/AddTodos";
import AllTasks from "./Components/AllTasks";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/addtodos" element={<AddTodos />} />
        <Route path="/alltasks" element={<AllTasks />} />
      </Routes>
    </>
  );
}

export default App;
