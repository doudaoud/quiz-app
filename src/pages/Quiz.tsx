import React, { type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { responseContext } from "../context/responseContsxt";

type reponse = {
  [key: number | string]: string;
};
type Question = {
  question: string;
  proposition: string[];
  reponse: string;
};


const questionn: Record<number, Question> = {
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
  const [i, setI] = React.useState<number | null>();
  const [value, setValue] = React.useState<number>(100);
  const [progression, setProgression] = React.useState<number>(10);
  const { response ,  setResponse} = React.useContext(responseContext);
  const [selected, setSelected] = React.useState<string>("");
  const onchangeSelect = (event: ChangeEvent<HTMLInputElement>) => {
    setSelected(event.target.value);
  };

  const [dejaAfficher, setDejaAfficher] = React.useState<number[]>([]);
  const didInit = React.useRef(false);
  const navigate = useNavigate();

  const keys = React.useMemo(() => {
    return Object.keys(questionn);
  }, []);

  const onClicked = (): void => {
    if (dejaAfficher.length === keys.length) {
      navigate("/result");
      console.log(response)
      return;
    }

    let randomIndex;

    do {
      randomIndex = Math.floor(Math.random() * keys.length);
    } while (dejaAfficher.includes(randomIndex));

    setDejaAfficher((prev) => [...prev, randomIndex]);
    setI(randomIndex + 1);
    setSelected("");
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
        setValue(value - 1.7);
      } else {
        clearInterval(interval);
        navigate("/result");
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);
  React.useEffect(() => {
    if (didInit.current) return;
    didInit.current = true;
    onClicked();
  }, []);
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
          {/* {question[1].question} */}
          <div
            className={
              time <= 30 && time > 10
                ? " progress-fill orange "
                : time <= 10
                  ? "progress-fill red"
                  : "progress-fill"
            }
            style={{ width: `${value}%` }}
          />
        </div>
        <p className="temps_restant">Temps restant</p>

        <p className="question_num">Question {dejaAfficher.length} sur 10</p>
        <div className="progress">
          <div className="progress-fill" style={{ width: `${progression}%` }} />
        </div>
        <div className="cadre_quiz">
          <h2 className="qustion">
            {i === null || i === undefined ? "" : `${questionn[i].question} `}
          </h2>
          <p className="num_question">Question {dejaAfficher.length} sur 10</p>
          <div className="reponses">
            {(i === null || i === undefined
              ? []
              : questionn[i].proposition
            ).map((proposition) => (
              <label className="carte" key={proposition}>
                <input
                  type="radio"
                  name="res"
                  id={i !== null && i !== undefined ? i.toString() : "1"}
                  title="question 1"
                  className="radio"
                  value={proposition}
                  onChange={onchangeSelect}
                  checked={selected === proposition}
                />
                <span>{proposition}</span>
              </label>
            ))}
            <button
              className="suivant"
              disabled={selected === "" ? true : false}
              onClick={() => {
                if (i !== null && i !== undefined) {
                  setResponse((prev:reponse) => ({
                    ...prev,
                    [i]: selected,
                  }) );
                }
                setProgression((prev) => prev + 10);
                onClicked();
              }}
            >
              Suivant
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
