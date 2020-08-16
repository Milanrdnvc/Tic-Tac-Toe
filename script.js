const cells = document.querySelectorAll('.grid__cell');
const endScreen = document.querySelector('.end-screen');
const line = document.querySelector('.line');
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
   console.log(currentClass);
   return [WINNING_COMBINATIONS.some(combination => {
       if (combination.every((element, _, array) => {
           cellArray = array;
           return cells[element].classList.contains(currentClass)})) {
               return true;
           }
    }), cellArray];
}

function drawLine(lineArray) {
    console.log(lineArray);
    lineArray.forEach(index => {
        cells[index].style.backgroundColor = 'black';
        cells[index].style.transition = 'background-color .1s ease';
    });
}
