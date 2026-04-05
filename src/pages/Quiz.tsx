import React from "react";
import { useNavigate } from "react-router-dom";
type Question = {
  [key: number]: object;
};
const question: Question  = {
  1: {
    question: "Quelle est la capitale de l’Algérie ?",
    proposition: ["Annaba", "Alger", "Setif", "Oran"],
    reponse: "Alger",
  },
  2: {
    question: "Combien de continents y a-t-il sur Terre ?",
    proposition: ["5", "6", "7", "8"],
    reponse: "7",
  },
  3: {
    question: "Quel est le plus grand océan du monde ?",
    proposition: ["Atlantique", "Indien", "Pacifique", "Arctique"],
    reponse: "Pacifique",
  },
  4: {
    question: "Qui a inventé l’ampoule électrique ?",
    proposition: ["Tesla", "Einstein", "Newton", "Edison"],
    reponse: "Edison",
  },
  5: {
    question: "Quel est le langage utilisé pour styliser les pages web ?",
    proposition: ["HTML", "Python", "CSS", "Java"],
    reponse: "CSS",
  },
  6: {
    question: "Combien de jours y a-t-il dans une année bissextile ?",
    proposition: ["365", "366", "364", "360"],
    reponse: "366",
  },
  7: {
    question: "Quel est l’animal le plus rapide sur terre ?",
    proposition: ["Lion", "Guépard", "Tigre", "Cheval"],
    reponse: "Guépard",
  },
  8: {
    question: "Quelle planète est la plus proche du Soleil ?",
    proposition: ["Vénus", "Terre", "Mars", "Mercure"],
    reponse: "Mercure",
  },
  9: {
    question: "Combien font 9 × 8 ?",
    proposition: ["72", "64", "81", "70"],
    reponse: "72",
  },
  10: {
    question: "Quel est le plus grand désert du monde ?",
    proposition: ["Sahara", "Gobi", "Antarctique", "Kalahari"],
    reponse: "Antarctique",
  },
};
export default function Quiz() {
  const [time, setTime] = React.useState<number>(60);
  const [value, setValue] = React.useState<number>(100);
  const [progression, setProgression] = React.useState<number>(10);
  const navigate = useNavigate();
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
        setValue(value - 1.7);
      } else {
        // alert("Temps écoulé !");
        // window.location.reload();
        window.location.reload();
        clearInterval(interval);
        navigate("/result");
      }
      
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);
  return (
    <React.Fragment>
      <div className="container_quiz">
        <h3>{time === 60 ? "1:00" : `00:${time}`}</h3>
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
          <div className="progress-fill" style={{ width: `${progression}%` }} />
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
