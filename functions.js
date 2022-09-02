const screen = document.querySelector('input[type=number]');
const sum = document.querySelector('.sum');
const difference = document.querySelector('.difference');
const multiply = document.querySelector('.multiply');
const division = document.querySelector('.division');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.c');
const numbers = document.querySelectorAll('.number');
const final = document.querySelector('.final');

let previous_number = null;
let operator = null;
let number = null;

numbers.forEach(function (button) {
      button.addEventListener('click', function () {
            screen.value +=  parseFloat(button.innerHTML);
      })
});

clear.addEventListener('click', function () {
      screen.value = '';
      previous_number = null;
      number = null;
      final.innerHTML = '';
});

sum.addEventListener('click', function () {
      operator = '+'
      if (previous_number === null) {
            previous_number =  parseFloat(screen.value)
            screen.value = '';
            final.innerHTML = previous_number;
      }
      else {
            number =  parseFloat(screen.value);
            previous_number += number
            screen.value = '';
            final.innerHTML = previous_number;
      }
});

difference.addEventListener('click', function () {
      operator = '-'
      if (previous_number === null) {
            previous_number =  parseFloat(screen.value)
            screen.value = '';
            final.innerHTML = previous_number;
      }
      else {
            number =  parseFloat(screen.value);
            previous_number -= number
            screen.value = '';
            final.innerHTML = previous_number;
      }
});

multiply.addEventListener('click', function () {
      operator = '*'
      if (previous_number === null) {
            previous_number =  parseFloat(screen.value)
            screen.value = '';
            final.innerHTML = previous_number;
      }
      else {
            number =  parseFloat(screen.value);
            previous_number *= number
            screen.value = '';
            final.innerHTML = previous_number;
      }
});

division.addEventListener('click', function () {
      operator = '/'
      if (previous_number === null) {
            previous_number =  parseFloat(screen.value)
            screen.value = '';
            final.innerHTML = previous_number;
      }
      else {
            number =  parseFloat(screen.value);
            previous_number /= number
            screen.value = '';
            final.innerHTML = previous_number;
      }
});

equal.addEventListener('click', function () {
      number =  parseFloat(screen.value);
      if (operator == '+') {
            previous_number += number;
        }
        else if (operator == '-') {
            previous_number -= number;
        }
        else if (operator == '*') {
            previous_number *= number;
        }
        else if (operator == '/') {
            previous_number /= number;
        }
        else final.innerHTML = 'Not Valid';

        screen.value = previous_number;
        final.innerHTML = '';
        previous_number = null;

});
