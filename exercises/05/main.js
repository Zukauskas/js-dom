const h1DOM = document.querySelector('h1');
h1DOM.textContent = "Zuikio pomidoru darzas";
h1DOM.classList.add("pavadinimas");

const darzovesArray = ['Morkos', 'Bulves', 'Svogunas'];
const listDOM = document.querySelectorAll('li');

for (const item of listDOM) {
    if (darzovesArray.includes(item.textContent)) {
        item.textContent = "Pomidoras";
        item.classList.add("pomidoras");
    }
}