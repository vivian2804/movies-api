import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movie from './pages/Movie';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movie/:id" component={Movie} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
