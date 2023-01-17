let score = 0;
const [resetDOM, minusDOM, plusDOM] = document.querySelectorAll("button");
const resultDOM = document.querySelector('.number');
const ulDOM = document.querySelector('ul');
const startas = document.createElement('li');
const reset = document.createElement('li');


window.addEventListener('load', () => {
    startas.textContent = "Tu pasileidai zaidima - sekmes!";
    ulDOM.prepend(startas);
})

minusDOM.addEventListener('click', () => {
    resultDOM.textContent = --score;
    const minus = document.createElement('li');
    minus.textContent = `Paspaudei minusa ir dabartinis rezultatas yra [${score}].`;
    ulDOM.prepend(minus);

})

plusDOM.addEventListener('click', () => {
    resultDOM.textContent = ++score;
    const plus = document.createElement('li');
    plus.textContent = `Paspaudei pliusa ir dabartinis rezultatas yra [${score}].`;
    ulDOM.prepend(plus);
})

resetDOM.addEventListener('click', () => {
    score = 0;
    resultDOM.textContent = score;
    reset.textContent = `Paspaudei reset ir dabartinis rezultatas yra [${score}].`;
    ulDOM.prepend(reset);
})