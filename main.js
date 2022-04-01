const elements = {};
const $ = document.querySelector.bind(document);
let reverse = true;


elements.buttons = {};

for (let i = 1; i <= 9; i++) {
    elements.buttons["btn" + i] = $("#btn" + i);
}

console.log(elements);



for (const button in elements.buttons) {
    elements.buttons[button].addEventListener("click", () => {
        whenClicked(elements.buttons[button]);
    });
}

function whenClicked(buttonElement) {
    if (reverse) {

        buttonElement.textContent = "O";
        reverse = false;
    } else {
        buttonElement.textContent = "X";
        reverse = true;
    }
}