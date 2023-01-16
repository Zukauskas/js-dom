let score = 0;
const [resetDOM, minusDOM, plusDOM] = document.querySelectorAll("button");
const resultDOM = document.querySelector('.number');
const h1DOM = document.querySelector('h1');
const defaultValue = h1DOM.textContent;

minusDOM.addEventListener('click', () => {
    resultDOM.textContent = --score;
    h1DOM.textContent = "Žaidimas progrese";
})

plusDOM.addEventListener('click', () => {
    resultDOM.textContent = ++score;
    h1DOM.textContent = "Žaidimas progrese";
})

resetDOM.addEventListener('click', () => {
    score = 0;
    resultDOM.textContent = score;
    h1DOM.textContent = defaultValue;
})