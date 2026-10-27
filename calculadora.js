const calcNum1 = document.getElementById("num1");
const calcNum2 = document.getElementById("num2");
const calcBtnSoma = document.getElementById("btnSoma");
const calcBtnSub = document.getElementById("btnSub");
const calcBtnMulti = document.getElementById("btnMulti");
const calcBtnDiv = document.getElementById("btnDiv");
const calcResultado = document.getElementById("resultado");

function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}

function calcular() {
  const valor1 = Number(calcNum1.value);
  const valor2 = Number(calcNum2.value);

  return [valor1, valor2];
}

calcBtnSoma.addEventListener("click", function () {
  const numeros = calcular();
  const total = somar(numeros[0], numeros[1]);
  calcResultado.innerText = "Resultado: " + total;
});

calcBtnSub.addEventListener("click", function () {
  const numeros = calcular();
  const total = subtrair(numeros[0], numeros[1]);
  calcResultado.innerText = "Resultado: " + total;
});

calcBtnMulti.addEventListener("click", function () {
  const numeros = calcular();
  const total = multiplicar(numeros[0], numeros[1]);
  calcResultado.innerText = "Resultado: " + total;
});

calcBtnDiv.addEventListener("click", function () {
  const numeros = calcular();

  if (calcNum2.value === "" || numeros[1] === 0) {
    calcResultado.innerText = "Não se divide por 0";
  } else {
    const total = dividir(numeros[0], numeros[1]);
    calcResultado.innerText = "Resultado: " + total;
  }
});