import React,{useState,useContext} from "react";
import {input, solutions} from "../helpers/data-importer"
import { Button,QuizContext } from "../helpers/importer";

function Answer({ counter,setCounter }) {
let [solution,setSolution] = useState(solutions[0][0]);
let [isSubmit,setIsSubmit] = useState(false);
let {score,setScore} = useContext(QuizContext);

let getAnswer = (e) => {
    e.preventDefault();

    // get the scope of current solution
    // solutions[counter];
    // console.log(counter);
    // console.log(solutions);
    // console.log(solutions[counter]);

    
    // show borders
    let items = document.querySelectorAll(".answer__item")
    items.forEach((item,index) => {   
        solutions[counter].forEach(currentSolution => {
          console.log(index);
          console.log(currentSolution);
          if(index === currentSolution) {
            item.classList.add("answer__item--border-true");
          } else {
            item.classList.add("answer__item--border-false");
          }
        })
    })

    
    // check enabled checkbox
    let checkboxes = document.querySelectorAll(".answer__checkbox");
    checkboxes.forEach((checkbox,index) => {
      console.dir(checkbox);
      if (checkbox.checked) {
        if (index === solution) {
          setScore(score + 1);
        }
      }
    })

    // show Next button
    setIsSubmit(true);
  }

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
