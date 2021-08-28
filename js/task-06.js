// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputVal = document.querySelector("#validation-input");

const onInputBlur = () => {
  if (inputVal.value.length === Number(inputVal.dataset.length)) {
    inputVal.classList.add("valid");
    inputVal.classList.remove("invalid");
  }
  if (inputVal.value.length !== Number(inputVal.dataset.length)) {
    inputVal.classList.remove("valid");
    inputVal.classList.add("invalid");
  }
  if (inputVal.value.length === 0) {
    inputVal.classList.remove("invalid");
  }
};

inputVal.addEventListener("blur", onInputBlur);
