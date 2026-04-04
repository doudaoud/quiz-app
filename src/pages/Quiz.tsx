import React from "react";

export default function Quiz() {
  const [time, setTime] = React.useState<string | null>();
  const [value, setValue] = React.useState<number>(100);
  return (
    <React.Fragment>
      <div className="container_quiz">
        <h3>Time left:</h3>
        <div className="progress">
          <div className="progress-fill" style={{ width: `${value}%` }} />
        </div>
        <p className="temps_restant">Temps restant</p>

        <p className="question_num">Question sur 10</p>
        <div className="progress">
          <div className="progress-fill" style={{ width: `${value}%` }} />
        </div>
        <div className="cadre_quiz">
          <h2 className="qustion">
            Quel est le plus grand océan du monde ?
          </h2>
          <p>
            Question 1 sur 10
          </p>
          <div className="reponses">
            
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
