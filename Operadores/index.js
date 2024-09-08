/* 
Igual (==) - Verifica se os valores comparados são "iguais"

Idêntico (===) - Verifica se os valores comparados são "iguais e do mesmo tipo" 

Diferente (!=) - Verifica se os valores comparados são "diferentes"

Não Idênticos (!==) - Verifica se os valores comparados são "diferente e de tipos diferentes"

Menor (<) - Verifica se o valor da esquerda é "menor" que o valor da direita.

Maior (>) - Verifica se o valor da direita é "maior" que o valor da esquerda.

Menor Igual (<=) - Verifica se o valor da esquerda é "menor ou igual" ao valor da direita.

Maior Igual (>=) - Verifica se o valor da esquerda é "menor ou igual" ao valor da direita.

/*
if (condição){
    //trecho de código que será executado
} else{
    //trecho de código que será executado
}
*/

/*
if{
    //trecho de código que será executado
} else if (condição){
    //trecho de código que será executado  
} else{
    //trecho de código que será executado
}
*/

/*
//Se fosse if (2 == 7), cairia no else. 
if ( 2 == 2){
    document.write('Entrou no bloco IF')
} else {
    document.write('Entrou no bloco Else')
}
*/

/*
//Se fosse if (5 <=2 ) cairia no else. 
if (5 <=2 ) {
    document.write('Verdadeiro no IF papai')
} else {
    document.write('Caiu no Else jhow')
}
*/

// Soma +
// var soma1 = prompt('Digite um número: ')
// var soma2 = prompt('Digite outro número: ')

// soma1 = parseInt(soma1)
// soma2 = parseInt(soma2)

// document.write(soma1 + soma2)

// // Aprovação do aluno
// var nota = prompt('Digite a nota do aluno: ')
// var falta = prompt('Digite o total de faltas do aluno: ')

// var media = 7
// var falta_maxima = 15

// if (nota >= media && falta <= falta_maxima) {
//     document.write('Aprovado')
// }
// else{
//     document.write('Reprovado')
// }

/*Boas vindas*/
// var nome = prompt('Digite o seu nome: ')
// var dado = alert('Seja Bem-Vindo(a), ' + nome + '!')

/*Switch*/
// var nota = parseInt(prompt('Alternativa correta: '));

// switch (nota) {

//     case 1:
//         document.write('Correto');
//         break

//     case 2:
//         document.write('Quase certo...');
//         break

//     case 3:
//         document.write('Errado');
//         break

//     default:
//         document.write('default');
// }


/*ATIVIDADE*/
/*Escreva um script que peça ao usuário para inserir um número de 1 a 7 e exiba o nome do dia da semana correspondente. Por exemplo, se o usuário inserir "1", o script deve exibir "Domingo".*/
// var numero = parseInt(prompt('Insira um número de 1 a 7: '))

// switch (numero){
    
//     case 1:
//         document.write('Hoje é: Domingo')
//         break

//     case 2:
//         document.write('Hoje é: Segunda')
//         break

//     case 3:
//         document.write('Hoje é: Terça')
//         break

//     case 4:
//         document.write('Hoje é: Quarta')
//         break

//     case 5:
//         document.write('Hoje é: Quinta')
//         break

//     case 6: 
//     document.write('Hoje é: Sexta')
//     break

//     case 7:
//         document.write('Hoje é: Sábado')
//         break

//     default:
//         document.write('default')

// }

/*OPERADORES ARITMÉTICOS*/

/*Isso vai ser uma concatenação porque tem texto, daí resultado vai ser "55" e não vai somar*/
// var numb1 = 5
// var numb2 = 5

// document.write('O total da soma é: ' + numb1 + numb2)

/*SOMA +*/
// var numb1 = 5
// var numb2 = 5

// document.write('O total da soma é: ' + (numb1 + numb2))

/*SOMA COM TEXTO*/
// var numb1 = 5
// var numb2 = 5

// document.write('A soma entre ' + numb1 + ' e ' + numb2 + ' é: ' + (numb1 + numb2))

/*SUBTRAÇÃO*/
/*Segue o mesmo naipe que a soma que está acima*/
// var numb1 = 10
// var numb2 = 5

// document.write(numb1 - numb2)

/*SOMA, SUBTRAÇÃO E MULTIPLICAÇÃO*/
// var numb1 = 10
// var numb2 = 2

// document.write('A soma entre ' + numb1 + ' e ' + numb2 + ' é: ' + (numb1 + numb2) + '<br>')
// document.write('A subtração entre ' + numb1 + ' e ' + numb2 + ' é: ' + (numb1 - numb2) + '<br>')
// document.write('A multiplicação entre ' + numb1 + ' e ' + numb2 + ' é: ' + (numb1 * numb2) + '<br>')
// document.write('A divisão entre ' + numb1 + ' e ' + numb2 + ' é: ' + (numb1 / numb2) + '<br>')