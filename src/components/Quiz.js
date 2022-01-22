import React, { useState } from "react";
import { Header, Status, Question } from "../helpers/importer.js";
// if works sugar code it , store it in importer.js
import QuizContext from "./CreateContext.js";

function Quiz() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <QuizContext.Provider value={{ counter, setCounter }}>
        <Header />
        <Status />
        <Question />
      </QuizContext.Provider>
    </>
  );
}

export default Quiz;
