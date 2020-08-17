const cells = document.querySelectorAll('.grid__cell');
const endScreen = document.querySelector('.end-screen');
const lines = document.querySelectorAll('.line');
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let moves = 1;

cells.forEach(cell => {
    cell.classList.add('x-turn');
    cell.addEventListener('click', handleClick, { once: true });
});

function handleClick(e) {
    if (moves % 2 !== 0) {
        e.target.classList.add('x');
        switchTurnO();
        if (checkForWin(e.target.classList[1])[0]) {
            drawLine(checkForWin(e.target.classList[1])[1]);
            document.addEventListener('transitionend', () => {
                endScreen.classList.add('active');
                endScreen.firstElementChild.innerText = 'X Wins';
            });
        }
    } else {
        e.target.classList.add('o');
        switchTurnX();
        if (checkForWin(e.target.classList[1])[0]) {
            drawLine(checkForWin(e.target.classList[1])[1]);
            document.addEventListener('transitionend', () => {
                endScreen.classList.add('active');
                endScreen.firstElementChild.innerText = 'O Wins';
            });
        }
    }
    moves++;
    if (moves > 9 && !checkForWin(e.target.classList[1])[0]) {
        endScreen.classList.add('active');
        endScreen.firstElementChild.innerText = 'Draw';
    }
}

function switchTurnX() {
    cells.forEach(cell => {
        cell.classList.remove('o-turn');
        cell.classList.add('x-turn');
    });
}

function switchTurnO() {
    cells.forEach(cell => {
        cell.classList.remove('x-turn');
        cell.classList.add('o-turn');
    });
}

function checkForWin(currentClass) {
   let cellArray = [];
   return [WINNING_COMBINATIONS.some(combination => {
       if (combination.every((element, _, array) => {
           cellArray = array;
           return cells[element].classList.contains(currentClass)})) {
               return true;
           }
    }), cellArray];
}

function drawLine(lineArray) {
    let index = WINNING_COMBINATIONS.findIndex(item => {
        return JSON.stringify(item) === JSON.stringify(lineArray);
    });
    
    if (index > -1 && index < 3) {
        lines[index].classList.add('horizontal-lines');
        lines[index].classList.add('active');
    } else if (index > 2 && index < 6) {
        lines[index].classList.add('vertical-lines');
        lines[index].classList.add('active');
    } else if (index === 6) {
        lines[index].classList.add('diagonal-line1');
        lines[index].classList.add('active');
    } else {
        lines[index].classList.add('diagonal-line2');
        lines[index].classList.add('active');
    }
}
