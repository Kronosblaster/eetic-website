import React from "react";
import './css/navBar.css';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button";
import "@fontsource/poppins";

function navBar(){
    return(
      <Navbar>
        <Button>Sign Up</Button>
      </Navbar>
    );
}

export default navBar;