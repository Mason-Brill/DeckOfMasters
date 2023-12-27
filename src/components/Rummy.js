import {React, useState} from "react";

export default function Rummy() {
    const [start, changeStart] = useState(true)
    const [drawing, changeDrawing] = useState(false)
    const [first, changeFirst] = useState(false)
    const [switcher, changeSwitcher] = useState(false)
    const [swapCard, enableswapCard] = useState(false)
    const [deckCard, enableDeckCard] = useState(false)

    const [card1, changeCard1] = useState("back")
    const [card2, changeCard2] = useState("back")
    //const [value1, changeValue1] = useState(0)
    //const [value2, changeValue2] = useState(0)
    const [starter, changeStarter] = useState("")
    const [stockCard, changeStock] = useState(0)
    const [stockImage, changeStockImage] = useState("")

    const [PlayerscardtoSwap, changePlayerscardtoSwap] = useState(0)
    const [PlayersimagetoSwap, changePlayersimagetoSwap] = useState("")
    const [StockcardtoSwap, changeStockcardtoSwap] = useState(0)
    const [StockimagetoSwap, changeStockimagetoSwap] = useState("")
    const [playersIndex, changeplayersIndex] = useState(0)

    const[playerCards, changePlayerCards] = useState([])
    const[playerImages, changePlayerImages] = useState([])
    const[dealerCards, changeDealerCards] = useState([])
    //const[dealerImages, changeDealerImages] = useState([])

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

        //const DealersImages = Array.from({ length: 10 }, () => getRandomNumber(1, 3));
        const PlayersImages = Array.from({ length: 10 }, () => getRandomNumber(1, 3));

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

    function cardSwap0() {
        enableswapCard(true)
        changePlayerscardtoSwap(playerCards[0])
        if(playerCards[0] < 10)
        {
            changePlayersimagetoSwap(`${playerImages[0]}0${playerCards[0]}`)
            console.log(`${playerImages[0]}0${playerCards[0]}`)
        }
        else {
            changePlayersimagetoSwap(`${playerImages[0]}${playerCards[0]}`)
            console.log(`${playerImages[0]}${playerCards[0]}`)
        }
        changeplayersIndex(0)
    }

    function cardSwap1() {
        enableswapCard(true)
        changePlayerscardtoSwap(playerCards[1])
        if(playerCards[1] < 10)
        {
            changePlayersimagetoSwap(`${playerImages[1]}0${playerCards[1]}`)
            console.log(`${playerImages[1]}0${playerCards[1]}`)
        }
        else {
            changePlayersimagetoSwap(`${playerImages[1]}${playerCards[1]}`)
            console.log(`${playerImages[1]}${playerCards[1]}`)
        }
        changeplayersIndex(1)
    }

    function cardSwap2() {
        enableswapCard(true)
        changePlayerscardtoSwap(playerCards[2])
        if(playerCards[2] < 10)
        {
            changePlayersimagetoSwap(`${playerImages[2]}0${playerCards[2]}`)
            console.log(`${playerImages[2]}0${playerCards[2]}`)
        }
        else {
            changePlayersimagetoSwap(`${playerImages[2]}${playerCards[2]}`)
            console.log(`${playerImages[2]}${playerCards[2]}`)
        }
        changeplayersIndex(2)
    }

    function cardSwap3() {
        enableswapCard(true)
        changePlayerscardtoSwap(playerCards[3])
        if(playerCards[3] < 10)
        {
            changePlayersimagetoSwap(`${playerImages[3]}0${playerCards[3]}`)
            console.log(`${playerImages[3]}0${playerCards[3]}`)
        }
        else {
            changePlayersimagetoSwap(`${playerImages[3]}${playerCards[3]}`)
            console.log(`${playerImages[3]}${playerCards[3]}`)
        }
        changeplayersIndex(3)
    }

    function cardSwap4() {
        enableswapCard(true)
        changePlayerscardtoSwap(playerCards[4])
        if(playerCards[4] < 10)
        {
            changePlayersimagetoSwap(`${playerImages[4]}0${playerCards[4]}`)
            console.log(`${playerImages[4]}0${playerCards[4]}`)
        }
        else {
            changePlayersimagetoSwap(`${playerImages[4]}${playerCards[4]}`)
            console.log(`${playerImages[4]}${playerCards[4]}`)
        }
        changeplayersIndex(4)
    }

    function cardSwap5() {
        enableswapCard(true)
        changePlayerscardtoSwap(playerCards[5])
        if(playerCards[5] < 10)
        {
            changePlayersimagetoSwap(`${playerImages[5]}0${playerCards[5]}`)
            console.log(`${playerImages[5]}0${playerCards[5]}`)
        }
        else {
            changePlayersimagetoSwap(`${playerImages[5]}${playerCards[5]}`)
            console.log(`${playerImages[5]}${playerCards[5]}`)
        }
        changeplayersIndex(5)
    }

    function cardSwap6() {
        enableswapCard(true)
        changePlayerscardtoSwap(playerCards[6])
        if(playerCards[6] < 10)
        {
            changePlayersimagetoSwap(`${playerImages[6]}0${playerCards[6]}`)
            console.log(`${playerImages[6]}0${playerCards[6]}`)
        }
        else {
            changePlayersimagetoSwap(`${playerImages[6]}${playerCards[6]}`)
            console.log(`${playerImages[6]}${playerCards[6]}`)
        }
        changeplayersIndex(6)
    }

    function cardSwap7() {
        enableswapCard(true)
        changePlayerscardtoSwap(playerCards[7])
        if(playerCards[7] < 10)
        {
            changePlayersimagetoSwap(`${playerImages[7]}0${playerCards[7]}`)
            console.log(`${playerImages[7]}0${playerCards[7]}`)
        }
        else {
            changePlayersimagetoSwap(`${playerImages[7]}${playerCards[7]}`)
            console.log(`${playerImages[7]}${playerCards[7]}`)
        }
        changeplayersIndex(7)
    }

    function cardSwap8() {
        enableswapCard(true)
        changePlayerscardtoSwap(playerCards[8])
        if(playerCards[8] < 10)
        {
            changePlayersimagetoSwap(`${playerImages[8]}0${playerCards[8]}`)
            console.log(`${playerImages[8]}0${playerCards[8]}`)
        }
        else {
            changePlayersimagetoSwap(`${playerImages[8]}${playerCards[8]}`)
            console.log(`${playerImages[8]}${playerCards[8]}`)
        }
        changeplayersIndex(8)
    }

    function cardSwap9() {
        enableswapCard(true)
        changePlayerscardtoSwap(playerCards[9])
        if(playerCards[9] < 10)
        {
            changePlayersimagetoSwap(`${playerImages[9]}0${playerCards[9]}`)
            console.log(`${playerImages[9]}0${playerCards[9]}`)
        }
        else {
            changePlayersimagetoSwap(`${playerImages[9]}${playerCards[9]}`)
            console.log(`${playerImages[9]}${playerCards[9]}`)
        }
        changeplayersIndex(9)
    }

    function stockClciked() {
        enableDeckCard(true)
        changeStockcardtoSwap(stockCard)
        if(stockCard < 10){
            changeStockimagetoSwap(`${stockImage}`)
            console.log(`${stockImage}`)
        }
        else {
            changeStockimagetoSwap(`${stockImage}`)
            console.log(`${stockImage}`)
        }
    }

    function swapping() {
        if(deckCard && swapCard){
            const thePlayersCard = PlayerscardtoSwap
            const thePlayersImage = PlayersimagetoSwap
            const theStocksCard = StockcardtoSwap
            const theStocksImage = StockimagetoSwap[0]
            const thePlayersIndex = playersIndex

            changeStock(thePlayersCard)
            changeStockImage(thePlayersImage)

            changePlayerCards(prevPlayerCards => {
                const updatedPlayerCards = [...prevPlayerCards];
                updatedPlayerCards[thePlayersIndex] = theStocksCard;
                return updatedPlayerCards;
              });

            changePlayerImages(prevPlayerImages => {
            const updatedPlayerCards = [...prevPlayerImages];
            updatedPlayerCards[thePlayersIndex] = theStocksImage;
            return updatedPlayerCards;
            });
        }
        enableDeckCard(false)
        enableswapCard(false)
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
                        {playerCards.slice(0, 10).map((card, outerIndex) => {

                            const handleClick = () => {
                                // Call the function directly
                                switch (outerIndex) {
                                    case 0:
                                        cardSwap0();
                                        break;
                                    case 1:
                                        cardSwap1();
                                        break;
                                    case 2:
                                        cardSwap2();
                                        break;
                                    case 3:
                                        cardSwap3();
                                        break;
                                    case 4:
                                        cardSwap4();
                                        break;
                                    case 5:
                                        cardSwap5();
                                        break;
                                    case 6:
                                        cardSwap6();
                                        break;
                                    case 7:
                                        cardSwap7();
                                        break;
                                    case 8:
                                        cardSwap8();
                                        break;
                                    case 9:
                                        cardSwap9();
                                        break;
                                    default:
                                        break;
                                }
                                console.log(playerImages[9])
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
                    <h1 className="war-title">Stock</h1>
                    <div className="stock-container">
                        <img className="players-card" src="./cards/back.png" alt="stockblank"/>
                        <button onClick={stockClciked}>
                            <img className="players-card" src={`./cards/${stockImage}.png`} alt="stockcard"/>
                        </button>
                        <button onClick={swapping} className="swap-btn">Swap!</button>
                    </div>
                </>
                }
            </>
            )}
        </>
    )
}