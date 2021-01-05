import React from 'react';
import './App.css';
import Social from './util/Social';
import Menu from './util/Menu';
import Fullpage from './components/Fullpage';
import DelegateDetails from './components/DelegateDetails';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/delegate">
          <DelegateDetails />
        </Route>
        <Route path="/">
          <Fullpage />
        </Route>
      </Switch>
      <Menu />
      <Social />  

    </Router>
  );
}

export default App;
