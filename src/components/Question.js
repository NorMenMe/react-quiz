import React, { useState, useEffect } from "react";
import data from "../data.js";
import { Button, Answer } from "../helpers/importer";

// storing my input
let arrQuestions = [];

for (let obj in data) {
  arrQuestions.push(data[obj].question);
}
//----------------------------------------

function Question() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  // useEffect(() => {}, [counter]);

  return (
    <section className="question">
      <p className="question__txt">{arrQuestions[counter]}</p>
      <Answer counter={counter} />
      <Button onClick={() => incrementCounter()}>Next</Button>
    </section>
  );
}

export default Question;
