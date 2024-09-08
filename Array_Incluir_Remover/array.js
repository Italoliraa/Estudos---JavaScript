
// var lista_frutas = Array()

// lista_frutas[0] = 'Banana'
// lista_frutas[1] = 'Laranja'

//Incluir elemento no FINAL array
//lista_frutas.push('Uva')

//Incluir elemento no COMEÇO array
//lista_frutas.unshift('Uva')

//Excluir elemento do FINAL do array
//lista_frutas.pop()

//Excluir elemento do COMEÇO do array
//lista_frutas.shift()


/*Tipo 02*/

var lista_coisas = Array()

lista_coisas['frutas'] = Array()
// lista_coisas['pessoas'] = []

lista_coisas['frutas'][1] = 'Abacaxi'

//Acrescentando o elemento banana no final da lista
lista_coisas['frutas'].push('Banana')
//Acrescentando o elemento limão no começo da lista
lista_coisas['frutas'].unshift('Limão')
//Excluindo o último elemento da lista que é 
lista_coisas['frutas'].pop()
//Imprimindo o resultado no console
console.log(lista_coisas)