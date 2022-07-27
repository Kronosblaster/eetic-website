import React from "react";
import './css/navBar.css';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button";
import logo from "./elements/EETICommunity.svg";
function navBar(){
    return(
      <div className="navbox">
      <Navbar>
        <div className="logo"><img src={logo}/></div>
        <Button>Sign Up</Button>
      </Navbar>    
      </div>
    );
}

export default navBar;