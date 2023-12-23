import {React, useState, useEffect} from "react";

export default function Blackjack(){
    const[first, changeFirst] = useState(true)
    const[playerCards, changePlayerCards] = useState([])
    const[playerImages, changePlayerImages] = useState([])
    const[dealerCards, changeDealerCards] = useState([])

    const [switcher, changeSwitcher] = useState(true)

    useEffect(() => {
        // This useEffect will run whenever playerCards is updated
        console.log(playerImages[0]);
        if(playerCards.length === 1)
        {
            changeFirst(false)
        }
    }, [playerCards]);

    //two random numbers generated to be used for name of card image i.e. 312.png
    let number1 = 0
    let number2 = 0
    let playersFirst = 0;

    function Start() {

        //this triggers the fade animation
        if(switcher === true)
        {
            changeSwitcher(false)
        }
        else
        {
            changeSwitcher(true)
        }

        //generate random number between 1-13
        number1 = 13//Math.floor(Math.random() * 13) + 1;

        //generate random number between 0-3 and times it by 100
        number2 = Math.floor(Math.random() * 4);
        if(number2 === 0){
            number2 = number2 + 100;
        }
        else {
            number2 = number2 * 100
        }

        //placing the name of the image file for the card in the "playerImages" array
        changePlayerImages(prevPlayerImages => [...prevPlayerImages, number1 + number2]);
        // Use the updater function to modify the array

        console.log(number1 + number2)

        if(number1 > 11){
            number1 = 11
        }
        //placing the players card value in the "playerCards" array
        changePlayerCards(prevPlayerCards => [...prevPlayerCards, number1]);
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
                <h1 className="war-title">Blackjack</h1>
                <div className="game-container">
                    <div className="player-container">
                        <h1 className="war-title">Your Cards:</h1>
                        <div className="player1-cards">
                            <img className={`${switcher ? "war-card1" : "war-card2"}`} src={`./cards/${playerImages[0]}.png`} alt="card1"/>
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
            </>
        )}
        </>
    )
}