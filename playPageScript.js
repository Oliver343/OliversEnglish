

let vocabMain = {
    01: ['Thief','Ladrón', false],
    02: ['Can', 'Lata', false],
    03: ['Toy', 'Juguete', false],
    04: ['Bird', 'Pájaro', false],
    05: ['Tie', 'Corbata', false],
    06: ['Glasses', 'Gafas', false],
    07: ['Hammer', 'Martillo', false],
    08: ['Bottle', 'Botella', false],
    09: ['Suitcase', 'Maleta', false],
    10: ['Desk', 'Escritorio', false],
    11: ['Cave', 'Cueva', false],
    12: ['Hill', 'Colina', false],
    13: ['Dessert', 'Postrey', false],
    14: ['Recipe', 'Receta', false],
    15: ['Brick', 'Ladrillo', false],
    16: ['Dream', 'Sueño', false],
    17: ['Snore', 'Ronquido', false],
    18: ['Rainbow', 'Arcoíris', false],
    18: ['Ill', 'Enfermo', false],
    19: ['Box', 'Caja', false],
    20: ['Blood', 'Sangre', false],
    21: ['Light', 'Luz', false],
    22: ['Printer', 'Impresora', false],
    23: ['Coin', 'Moneda', false],
    24: ['Free', 'Libre', false],
    25: ['Fly', 'Mosca', false],
    26: ['Dead', 'Muerto', false],
    27: ['Axe', 'Hacha', false],
    28: ['Scissors', 'Tijeras', false],
    29: ['Lazy', 'Perezoso', false],
    30: ['Library', 'Biblioteca', false],
}

let correctAnswers = {
    1: [false, 0, 0],
    2: [false, 0 ,0],
    3: [false, 0 ,0],
    4: [false, 0 ,0],
    5: [false, 0 ,0],
}

const numberOfQuestions = 5

let firstPick = true
let selectedA = null
let selectedB = null

function setupTest () {
    for (let count = 1; count <= numberOfQuestions; count ++) {
        // set first english word
        let vocabPick = Math.floor(Math.random() * (Object.keys(vocabMain).length))
        // checkes that vocab selected has not been selected previously in this set.
        while (vocabMain[Object.keys(vocabMain)[vocabPick]][2]) {
            vocabPick = Math.floor(Math.random() * (Object.keys(vocabMain).length))
        }
        // sets currently selected in vocabMain to true
        vocabMain[Object.keys(vocabMain)[vocabPick]][2] = true
        correctAnswers[count][1] = count 
        document.getElementById('but' + count + 'A').innerHTML = vocabMain[Object.keys(vocabMain)[vocabPick]][0];


        // set second spanish word
        let answerButton = (Math.floor(Math.random() * (numberOfQuestions))) + 1
        // checks that answer button is not already in use.
        while(correctAnswers[answerButton][0]) {
            answerButton = (Math.floor(Math.random() * (numberOfQuestions))) + 1
        }
        // sets correctAnswer selected to true
        correctAnswers[answerButton][0] = true
        document.getElementById('but' + answerButton + 'B').innerHTML = vocabMain[Object.keys(vocabMain)[vocabPick]][1];
        correctAnswers[count][2] = answerButton
    }

    


}




setupTest()

function selectButton (buttonID) {

    document.getElementById('but' + buttonID).style.border = "solid 2px rgb(255, 253, 150)";
    document.getElementById('but' + buttonID).disabled = true;

    if (firstPick) {
    if (buttonID[1] == 'A') {
        selectedA = buttonID
    } else {
        selectedB = buttonID
    }
    firstPick = false
    
    } else {
        // Checks if button from same side is picked twice
        if ((buttonID[1] == 'A' && selectedA != null)){
            wrong(selectedA, buttonID)
            reset()
            return
        }
        if((buttonID[1] == 'B' && selectedB != null)){
            wrong(buttonID, selectedB)
            reset()
            return
        }

        if (buttonID[1] == 'A') {
            selectedA = buttonID
        } else {
            selectedB = buttonID
        }
        // Compare
        if(correctAnswers[parseInt(selectedA[0])][2] == parseInt(selectedB[0])){
            correct(selectedA, selectedB)
        } else {
            wrong(selectedA, selectedB)
        }
        reset()
    }


}

function reset() {
    firstPick = true
    selectedA = null
    selectedB = null
}

function resetButton() {
    for (let i in vocabMain) {
        vocabMain[i][2] = false
    }

    for (let i in correctAnswers) {
        correctAnswers[i][0] = false
    }
    document.getElementById('but1A').style.removeProperty('border');
    document.getElementById('but1A').style.removeProperty('background-color');
    document.getElementById('but1A').disabled = false;
    document.getElementById('but1B').style.removeProperty('border');
    document.getElementById('but1B').style.removeProperty('background-color');
    document.getElementById('but1B').disabled = false;

    document.getElementById('but2A').style.removeProperty('border');
    document.getElementById('but2A').style.removeProperty('background-color');
    document.getElementById('but2A').disabled = false;
    document.getElementById('but2B').style.removeProperty('border');
    document.getElementById('but2B').style.removeProperty('background-color');
    document.getElementById('but2B').disabled = false;

    document.getElementById('but3A').style.removeProperty('border');
    document.getElementById('but3A').style.removeProperty('background-color');
    document.getElementById('but3A').disabled = false;
    document.getElementById('but3B').style.removeProperty('border');
    document.getElementById('but3B').style.removeProperty('background-color');
    document.getElementById('but3B').disabled = false;

    document.getElementById('but4A').style.removeProperty('border');
    document.getElementById('but4A').style.removeProperty('background-color');
    document.getElementById('but4A').disabled = false;
    document.getElementById('but4B').style.removeProperty('border');
    document.getElementById('but4B').style.removeProperty('background-color');
    document.getElementById('but4B').disabled = false;

    document.getElementById('but5A').style.removeProperty('border');
    document.getElementById('but5A').style.removeProperty('background-color');
    document.getElementById('but5A').disabled = false;
    document.getElementById('but5B').style.removeProperty('border');
    document.getElementById('but5B').style.removeProperty('background-color');
    document.getElementById('but5B').disabled = false;
    reset()
    setupTest()
}

function correct(butA, butB) {
    console.log('CORRECT!')
    document.getElementById('but' + butA).style.border = "solid 2px rgb(169, 245, 188)";
    document.getElementById('but' + butA).style.backgroundColor = "rgb(66, 66, 66)";
    document.getElementById('but' + butB).style.border = "solid 2px rgb(169, 245, 188)";
    document.getElementById('but' + butB).style.backgroundColor = "rgb(66, 66, 66)";
}

function wrong(butA, butB) {
    console.log('WRONG!')
    document.getElementById('but' + butA).style.border = "solid 2px rgb(255, 132, 132)";
    document.getElementById('but' + butB).style.border = "solid 2px rgb(255, 132, 132)";
    setTimeout(() => {  
        document.getElementById('but' + butA).style.removeProperty('border');
        document.getElementById('but' + butB).style.removeProperty('border');
        document.getElementById('but' + butA).disabled = false;
        document.getElementById('but' + butB).disabled = false;
     }, 1000);
}
