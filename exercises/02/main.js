const ingredientsDOM = document.querySelectorAll("li")
const ingredientsArray = []
for (const item of ingredientsDOM) {
    console.log(item.textContent)
    ingredientsArray.push(item.textContent.toUpperCase())
}

console.log(ingredientsArray)
console.table(ingredientsArray)