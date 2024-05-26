let currentPlayer = 'X';
let gameStatus = ['', '', '', '', '', '', '', '', ''];
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function playerMove(cellIndex) {
    if (!gameStatus[cellIndex]) {
        gameStatus[cellIndex] = currentPlayer;
        document.getElementsByClassName('cell')[cellIndex].innerText = currentPlayer;
        if (checkWin(currentPlayer)) {
            showAlert(`${currentPlayer} wins!`);
            // resetGame();
        } else if (gameStatus.every(cell => cell !== '')) {
            showAlert("It's a draw!");
            // resetGame();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function showAlert(message) {
    const alertContainer = document.getElementById('alertContainer');
    alertContainer.innerText = message;
}

function checkWin(player) {
    return winningConditions.some(condition => {
        return condition.every(index => {
            return gameStatus[index] === player;
        });
    });
}

function resetGame() {
    currentPlayer = 'X';
    gameStatus = ['', '', '', '', '', '', '', '', ''];
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText ='';
    }
    let win = document.getElementById("alertContainer");
    win.innerHTML='';
}