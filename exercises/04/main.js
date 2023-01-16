const h1DOM = document.querySelector('h1');
h1DOM.textContent = "Zuikio darzas";

const darzovesArray = ['Morkos', 'Bulves', 'Svogunas'];
const listDOM = document.querySelectorAll('li')

for (const item of listDOM) {
    if (darzovesArray.includes(item.textContent)) {
        item.textContent = "Israuta darzove"
    }
}