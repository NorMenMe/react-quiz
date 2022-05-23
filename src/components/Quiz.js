import React, { useState } from "react";
import { useLayoutEffect } from "react/cjs/react.production.min";
import { Header, Status, Question, QuizContext } from "../helpers/importer.js";


function Quiz() {
let [counter,setCounter]=useState(1);
let [score,setScore]= useState(0);
let [isSubmit,setIsSubmit] = useState(false);


  return (
    <>
      <QuizContext.Provider value={{ counter, setCounter,score,setScore, isSubmit, setIsSubmit }}>
        <Header />
        <Status score={score} counter={counter}/>
        <Question />
      </QuizContext.Provider>
    </>
  );
}

export default Quiz;
