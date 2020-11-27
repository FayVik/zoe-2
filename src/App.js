import React from 'react';
import './App.css';
import Menu from './util/Menu';
import Fullpage from './components/Fullpage'
import ReactFullpage from '@fullpage/react-fullpage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
        <Fullpage />
      </header>
    </div>
  );
}

export default App;
