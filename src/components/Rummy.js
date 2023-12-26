import {React, useState} from "react";

export default function Rummy() {
    const [start, changeStart] = useState(true)
    const [drawing, changeDrawing] = useState(false)
    const [first, changeFirst] = useState(false)
    const [switcher, changeSwitcher] = useState(false)

    const [card1, changeCard1] = useState("back")
    const [card2, changeCard2] = useState("back")
    const [value1, changeValue1] = useState(0)
    const [value2, changeValue2] = useState(0)
    const [starter, changeStarter] = useState("")
    const[playerCards, changePlayerCards] = useState([])
    const[playerImages, changePlayerImages] = useState([])
    const[dealerCards, changeDealerCards] = useState([])
    const[dealerImages, changeDealerImages] = useState([])

    let random1 = 0
    let random2 = 0
    let random3 = 0
    let random4 = 0

    function starting() {
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
        random1 = Math.floor(Math.random() * 13) + 1;

        //generate random number between 0-3 and times it by 100
        random2 = Math.floor(Math.random() * 4);
        if(random2 === 0){
            random2 = random2 + 100;
        }
        else {
            random2 = random2 * 100
        }
        changeValue1(random1)
        changeCard1(random1 + random2)

        //generate random number between 1-13
        random3 = Math.floor(Math.random() * 13) + 1;

        //generate random number between 0-3 and times it by 100
        random4 = Math.floor(Math.random() * 4);
        if(random4 === 0){
            random4 = random4 + 100;
        }
        else {
            random4 = random4 * 100
        }
        changeValue2(random3)
        changeCard2(random3 + random4)

        changeStart(false)
        changeDrawing(true)

        if(random1 > random3){
            changeStarter("Player 1")
        }
        else if(random3 > random1) {
            changeStarter("Player 2")
        }
        else if(random1 === random3){
            changeStarter("Tie, draw again!")
            changeStart(true)
            changeDrawing(false)
        }
    }

    function drawCards(){
        //adds 10 random cards to both the players and dealers cards
        // Function to generate a random number between min and max (inclusive)
        const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

        // Generate 10 random numbers and update the state
        const DealersNumbers = Array.from({ length: 10 }, () => getRandomNumber(1, 13));
        const PlayersNumbers = Array.from({ length: 10 }, () => getRandomNumber(1, 13));

        const DealersImages = Array.from({ length: 10 }, () => getRandomNumber(1, 3));
        const PlayersImages = Array.from({ length: 10 }, () => getRandomNumber(1, 3));

        changeDealerCards(DealersNumbers);
        changePlayerCards(PlayersNumbers);

        changeDealerImages(DealersImages);
        changePlayerImages(PlayersImages);

        changeDrawing(false)
        changeFirst(true)
    }

    return (
        <>
            {start ? (
            <>
                <h1 className="war-title">Rummy</h1>
                <h2 className="rum-text">Draw a card to determine who starts!</h2>
                <h2 className="rum-text">{starter}</h2>
                <div className="players-cont">
                    <h1 className="player1">Player 1</h1>
                    <h1 className="player2">Player 2</h1>
                </div>
                <div className="war-container">
                    <img className={`${switcher ? "war-card1" : "war-card2"}`}  src={`./cards/${card1}.png`} alt="card1"/>
                    <img className={`${switcher ? "war-card1" : "war-card2"}`}  src={`./cards/${card2}.png`} alt="card2"/>
                </div>
                <button className="play-btn" onClick={starting}>Play!</button>
            </>
            ):(
            <>
                {drawing &&
                <>
                    <h1 className="war-title">Rummy</h1>
                    <h2 className="rum-text">Draw a card to determine who starts!</h2>
                    <h2 className="rum-text">{starter} starts!</h2>
                    <div className="players-cont">
                        <h1 className="player1">Player 1</h1>
                        <h1 className="player2">Player 2</h1>
                    </div>
                    <div className="war-container">
                        <img className={`${switcher ? "war-card1" : "war-card2"}`}  src={`./cards/${card1}.png`} alt="card1"/>
                        <img className={`${switcher ? "war-card1" : "war-card2"}`}  src={`./cards/${card2}.png`} alt="card2"/>
                    </div>
                    <button className="play-btn" onClick={drawCards}>Draw Cards!</button>
                </>
                }
                {first &&
                <>
                    <h1 className="war-title">Rummy</h1>
                    <div className="game-container">
                        <h2 className="war-title">Your Cards:</h2>
                        <h2 className="war-title">Dealers Cards:</h2>
                    </div>
                    <div className="game-container">
                        <div className="players-cards">
                            {playerCards.slice(0, 10).map((card, outerIndex) => (
                                <>
                                    {console.log(outerIndex) /* Use outerIndex as an identifier for each button */}
                                
                                    <button onClick={drawCards}>
                                    <div key={outerIndex}>
                                    <img
                                        key={outerIndex} className="players-card"
                                        src={`./cards/${playerImages[outerIndex]}${card < 10 ? '0' : ''}${card}.png`}
                                        alt={`card${outerIndex}`}
                                    />
                                    </div>
                                    </button>
                                </>
                            ))}
                        </div>
                        <div className="players-cards">
                            {dealerCards.slice(0, 10).map((card, outerIndex) => (
                                <div key={outerIndex}>
                                <img
                                    key={outerIndex} className="players-card"
                                    src={`./cards/back.png`} alt={`card${outerIndex}`}
                                />
                                </div>
                            ))}
                        </div>
                    </div>
                </>
                }
            </>
            )}
        </>
    )
}