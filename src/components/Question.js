import React, { useState } from "react";
import data from "../data.js";

// check the input : obj { uuid :}
// nesting Button
// do I need a loop
// btn Next triggers to access the content of the second key, do you need state counter that updates the index of the array retrieving the data? convert the data to an array where each key/value are an obj ?

// - put the questions into array ?
// - map them printing the first question
// - onclick Next , counter increment, trigger the re-render next question, useEffect

// issue : render all the question , I need only the first one
// nested loop ?

let arrQuestions = [];

for (let obj in data) {
  arrQuestions.push(data[obj].question);
}

console.log(arrQuestions);

function Question() {
  const [counter, setCounter] = useState(0);

  return (
    <section className="question">
      <p className="question__txt">{arrQuestions[counter]}</p>
    </section>
  );
}

export default Question;
