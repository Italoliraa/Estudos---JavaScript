//Colocando em ordem alfabetica
// var lista_frutas = Array()

// lista_frutas[0] = 'Limão'
// lista_frutas[1] = 'Morando'
// lista_frutas[2] = 'Abacaxi'
// lista_frutas[3] = 'Pera'
// lista_frutas[4] = 'Melão'
// lista_frutas[5] = 'Melancia'

// console.log(lista_frutas.sort())


//Colocando em ordem númerica
var numeros = Array()

numeros[0] = '150'
numeros[1] = '95'
numeros[2] = '100'
numeros[3] = '10'
numeros[4] = '2'
numeros[5] = '30'

console.log(numeros.sort(ordem))

function ordem (a, b){
    return a - b
}