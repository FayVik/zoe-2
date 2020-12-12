import React from 'react';
import './App.css';
import Menu from './util/Menu';
import Fullpage from './components/Fullpage';
import Social from './util/Social';

function App() {
  return (
    <div>
      <Fullpage />
      <Menu />
      <Social />
    </div>
  );
}

export default App;
