import React from "react";
import TextType from "./TypeText/TypeText";

export default function App() {
  return (
    <React.Fragment>
      <div className="container">
        <h1>Quiz Master</h1>
        <p>
          Testez vos connaissances générales avec notre quiz interactif. Vous
          aurez 60 secondes pour répondre à 10 questions.
        </p>
        <div>
          <div>
            <p>Nombre de questions</p>
            <p>Temps limite</p>
            <p>Format</p>
          </div>
          <div>
            <p>10</p>
            <p>60 secondes</p>
            <p>Choix multiple</p>
          </div>
        </div>
        <button>
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
