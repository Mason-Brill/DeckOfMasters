import {React, useState} from "react";

export default function Blackjack(){
    const[first, changeFirst] = useState(true)
    const[hitstand, changeHitStand] = useState(false)
    const[hit, changeHit] = useState(false)
    const[playerCard1, changePlayerCard1] = useState(0)
    const[playerCard2, changePlayerCard2] = useState(0)
    const[playerCard3, changePlayerCard3] = useState(0)
    const[dealerCard1, changedealerCard1] = useState(0)
    const[dealerCard2, changedealerCard2] = useState(0)
    const [switcher, changeSwitcher] = useState(true)

    //two random numbers generated to be used for name of card image i.e. 312.png
    let number1 = 0
    let number2 = 0
    let playersFirst = 0;
    let playersSecond = 0;
    let playersThird = 0;

    function Start() {
        changeFirst(false)
        changeHitStand(true)

        //this triggers the fade animation
        if(switcher === true)
        {
            changeSwitcher(false)
        }
        else
        {
            changeSwitcher(true)
        }

        //generate random number between 0-12
        number1 = Math.floor(Math.random() * 13);
        //generate random number between 0-3 and times it by 100
        number2 = Math.floor(Math.random() * 4);
        if(number2 === 0){
            number2 = number2 + 100;
        }
        else {
            number2 = number2 * 100
        }

        //getting the value of the players first card(0-12), 'number2' is just to give the card a random suit
        playersFirst = number1;
        changePlayerCard1(number1+number2);

        //generate random number between 0-12
        number1 = Math.floor(Math.random() * 13);
        //generate random number between 0-3 and times it by 100
        number2 = Math.floor(Math.random() * 4);
        if(number2 === 0){
            number2 = number2 + 100;
        }
        else {
            number2 = number2 * 100
        }

        //getting the value of the players second card(0-12), 'number2' is just to give the card a random suit
        playersSecond = number1;
        changePlayerCard2(number1+number2);
    }

    function choiceHit()
    {
        changeHit(true)
        changeHitStand(false)

        //generate random number between 0-12
        number1 = Math.floor(Math.random() * 13);
        //generate random number between 0-3 and times it by 100
        number2 = Math.floor(Math.random() * 4);
        if(number2 === 0){
            number2 = number2 + 100;
        }
        else {
            number2 = number2 * 100
        }

        //getting the value of the players second card(0-12), 'number2' is just to give the card a random suit
        playersThird = number1;
        changePlayerCard3(number1+number2);
    }

    return(
        <>
        {first ? (
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
                <button className="play-btn" onClick={Start}>Play!</button>
            </>
        ):(
            <>
                {hitstand &&
                <>
                    <h1 className="war-title">Blackjack</h1>
                    <div className="game-container">
                        <div className="player-container">
                            <h1 className="war-title">Your Cards:</h1>
                            <div className="player1-cards">
                                <img className={`${switcher ? "war-card1" : "war-card2"}`} src={`./cards/${playerCard1}.png`} alt="card1"/>
                                <img className={`${switcher ? "war-card1" : "war-card2"}`} src={`./cards/${playerCard2}.png`} alt="card2"/>
                            </div>
                            <button className="play-btn" onClick={choiceHit}>Hit?</button>
                        </div>
                        <div className="player-container">
                            <h1 className="war-title">Dealers Cards:</h1>
                            <div className="player1-cards">
                                <img className="war-card1" src="./cards/back.png" alt="card1"/>
                                <img className="war-card1" src="./cards/back.png" alt="card2"/>
                            </div>
                            <button className="play-btn" onClick={Start}>Stand?</button>
                        </div>
                    </div>
                </>
                }

                {hit &&
                <>
                    <h1 className="war-title">Blackjack</h1>
                    <div className="game-container">
                        <div className="player-container">
                            <h1 className="war-title">Your Cards:</h1>
                            <div className="player1-cards">
                                <img className={`${switcher ? "war-card1" : "war-card2"}`} src={`./cards/${playerCard1}.png`} alt="card1"/>
                                <img className={`${switcher ? "war-card1" : "war-card2"}`} src={`./cards/${playerCard2}.png`} alt="card2"/>
                                <img className={`${switcher ? "war-card1" : "war-card2"}`} src={`./cards/${playerCard3}.png`} alt="card3"/>
                            </div>
                            <button className="play-btn" onClick={choiceHit}>Hit?</button>
                        </div>
                        <div className="player-container">
                            <h1 className="war-title">Dealers Cards:</h1>
                            <div className="player1-cards">
                                <img className="war-card1" src="./cards/back.png" alt="card1"/>
                                <img className="war-card1" src="./cards/back.png" alt="card2"/>
                            </div>
                            <button className="play-btn" onClick={Start}>Stand?</button>
                        </div>
                    </div>
                </>
                }
            </>
        )}
        </>
    )
}