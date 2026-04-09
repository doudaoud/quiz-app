import React from "react";
import { useNavigate } from "react-router-dom";
import { responseContext } from "../context/responseContsxt";
import { questions, totalQuestions } from "../data/questions";

export default function Result() {
  const { quizDuration, response, setQuizDuration, setResponse } =
    React.useContext(responseContext);
  const navigate = useNavigate();

  const correctAnswers = Object.entries(response).filter(([key, value]) => {
    return questions[Number(key)]?.reponse === value;
  }).length;

  const wrongAnswers = Math.max(totalQuestions - correctAnswers, 0);
  const completionRate = Math.round((correctAnswers / totalQuestions) * 100);
  const elapsedTime = `${quizDuration}s`;

  return (
    <section className="result-page">
      <div className="result-layout">
        <div className="result-hero">
          <h1 className="result-title">A bientot !</h1>
          <p className="result-description">
            Reessayez pour ameliorer votre score.
          </p>
        </div>

        <article className="result-score-card">
          <p className="result-score-label">Votre score</p>
          <h2 className="result-score-percent">{completionRate}%</h2>
          <p className="result-score-text">
            {correctAnswers}/{totalQuestions} reponses correctes
          </p>
        </article>

        <div className="result-stats">
          <article className="result-stat-card">
            <p className="result-stat-label">Bonnes reponses</p>
            <strong className="result-stat-value">{correctAnswers}</strong>
          </article>

          <article className="result-stat-card">
            <p className="result-stat-label">Mauvaises reponses</p>
            <strong className="result-stat-value result-stat-value-wrong">
              {wrongAnswers}
            </strong>
          </article>

          <article className="result-stat-card">
            <p className="result-stat-label">Temps</p>
            <strong className="result-stat-value">{elapsedTime}</strong>
          </article>
        </div>

        <button
          className="result-replay-button"
          onClick={() => {
            setResponse({});
            setQuizDuration(0);
            navigate("/quiz");
          }}
        >
          Rejouer
        </button>

        <p className="result-footer-text">
          Les questions seront melangees aleatoirement a chaque nouvelle
          partie.
        </p>
      </div>
    </section>
  );
}
