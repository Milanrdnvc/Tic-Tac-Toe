const cells = document.querySelectorAll('.grid__cell');
const endScreen = document.querySelector('.end-screen');
let moves = 1;

cells.forEach(cell => {
    cell.classList.add('x-turn');
    cell.addEventListener('click', determineTurn, { once: true });
});

function determineTurn(e) {
    if (moves % 2 !== 0) {
        e.target.classList.add('x');
        switchTurnO();
        if (checkForWin(e.target)) {
            endScreen.classList.add('active');
            endScreen.firstElementChild.innerText = checkForWin(e.target);
        }

    } else {
        e.target.classList.add('o');
        switchTurnX();
        if (checkForWin(e.target)) {
            endScreen.classList.add('active');
            endScreen.firstElementChild.innerText = checkForWin(e.target);
        }
    }
    moves++;
    if (moves > 9 && !checkForWin(e.target)) {
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

function checkForWin(cell) {
    switch (cell.id) {
        case '1':
            if (cell.classList[1] === 'x' && ((cells[1].classList.contains('x') && cells[2].classList.contains('x')) || (cells[3].classList.contains('x') && cells[6].classList.contains('x')))) {
                return 'X wins';
            } else if (cell.classList[1] === 'o' && ((cells[1].classList.contains('o') && cells[2].classList.contains('o')) || (cells[3].classList.contains('o') && cells[6].classList.contains('o')))) {
                return 'O wins';
            }
            break;

        case '2':
            if (cell.classList[1] === 'x' && ((cells[0].classList.contains('x') && cells[2].classList.contains('x')) || (cells[4].classList.contains('x') && cells[7].classList.contains('x')))) {
                return 'X wins';
            } else if (cell.classList[1] === 'o' && ((cells[0].classList.contains('o') && cells[2].classList.contains('o')) || (cells[4].classList.contains('o') && cells[7].classList.contains('o')))) {
                return 'O wins';
            }
            break;

        case '3':
            if (cell.classList[1] === 'x' && ((cells[0].classList.contains('x') && cells[1].classList.contains('x')) || (cells[5].classList.contains('x') && cells[8].classList.contains('x')) || (cells[4].classList.contains('x') && cells[6].classList.contains('x')))) {
                return 'X wins';
            } else if (cell.classList[1] === 'o' && ((cells[0].classList.contains('o') && cells[1].classList.contains('o')) || (cells[5].classList.contains('o') && cells[8].classList.contains('o')) || (cells[4].classList.contains('o') && cells[6].classList.contains('o')))) {
                return 'O wins';
            }
            break;

        case '4':
            if (cell.classList[1] === 'x' && ((cells[0].classList.contains('x') && cells[6].classList.contains('x')) || (cells[4].classList.contains('x') && cells[5].classList.contains('x')))) {
                return 'X wins';
            } else if (cell.classList[1] === 'o' && ((cells[0].classList.contains('o') && cells[6].classList.contains('o')) || (cells[4].classList.contains('o') && cells[5].classList.contains('o')))) {
                return 'O wins';
            }
            break;

        case '5':
            if (cell.classList[1] === 'x' && ((cells[1].classList.contains('x') && cells[7].classList.contains('x')) || (cells[3].classList.contains('x') && cells[5].classList.contains('x')) || (cells[2].classList.contains('x') && cells[6].classList.contains('x')) || (cells[0].classList.contains('x') && cells[8].classList.contains('x')))) {
                return 'X wins';
            } else if (cell.classList[1] === 'o' && ((cells[1].classList.contains('o') && cells[7].classList.contains('o')) || (cells[3].classList.contains('o') && cells[5].classList.contains('o')) || (cells[2].classList.contains('o') && cells[6].classList.contains('o')) || (cells[0].classList.contains('o') && cells[8].classList.contains('o')))) {
                return 'O wins';
            }
            break;

        case '6':
            if (cell.classList[1] === 'x' && ((cells[3].classList.contains('x') && cells[4].classList.contains('x')) || (cells[2].classList.contains('x') && cells[8].classList.contains('x')))) {
                return 'X wins';
            } else if (cell.classList[1] === 'o' && ((cells[3].classList.contains('o') && cells[4].classList.contains('o')) || (cells[2].classList.contains('o') && cells[8].classList.contains('o')))) {
                return 'O wins';
            }
            break;

        case '7':
            if (cell.classList[1] === 'x' && ((cells[0].classList.contains('x') && cells[3].classList.contains('x')) || (cells[7].classList.contains('x') && cells[8].classList.contains('x')) || (cells[4].classList.contains('x') && cells[2].classList.contains('x')))) {
                return 'X wins';
            } else if (cell.classList[1] === 'o' && ((cells[0].classList.contains('o') && cells[3].classList.contains('o')) || (cells[7].classList.contains('o') && cells[8].classList.contains('o')) || (cells[4].classList.contains('o') && cells[2].classList.contains('o')))) {
                return 'O wins';
            }
            break;

        case '8':
            if (cell.classList[1] === 'x' && ((cells[6].classList.contains('x') && cells[8].classList.contains('x')) || (cells[1].classList.contains('x') && cells[4].classList.contains('x')))) {
                return 'X wins';
            } else if (cell.classList[1] === 'o' && ((cells[6].classList.contains('o') && cells[8].classList.contains('o')) || (cells[1].classList.contains('o') && cells[4].classList.contains('o')))) {
                return 'O wins';
            }
            break;

        case '9':
            if (cell.classList[1] === 'x' && ((cells[0].classList.contains('x') && cells[4].classList.contains('x')) || (cells[2].classList.contains('x') && cells[5].classList.contains('x')) || (cells[6].classList.contains('x') && cells[7].classList.contains('x')))) {
                return 'X wins';
            } else if (cell.classList[1] === 'o' && ((cells[0].classList.contains('o') && cells[4].classList.contains('o')) || (cells[2].classList.contains('o') && cells[5].classList.contains('o')) || (cells[6].classList.contains('o') && cells[7].classList.contains('o')))) {
                return 'O wins';
            }
            break;
    }
}
