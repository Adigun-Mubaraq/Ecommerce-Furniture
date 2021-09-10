import './App.css';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";

import Project from './page'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Project} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
