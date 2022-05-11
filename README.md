### start coding:

```
git clone git@github.com:NorMenMe/react-quiz.git

npm i

code .

npm start

```

#### Notes

the task says following components are needed:
App, Home, Error404, StatusBar, Question, Answer, Result

- UI Kit :
  Home, Error404, StatusBar, Question, Answer, Result

- Home > Header, <p> , Button
- Quiz > Header, Status Bar, Question > Answer
- Status Bar
- Question > Answer
- Result

- Which Component needs to be reusable:

- Header
- Button

- Functionalities :

- Home redirects to Quiz, useHistory, or with routes,

- enable checkbox, submit event, show answer re-render with the updated value ,

- "next" button : event incrementing variable from source

## data model

- Question > Status : if state score has to increase . If the state question onClick of Next btn increases

## pseudocode notes

- issues:

  depending on isSubmit , it toggles back to 0, back to start counter



  - //next :
  - status state starting truthy, then once toggles to falsy and stays falsy
    - status state into context,
    - then into Answer, moved via context into Status
    - 
  - detache it from isSubmit
  - use counter state for the if condition

TODO:

- refactor ternary Buttons ?
- pass counter into Status via props

// Questions Leon :

- ? to Leon: line 27, for the else returning a "" for saying return nothing, better practice ?
-
- what is the let/const convetion @ Innovation team ?
-
