import React from "react";

export default function Blackjack(){
    return(
        <>
            <h1 className="war-title">Blackjack</h1>
            <div className="game-container">
                <div className="player-container">
                    <h1 className="war-title">Your Cards:</h1>
                    <div className="player1-cards">
                        <img className="war-card1" src="./cards/back.png" alt="card1"/>
                        <img className="war-card1" src="./cards/back.png" alt="card2"/>
                    </div>
                </div>
                <div className="player-container">
                    <h1 className="war-title">Dealers Cards:</h1>
                    <div className="player1-cards">
                        <img className="war-card1" src="./cards/back.png" alt="card1"/>
                        <img className="war-card1" src="./cards/back.png" alt="card2"/>
                    </div>
                </div>
            </div>
            <button className="play-btn">Play!</button>
        </>
    )
}

/*
    <div className="game-container">
        <div className="player-container">
            <h1 className="war-title">Your Cards:</h1>
            <div className="player1-cards">
                <img className="war-card1" src="./cards/back.png" alt="card1"/>
                <img className="war-card1" src="./cards/back.png" alt="card2"/>
            </div>
        </div>
        <div className="player-container">
            <h1 className="war-title">Your Cards:</h1>
            <div className="player1-cards">
                <img className="war-card1" src="./cards/back.png" alt="card1"/>
                <img className="war-card1" src="./cards/back.png" alt="card2"/>
            </div>
        </div>
    </div>

    .game-container {
        display: flex;
        gap: 5vw;
        justify-content: center;
    }

    .player-container {
        display: flex;
        flex-direction: column;
    }

*/