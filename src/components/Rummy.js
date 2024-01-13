import {React, useState} from "react";

export default function Rummy() {
    const [start, changeStart] = useState(true)
    const [drawing, changeDrawing] = useState(false)
    const [first, changeFirst] = useState(false)
    const [second, changeSecond] = useState(false)
    const [third, changeThird] = useState(false)
    const [fourth, changeFourth] = useState(false)
    const [switcher, changeSwitcher] = useState(false)
    const [playerTotal, changeplayerTotal] =useState(0)
    const [dealerTotal, changedealerTotal] = useState(0)
    const [starter, changeStarter] = useState("")
    const [layoffOrMeld, changelayoffOrMeld] = useState(true)
    const [melding, changeMeld] = useState(false)
    const [layoff, changeLayoff] = useState(false)
    const [canMeld, changecanMeld] = useState(true)
    const [layoffIndex, changelayoffIndex] = useState(0)
    const [endingTurn, changeendingTurn] = useState(false)
    const [discardImage, changediscardImage] = useState("back")
    const [discardValue, changediscardValue] = useState(0)
    const [discardIndex, changediscardIndex] = useState(0)
    const [winner, changeWinner] = useState("None")

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

    const [layoffCard, changelayoffCard] = useState(0)
    const [layoffImage, changelayoffImage] = useState("back")
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

    function newRound(){
        changeStart(true)
        changeFirst(false)
        changeSecond(false)
        changeThird(false)
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
        changelayoffOrMeld(true)
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
            changelayoffOrMeld(true)
            changeFirst(false)
    }

    function discardEnding(){

        if(discardImage !== "back"){
            changeStock(discardValue)
            changeStockImage(discardImage)
            
            playerCards.splice(discardIndex, 1)
            playerImages.splice(discardIndex, 1)

            if(playerCards.length === 0){
                changeThird(false)
                changeSecond(false)
                changeFourth(true)
                changeWinner("Player")
            }
            else{
                changediscardImage("back")
                changediscardValue(0)
                changediscardIndex(0)
                changeendingTurn(false)
                changelayoffOrMeld(true)
                endTurn()
            }
        }
    }

    function stockEnding() {

        if(discardImage !== "back"){
            playerCards.splice(discardIndex, 1)
            playerImages.splice(discardIndex, 1)
            
            if(playerCards.length === 0){
                changeThird(false)
                changeSecond(false)
                changeFourth(true)
                changeWinner("Player")

                console.log(dealerCards)
                let total = 0
                for(let i=0;i<dealerCards.length-1;i++){
                    if(dealerCards[i]>10){
                        total = total + 10
                    }
                    else{
                        total = total + dealerCards[i]
                    }
                }

                changeplayerTotal(total)
            }
            else{
                changediscardImage("back")
                changediscardValue(0)
                changediscardIndex(0)
                changeendingTurn(false)
                changelayoffOrMeld(true)
                endTurn()
            }
        }
    }

    function cardClicked(index){

        if(melding === true) {
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
        if(layoff === true) {
            changelayoffCard(playerCards[index])
            if(playerCards[index]<10){
                changelayoffImage(`${playerImages[index]}0${playerCards[index]}`)
            }
            else{
                changelayoffImage(`${playerImages[index]}${playerCards[index]}`)
            }

            changelayoffIndex(index)
        }
        if(endingTurn === true){
            changediscardValue(playerCards[index])
            changediscardIndex(index)
            if(playerCards[index]<10){
                changediscardImage(`${playerImages[index]}0${playerCards[index]}`)
            }
            else{
                changediscardImage(`${playerImages[index]}${playerCards[index]}`)
            }
        }
    }

    function wantsLayoff() {
        changelayoffOrMeld(false)
        changeLayoff(true)

        //used for testing layoff feature
        // const bufferCardss = [5,6,7,8,9,10,11]//////////////////////////////////////////////////////////////
        // changePlayerCards(bufferCardss)//////////////////////////////////////////////////////////////
        // const bufferImagess = [4,4,4,3,4,4,4]   //////////////////////////////////////////////////////////////
        // changePlayerImages(bufferImagess)//////////////////////////////////////////////////////////////
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

    function layoffClicked(index){
        if(meldCards[index][0] === layoffCard){
            const meldBuffer = meldCards.map(row => [...row]);
            const meldImagesBuffer = meldImages.map(row => [...row]);

            // find method to append a value to the 2nd dimension of a 2D array
            // do this on meldBuffer

            meldBuffer[index].push(layoffCard)
            changemeldCards(meldBuffer)

            meldImagesBuffer[index].push(layoffImage)
            changemeldImages(meldImagesBuffer)

            const bufferCard = playerCards
            const bufferImages = playerImages

            bufferCard.splice(layoffIndex,1)
            bufferImages.splice(layoffIndex,1)

            changelayoffCard(0)
            changelayoffImage("back")

        }
    }

    function runClicked(index){
        const runCardsBuffer = runCards
        const runImagesBuffer = runImages
        const CardsBuffer = playerCards
        const ImagesBuffer = playerImages

        if(layoffImage[0] === runImages[index][0][0]){
            if(runCards[index][0] === layoffCard+1){
                runCardsBuffer[index].unshift(layoffCard)
                runImagesBuffer[index].unshift(layoffImage)
                changerunCards(runCardsBuffer)
                changerunImages(runImagesBuffer)

                CardsBuffer.splice(layoffIndex,1)
                ImagesBuffer.splice(layoffIndex,1)
                changePlayerCards(CardsBuffer)
                changePlayerImages(ImagesBuffer)

                changelayoffCard(0)
                changelayoffImage("back")
            }
            else if((runCards[index][runCards[index].length-1]) === layoffCard-1){
                runCardsBuffer[index].push(layoffCard)
                runImagesBuffer[index].push(layoffImage)
                changerunCards(runCardsBuffer)
                changerunImages(runImagesBuffer)

                CardsBuffer.splice(layoffIndex,1)
                ImagesBuffer.splice(layoffIndex,1)
                changePlayerCards(CardsBuffer)
                changePlayerImages(ImagesBuffer)

                changelayoffCard(0)
                changelayoffImage("back")
            }
        }
    }

    function discarding() {
        if(playerCards.length === 0){
            changeWinner("Player")
            changeThird(false)
            changeSecond(false)
            changeFourth(true)
        }
        changeendingTurn(true)
        changelayoffOrMeld(false)
    }

    function endTurn() {
        changeThird(true)
        changeSecond(false)
        changeMeld(false)
        changeLayoff(false)
        changecanMeld(true)
    }

    function dealersTurn(){

        //dealer needs to draw from either the stock pile or discard pile
        //do this with random number generator
        let random1 = getRandomNumber(1,2)
        let hiddenCard = getRandomNumber(1,13)
        const DealersCardsBuffer = dealerCards

        if(random1 === 1){
            console.log("dealer choose discard card")
            DealersCardsBuffer.push(stockCard)

            //changing stock card and image
            changeStock(hiddenCard)

            if(hiddenCard < 10){
                changeStockImage(`${getRandomNumber(1,4)}0${hiddenCard}`)
            }
            else{
                changeStockImage(`${getRandomNumber(1,4)}${hiddenCard}`)
            }
        }
        else if(random1 === 2){
            console.log("dealer choose hidden card")
            DealersCardsBuffer.push(hiddenCard)
        }

        //melding
        // this will be a for loop nested within a for loop that will check each card
        // against all others and if the card on the outside loop is the same as the card on the inside loop
        // we will append it to a meldHand variable that will contain the three cards to be added
        // to the hands of meld cards
        //
        // if there are three cards in the meldHand, we will remove those cards from the dealers cards
        // and add a new meld hand to melded cards

        //running

        let meldCardsBuffer = meldCards.map(row => [...row])
        let meldImagesBuffer = meldImages.map(row => [...row])

        let runCardsBuffer = runCards.map(row => [...row])
        let runImagesBuffer = runImages.map(row => [...row])

        let valueMid = 0
        let valueLeft = 0
        let valueRight = 0
        let imageMid = "back"
        let imageLeft = "back"
        let imageRight = "back"
        let indexMid = 0
        let indexLeft = 0
        let indexRight = 0
        let hasRun = false
        let suit1 = 1
        let suit2 = 2
        let suit3 = 3

        for(let i=0;i<dealerCards.length;i++){

            if(hasRun === false){
                valueMid = dealerCards[i]
                indexMid = i
                valueLeft = 0
                valueRight = 0
                suit1 = getRandomNumber(1,4)
                suit2 = getRandomNumber(1,4)
                suit3 = getRandomNumber(1,4)
                for(let j=0;j<dealerCards.length;j++){
                    //making sure we do not compare the same card as the outter loop with the inner loop
                    if(i!==j){
                        if(dealerCards[j] === valueMid-1){
                            valueLeft = dealerCards[j]
                            indexLeft = j
                        }
                        if(dealerCards[j] === valueMid+1){
                            valueRight = dealerCards[j]
                            indexRight = j
                        }
                        if((valueLeft !== 0)&&(valueRight !== 0)){
                            if((suit1 === suit2)&&(suit2 === suit3)){
                                hasRun = true
                            }
                        }
                    }
                }
            }
        }

        if(hasRun === true){
            const DealersRun = [valueLeft, valueMid, valueRight]
            console.log(DealersRun)

            if(valueLeft<10){
                imageLeft = `${suit1}0${valueLeft}`
            }
            else{
                imageLeft = `${suit1}${valueLeft}`
            }

            if(valueMid<10){
                imageMid = `${suit2}0${valueMid}`
            }
            else{
                imageMid = `${suit2}${valueMid}`
            }

            if(valueRight<10){
                imageRight = `${suit3}0${valueRight}`
            }
            else{
                imageRight = `${suit3}${valueRight}`
            }

            const DealersRunImage = [imageLeft, imageMid, imageRight]

            runCardsBuffer.push(DealersRun)
            runImagesBuffer.push(DealersRunImage)

            DealersCardsBuffer.splice(indexLeft,1)
            DealersCardsBuffer.splice(indexMid,1)
            DealersCardsBuffer.splice(indexRight,1)

        }

        let hasMeld = false
        let counter = 1
        let value1 = 0
        let value2 = 0
        let value3 = 0
        let index1 = 0
        let index2 = 0
        let index3 = 0
        let image1 = ""
        let image2 = ""
        let image3 = ""

        //runing

        //need to add functionality so that user can discard a card at end of turn
        //need to add functionality so that dealer can run if possible

        //melding
        for(let i=0;i<DealersCardsBuffer.length;i++){
            if(hasMeld === false){
                value1 = DealersCardsBuffer[i]
                index1 = i
                value2 = 0
                value3 = 0
                index2 = 0
                index3 = 0
                counter = 1
                for(let j=0;j<DealersCardsBuffer.length;j++){
                    if((i!==j)&&(hasMeld === false)&&(hasRun === false)){
                        if(DealersCardsBuffer[i] === DealersCardsBuffer[j]){
                            if(counter === 1){
                                value2 = DealersCardsBuffer[j]
                                index2 = j
                                counter++
                            }
                            else if(counter === 2){
                                value3 = DealersCardsBuffer[j]
                                index3 = j
                                counter++
                                hasMeld = true
                            }
                        }
                    }
                }
            }
        }

        //adding dealers meld card and images to card and iomage buffers
        if(hasMeld === true &&((value1 === value2) && (value1 === value3))){

            const DealersMeld = [value1, value2, value3]

                meldCardsBuffer.push(DealersMeld)

                if(value1 < 10){
                    image1 = `${getRandomNumber(1,4)}0${value1}`
                }
                else{
                    image1 = (`${getRandomNumber(1,4)}${value2}`)
                }

                if(value2 < 10){
                    image2 = `${getRandomNumber(1,4)}0${value2}`
                }
                else{
                    image2 = (`${getRandomNumber(1,4)}${value2}`)
                }

                if(value3 < 10){
                    image3 = `${getRandomNumber(1,4)}0${value3}`
                }
                else{
                    image3 = (`${getRandomNumber(1,4)}${value2}`)
                }

                meldImagesBuffer.push([image1, image2, image3])

                DealersCardsBuffer.splice(index3,1)
                DealersCardsBuffer.splice(index2,1)
                DealersCardsBuffer.splice(index1,1)
        }

        //laying off
        for(let i=0;i<DealersCardsBuffer.length;i++){
            let curDealerCardSuit = getRandomNumber(1,4)
            // compare each value of dealerscard to each value at the first index of each meld hand
            // if the same, remove from dealers cards, add to meld hand
            //dealers laying off to meld hands
            for(let j=0;j<meldCardsBuffer.length;j++){
                //checking if card currently selected in dealers cards is equal to a card in the current meld hand
                if(DealersCardsBuffer[i] === meldCardsBuffer[j][0]){
                    meldCardsBuffer[j].push(DealersCardsBuffer[i])
                    if(DealersCardsBuffer[i] < 10){
                        meldImagesBuffer[j].push(`${getRandomNumber(1,4)}0${DealersCardsBuffer[i]}`)
                    }
                    else{
                        meldImagesBuffer[j].push(`${getRandomNumber(1,4)}${DealersCardsBuffer[i]}`)
                    }

                    //removing card from dealers hand
                    DealersCardsBuffer.splice(i,1)
                }
            }

            //dealers laying off to run hands
            for(let j=0;j<runCardsBuffer.length;j++){
                if(DealersCardsBuffer[i] === runCardsBuffer[j][0]-1){
                    //making sure suit is the same
                    if(parseInt(curDealerCardSuit) === parseInt(runImagesBuffer[j][0][0])){
                        runCardsBuffer[j].unshift(DealersCardsBuffer[i])

                        if(DealersCardsBuffer[i] < 10){
                            runImagesBuffer[j].unshift(`${curDealerCardSuit}0${DealersCardsBuffer[i]}`)
                        }
                        else{
                            runImagesBuffer[j].unshift(`${curDealerCardSuit}${DealersCardsBuffer[i]}`)
                        }

                        //removing card from dealers hand
                        DealersCardsBuffer.splice(i,1)
                    }
                }
                else if(DealersCardsBuffer[i] === runCardsBuffer[j][runCardsBuffer[j].length-1]+1){
                    //making sure suit is the same
                    if(parseInt(curDealerCardSuit) === parseInt(runImagesBuffer[j][0][0])){
                        runCardsBuffer[j].push(DealersCardsBuffer[i])

                        if(DealersCardsBuffer[i] < 10){
                            runImagesBuffer[j].push(`${curDealerCardSuit}0${DealersCardsBuffer[i]}`)
                        }
                        else{
                            runImagesBuffer[j].push(`${curDealerCardSuit}${DealersCardsBuffer[i]}`)
                        }

                        //removing card from dealers hand
                        DealersCardsBuffer.splice(i,1)
                    }
                }
            }
        }

        const randomCard = getRandomNumber(0,DealersCardsBuffer.length-1)

        //discarding random dealer card
        if(getRandomNumber(1,2) === 1){
            DealersCardsBuffer.splice(randomCard,1)
        }
        else{
            changeStock(DealersCardsBuffer[randomCard])
            if(DealersCardsBuffer[randomCard]<10){
                console.log(DealersCardsBuffer[randomCard])
                changeStockImage(`${getRandomNumber(1,4)}0${DealersCardsBuffer[randomCard]}`)
            }
            else{
                console.log(DealersCardsBuffer[randomCard])
                changeStockImage(`${getRandomNumber(1,4)}${DealersCardsBuffer[randomCard]}`)
            }
            DealersCardsBuffer.splice(randomCard,1)
        }

        changeDealerCards(DealersCardsBuffer)
        changemeldCards(meldCardsBuffer)
        changemeldImages(meldImagesBuffer)
        changerunCards(runCardsBuffer)
        changerunImages(runImagesBuffer)
        changeThird(false)
        changeFirst(true)

        if(DealersCardsBuffer.length === 0){
            changeSecond(false)
            changeFirst(false)
            changeThird(false)
            changeFourth(true)
            changeWinner("Dealer")

            console.log(playerCards)
            let total = 0
            for(let i=0;i<playerCards.length-1;i++){
                if(playerCards[i]>10){
                    total = total + 10
                }
                else{
                    total = total + playerCards[i]
                }
            }

            changedealerTotal(total)
        }
    }

    return (
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
                    <div className="title-container">
                        <h2 className="war-title">Your Cards:</h2>
                        <h2 className="war-title">Dealers Cards:</h2>
                    </div>
                    <div className="game-container">
                        <div className="players-cards">
                        {playerCards.map((card, outerIndex) => {
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
                            {dealerCards.map((card, outerIndex) => {
                                return(
                                    <div key={outerIndex}>
                                    <img
                                        key={outerIndex} className="players-card"
                                        src={`./cards/back.png`} alt={`card${outerIndex}`}
                                    />
                                    </div>
                                )
                            })}
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
                    <div className="meld-run-container">
                        <div className="mr-cards">
                            <h1 className="war-title">Sets:</h1>
                            
                            {meldImages.map((row, rowIndex) => {

                                let index = 0

                                const handleClick = () => {
                                    //each card is assigned its own function when clicked so we know what card is clicked
                                    switch (rowIndex) {
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
                                        default:
                                            break;
                                    }
                                    layoffClicked(index)
                                }
                                return (
                                    <div key={rowIndex}>
                                        <button onClick={handleClick}>
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
                                        </button>
                                    </div>
                                );
                                })}
                        </div>
                        <div className="mr-cards">
                            <h1 className="war-title">Runs:</h1>
                            {runImages.map((row, rowIndex) => {

                            let index = 0

                            const handleClick = () => {
                                //each card is assigned its own function when clicked so we know what card is clicked
                                switch (rowIndex) {
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
                                    default:
                                        break;
                                }
                                runClicked(index)
                            }
                            return (
                                <div key={rowIndex}>
                                    <button onClick={handleClick}>
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
                                    </button>
                                </div>
                            );
                            })}
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
                                <button onClick={stockEnding}>
                                    <img className="players-card" src="./cards/back.png" alt="stockblank"/>
                                </button>
                                <button onClick={discardEnding}>
                                    <img className="players-card" src={`./cards/${stockImage}.png`} alt="stockcard"/>
                                </button>
                            </div>
                        </div>
                        {layoffOrMeld &&
                        <>
                        <button className="play-btn" onClick={wantsLayoff}>Layoff?</button>
                            {canMeld &&
                                <button className="play-btn" onClick={wantsMeld}>Meld?</button>
                            }
                        <button className="play-btn" onClick={discarding}>End Turn?</button>
                        </>
                        }
                        {melding &&
                        <>
                            <div>
                                <h1 className="meld-title">Choose cards to form a Set/Run</h1>
                                <h1 className="meld-title">place cards in increasing order for run</h1>
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
                            <div>
                                <h1 className="meld-title">Choose a card to layoff</h1>
                                <h1 className="meld-title">Then click a hand</h1>
                            </div>
                            <img className="players-card" src={`./cards/${layoffImage}.png`} alt="layoff card"/>
                            <button className="play-btn" onClick={goBack}>Back?</button>
                        </>
                        }
                        {endingTurn &&
                        <>
                            <div>
                                <h1 className="meld-title">Choose a card to discard</h1>
                                <h1 className="meld-title">Then click the stock or discard pile</h1>
                            </div>
                            <img className="players-card" src={`./cards/${discardImage}.png`} alt="discard card"/>
                        </>
                        }
                    </div>
                    <div className="meld-run-container">
                        <div className="mr-cards">
                            <h1 className="war-title">Sets:</h1>
                            



                            {meldImages.map((row, rowIndex) => {

                                let index = 0

                                const handleClick = () => {
                                    //each card is assigned its own function when clicked so we know what card is clicked
                                    switch (rowIndex) {
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
                                        default:
                                            break;
                                    }
                                    layoffClicked(index)
                                }
                                return (
                                    <div key={rowIndex}>
                                        <button onClick={handleClick}>
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
                                        </button>
                                    </div>
                                );
                                })}
                        </div>
                        <div className="mr-cards">
                            <h1 className="war-title">Runs:</h1>
                            {runImages.map((row, rowIndex) => {

                            let index = 0

                            const handleClick = () => {
                                //each card is assigned its own function when clicked so we know what card is clicked
                                switch (rowIndex) {
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
                                    default:
                                        break;
                                }
                                runClicked(index)
                            }
                            return (
                                <div key={rowIndex}>
                                    <button onClick={handleClick}>
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
                                    </button>
                                </div>
                            );
                            })}
                        </div>
                    </div>
                </>
                }
                {third &&
                    dealersTurn()
                }
                {fourth &&
                <>
                    <h1 className="rum-text">Round Over</h1>
                    <h1 className="rum-text">{winner} wins this round</h1>
                    <h1 className="rum-text">total dealer points: {dealerTotal}</h1>
                    <h1 className="rum-text">total player points: {playerTotal}</h1>
                    <button className="play-btn" onClick={newRound}>Play another round?</button>
                </>
                }
            </>
    )
}