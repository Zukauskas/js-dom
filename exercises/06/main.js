const logoDOM = document.querySelector(".logo")
const hamburgerDOM = document.querySelector(".hamburger")
const navDOM = document.querySelector("nav")

hamburgerDOM.addEventListener('click', () => {
    logoDOM.classList.toggle('big')
    navDOM.classList.toggle('visible')
})