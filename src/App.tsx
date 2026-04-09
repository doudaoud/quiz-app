import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Home from "./pages/Home";
import { responseContext, type Reponse } from "./context/responseContsxt";

export default function App(): React.ReactElement {
  const [response, setResponse] = React.useState<Reponse>({});
  const [quizDuration, setQuizDuration] = React.useState<number>(0);

  return (
    <responseContext.Provider
      value={{ quizDuration, response, setQuizDuration, setResponse }}
    >
      <React.Fragment>
        <Routes>
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </React.Fragment>
    </responseContext.Provider>
  );
}
