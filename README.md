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

- state "counter" is needed :

  -Status
  -Question
  => you need useContext,
  create Global State Component ? Do I need it ?or just a provider?

context :

- new file,import the createContext
  -store it in a Comp
  -export default Component

-import component, chain Provider
, add attribute value = {{}}
-declare the state on top level

in retrieving component\_
import context compoent, call hook passing the compoenent,
now you can destructure
