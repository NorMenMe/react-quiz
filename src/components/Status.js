import React, { useState, useContext } from "react";
import QuizContext from "./CreateContext";

function Status() {
  const {counter, setCounter} = useContext(QuizContext);
  const [score, setScore] = useState(0);

  return (
    <section className="status">
      <p className="question">Question {counter}/5</p>
      <p className="score">Score : {score}</p>
    </section>
  );
}

export default Status;
