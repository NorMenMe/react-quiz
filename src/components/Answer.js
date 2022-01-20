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
    return <li className="answer__item">{answer.text}</li>;
  });

  return (
    <section>
      <ul className="answer__list">{mapped}</ul>
    </section>
  );
}

export default Answer;
