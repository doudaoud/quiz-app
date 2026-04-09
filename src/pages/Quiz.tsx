import React, { type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { responseContext, type Reponse } from "../context/responseContsxt";
import { questions, totalQuestions } from "../data/questions";

export default function Quiz() {
  const [time, setTime] = React.useState<number>(60);
  const [i, setI] = React.useState<number | null>();
  const [value, setValue] = React.useState<number>(100);
  const [progression, setProgression] = React.useState<number>(10);
  const { setQuizDuration, setResponse } = React.useContext(responseContext);
  const [selected, setSelected] = React.useState<string>("");
  const [dejaAfficher, setDejaAfficher] = React.useState<number[]>([]);
  const didInit = React.useRef(false);
  const navigate = useNavigate();

  const onchangeSelect = (event: ChangeEvent<HTMLInputElement>) => {
    setSelected(event.target.value);
  };

  const keys = React.useMemo(() => {
    return Object.keys(questions);
  }, []);

  const showNextQuestion = (): void => {
    if (dejaAfficher.length === keys.length) {
      setQuizDuration(60 - time);
      navigate("/result");
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
    setResponse({});
    setQuizDuration(0);
  }, [setQuizDuration, setResponse]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (time > 0) {
        setTime((prev) => prev - 1);
        setValue((prev) => Math.max(prev - 1.7, 0));
      } else {
        clearInterval(interval);
        setQuizDuration(60);
        navigate("/result");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [navigate, setQuizDuration, time]);

  React.useEffect(() => {
    if (didInit.current) return;
    didInit.current = true;
    showNextQuestion();
  }, []);

  return (
    <React.Fragment>
      <div className="container_quiz">
        <h3>{time === 60 ? "1:00" : `00:${time}`}</h3>
        <div className="progress">
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

        <p className="question_num">
          Question {dejaAfficher.length} sur {totalQuestions}
        </p>
        <div className="progress">
          <div className="progress-fill" style={{ width: `${progression}%` }} />
        </div>
        <div className="cadre_quiz">
          <h2 className="qustion">
            {i === null || i === undefined ? "" : `${questions[i].question} `}
          </h2>
          <p className="num_question">
            Question {dejaAfficher.length} sur {totalQuestions}
          </p>
          <div className="reponses">
            {(i === null || i === undefined ? [] : questions[i].proposition).map(
              (proposition) => (
                <label className="carte" key={proposition}>
                  <input
                    type="radio"
                    name="res"
                    id={i !== null && i !== undefined ? i.toString() : "1"}
                    title="question"
                    className="radio"
                    value={proposition}
                    onChange={onchangeSelect}
                    checked={selected === proposition}
                  />
                  <span>{proposition}</span>
                </label>
              ),
            )}
            <button
              className="suivant"
              disabled={selected === ""}
              onClick={() => {
                if (i !== null && i !== undefined) {
                  setResponse((prev: Reponse) => ({
                    ...prev,
                    [i]: selected,
                  }));
                }
                setProgression((prev) => prev + 10);
                showNextQuestion();
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
