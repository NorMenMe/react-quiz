import React, { useState, useContext } from "react";
// import { useState } from "react";
import QuizContext from "./CreateContext";

function Status() {
  const {counter, setCounter} = useContext(QuizContext);

  // const [question, setQuestion] = useState(1);
  const [score, setScore] = useState(0);

  // console.log(counter);

  return (
    <section className="status">
      <p className="question">Question {counter}/5</p>
      <p className="score">Score : {score}</p>
    </section>
  );
}

export default Status;
