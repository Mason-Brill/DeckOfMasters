import {React, useState, useEffect} from "react";

export default function Blackjack(){
    const[first, changeFirst] = useState(true)
    const[option, changeOption] = useState(false)
    const[stand, changeStand] = useState(false)
    const[winner, changeWinner] = useState("None")
    const[playerCards, changePlayerCards] = useState([])
    const[playerImages, changePlayerImages] = useState([])
    const[dealerCards, changeDealerCards] = useState([])
    const[dealerImages, changeDealerImages] = useState([])

    const [switcher, changeSwitcher] = useState(true)

    useEffect(() => {
        // This useEffect will run whenever playerCards is updated
        if(playerCards.length === 2)
        {
            changeFirst(false)
            changeOption(true)
        }
    }, [playerCards], stand);

    //two random numbers generated to be used for name of card image i.e. 312.png
    let number1 = 0
    let number2 = 0

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
        number1 = Math.floor(Math.random() * 13) + 1;

        //generate random number between 0-3 and times it by 100
        number2 = Math.floor(Math.random() * 4);
        if(number2 === 0){
            number2 = number2 + 100;
        }
        else {
            number2 = number2 * 100
        }

        const player1 = number1 + number2

        //placing the name of the image file for the card in the "playerImages" array
        changePlayerImages(prevPlayerImages => [...prevPlayerImages, player1]);

        if(number1 > 10){
            number1 = 10
        }

        const pcard1 = number1
        //placing the players card value in the "playerCards" array
        changePlayerCards(prevPlayerCards => [...prevPlayerCards, pcard1]);

        //generate random number between 1-13
        number1 = Math.floor(Math.random() * 13) + 1;

        //generate random number between 0-3 and times it by 100
        number2 = Math.floor(Math.random() * 4);
        if(number2 === 0){
            const player2 = number1
            //placing the name of the image file for the card in the "playerImages" array
            changePlayerImages(prevPlayerImages => [...prevPlayerImages, player2]);
        }
        else {
            number2 = number2 * 100
            const player2 = number1 + number2
            //placing the name of the image file for the card in the "playerImages" array
            changePlayerImages(prevPlayerImages => [...prevPlayerImages, player2]);
        }

        if(number1 > 10){
            number1 = 10
        }

        //placing the players card value in the "playerCards" array
        const pcard2 = number1
        changePlayerCards(prevPlayerCards => [...prevPlayerCards, pcard2]);

        //generate random number between 1-13
        number1 = Math.floor(Math.random() * 13) + 1;

        //generate random number between 0-3 and times it by 100
        number2 = Math.floor(Math.random() * 4);
        if(number2 === 0){
            number2 = number2 + 100;
        }
        else {
            number2 = number2 * 100
        }

        const dealer1 = number1 + number2
        //placing the name of the image file for the card in the "playerImages" array
        changeDealerImages(prevDealerImages => [...prevDealerImages, dealer1]);

        if(number1 > 10){
            number1 = 10
        }

        //placing the players card value in the "playerCards" array
        changeDealerCards(prevDealerCards => [...prevDealerCards, number1]);
    }

    function hit() {

        let sump = playerCards.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        if(sump < 21)
        {
            //generate random number between 1-13
            number1 = Math.floor(Math.random() * 13) + 1;

            //generate random number between 0-3 and times it by 100
            number2 = Math.floor(Math.random() * 4);
            if(number2 === 0){
                number2 = number2 + 100;
            }
            else {
                number2 = number2 * 100
            }

            const playerImage = number1 + number2

            //placing the name of the image file for the card in the "playerImages" array
            changePlayerImages(prevPlayerImages => [...prevPlayerImages, playerImage]);

            if(number1 > 10){
                number1 = 10
            }

            //placing the players card value in the "playerCards" array
            changePlayerCards(prevPlayerCards => [...prevPlayerCards, number1]);

            // update the sum with the new card value
            sump += number1;
        }
        else{
            changeWinner("Bust, Dealer Wins!")
            changeOption(false)
            changeStand(true)
        }
        if(sump > 21){
            changeWinner("Bust, Dealer Wins!")
            changeOption(false)
            changeStand(true)
        }
        if(sump === 21){
            changeWinner("Blackjack, Player Wins!")
            changeOption(false)
            changeStand(true)
        }

    }

    function Stand() {

        let sum = dealerCards[0]
        const psum = playerCards.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

        while(sum < 17)
        {
            //generate random number between 1-13
            number1 = Math.floor(Math.random() * 13) + 1;

            //generate random number between 0-3 and times it by 100
            number2 = Math.floor(Math.random() * 4);
            if(number2 === 0){
                number2 = number2 + 100;
            }
            else {
                number2 = number2 * 100
            }

            const dealer2 = number1 + number2

            //placing the name of the image file for the card in the "playerImages" array
            changeDealerImages(prevDealerImages => [...prevDealerImages, dealer2]);

            if(number1 > 10){
                number1 = 10
            }

            //placing the players card value in the "playerCards" array
            // eslint-disable-next-line
            changeDealerCards(prevDealerCards => [...prevDealerCards, number1]);

            // update the sum with the new card value
            sum += number1;
        }  

        //checking if dealer is greater than player and dealer has not bust
        if((sum > psum) && (sum < 22)){
            changeWinner("Dealer!")
        }
        //checking if player is greater than dealer and player has not bust
        else if((psum > sum) && (psum < 22)){
            changeWinner("Player!")
        }
        //if nither the above conditions are true then tie
        else {
            changeWinner("Tie!")
        }

        if(sum > 21){
            changeWinner("Player")
        }
        changeOption(false)
        changeStand(true)
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
                { option &&
                <>
                    <h1 className="war-title">Blackjack</h1>
                    <div className="game-container">
                    <div className="player-container">
                            <h1 className="war-title">Your Cards:</h1>
                            <div className="player1-cards">
                            {playerImages.map((item, index) => (
                                <div key={index}>
                                    {/* displaying each card in dealers cards */}
                                    <img key={index} className={`${switcher ? "war-card1" : "war-card2"}`} src={`./cards/${item}.png`} alt="card1"/>
                                </div>
                            ))}
                            </div>
                            <button className="play-btn" onClick={hit}>Hit?</button>
                        </div>
                        <div className="player-container">
                            <h1 className="war-title">Dealers Cards:</h1>
                            <div className="player1-cards">
                            {dealerImages.map((item, index) => (
                                <div key={index}>
                                    {/* displaying each card in dealers cards */}
                                    <img key={index} className={`${switcher ? "war-card1" : "war-card2"}`} src={`./cards/${item}.png`} alt="card1"/>
                                </div>
                            ))}
                            <img className="war-card1" src="./cards/back.png" alt="card2"/>
                            </div>
                            <button className="play-btn" onClick={Stand}>Stand?</button>
                        </div>
                    </div>
                </>
                }

                { stand &&
                <>
                    <h1 className="war-title">Blackjack</h1>
                    <div className="game-container">
                        <div className="player-container">
                            <h1 className="war-title">Your Cards:</h1>
                            <div className="player1-cards">
                            {playerImages.map((item, index) => (
                                    <div key={index}>
                                        {/* displaying each card in dealers cards */}
                                        <img key={index} className={`${switcher ? "war-card1" : "war-card2"}`} src={`./cards/${item}.png`} alt="card1"/>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="player-container">
                            <h1 className="war-title">Dealers Cards:</h1>
                            <div className="player1-cards">
                                {dealerImages.map((item, index) => (
                                    <div key={index}>
                                        {/* displaying each card in dealers cards */}
                                        <img key={index} className={`${switcher ? "war-card1" : "war-card2"}`} src={`./cards/${item}.png`} alt="card1"/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <h1 className="war-title">{`Winner: ${winner}`}</h1>
                </>
                }
            </>
        )}
        </>
    )
}