    var lista_de_objetos = []

    lista_de_objetos['objetos'] = []

    lista_de_objetos['objetos'][0] = 'Cadeira'
    lista_de_objetos['objetos'][1] = 'Impressora'
    lista_de_objetos['objetos'][2] = 'Garfo'

    console.log(lista_de_objetos['objetos'])

function adicionar(){ 

    var vazio = ''

    var ask = document.getElementById('entrada').value

    if (ask === vazio){

        alert('Informe um valor válido')
    }
    else if (ask === 'Cadeira' || ask === 'Impressora' || ask === 'Garfo'){

        alert('Objeto já foi adicionado')

        document.getElementById('entrada').value = ''
    }
    else if (ask != 'Cadeira' || ask != 'Impressora' || ask != 'Garfo'){

        lista_de_objetos['objetos'].push(ask);
        console.log(lista_de_objetos['objetos'])

        document.getElementById('entrada').value = ''
    }
    
}

function ordenar() {
    document.getElementById('entrada').value
    console.log(lista_de_objetos['objetos'].sort())

}