// 1. Initial screen player 1 and 2 must roll to decide who goes first, then load the game
// 2. Double or nothing button
// 3. dice roll animation?
// 4. winner modal
// 5. chance for random event to occur??
// 6. win streak? show winner of last 10 rounds?
// 7. edit max score to trigger win

// confetti gif is free from https://acegif.com/confetti/
// dice faces are free from https://commons.wikimedia.org/wiki/Category:Dice_faces

// 1. maximum of 6 players
// 2. first player to X (20 by default) score wins


// Create variables for the game state
let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const player1Scoreboard = document.getElementById("player1Scoreboard");
const player2Scoreboard = document.getElementById("player2Scoreboard");
const message = document.getElementById("message");
const rollBtn = document.getElementById("rollBtn");
const addPlayerBtn = document.getElementById("addPlayerBtn");
const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");


/* Hook up a click event listener to the Roll Dice Button. */
 rollBtn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    if (player1Turn) {
        player1Score += randomNumber;
        player1Scoreboard.textContent = player1Score;
        player1Dice.style.background = `url('Alea_${randomNumber}.png')`;
        player1Dice.classList.remove("active");
        player2Dice.classList.add("active");
        message.textContent = "Player 2 Turn";
    } else {
        player2Score += randomNumber;
        player2Scoreboard.textContent = player2Score;
        player2Dice.style.background = `url('Alea_${randomNumber}.png')`;
        player2Dice.classList.remove("active");
        player1Dice.classList.add("active");
        message.textContent = "Player 1 Turn";
    }

    if (player1Score >= 20) {
        message.textContent = "🥇 Player 1 Won 👏";
        showWinnerModal('1');
        showResetButton();
    }  else if (player2Score >= 20) {
        message.textContent = "🏆 Player 2 Won 🎉";
        showWinnerModal('2');
        showResetButton();
    }
    player1Turn = !player1Turn;
});

// resetBtn.addEventListener("click", function(){
//     reset();
// })

addPlayerBtn.addEventListener('click', gameBoard.addPlayer);

modal.addEventListener('click', function (e) {
    if (e.target.id = 'modalReplayBtn') {
        reset();
    }
});

function reset() {
    player1Score = 0;
    player2Score = 0;
    player1Turn = true;
    player1Scoreboard.textContent = 0;
    player2Scoreboard.textContent = 0;
    message.textContent = "Player 1 Turn";
    rollBtn.style.display = "block";
    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");
    overlay.style.display = 'none';
}

function showWinnerModal(player) {
    overlay.style.display = 'flex';
    modal.innerHTML = `
        <h2>🥇</h2>
        <h2>Player ${player} is the winner!!!<h2>
        <button id="modalReplayBtn" class="button">Play Again</button>`;
}

function gameBoard() {

    const state = {
        turn: null,
        nPlayers: null,
        player1: {
            score: 0,
        },
        player2: {
            score: 0,
        }
    }

    initialLoad();

    async function initialLoad() {
        await chooseNumPlayers();
        await chooseFirstPlayer();
        render();
    }

    function chooseNumPlayers() {
        // render num players modal

        return new Promise(resolve => {

        });
    }

    function chooseFirstPlayer() {
        // render choose player modal

        return new Promise(resolve => {
            message.textContent = 'Roll to choose first player';
        });
    }

    function rollDice() {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
    }

    function addPlayer() {
        // initialize state
        state.player3 = { score: 0 };
    }

    function removePlayer() {

    }

    // play again = same settings,
    function resetBoard() {
        // set turn to null
        state.turn = null;
    }

    const render = (e) => {



    };

    return { render, addPlayer, removePlayer, resetBoard };
}

function leaderBoard() {

    const state = {
        names: [],
        wins: []
    }
}

const gameBoard = gameBoard();
const leaderBoard = leaderBoard();




