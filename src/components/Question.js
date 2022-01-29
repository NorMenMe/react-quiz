import React, {useContext } from "react";
import data from "../data.js";
import { Button, Answer } from "../helpers/importer";
import QuizContext from './CreateContext'

// storing the input
let arrQuestions = [];

for (let obj in data) {
  arrQuestions.push(data[obj].question);
}
//----------------------------------------

function Question() {
const {counter, setCounter}=useContext(QuizContext)

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <section className="question">
      <p className="question__txt">{arrQuestions[counter]}</p>
      <Answer counter={counter} />
      <Button onClick={() => incrementCounter()}>Next</Button>
    </section>
  );
}

export default Question;
