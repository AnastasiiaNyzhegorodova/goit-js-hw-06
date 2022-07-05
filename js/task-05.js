const refs = {
   input: document.querySelector("#name-input"),
   nameOutput: document.querySelector("#name-output"),

};


const makeNewOutputName = refs.input.addEventListener('input', onInputChange);
   

function onInputChange(event) {
   event.currentTarget.value === "" ? refs.nameOutput.textContent = "Anonymous" : refs.nameOutput.textContent = event.currentTarget.value
};


// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".