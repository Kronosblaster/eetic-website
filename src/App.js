import React from "react";

import './App.css';
import './components/css/cardPanel.css';
import './components/css/navBar.css';
import './components/css/textBlock_intro.css';
import './components/css/textBlock_join.css';

import NavBar from './components/navBar';
import CardPanel from './components/cardPanel';
import TextIntro from './components/textBlock_intro';
import TextJoin from './components/textBlock_join';
import Footer from "./components/footer";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <TextIntro/>
      <TextJoin/>
      <CardPanel /> 
      <Footer/> 
    </div>
  );
}

export default App;
