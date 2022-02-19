import React from "react";
import data from "../data.js";
import { Button } from "../helpers/importer";

// input
let input = [];
let solutions = [];

for (let key in data) {
  input.push(data[key]["answers"]);
  solutions.push(data[key]['solutions']);
}
// -----------------------------------

function Answer({ counter }) {
  const mapped = input[counter].map((answer) => {
    return <li className="answer__item">
             <div className="answer__checkbox">
                <label htmlFor='checkbox'></label>
                <input type='checkbox' id='checkbox'/>
             </div>
             <p className="answer__text">{answer.text}</p>
           </li>;
  });
  
  const getAnswer = (e) => {
    e.preventDefault();
    const items = document.querySelectorAll('.answer__item')
    items.forEach((item,index) => {
      if(index === 1) {
        item.style.cssText = "border : 2px solid green;"
      } else {
        item.style.cssText = "border : 2px solid red;"
      }

    })
  }
  
  console.log(input);
  console.log(solutions);
  
  return (
    <section>
      <ul className="answer__list">{mapped}</ul>
      <Button onClick={(e) => getAnswer(e) }>Submit</Button>
    </section>
  );
}

export default Answer;
