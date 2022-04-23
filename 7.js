
var numero = prompt("Introduce un número y se mostrará su factorial");
var resultado = 1;

for(var i=1; i<=numero; i++) {
  resultado *= i;
}
alert(resultado);
