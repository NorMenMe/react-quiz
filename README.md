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

- I need useEffect because when the state of counter get updated, we need a re-rendering of the page - re-mounting the component from the origin without border & enabled checkbox - because we need a restart - steps: - where should useEffect live? in Quiz - next button updates the state counter - built inside quiz, missing a task inside the first param

-on Button next, do I need the conditional rendering ?

- useEffect is re-rendering the page

-sea:

- useEffect re-render disabling css properties
- useEffect restore component from start
- useEffect initial state
- useEffect reset Button

// next:

- poolish the semantic for showing to Leon

- when counter state change => run a reset() that resets the css & the border ? to complicated....
- get Help: from Leon ?

-issue: - wenn die checkboxes gechecked sind, nachdem das "submit" button geklickt ist, - beim "next" button event, kommt die neue Quiz Frage, - die rote border und die checkbox auf Anfang sollen zurückgesetzt werden; da liegt mein Problem - useEffect re-rendert wenn "counter" state sich verändert aber kein reset erfolgt

ich bräuchte einen hint,
soll ich weiter den useEffect Weg gehen ? oder auf der falschen Spur ?

wenn die checkboxe gechecked ist,
nachdem das "submit" button geklickt ist,
rot/grüne borders & die gecheckte checkbox werden dargestellt;
beim "next" button event, kommt die neue Quiz Frage,
die rote border und die checkbox sollen auf "Anfang" zurückgesetzt werden;
bzw. die border und das "check" der checkbox verschwinden.
Da liegt mein Problem;
useEffect re-rendert wenn "counter" state sich verändert
aber die Komponente wird nicht vom start Zustand gerendert;

hast du einen hint?
soll ich weiter den useEffect Weg gehen ? oder auf der falschen Spur ?

review:
bisschen umständlich mit den daten find ich. wenn du die schon selber definierst dann versuchs dir doch vielleicht bisschen einfacher zu machen.

- create a data-importer
- wanna export only answers & solutions
- steps: - in data-importer

mit den ganzen mappings und listen von listen ist ganz shcön schwer durchzublicken
bisschen umständlich mit den daten find ich. wenn du die schon selber definierst dann versuchs dir doch vielleicht bisschen einfacher zu machen. mit den ganzen mappings und listen von listen ist ganz shcön schwer durchzublicken
und der ternary operator darunter. du hast zwei mal {isSubmit} da stehen. das geht auf jeden entweder in einen ternary oder ganz ohne und die props abhängig von isSubmit setzen z.B.
und das wo die borders setzt. das macht man eigentlich nicht so in react. also inline styles setzen so. das würde ich nur in super spezial fällen machen.

vielleicht kannst du auch das auslagern wenn über die answers mapst denen direkt ne klasse mitgeben die entweder die border rot oder grün macht

-instead of cssText, use utility classes

- achieve: when checkbox.check true attach a class "green" otherwise "red"
  - assign conditionally a class
  - inside the li
  -
  - I need to check the object of <input> - searching if checkbox is check

-other approach :
on getAnswer, select all <li> 's
-check if their Nodechild, the checkbox is checked, according to that add a class

    or this what you have written but in the jsx
    -insie a map add another loop to get access tho the checkbox property

    -useEffect , counter state change:
    -run a function that deletes
    - try this https://www.codingdeft.com/posts/react-refresh-page/

- issues:

  - wrong status: onlaod shows 0, on submit counter get to 1, so default counter state is 0 but has to be shown as 1 - on Submit button replace a variable with the state - check a boolean state, for e.g isSubmit -

    - add a ternary:
      - if isSubmit false show 0 otherwise show counter state
    - state isSubmit into Context

  - //next :
  - debug: stand, line 34 doesn't acceppt setIsSubmit fron context, test diff with state declared in the same module
    - retrieve it

- refactor ternary Buttons ?
- pass counter into Status via props

- ? to Leon: line 27, for the else returning a "" for saying return nothing, better practice ?
- what is the let/const convetion @ Innovation team ?
-
