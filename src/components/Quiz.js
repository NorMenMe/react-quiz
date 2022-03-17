import React, { useState,useEffect } from "react";
import { Header, Status, Question, QuizContext } from "../helpers/importer.js";


function Quiz() {
const [counter,setCounter]=useState(1)
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
