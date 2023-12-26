import React from "react";
import { useState } from "react";
import Play from './Play';
import War from "./War";
import Blackjack from "./Blackjack";
import Rummy from "./Rummy";

export default function Choice() {
    const [choiceMade,changeChoiceMade] = useState(true)
    const [gameWar,changegameWar] = useState(false)
    const [gameBlackjack,changegameBlackjack] = useState(false)
    const [gameRummy,changegameCrazy] = useState(false)


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
                                <img className="choice-img" src="./cards/313.png" alt="war"/>
                                <p className="choice-text">War</p>
                            </button>
                        </div>
                        <div className="choice">
                            <button onClick={choiceBlackjack}>
                                <img className="choice-img" src="./cards/211.png" alt="Blackjack"/>
                                <p className="choice-text">Blackjack</p>
                            </button>
                        </div>
                        <div className="choice">
                            <button onClick={choiceCrazy}>
                                <img className="choice-img" src="./cards/308.png" alt="Crazy Eight's"/>
                                <p className="choice-text">Rummy</p>
                            </button>
                        </div>
                    </div>
                </>
                ): 
                (
                    <>
                        {gameWar && <War/>}
                        {gameBlackjack && <Blackjack/>}
                        {gameRummy && <Rummy/>}
                    </>
                )}
        </>
    )
}