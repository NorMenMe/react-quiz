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

    next:
            - on event of button submit:
              - on Submit:
                  - hide Submit
                  - show borders

                - on Next:
                       -remove the border on the li's
                       -show Submit
                       -reuse boolean state isSubmit?
                       -show border only if booleans state isSubmit is set to false
                       -toggle it always to opposite => !isSubmit


                       -click submit, isSubmit to true, click next, when rendering markup check if isSubmit true,
                       - if true toggle it to false
                       - event handler on next :
                                           - setCounter
                                           - setIsSubmit to opposite
                       - call it handleNextClick

            -next : how on Next to hide the borders

              - re-organize Answer; collect into functions
              - globalize toggling with ternaries booleans?


- onclick Next, achieve that new answers are displayed, the css border property is neutralized

// next:

- I need useEffect because when the state of counter get updated, we need a re-rendering of the page
      - re-mounting the component from the origin without  border & enabled checkbox
      - because we need a restart
      - steps:
            - where should useEffect live? in Quiz
            - next button updates the state counter
            - built inside quiz, missing a task inside the first param

-on Button next, do I need the conditional rendering ?
- useEffect is re-rendering the page
- test diff with empty dependency
- reset border & enabled checkbox with a conditional ?
- 