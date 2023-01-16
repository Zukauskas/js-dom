console.clear();
const h1DOM = document.getElementsByTagName('h1')[0];

const text = h1DOM.textContent;

const newText = text.trim().replace('rytas', 'diena');
h1DOM.innerText = newText;

const colors = ['green', 'yellow'];

for (const color of colors) {
    h1DOM.classList.add(color);
}

h1DOM.classList.remove('yellow');
h1DOM.classList.toggle('red');

const arTuri1 = h1DOM.classList.contains('cipolinas');
console.log(arTuri1);

const arTuri2 = h1DOM.classList.contains('green');
console.log(arTuri2);

let score = 0;

const scoreDOM = document.querySelector('.score');
const [minusDOM, plusDOM] = document.querySelectorAll('button');

minusDOM.addEventListener('click', () => {
    scoreDOM.innerText = --score;
})

plusDOM.addEventListener('click', () => {
    scoreDOM.innerText = ++score;
})