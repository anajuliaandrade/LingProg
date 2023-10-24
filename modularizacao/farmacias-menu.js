function cadastraFarmacia (farmacias) {// cadastra as farmácias
    let objeto = {
        codigo: parseInt(prompt(`Informe o código da farmácia`)),
        nome: prompt(`Informe o nome da farmácia`),
        endereco: prompt(`Informe o endereço da farmácia`)
    }
    while (farmacias.some( (item) => item.codigo == objeto.codigo )){
        objeto.codigo = parseInt(prompt(`Código já existente. Informe outro código`))
    }
    farmacias.push(objeto)
}

// cadastra os remédios
function  cadastraRemedio (remedios, farmacias){
    let objeto = {
        codFarmacia: parseInt(prompt('Código da farmácia')),
        nome: prompt('Nome do remédio').toUpperCase(),
        qtde: parseInt(prompt('Qtde do remédio')),
        preco: parseFloat(prompt('Preço do remédio'))
    }
    while(!farmacias.some( (item) => item.codigo == objeto.codFarmacia)){
        objeto.codFarmacia = 
        parseInt(prompt('Farmácia não existe. Informe novamente o código'))
    }
    let indice = remedios.findIndex( (item) => item.codFarmacia == objeto.codFarmacia && item.nome == objeto.nome)
    if (indice == -1){ // remedio não existe
        remedios.push(objeto) // insere remédio
    }
    else { // já existe, atualiza estoque
        remedios[indice].qtde = remedios[indice].qtde + objeto.qtde
    }
}

//vendas
function vender (remedios){
    let venda = {
        farmacia: parseInt(prompt('Informe código da farmácia')),
        remedio: prompt('Informe nome do remédio').toUpperCase(),
        qtde: parseInt(prompt('Informe qtde para compra'))
    }
    // verifica se existem - some retorna true ou false
    if (remedios.some( (item) => (item.codFarmacia == venda.farmacia && item.remedio == venda.remedio))){
        // recupera o índice do remédio - findIndex retorna o índice do vetor
        let indice = remedios.findIndex((item => item.nome == venda.remedio && item.codFarmacia == venda.remedio))
        if (venda.qtde <= remedios[indice].qtde){
            // atualiza o estoque
            remedios[indice].qtde = remedios[indice].qtde - venda.qtde
            alert('Venda realizada com sucesso')
        }
        else {
            alert('Estoque insuficiente')
        }
    }
    else {
        alert('Farmácia ou remédio inexistente')
    }
}

function principal () {
    let farmacias = []
    let remedios = []
    let opcao    
    do {
        opcao= Number(prompt(`Digite: 1-Farmácia \n2-Remédio \n3-Vender \n4-Sair`))
        switch(opcao){
            case 1: cadastraFarmacia(farmacias); break;
            case 2: cadastraRemedio(remedios, farmacias); break;
            case 3: vender(remedios); break;
            case 4: alert(`Programa será encerrado!`); break;
            default: alert(`Opção inválida`)
        }
    }
    while(opcao!=4)
}