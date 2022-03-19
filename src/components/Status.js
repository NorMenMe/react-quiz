import React, { useState, useContext } from "react";
import QuizContext from "./CreateContext";


function Status({score}) {
  const {counter, setCounter} = useContext(QuizContext);
  return (
    <section className="status">
      <p className="question">Question {counter}/5</p>
      <p className="score">Score : {score}</p>
    </section>
  );
}

export default Status;
