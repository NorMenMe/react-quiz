import React,{useState,useContext} from "react";
import {input, solutions} from "../helpers/data-importer"
import { Button,QuizContext } from "../helpers/importer";

function Answer({ counter,setCounter }) {
let [solution,setSolution] = useState(solutions[0][0]);
let [isSubmit,setIsSubmit] = useState(false);
let {score,setScore} = useContext(QuizContext);

let getAnswer = (e) => {
    e.preventDefault();

    // show borders of correct/wrong solution
    let items = document.querySelectorAll(".answer__item")
    items.forEach((item,index) => {   
          if(solutions[counter].includes(index)) {
            item.classList.add("answer__item--border-true");
          } else {
            item.classList.add("answer__item--border-false");
          }
    })

    // check enabled checkbox
    let checkboxes = document.querySelectorAll(".answer__checkbox");
    checkboxes.forEach((checkbox,index) => {
      if (checkbox.checked) {
        if (solutions[counter].includes(index)) {
          setScore(score + 1);
        }
      }
    })

    // show Next button
    setIsSubmit(true);
  }

  console.log(isSubmit);

    // click Next button
  let handleNextClick = () => {
    setCounter(counter + 1);

    let items = document.querySelectorAll('.answer__item')
    items.forEach((item) => {    
      item.classList.remove('answer__item--border-true', 'answer__item--border-false');
    })

    let checkboxes = document.querySelectorAll('.answer__checkbox');
      checkboxes.forEach((checkbox) => checkbox.checked = false );

    setIsSubmit(false);
  }

  return (
    <section className="answer">
      <ul className="answer__list">
        {
          input[counter].map((answer,index) => {
            return <li key={index} className="answer__item">
                      <input type="checkbox" className="answer__checkbox"/>
                      <p className="answer__text">{answer.text}</p>
                   </li>;
          })
        }
      </ul>
        {
          isSubmit ? <Button type={"button"} onClick={() => {handleNextClick()}}>Next</Button> : <Button onClick={(e) => getAnswer(e)}>Submit</Button> 
        }
    </section>
  );
}

export default Answer;
