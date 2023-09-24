import "./App.css";
import React from "react";
import Signup from "./Components/Signup";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
