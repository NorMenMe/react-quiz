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

- //next :

- logic:

  - if not all right answer are checked then don't increase the score

        - check if all the indexes of the checked checkboxes are matching the numbers of the solution[counter]
        - ? push all indexes in an array
        - ? compare the array for strict equality`

    ö

  - read again the project
  - styles

    - error boxes get border-radius
    - question need a margin-top

  - refactor all let auf const
  - refactor ternary Buttons ?

// Questions Leon :

- ? to Leon: line 27, for the else returning a "" for saying return nothing, better practice ?
