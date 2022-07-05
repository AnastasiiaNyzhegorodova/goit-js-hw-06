
const counterRef = document.querySelector('#value');
// let counterValue = 0;
let counterValue = Number(counterRef.textContent);

const buttonsContainerRef = document.querySelector('#counter');
const decrementButtonRef = buttonsContainerRef.firstElementChild;
const incrementButtonRef = buttonsContainerRef.lastElementChild;
decrementButtonRef.addEventListener('click', () => {
   counterValue -= 1;
   counterRef.innerHTML = counterValue;
})
incrementButtonRef.addEventListener('click', () => {
   counterValue += 1;
   counterRef.innerHTML = counterValue;
   })

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

