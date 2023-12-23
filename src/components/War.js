import React,{useState} from "react";
import "../App.css"


export default function War(){
    const [showcards, changeShowcards] = useState(true)
    const [switcher, changeSwitcher] = useState(true)
    const [card1,changecard1] = useState(0)
    const [card2,changecard2] = useState(0)
    const [winner, selectWinner] = useState("None")
    //const [card2,changecard2] = useState(0)
    let number1 = 0
    let number2 = 0
    let player1 = 0
    let player2 = 0

    function handlecards(){

        changeShowcards(false)
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

        player1 = number1;
        changecard1(number1+number2+1);
        ///////////////////////////////////////////////////////////
        //generate random number between 0-12
        number1 = Math.floor(Math.random() * 13);
        //generate random number between 0-3 and times it by 100
        number2 = Math.floor(Math.random() * 4);
        if(number2 === 0){
            number2 = number2 + 100;
        }
        else{
            number2 = number2 * 100
        }

        player2 = number1
        changecard2(number1+number2+1);

        if(player1 > player2)
        {
            selectWinner("Player 1")
        }
        else if(player2 > player1){
            selectWinner("Player 2")
        }
        else {
            selectWinner("Tie!")
        }
    }

    return (
        <>
            {showcards ? (
            <>
                <h1 className="war-title">War</h1>
                <div className="players-cont">
                    <h1 className="player1">Player 1</h1>
                    <h1 className="player2">Player 2</h1>
                </div>
                <div className="war-container">
                    <img className="war-card1" src="./cards/back.png" alt="card1"/>
                    <img className="war-card1" src="./cards/back.png" alt="card2"/>
                </div>
                <button className="play-btn" onClick={handlecards}>Play!</button>
            </>
            ):(
            <>
                <h1 className="war-title">War</h1>
                <div className="players-cont">
                    <h1 className="player1">Player 1</h1>
                    <h1 className="player2">Player 2</h1>
                </div>
                <div className="war-container">
                    <img className={`${switcher ? "war-card1" : "war-card2"}`} src={`./cards/${card1}.png`} alt="card1"/>
                    <img className={`${switcher ? "war-card1" : "war-card2"}`} src={`./cards/${card2}.png`} alt="card2"/>
                </div>
                <h1 className="winner">{`Winner: ${winner}`}</h1>
                <button className="play-btn" onClick={handlecards}>Play!</button>
            </>
            )}
        </>
    )
}