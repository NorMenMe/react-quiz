import "./scss/main.scss";
import { Home, Quiz } from "../src/helpers/importer.js";
import { Link, Routes, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/quiz">
          <Quiz />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
