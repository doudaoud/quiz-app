import React from "react";
import { useNavigate } from "react-router-dom";
export default function Quiz() {
  const [time, setTime] = React.useState<number>(60);
  const [value, setValue] = React.useState<number>(100);
  const navigate = useNavigate();
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      } else {
        // alert("Temps écoulé !");
        // window.location.reload();
         clearInterval(interval);
         navigate("/result");
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);
  return (
    <React.Fragment>
      <div className="container_quiz">
        <h3>{(time === 60) ? "1:00" :`00:${time}` }</h3>
        <div
          onClick={() => {
            setValue(value - 1);
          }}
          className="progress"
        >
          <div className="progress-fill" style={{ width: `${value}%` }} />
        </div>
        <p className="temps_restant">Temps restant</p>

        <p className="question_num">Question sur 10</p>
        <div className="progress">
          <div className="progress-fill" style={{ width: `${value}%` }} />
        </div>
        <div className="cadre_quiz">
          <h2 className="qustion">Quel est le plus grand océan du monde ?</h2>
          <p className="num_question">Question 1 sur 10</p>
          <div className="reponses">
            <label className="carte">
              <input
                type="radio"
                name="res"
                id="1"
                title="question 1"
                className="radio"
              />
              <span>question 1 </span>
            </label>
            <label className="carte">
              <input
                type="radio"
                name="res"
                id="2"
                title="question 1"
                className="radio"
              />
              <span>question 1 </span>
            </label>{" "}
            <label className="carte">
              <input
                type="radio"
                name="res"
                id="3"
                title="question 1"
                className="radio"
              />
              <span>question 1 </span>
            </label>{" "}
            <label className="carte">
              <input
                type="radio"
                name="res"
                id="4"
                title="question 1"
                className="radio"
              />
              <span>question 1 </span>
            </label>
            <button className="suivant" disabled>
              Suivant
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
