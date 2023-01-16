let score = 0;
const [resetDOM, minusDOM, plusDOM] = document.querySelectorAll("button")
const resultDOM = document.querySelector('.number')

minusDOM.addEventListener('click', () => {
    resultDOM.textContent = --score;
})

plusDOM.addEventListener('click', () => {
    resultDOM.textContent = ++score;
})

resetDOM.addEventListener('click', () => {
    score = 0
    resultDOM.textContent = score;
})