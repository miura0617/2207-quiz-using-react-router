import React from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';


function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/quiz" exact component={Quiz} />
    </Router>
  );
}

export default App;
