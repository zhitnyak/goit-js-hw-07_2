//  Создай переменную counterValue в которой будет хранится текущее значение счетчика.
//  Создай функции increment и decrement для увеличения и уменьшения значения счетчика
//  Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const btnDecr = document.querySelector('[data-action="decrement"]');
const btnIncr = document.querySelector('[data-action="increment"]');
const spanVal = document.querySelector("#value");

let counterValue = 0;

const increment = () => (spanVal.textContent = counterValue += 1);
const decrement = () => (spanVal.textContent = counterValue -= 1);

btnDecr.addEventListener("click", decrement);
btnIncr.addEventListener("click", increment);
