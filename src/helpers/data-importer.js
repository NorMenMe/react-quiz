import data from "../data.js";

let input = [];
let solutions = [];

for (let key in data) {
  input.push(data[key]["answers"]);
  solutions.push(data[key]["solutions"]);
}


export {input, solutions};