import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import {useSelector} from "react-redux"
import store from "./redux/store";
function App() {
  const user = useSelector((state) => state.user.userInfo);
  store.subscribe(() => localStorage.setItem("user", JSON.stringify(store.getState().user.userInfo)));
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  )
}
export default App;