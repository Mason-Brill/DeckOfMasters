import React from "react";
import Title from "./Title";

function Home(){
    return(
        <div className="navbar">
            <Title/>
            <div></div>
            <p className="nav-element">War</p>
            <p className="nav-element">Blackjack</p>
            <p className="nav-element">Rummy</p>
        </div>
    )
}

export default Home