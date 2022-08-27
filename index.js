let a = ""; //первое число
let b = ""; // второе число
let sign = ""; // знак операции
let finish = false;

const dight = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
const action = ["-", "+", "X", "/"];

//экран

const out = document.querySelector(''.calc-screen p');

function clearAll() {
a = ""; //первое число
b = ""; // второе число
sign = ""; // знак операции
finish = false;
out.textContent = 0;
}

document.querySelector(".ac").onclick = clearAll;