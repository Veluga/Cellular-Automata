const ruleArray = [
    {pattern: '111',
    colorChange: ''},
    {pattern: '110',
    colorChange: ''},
    {pattern: '101',
    colorChange: ''},
    {pattern: '100',
    colorChange: ''},
    {pattern: '011',
    colorChange: ''},
    {pattern: '010',
    colorChange: ''},
    {pattern: '001',
    colorChange: ''},
    {pattern: '000',
    colorChange: ''}
]

// To-Do: Should be dependent on user input
const numCells = 5041;
const cellColours = []

const colorTranslation = ['white', 'black']

// Rule specified by decimal in range 0 - 255 (8 bit), translation to binary representation
function translateDecimalToRuleString(decimal) {
    const bitString = decimal.toString(2).split('');
    while (bitString.length !== 8) {
        bitString.unshift('0');
    }
    for (let i = 0, len = bitString.length; i < len; i++) {
        ruleArray[i].colorChange = bitString[i];
    }
}

// Random distribution of colors black/white for all pixels (Black = 1, White = 0)
function setInitialColors() {
    for (let i = 0; i < numCells; i++) {
        cellColours[i] = Math.floor(Math.random()*2);
    }
}

// Generates a DIV element for every cell
function generateCells() {
    let cellSpace = document.getElementById('cellSpace')
    for (let i = 0; i < numCells; i++) {
        let newCell = document.createElement('DIV');
        newCell.className = 'cellular-automaton';
        newCell.id = 'cell' + i;
        cellSpace.appendChild(newCell);
        if (i%80 === 0 && i > 0) {
            let breakChar = document.createElement('BR')
            cellSpace.appendChild(breakChar)} 
    }
}

// Takes cell index as input, determines its current state in form of three bit state (e.g. 001 - white left Neighb, white cell, black right Neighb)
function determineStateBitstring(index) {
    let stateString = '';

    if (index === 0) {stateString += cellColours[cellColours.length-1]}
    else {stateString += cellColours[index-1]}

    stateString += cellColours[index]
    
    if(index === (cellColours.length-1)) {stateString += cellColours[0]}
    else {stateString += cellColours[index+1]}

    return stateString;
}

(function main() {
    // Should be user input
    translateDecimalToRuleString(90);
    generateCells();
    setInitialColors();

    const ruleArrayReversed = ruleArray.reverse();

    setInterval(function() {
        for (let i = 0, len = cellColours.length; i < len; i++) {
            document.getElementById('cell' + i).style.backgroundColor = colorTranslation[cellColours[i]];
            cellColours[i] = ruleArrayReversed[parseInt(determineStateBitstring(i), 2)].colorChange;
        }
    }, 1000)
    
})();