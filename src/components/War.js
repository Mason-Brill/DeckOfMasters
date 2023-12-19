import React,{useState} from "react";
import "../App.css"


export default function War(){
    const [showcards, changeShowcards] = useState(true)
    const [switcher, changeSwitcher] = useState(true)
    const [card1,changecard1] = useState(0)
    const [card2,changecard2] = useState(0)
    //const [card2,changecard2] = useState(0)
    let number1 = 0
    let number2 = 0

    function handlecards(){
        //produce random number for card 1
        //0-12
        //0-3 times 100

        //part 1 plus part 2

        changeShowcards(false)
        if(switcher === true)
        {
            changeSwitcher(false)
            console.log("set fasle")
        }
        else
        {
            changeSwitcher(true)
            console.log("set true")
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

        changecard1(number1 + number2);
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
        changecard2(number1 + number2);
    }

    return (
        <>
            {showcards ? (
            <>
                <h1 className="war-title">War</h1>
                <div className="war-container">
                    <img className="war-card" src="./cards/back.png" alt="card1"/>
                    <img className="war-card" src="./cards/back.png" alt="card2"/>
                </div>
                <button className="play-btn" onClick={handlecards}>Play!</button>
            </>
            ):(
            <>
                <h1 className="war-title">War</h1>
                <div className="war-container">
                    <img className={`${switcher ? "war-card1" : "war-card2"}`} src={`./cards/${card1}.png`} alt="card1"/>
                    <img className={`${switcher ? "war-card1" : "war-card2"}`} src={`./cards/${card2}.png`} alt="card2"/>
                </div>
                <button className="play-btn" onClick={handlecards}>Play!</button>
            </>
            )}
        </>
    )
}