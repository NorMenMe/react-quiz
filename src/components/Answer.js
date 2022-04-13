import React,{useState,useContext,useEffect} from "react";
import {input, solutions} from "../helpers/data-importer"
import { Button,QuizContext } from "../helpers/importer";

function Answer({ counter,setCounter }) {
 
let [solution,setSolution] = useState(solutions[0][0]);
let [isSubmit,setIsSubmit] = useState(false);
let {score,setScore} = useContext(QuizContext);

let getAnswer = (e) => {
  e.preventDefault();
 
    // show borders
    let items = document.querySelectorAll(".answer__item")
    items.forEach((item,index) => {    
        if(index === solution) {
          item.classList.add("answer__item--border-true");
        } else {
          item.classList.add("answer__item--border-false");
        }
    })
    
    // check enabled checkbox
    let checkboxes = document.querySelectorAll(".answer__checkbox");
    checkboxes.forEach((checkbox,index) => {
      if (checkbox.checked) {
        if (index === solution) {
          setScore(score + 1);
        }
      }
    })

    // show Next button
    setIsSubmit(true);
  }

  useEffect(()=> {
    console.log('mounted');
  },[counter]);

  return (
    <section className="answer">
      <ul className="answer__list">
        {
          input[counter].map((answer) => {
            return <li className="answer__item">
                      <input type="checkbox" className="answer__checkbox"/>
                      <p className="answer__text">{answer.text}</p>
                   </li>;
          })
        }
      </ul>
        {
          isSubmit ? <Button onClick={() => setCounter(counter + 1)} type={"button"}>Next</Button> : <Button onClick={(e) => getAnswer(e)}>Submit</Button> 
        }
    </section>
  );
}

export default Answer;
