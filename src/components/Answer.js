import React from "react";
import data from "../data.js";

// input
let input = [];

for (let key in data) {
  input.push(data[key]["answers"]);
}
// -----------------------------------

function Answer({ counter }) {
  const mapped = input[counter].map((answer) => {
    return <li class="answer__item">
            <div class="answer__checkbox">
              <label for='checkbox'></label>
              <input type='checkbox' id='checkbox'/>
            </div>
            <p class="answer__text">{answer.text}</p>
          </li>;
  });

  return (
    <section>
      <ul className="answer__list">{mapped}</ul>
    </section>
  );
}

export default Answer;
