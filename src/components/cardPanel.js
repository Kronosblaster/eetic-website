import React from "react";
import Card from './card';
function cardPanel(){
    return(
    <div className="cardPanel">
        <p>Card Panel</p>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    );
}

export default cardPanel;