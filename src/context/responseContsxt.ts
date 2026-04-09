import React, { Dispatch } from "react";
type reponse = {
  [key: number | string]: string;
};
export const responseContext = React.createContext({ response: [] as unknown as reponse , setResponse:  Dispatch<React.SetStateAction<number>>});
