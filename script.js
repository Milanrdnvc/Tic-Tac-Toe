const cells = document.querySelectorAll('.grid__cell');
let moves = 1;

cells.forEach(cell => {
    cell.classList.add('x-turn');
    cell.addEventListener('click', determineTurn, { once: true });
});

function determineTurn(e) {
    if (moves % 2 !== 0) {
        e.target.classList.add('x');
        switchTurnO();

    } else {
        e.target.classList.add('o');
        switchTurnX();
    }

    moves++;
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

