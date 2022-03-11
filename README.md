#### Notes

taske says following components are needed:
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

## start

next :

- set new branch

- from the mockup :

  - a button submit which triggers :
    - right answer green border , all wrong ones have a red border

  -button submit :
  -on click :show the right answer, achieve to show border for each "answer item"
  -display the right answer with a different color

  -check the input, an array input[ counter ]? do I have a index of right answer ?

  solution is an array of numbers,mulitple right answers;the number is referring to the index of the answers,array

//

2 inputs:
-answers array
-solutions array


-todos :

- display next button when answer is shown
- update the Score component
  -extras : put the input in the context, refactoring

task: display the "next" button when the answer is shown
steps:
on submit run a function, this function: - runs getAnswer() - compare the checked box with solution - update the score - show next button

compare the checked box with solution


  - if box index matches with the solution => increase the score state
            - need to have context of setState function of score
                - need to build useContext hook because Status &  Question are on the same nesting-level
            - comparison index to solution, if true, run setScore
    -compare the checkbox index with the solution, if === then increase the state of the score
    
    next: 
            - on event of button submit,enable the Next button, 
            - his function:
                - increase the state counter in order to re-render & display the next question
                - does it works without useEffect ?
                - increment setCounter 
