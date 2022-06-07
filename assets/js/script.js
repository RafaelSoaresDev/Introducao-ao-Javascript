var currentNumberWrapper = document.getElementById('currentNumber');
var adicionar = document.getElementsByClassName('adicionar');
var subtrair = document.getElementsByClassName('subtrair')
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

adicionar[0].addEventListener('click', increment, false);
subtrair[0].addEventListener('click', decrement, false);