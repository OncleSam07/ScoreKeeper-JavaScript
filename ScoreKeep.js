const playEr1 = document.querySelector('#player1');
const playEr2 = document.querySelector('#player2');
const addPlay1 = document.querySelector('#addPlayer1');
const addPlay2 = document.querySelector('#addPlayer2');
const btnRest = document.querySelector('#reset');
const selectVal = document.querySelector('select');
const container = document.querySelector('#container');
const card = document.querySelector('#winCard');
const h4 = document.querySelector('h4');
const loser = document.querySelector('#person');
const restart = document.querySelector('#restart');
let num1 = 0;
let num2 = 0;

addPlay1.addEventListener('click', (e) => {
    num1++;
    // const playEr1 = document.querySelector('#player1');
    playEr1.innerText = num1;
    checkWinner();
})
addPlay2.addEventListener('click', (e) => {
    num2++;
    // const playEr2 = document.querySelector('#player2');
    playEr2.innerText = num2;
    checkWinner();
})

function checkWinner() {

    const winner = parseInt(selectVal.value);

    if (num1 === winner) {
        playEr1.style.color = 'green';
        playEr2.style.color = 'red';
        // document.querySelector('#addPlayer1').disabled = true;
        // document.querySelector('#addPlayer2').disabled = true;
        addPlay1.disabled = true;
        addPlay2.disabled = true;
        // container.classList.add('d-none');
        // card.classList.remove('d-none');
        // h4.innerText = 'Well done Player One!';
        // loser.innerText = 'Player Two';
        setTimeout(function skip1() {
            container.classList.add('d-none');
            card.classList.remove('d-none');
            h4.innerText = 'Well done Player One!';
            loser.innerText = 'Player Two';
        }, 2000);

    } else if (num2 === winner) {
        playEr1.style.color = 'red';
        playEr2.style.color = 'green';
        // document.querySelector('#addPlayer1').disabled = true;
        // document.querySelector('#addPlayer2').disabled = true;
        addPlay1.disabled = true;
        addPlay2.disabled = true;
        // container.classList.add('d-none');
        // card.classList.remove('d-none');
        // h4.innerText = 'Well done Player Two!';
        // loser.innerText = 'Player One';
        setTimeout(function skip2() {
            container.classList.add('d-none');
            card.classList.remove('d-none');
            h4.innerText = 'Well done Player Two!';
            loser.innerText = 'Player One';
        }, 2000);
    } else {
        playEr1.style.color = 'black';
        playEr2.style.color = 'black';
    }

}
btnRest.addEventListener('click', (e) => {
    playEr1.innerText = '0';
    playEr2.innerText = '0';
    // selectVal.innerText = '1';
    playEr1.style.color = 'black';
    playEr2.style.color = 'black';
    // document.querySelector('#addPlayer1').disabled = false;
    // document.querySelector('#addPlayer2').disabled = false;
    addPlay1.disabled = false;
    addPlay2.disabled = false;
    num1 = 0;
    num2 = 0;
});

restart.addEventListener('click', (e) => {
    container.classList.remove('d-none');
    card.classList.add('d-none');
})

