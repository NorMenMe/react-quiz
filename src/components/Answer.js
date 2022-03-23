import React,{useState,useContext} from "react";
import data from "../data.js";
import { Button,QuizContext } from "../helpers/importer";

// input
let input = [];
let solutions = [];

for (let key in data) {
  input.push(data[key]["answers"]);
  solutions.push(data[key]['solutions']);
}
// -----------------------------------

function Answer({ counter,setCounter }) {
 
let [solution,setSolution]  = useState(solutions[0][0]);
let [isSubmit,setIsSubmit] = useState(false);
let {score,setScore} = useContext(QuizContext);

const getAnswer = (e) => {
  e.preventDefault();
 
   let items = document.querySelectorAll('.answer__item')
   items.forEach((item,index) => {
     if(index === solution) {
       item.style.cssText = "border : 2px solid green;"
      } else {
        item.style.cssText = "border : 2px solid red;"
      }
    })

    let checkboxes = document.querySelectorAll("#checkbox");
    checkboxes.forEach((checkbox,index) => {
      if (checkbox.checked) {
        if (index === solution) {
          setScore(score + 1);
        }
      }
    })

    setIsSubmit(true);
  }
  
  const mapped = input[counter].map((answer) => {
    return <li className="answer__item">
             <div className="answer__checkbox">
                <label htmlFor='checkbox'></label>
                <input type='checkbox' id='checkbox'/>
             </div>
             <p className="answer__text">{answer.text}</p>
           </li>;
  });

  console.log(isSubmit);
  
  return (
    <section>
      <ul className="answer__list">{mapped}</ul>
      {
        isSubmit ? null : <Button onClick={(e) => getAnswer(e)}>Submit</Button> 
      }
      {
        isSubmit ? <Button onClick={() => setCounter(counter + 1)} type={"button"}>Next</Button> : null
      }
    </section>
  );
}

export default Answer;
