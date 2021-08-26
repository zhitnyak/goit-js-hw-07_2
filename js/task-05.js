// Напиши скрипт который, при наборе текста в инпуте input#name-input
// (событие input), подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const inputName = document.querySelector("#name-input");
const spanName = document.querySelector("#name-output");

inputName.addEventListener("input", onFormSubmit);

function onFormSubmit(event) {
  spanName.textContent = event.currentTarget.value;
  !event.currentTarget.value.trim()
    ? (spanName.textContent = "незнакомец")
    : inputName.value;
  //   spanName.textContent =
  //     inputName.value.trim() === "" ? "незнакомец" : inputName.value;
}
