import React from "react";
import { useNavigate } from "react-router-dom";

type QuestionItem = {
  question: string;
  proposition: string[];
  reponse: string;
};

type Question = {
  [key: number]: QuestionItem;
};

type Reponse = {
  [key: number]: string;
};

const questionn: Question = {
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
  const navigate = useNavigate();

  const keys = React.useMemo(() => {
    return Object.keys(questionn).map(Number);
  }, []);

  const [time, setTime] = React.useState<number>(60);
  const [value, setValue] = React.useState<number>(100);
  const [progression, setProgression] = React.useState<number>(10);

  const [dejaAfficher, setDejaAfficher] = React.useState<number[]>([]);
  const [currentQuestionId, setCurrentQuestionId] = React.useState<number | null>(
    null,
  );
  const [selectedAnswer, setSelectedAnswer] = React.useState<string>("");
  const [responses, setResponses] = React.useState<Reponse>({});
  const [questionNumber, setQuestionNumber] = React.useState<number>(1);

  const currentQuestion =
    currentQuestionId !== null ? questionn[currentQuestionId] : null;

  const pickRandomQuestion = React.useCallback(() => {
    if (dejaAfficher.length >= keys.length) {
      navigate("/result");
      return;
    }

    const remainingKeys = keys.filter((key) => !dejaAfficher.includes(key));
    const randomKey =
      remainingKeys[Math.floor(Math.random() * remainingKeys.length)];

    setCurrentQuestionId(randomKey);
    setDejaAfficher((prev) => [...prev, randomKey]);
    setSelectedAnswer("");
    setTime(60);
    setValue(100);

    const currentStep = dejaAfficher.length + 1;
    setQuestionNumber(currentStep);
    setProgression((currentStep / keys.length) * 100);
  }, [dejaAfficher, keys, navigate]);

  React.useEffect(() => {
    pickRandomQuestion();
  }, []); // première question

  React.useEffect(() => {
    if (currentQuestionId === null) return;

    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(interval);

          setResponses((prev) => ({
            ...prev,
            [currentQuestionId]: "",
          }));

          setTimeout(() => {
            if (dejaAfficher.length >= keys.length) {
              navigate("/result");
            } else {
              pickRandomQuestion();
            }
          }, 0);

          return 0;
        }

        return prevTime - 1;
      });

      setValue((prevValue) => Math.max(prevValue - 100 / 60, 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [currentQuestionId, dejaAfficher.length, keys.length, navigate, pickRandomQuestion]);

  const handleChangeAnswer = (value: string) => {
    setSelectedAnswer(value);
  };

  const handleNext = () => {
    if (!currentQuestionId || !selectedAnswer) return;

    setResponses((prev) => ({
      ...prev,
      [currentQuestionId]: selectedAnswer,
    }));

    if (dejaAfficher.length >= keys.length) {
      navigate("/result");
      return;
    }

    pickRandomQuestion();
  };

  return (
    <React.Fragment>
      <div className="container_quiz">
        <h3>{time === 60 ? "1:00" : `00:${String(time).padStart(2, "0")}`}</h3>

        <div className="progress">
          <div className="progress-fill" style={{ width: `${value}%` }} />
        </div>

        <p className="temps_restant">Temps restant</p>

        <p className="question_num">Question {questionNumber} sur {keys.length}</p>

        <div className="progress">
          <div className="progress-fill" style={{ width: `${progression}%` }} />
        </div>

        <div className="cadre_quiz">
          <h2 className="qustion">
            {currentQuestion ? currentQuestion.question : "Chargement..."}
          </h2>

          <p className="num_question">
            Question {questionNumber} sur {keys.length}
          </p>

          <div className="reponses">
            {currentQuestion?.proposition.map((item, index) => (
              <label className="carte" key={index}>
                <input
                  type="radio"
                  name="res"
                  value={item}
                  checked={selectedAnswer === item}
                  onChange={(e) => handleChangeAnswer(e.target.value)}
                  className="radio"
                />
                <span>{item}</span>
              </label>
            ))}

            <button
              className="suivant"
              onClick={handleNext}
              disabled={!selectedAnswer}
            >
              Suivant
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}