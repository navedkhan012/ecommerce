import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./screens/Home";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header></Header>
        <Routes>
          <Route path="/signup" element={<SignUp />} />

          <Route path="/signin" element={<SignIn />} />

          <Route path="/" exact element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
