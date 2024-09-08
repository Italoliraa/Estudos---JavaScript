// var nome = prompt('Digite o seu nome: ')
// var idade = parseFloat(prompt('Digite a sua idade: '))
// var cidade = prompt('Digite a sua cidade: ')

// var nomee = 'Italo' //Como é uma string, precisa das aspas simples ou aspas dupla. 
// var idade2 = 23
// var cidade3 = 'Recife'

// if (nome == nomee & idade == idade2 & cidade == cidade3){
//     document.write(true)
// } else{
//     document.write(false)
// }

// document.write('Nome: ' + nome +'.<br>')
// document.write('Idade: ' + idade + ' anos.<br>')
// document.write('Cidade: ' + cidade + '.<br>')


/*FVALIDANDO FORMULÁRIO*/
// function ok(){

//     var nomeCorreto = 'italo'
//     var senhaCorreta = 123 

//     var nome = document.getElementById('nome').value
//     var senha = document.getElementById('senha').value


//     if(nome === nomeCorreto && senha === senhaCorreta){
//         alert('true')
//     } else{
//         alert('false')
//     }

// }


/*Números pares e ímpares*/ 
// var numero = parseFloat(prompt('Digite um numero de 1 a 10: '))

// switch (numero){

//     case 1: 
//     document.write('Esse número é ímpar')
//     break
//     case 2: 
//     document.write('Esse número é par')
//     break
//     case 3: 
//     document.write('Esse número é ímpar')
//     break
//     case 4: 
//     document.write('Esse número é par')
//     break
//     case 5: 
//     document.write('Esse número é ímpar')
//     break
//     case 6: 
//     document.write('Esse número é par')
//     break
//     case 7: 
//     document.write('Esse número é ímpar')
//     break
//     case 8: 
//     document.write('Esse número é par')
//     break
//     case 9: 
//     document.write('Esse número é ímpar')
//     break
//     case 10: 
//     document.write('Esse número é par')
//     break

//     default:
//     alert('Somente números de 1 a 10')
// }

// var nome = prompt('Digite o seu nome: ')

// document.write(nome.toLocaleLowerCase())


/*Escreva uma função que o usuário preencha o seu nome em um input com letras minusculas, e automaticamente o nome dele apareça em outro input com as letras maiusculas. */
function definir(){

    var caracter = document.getElementById('nome').value

    document.getElementById('maior').value = caracter.toLocaleUpperCase()

}