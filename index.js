let a = ""; //первое число
let b = ""; // второе число
let sign = ""; // знак операции
let finish = false;

const dight = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
const action = ["-", "+", "X", "/"];

// //экран
const out = document.querySelector(".calc-screen p");

function clearAll() {
  a = ""; //первое число
  b = ""; // второе число
  sign = ""; // знак операции
  finish = false;
  out.textContent = 0;
}

document.querySelector(".ac").onclick = clearAll;

document.querySelector(".buttons").onclick = (event) => {
  // нажата не кнопки
  if (!event.target.classList.contains("btn")) return;
  //   нажата кнопа clearAll ac
  if (event.target.classList.contains("ac")) return;

  out.textContent = "";
  //   получаю нажатую кнопу
  const key = event.target.textContent;
  // если нажата 0-9 или .
 
  if (dight.includes(key)) {
 if(b === "" && sign === ""){
    a += key;
    console.log(a, sign,b);
    out.textContent = a
  }else if(a!=="" && b!=="" && finish){
b = key;
finish = false;
out.textContent = b;
console.log(a, sign, b);
  }else{
    b += key
    out.textContent = b
      }
      console.log(a, sign, b);
      return
  }
  // если нажата + - / *
  if(action.includes(key)){
    sign = key
    console.log(a, sign,b);
    out.textContent = sign
    return
  }

  // если нажата +/-
  if(key === "+/-" ){
    sign = key
    a = -a;
    out.textContent = a;
    console.log(a, sign,b);
    return
  }

// нажата =
if (key === "=") {
  if (b === "") {
    b = a;
  }
  
  // добавьте проверку для оператора %
  if (sign === "%") {
    a = a + (b / 100);
  } else {
    switch (sign) {
      case "+":
        a = (+a) + (+b);
        break;
      case "-":
        a = a - b;
        break;
      case "X":
        a = a * b;
        break;
      case "/":
        if (b === "0") {
          out.textContent = "Ошибка";
          a = "";
          b = "";
          sign = "";
          break;
        }
        a = a / b;
        break;
    }
  }
  finish = true;
  out.textContent = a;
  console.log(a, sign, b);
}

}