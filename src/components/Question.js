import React, {useContext } from "react";
import data from "../data.js";
import { Button, Answer,QuizContext } from "../helpers/importer";

// storing the input
let arrQuestions = [];

for (let obj in data) {
  arrQuestions.push(data[obj].question);
}
//----------------------------------------

function Question() {
const {counter, setCounter}=useContext(QuizContext)

  return (
    <section className="question">
      <p className="question__text">{arrQuestions[counter]}</p>
      <Answer counter={counter} />
      <Button onClick={() => setCounter(counter + 1)} type={"button"} >Next</Button>
    </section>
  );
}

export default Question;
