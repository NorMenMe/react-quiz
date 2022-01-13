import React from "react";
import { useState } from "react";

function Status() {
  const [question, setQuestion] = useState(1);
  const [score, setScore] = useState(0);

  return (
    <section className="status">
      <p className="question">Question {question}/5</p>
      <p className="score">Score : {score}</p>
    </section>
  );
}

export default Status;
