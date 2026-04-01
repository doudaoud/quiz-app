import React from "react";
import TextType from "./TypeText/TypeText";
import "./App.css";
export default function App():React.ReactElement {
  return (
    <React.Fragment>
      <div className="container">
        <h1 className="title" >Quiz Master</h1>
        <p className="description">
          Testez vos connaissances générales avec notre quiz interactif. Vous
          aurez 60 secondes pour répondre à 10 questions.
        </p>
        <div  className="information-quiz">
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
        <button className="commancer-quiz">
          {" "}
          <p>
            {/* Commencer le quiz */}
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
      </div>
    </React.Fragment>
  );
}
