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

// To-Do: Should be 
const numCells = 5000;
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

// 
function generateCells() {
    let cellSpace = document.getElementById('cellSpace')
    for (let i = 0; i < numCells; i++) {
        let newCell = document.createElement('DIV');
        newCell.className = 'cellular-automaton';
        newCell.id = 'cell' + i;
        cellSpace.appendChild(newCell);
        if (i%80 === 0 && i > 0 || i === 79) {
            let breakChar = document.createElement('BR')
            cellSpace.appendChild(breakChar)} 
    }
}

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
    translateDecimalToRuleString(210);
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