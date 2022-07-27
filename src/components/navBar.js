import React from "react";
import './css/navBar.css';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button";
import logo from "./elements/EETICommunity.svg";
function navBar(){
    return(
      <div className="navbox">
      <Navbar>
        
         <div className="logo1">
         EETICommunity
         </div>

         <div className="logo2">
         EETIC
         </div>
         <div className="logo3">
         ommunity
         </div>
        <Button>Sign Up</Button>
      </Navbar>    
      </div>
    );
}

export default navBar;