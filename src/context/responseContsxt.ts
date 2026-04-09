import React from "react";

export type Reponse = {
  [key: number | string]: string;
};

type ResponseContextType = {
  quizDuration: number;
  response: Reponse;
  setQuizDuration: React.Dispatch<React.SetStateAction<number>>;
  setResponse: React.Dispatch<React.SetStateAction<Reponse>>;
};

export const responseContext = React.createContext<ResponseContextType>({
  quizDuration: 0,
  response: {},
  setQuizDuration: () => undefined,
  setResponse: () => undefined,
});
