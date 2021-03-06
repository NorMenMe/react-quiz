import React, {useContext } from "react";
import QuizContext from "./CreateContext";

function Status({score}) {
  const {counter} = useContext(QuizContext);

  return (
    <section className="status">
      <ul className="status__list">
        <li className="status__item">
          <p className="status__text">
          Question {counter}
          </p>
        </li>
        <li className="status__item">
          <p className="status__text">Score : {score}</p>
        </li>
      </ul>
    </section>
  );
}

export default Status;
