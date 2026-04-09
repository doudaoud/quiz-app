import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Home from "./pages/Home";
import { responseContext } from "./context/responseContsxt";
type reponse = {
  [key: number | string]: string;
};
export default function App(): React.ReactElement {
  const [response, setResponse] = React.useState<reponse>(
    [] as unknown as reponse,
  );

  return (
    <responseContext.Provider value={{ response, setResponse }}>
      <React.Fragment>
        {/* routes */}

        <Routes>
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </React.Fragment>
    </responseContext.Provider>
  );
}
