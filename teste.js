//Calcular a média com DOM
let calcular = document.querySelector("#calcular");
let resultado = document.querySelector("#resultado");

calcular.addEventListener("click", (evt) => {
  let nota1 = parseFloat(document.querySelector("#nota1").value);
  let nota2 = parseFloat(document.querySelector("#nota2").value);
  let nota3 = parseFloat(document.querySelector("#nota3").value);

  let promedio = (nota1 + nota2 + nota3) / 3;

  resultado.innerHTML = "A média é : " + promedio.toFixed(2);
});
