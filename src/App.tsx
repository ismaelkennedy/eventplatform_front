// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import BoardLayout from "./components/ui/layouts/board";

export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<BoardLayout />}>
            <Route index element={<HomePage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
    </Router>
  );
}
