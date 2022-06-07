var currentNumberWrapper = document.getElementById('currentNumber');
var adicionar = document.getElementsByClassName('adicionar');
var subtrair = document.getElementsByClassName('subtrair')
var currentNumber = 0;

function increment() {
    var teste = true;
    var limite = 10;

    if (teste === true && currentNumber < limite) {
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
    } else if (currentNumber === limite) {
        teste = false;
    }

    if (currentNumber >= 0) {
        currentNumberWrapper.style.color = 'black';
    }
}

function decrement() {
    var teste = true;
    var limite = -10;

    if (teste === true && currentNumber > limite) {
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
    } else if (currentNumber === limite) {
        teste = false;
    }

    if (currentNumber < 0) {
        currentNumberWrapper.style.color = 'red';
    }
}

adicionar[0].addEventListener('click', increment, false);
subtrair[0].addEventListener('click', decrement, false);