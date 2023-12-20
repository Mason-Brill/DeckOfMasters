import React from "react";
import { useState } from "react";
import Play from './Play';
import War from "./War";
import Blackjack from "./Blackjack";

export default function Choice() {
    const [choiceMade,changeChoiceMade] = useState(true)
    const [gameWar,changegameWar] = useState(false)
    const [gameBlackjack,changegameBlackjack] = useState(false)
    // eslint-disable-next-line
    const [gameCrazy,changegameCrazy] = useState(false)


    function choiceWar() {
        changeChoiceMade(false)
        changegameWar(true)
    }

    function choiceBlackjack() {
        changeChoiceMade(false)
        changegameBlackjack(true)
    }

    function choiceCrazy() {
        changeChoiceMade(false)
        changegameCrazy(true)
    }

    return (
        <>
            {choiceMade ? (
                <>
                    <Play/>
                    <div className="choice-container">
                        <div className="choice">
                            <button onClick={choiceWar}>
                                <img className="choice-img" src="./cards/312.png" alt="war"/>
                                <p className="choice-text">War</p>
                            </button>
                        </div>
                        <div className="choice">
                            <button onClick={choiceBlackjack}>
                                <img className="choice-img" src="./cards/210.png" alt="Blackjack"/>
                                <p className="choice-text">Blackjack</p>
                            </button>
                        </div>
                        <div className="choice">
                            <button onClick={choiceCrazy}>
                                <img className="choice-img" src="./cards/307.png" alt="Crazy Eight's"/>
                                <p className="choice-text">Crazy Eight's</p>
                            </button>
                        </div>
                    </div>
                </>
                ): 
                (
                    <>
                        {gameWar && <War />} {/* Render War component if gameWar state is true */}   
                        {gameBlackjack && <Blackjack />}                     
                    </>
                )}
        </>
    )
}