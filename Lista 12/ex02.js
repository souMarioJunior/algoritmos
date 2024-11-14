// Crie uma função que receba um número como parâmetro e retorne "par" se o número for par, ou "ímpar" se for ímpar.
function executar(n1) {
  var mensagem = "Este número é ímpar";
  if (n1 % 2 == 0) {
    mensagem = "Este número é par";
  }
  return mensagem;
}

// var numero = 5;
var numero = 6;
console.log(executar(numero));
