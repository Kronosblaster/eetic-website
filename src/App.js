import React from "react";

import './App.css';
import './components/css/card.css';

import Card from './components/card';
import NavBar from './components/navBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Card />
    </div>
  );
}

export default App;
