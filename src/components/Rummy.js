import {React, useState} from "react";

export default function Rummy() {
    const [rounds, changeRounds] = useState(true)
    const [start, changeStart] = useState(false)
    const [drawing, changeDrawing] = useState(false)
    const [first, changeFirst] = useState(false)
    const [second, changeSecond] = useState(false)
    const [third, changeThird] = useState(false)
    const [switcher, changeSwitcher] = useState(false)
    const [numRounds, changenumRounds] = useState(0)
    const [starter, changeStarter] = useState("")
    const [layoffOrMeld, changelayoffOrMeld] = useState(true)
    const [melding, changeMeld] = useState(false)
    const [layoff, changeLayoff] = useState(false)
    const [canMeld, changecanMeld] = useState(true)

    //cards used when determing who draws first
    const [card1, changeCard1] = useState("back")
    const [card2, changeCard2] = useState("back")

    //states for the cards the player is choosing to meld/run
    const [meld1Image, changemeld1Image] = useState("back")
    const [meld2Image, changemeld2Image] = useState("back")
    const [meld3Image, changemeld3Image] = useState("back")
    const [meld1Value, changemeld1Value] = useState(0)
    const [meld2Value, changemeld2Value] = useState(0)
    const [meld3Value, changemeld3Value] = useState(0)
    const [meld1Index, changemeld1Index] = useState(null)
    const [meld2Index, changemeld2Index] = useState(null)
    const [meld3Index, changemeld3Index] = useState(null)

    //cards used when player is determing which card to swap at start of players turn
    const [stockCard, changeStock] = useState(0)
    const [stockImage, changeStockImage] = useState("")
    const [hiddenCard, changehiddenCard] = useState(0)
    const [hiddenImage, changehiddenImage] = useState("")

    //might need this...
    //const [playersIndex, changeplayersIndex] = useState(0)

    const[playerCards, changePlayerCards] = useState([])
    const[playerImages, changePlayerImages] = useState([])
    const[dealerCards, changeDealerCards] = useState([])

    const[meldCards, changemeldCards] = useState([[]])
    const[meldImages, changemeldImages] = useState([[]])
    const[runCards, changerunCards] = useState([[]])
    const[runImages, changerunImages] = useState([[]])

    let random1 = 0
    let random2 = 0
    let random3 = 0
    let random4 = 0

    function oneRound() {
        changenumRounds(1)
        changeRounds(false)
        changeStart(true)
    }

    function twoRound() {
        changenumRounds(2)
        changeRounds(false)
        changeStart(true)
    }

    function threeRound() {
        changenumRounds(3)
        changeRounds(false)
        changeStart(true)
    }

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
        //changeValue1(random1)
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
        //changeValue2(random3)
        changeCard2(random3 + random4)

        changeStart(false)
        changeDrawing(true)

        //checking if player is higher than dealer, meaning dealer starts
        if(random1 > random3){
            changeStarter("Player 2")
        }
        else if(random3 > random1) {
            changeStarter("Player 1")
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

        //const DealersImages = Array.from({ length: 10 }, () => getRandomNumber(1, 3));
        const PlayersImages = Array.from({ length: 10 }, () => getRandomNumber(1, 4));

        changeDealerCards(DealersNumbers);
        changePlayerCards(PlayersNumbers);

        //changeDealerImages(DealersImages);
        changePlayerImages(PlayersImages);

        //generating random stock card
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

        //change value of stock card(random1)
        changeStock(random1)
        //change image to be shown for stock card
        changeStockImage(random1 + random2)

        changeDrawing(false)
        changeFirst(true)
    }



    // Function to append a new value to the array
    const appendToPlayerCards = (cardValue) => {
        // Use the setMyArray function to update the state
        changePlayerCards((prevPlayerImages) => [...prevPlayerImages, cardValue]);
    };

    // Function to append a new value to the array
    const appendToPlayerImages = (cardImage) => {
        // Use the setMyArray function to update the state
        changePlayerImages((prevPlayerImages) => [...prevPlayerImages, cardImage]);
    };

    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    function hiddenClicked() {

        appendToPlayerCards(getRandomNumber(1,13))
        appendToPlayerImages(getRandomNumber(1,4))

        changeSecond(true)
        changeFirst(false)
    }

    function stockClciked() {

        appendToPlayerCards(stockCard)
        appendToPlayerImages(parseInt(stockImage.toString()[0], 10))
        
        const firstNum = getRandomNumber(1,13)
        const secondNum = getRandomNumber(1,4)

        changeStock(firstNum)

        if(firstNum < 10){
            changeStockImage(`${secondNum}0${firstNum}`)
        }
        else{
            changeStockImage(`${secondNum}${firstNum}`)
        }

        changeSecond(true)
        changeFirst(false)
    }

    function cardClicked(index){

        // add if statements here to check if meld is true or layoff is true
        if((index !== meld1Index) && (index !== meld2Index) && (index !== meld3Index)){
            if(meld1Value === 0){
                    changemeld1Index(index)
                    changemeld1Value(playerCards[index])
                    if(playerCards[index]<10){
                        changemeld1Image(`${playerImages[index]}0${playerCards[index]}`)
                    }
                    else{
                        changemeld1Image(`${playerImages[index]}${playerCards[index]}`)
                    }
            }
            else if(meld2Value === 0){
                changemeld2Index(index)
                changemeld2Value(playerCards[index])
                if(playerCards[index]<10){
                    changemeld2Image(`${playerImages[index]}0${playerCards[index]}`)
                }
                else{
                    changemeld2Image(`${playerImages[index]}${playerCards[index]}`)
                }
            }
            else if(meld3Value === 0){
                changemeld3Index(index)
                changemeld3Value(playerCards[index])
                if(playerCards[index]<10){
                    changemeld3Image(`${playerImages[index]}0${playerCards[index]}`)
                }
                else{
                    changemeld3Image(`${playerImages[index]}${playerCards[index]}`)
                }
            }
        }
    }

    function wantsLayoff() {
        changelayoffOrMeld(false)
        changeLayoff(true)
    }

    function wantsMeld() {
        changelayoffOrMeld(false)
        changeMeld(true)
    }

    function remove1() {
        changemeld1Value(0)
        changemeld1Index(null)
        changemeld1Image("back")
    }

    function remove2() {
        changemeld2Value(0)
        changemeld2Index(null)
        changemeld2Image("back")
    }

    function remove3() {
        changemeld3Value(0)
        changemeld3Index(null)
        changemeld3Image("back")
    }

    function meld() {
        if(meld1Value === meld2Value && meld1Value === meld3Value && meld1Image !== "back"){
            //creating buffer array and copying values from 'meldCards'
            const bufferMeldCards = meldCards.map(row => [...row]);
            //creating row to add to meldCards
            const newMeldHand = [meld1Value,meld2Value,meld3Value]
            //adding new set of meld cards to bufferArray
            bufferMeldCards.push(newMeldHand)
            //changing meldCards
            changemeldCards(bufferMeldCards)

            //creating buffer array and copying values from 'meldCards'
            const bufferMeldImages = meldImages.map(row => [...row]);
            //creating row to add to meldCards
            const newMeldImages = [meld1Image,meld2Image,meld3Image]
            //adding new set of meld cards to bufferArray
            bufferMeldImages.push(newMeldImages)
            //changing meldCards
            changemeldImages(bufferMeldImages)

            const bufferPlayerCard = playerCards
            const bufferPlayerImages = playerImages

            bufferPlayerCard.splice(meld1Index,1)
            bufferPlayerImages.splice(meld1Index,1)
            bufferPlayerCard.splice(meld2Index,1)
            bufferPlayerImages.splice(meld2Index,1)
            bufferPlayerCard.splice(meld3Index,1)
            bufferPlayerImages.splice(meld3Index,1)

            changePlayerCards(bufferPlayerCard)
            changePlayerImages(bufferPlayerImages)

            //resetting values
            remove1()
            remove2()
            remove3()
        }
        changelayoffOrMeld(true)
        changeMeld(false)
        changecanMeld(false)
    }

    function run() {
        if(meld1Value === (meld2Value - 1) && meld1Value === (meld3Value - 2)){
            if((playerImages[meld1Index] === playerImages[meld2Index]) && (playerImages[meld2Index] === playerImages[meld3Index])){
                //creating buffer array and copying values from 'meldCards'
                const bufferRunCards = runCards.map(row => [...row]);
                //creating row to add to meldCards
                const newRunHand = [meld1Value,meld2Value,meld3Value]
                //adding new set of meld cards to bufferArray
                bufferRunCards.push(newRunHand)
                //changing meldCards
                changerunCards(bufferRunCards)

                //creating buffer array and copying values from 'meldCards'
                const bufferRunImages = runImages.map(row => [...row]);
                //creating row to add to meldCards
                const newRunImages = [meld1Image,meld2Image,meld3Image]
                //adding new set of meld cards to bufferArray
                bufferRunImages.push(newRunImages)
                //changing meldCards
                changerunImages(bufferRunImages)

                const bufferPlayerCard = playerCards
                const bufferPlayerImages = playerImages

                bufferPlayerCard.splice(meld1Index,1)
                bufferPlayerImages.splice(meld1Index,1)
                bufferPlayerCard.splice(meld2Index,1)
                bufferPlayerImages.splice(meld2Index,1)
                bufferPlayerCard.splice(meld3Index,1)
                bufferPlayerImages.splice(meld3Index,1)

                changePlayerCards(bufferPlayerCard)
                changePlayerImages(bufferPlayerImages)

                //resetting values
                remove1()
                remove2()
                remove3()
            }
        }
        changelayoffOrMeld(true)
        changeMeld(false)
        changecanMeld(false)
    }

    function goBack() {
        changelayoffOrMeld(true)
        changeMeld(false)
        changeLayoff(false)
    }
    return (
        <>
            {rounds ? (
            <>
                <h1 className="war-title">Rummy</h1>
                <h2 className="war-title">How many rounds would you like to play:</h2>
                <div className="rounds-container">
                    <button className="rounds-element" onClick={oneRound}>1</button>
                    <button className="rounds-element" onClick={twoRound}>2</button>
                    <button className="rounds-element" onClick={threeRound}>3</button>
                </div>
            </>
            ):(
            <> 
                {start &&
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
                }

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
                        {playerCards.slice(0, 10).map((card, outerIndex) => {
                            return (
                                <div key={outerIndex}>
                                    <button>
                                        <img
                                            className="players-card"
                                            src={`./cards/${playerImages[outerIndex]}${card < 10 ? '0' : ''}${card}.png`}
                                            alt={`card${outerIndex}`}
                                        />
                                    </button>
                                </div>
                            );
                        })}
                        </div>
                        <div className="player2-cards">
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

                    <div className="options-container">
                        <div className="stock-title-container">
                            <h1 className="stocker">Stock</h1>
                            <div className="stock-container">
                                <button onClick={hiddenClicked}>
                                    <img className="players-card" src="./cards/back.png" alt="stockblank"/>
                                </button>
                                <button onClick={stockClciked}>
                                    <img className="players-card" src={`./cards/${stockImage}.png`} alt="stockcard"/>
                                </button>
                                <h1 className="draw-card">Pick a card to draw</h1>
                            </div>
                        </div>
                    </div>
                </>
                }
                {second &&
                <>
                    <h1 className="war-title">Rummy</h1>
                    <div className="game-container">
                        <h2 className="war-title">Your Cards:</h2>
                        <h2 className="war-title">Dealers Cards:</h2>
                    </div>
                    <div className="game-container">
                        <div className="players-cards">
                        {playerCards.map((card, outerIndex) => {

                            let index = 0

                            const handleClick = () => {
                                //each card is assigned its own function when clicked so we know what card is clicked
                                switch (outerIndex) {
                                    case 0:
                                        index = 0;
                                        break;
                                    case 1:
                                        index = 1;
                                        break;
                                    case 2:
                                        index = 2;
                                        break;
                                    case 3:
                                        index = 3;
                                        break;
                                    case 4:
                                        index = 4;
                                        break;
                                    case 5:
                                        index = 5;
                                        break;
                                    case 6:
                                        index = 6;
                                        break;
                                    case 7:
                                        index = 7;
                                        break;
                                    case 8:
                                        index = 8;
                                        break;
                                    case 9:
                                        index = 9;
                                        break;
                                    case 10:
                                        index = 10;
                                        break;
                                    case 11:
                                        index = 11;
                                        break;
                                    case 12:
                                        index = 12;
                                        break;
                                    case 13:
                                        index = 13;
                                        break;
                                    case 14:
                                        index = 14;
                                        break;
                                    case 15:
                                        index = 15;
                                        break;
                                    case 16:
                                        index = 16;
                                        break;
                                    case 17:
                                        index = 17;
                                        break;
                                    case 18:
                                        index = 18;
                                        break;
                                    case 19:
                                        index = 19;
                                        break;
                                    default:
                                        break;
                                }
                                cardClicked(index)
                            }
                            return (
                                <div key={outerIndex}>
                                    <button onClick={handleClick}>
                                        <img
                                            className="players-card"
                                            src={`./cards/${playerImages[outerIndex]}${card < 10 ? '0' : ''}${card}.png`}
                                            alt={`card${outerIndex}`}
                                        />
                                    </button>
                                </div>
                            );
                        })}
                        </div>
                        <div className="player2-cards">
                            {dealerCards.map((card, outerIndex) => (
                                <div key={outerIndex}>
                                <img
                                    key={outerIndex} className="players-card"
                                    src={`./cards/back.png`} alt={`card${outerIndex}`}
                                />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="options-container">
                        <div className="stock-title-container">
                            <h1 className="stocker">Stock</h1>
                            <div className="stock-container">
                                <button>
                                    <img className="players-card" src="./cards/back.png" alt="stockblank"/>
                                </button>
                                <button>
                                    <img className="players-card" src={`./cards/${stockImage}.png`} alt="stockcard"/>
                                </button>
                            </div>
                        </div>
                        {layoffOrMeld &&
                        <>
                        <button className="play-btn" onClick={wantsLayoff}>Layoff?</button>
                        {canMeld &&
                            <button className="play-btn" onClick={wantsMeld}>Meld/Run?</button>
                        }
                        </>
                        }
                        {melding &&
                        <>
                            <div>
                                <h1 className="meld-title">Choose cards to Meld/Run</h1>
                                <h1 className="meld-title">place cards in increasing order</h1>
                            </div>
                            <div className="meld-cards">
                                <button onClick={remove1}>
                                    <img src={`./cards/${meld1Image}.png`} alt="first meld card"/>
                                </button>
                                <button onClick={remove2}>
                                    <img src={`./cards/${meld2Image}.png`} alt="second meld card"/>
                                </button>
                                <button onClick={remove3}>
                                    <img src={`./cards/${meld3Image}.png`} alt="third meld card"/>
                                </button>
                            </div>
                            <button className="play-btn" onClick={meld}>
                                Meld?
                            </button>
                            <button className="play-btn" onClick={run}>
                                Run?
                            </button>
                            <button className="play-btn" onClick={goBack}>Back?</button>
                        </>
                        }
                        {layoff &&
                        <>
                            <h1 className="rum-text">Choose a card to layoff</h1>
                            <button className="play-btn" onClick={goBack}>Back?</button>
                        </>
                        }
                    </div>
                    <div className="meld-run-container">
                        <div className="mr-cards">
                            <h1 className="war-title">Meld Hands:</h1>
                            {meldImages.map((row, rowIndex) => (
                                <div key={rowIndex}>
                                    {row.map((card, columnIndex) => (
                                    <img
                                        key={`${rowIndex}-${columnIndex}`}
                                        className="players-card"
                                        src={`./cards/${card}.png`}
                                        alt={`card${rowIndex}-${columnIndex}`}
                                    />
                                    ))}
                                </div>
                            ))}
                        </div>
                        <div className="mr-cards">
                            <h1 className="war-title">Run Hands:</h1>
                            {runImages.map((row, rowIndex) => (
                                <div key={rowIndex}>
                                    {row.map((card, columnIndex) => (
                                    <img
                                        key={`${rowIndex}-${columnIndex}`}
                                        className="players-card"
                                        src={`./cards/${card}.png`}
                                        alt={`card${rowIndex}-${columnIndex}`}
                                    />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </>
                }
                {third &&
                <>

                </>
                }
            </>
            )}
        </>
    )
}