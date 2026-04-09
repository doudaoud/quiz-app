import { useCallback } from "react";
import { useNavigate, type NavigateFunction } from "react-router-dom";
import TextType from "../TypeText/TypeText";
import "../App.css";
import React from "react";


export default function Home() {
  const navigate: NavigateFunction = useNavigate();
 
  const handleButtonClick = useCallback(() => {
    navigate("/quiz");
  }, [navigate]);
  
  return (
    <div className="container">
      <h1 className="title">Quiz Master</h1>
      <p className="description">
        Testez vos connaissances générales avec notre quiz interactif. Vous
        aurez 60 secondes pour répondre à 10 questions.
      </p>
      <div className="information-quiz">
        <div className="titles">
          <p>Nombre de questions</p>
          <p>Temps limite</p>
          <p>Format</p>
        </div>
        <div className="infos">
          <p className="hello">10</p>
          <p>60 secondes</p>
          <p>Choix multiple</p>
        </div>
      </div>
      <button
        className="commancer-quiz"
        onClick={handleButtonClick}
        title="Commencer le quiz"
      >
        <p>
          <TextType
            text={[
              "Commencer le quiz",
              "Prêt à relever le défi ?",
              "Testez vos connaissances maintenant !",
            ]}
            typingSpeed={100}
            pauseDuration={1500}
            showCursor
            cursorCharacter="_"
            deletingSpeed={50}
            variableSpeedEnabled={false}
            variableSpeedMin={60}
            variableSpeedMax={120}
            cursorBlinkDuration={0.5}
          />
        </p>
      </button>
      <p className="instruction">
        Cliquez sur "Commencer" pour démarrer. Vous pouvez rejouer autant de
        fois que vous le souhaitez.
      </p>
    </div>
  );
}
