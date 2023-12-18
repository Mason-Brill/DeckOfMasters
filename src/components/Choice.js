import React from "react";
import { useState } from "react";
import Play from './Play';

export default function Choice() {
    const [choiceMade,changeChoiceMade] = useState(true)
    
    function handlechoiceMade() {
        changeChoiceMade(false)
    }

    return (
        <>
            {choiceMade ? (
                <>
                    <Play/>
                    <div className="choice-container">
                        <div className="choice">
                            <button onClick={handlechoiceMade}>
                                <img className="choice-img" src="./cards/312.png" alt="war"/>
                                <p className="choice-text">War</p>
                            </button>
                        </div>
                        <div className="choice">
                            <img className="choice-img" src="./cards/210.png" alt="Blackjack"/>
                            <p className="choice-text">Blackjack</p>
                        </div>
                        <div className="choice">
                            <img className="choice-img" src="./cards/307.png" alt="Crazy Eight's"/>
                            <p className="choice-text">Crazy Eight's</p>
                        </div>
                    </div>
                </>
                ):(
                    <></>
                )}
        </>
    )
}