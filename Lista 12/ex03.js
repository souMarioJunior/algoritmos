// <!-- Crie uma função que receba um número como parâmetro e retorne "positivo" se o número for maior que zero, "negativo" se for menor que zero, ou "zero" se for igual a zero. -->
function executar(n1) {
    var mensagem = "Este número é negativo";
    if (n1 > 0) {
      mensagem = "Este número é positivo";
      return mensagem;
    }

    if (n1 < 0) {
        mensagem = "Este número é negativo";
        return mensagem;
      }

  }
  
  var numero = 1; //Positivo
  var numero = 0; //undefined
  var numero = -1; //Negativo

  console.log(executar(numero));
