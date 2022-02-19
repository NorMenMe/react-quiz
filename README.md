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

    task : start showing 1 solution array
          -wanna say on nodelist item at this index turn it green
          -helps me the index parameter of the forEach?
          -inside the iteration can I access index positioned items ?
          -conditional:
                      the index.positon number of the solution is the number of the index of the nodelist where the css change
          - if index the index of the current item matches the solution index number , turn it green otherwise red

- //// move on from here
-     - hardcode it first, then dynamic with the solution array; can I avoid a nested iteration?
        -other line of cssText

- NEXT:
  for the output what do you need ?
  -the index number of the solution

      -if the item has the same index of the right answer then border color green

  -so check the value of the checkbox

  - checked &

-todos :

- display next button when answer is shown
- update the Score component
  -extras : put the input in the context, refactoring
