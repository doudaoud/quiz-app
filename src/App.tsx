import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Home from "./pages/Home";
export default function App(): React.ReactElement {
  return (
    <React.Fragment>
      {/* routes */}

      <Routes>
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </React.Fragment>
  );
}
