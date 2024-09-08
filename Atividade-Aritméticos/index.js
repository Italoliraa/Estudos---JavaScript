/*PERGUNTAS*/
//     var numb1 = parseInt(prompt('Digite um número: '))
//     var operacao = prompt('A operação que você vai executar é soma ou subtração? ').toLowerCase();
//     var numb2 = parseInt(prompt('Digite outro número: '))


// var continha = function calculo(numb1, numb2, operacao){

//     var soma = (numb1 + numb2)
//     var subtracao = (numb1 - numb2)

//     if (operacao === 'soma') {
//         document.write('Total da soma: ' + soma + '.')
//     }
//     else if (operacao === 'subtração') {
//         document.write('Total da subtração: ' + subtracao + '.')
//     }
//     else{
//         document.write('Erro de dados')
//     }
// }

// calculo(numb1, numb2, operacao)

var num1 = prompt('Digite um número');
var operacao = prompt('Digite a operação');
var num2 = prompt('Digite outro número');

function calc(num1, num2, operacao){

 num1 = parseFloat(num1);
 num2 = parseFloat(num2);

 var resultado = 0;

 if(operacao == 'soma'){
 resultado = num1 + num2;
 }

 if(operacao == 'subtração'){
 resultado = num1 - num2;
 }

 return resultado;
}

document.write('O resultado é: ' + calc(num1, num2, operacao)); 

