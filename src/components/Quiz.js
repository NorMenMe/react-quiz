import React, { useState } from "react";
import { useLayoutEffect } from "react/cjs/react.production.min";
import { Header, Status, Question, QuizContext } from "../helpers/importer.js";


function Quiz() {
const [counter,setCounter]=useState(0);
const [score,setScore]= useState(0);



  return (
    <>
      <QuizContext.Provider value={{ counter, setCounter,score,setScore }}>
        <Header />
        <Status score={score}/>
        <Question />
      </QuizContext.Provider>
    </>
  );
}

export default Quiz;
