function cadastrarBikes(vetor){
    let objeto = {
        marca: prompt(`Digite a marca da bike`),
        modelo: prompt(`Digite o modelo da bike`),
        quadro: parseInt(prompt(`Digite o valor do quadro da bike`)),
        aro:parseInt(prompt(`Digite o tamanho do aro da bike`)),
        ano:parseInt(prompt(`Informe o ano da bike`)),
        preco:parseFloat(prompt(`Digite o preço da bike`))
    }
    vetor.push(objeto)
    console.log(`Bike inserida com sucesso`)
}

//media do preco das bikes
function mediaPreços(vetor){
    if(vetor.length=0){
        console.log('Sem bikes no vetor')
    }
    else{
        let soma = 0
        for(let i=0;i<vetor.length; i++){
            soma = soma + vetor[i].preco
        }
        console.log(`Média do preço das bikes R$${soma/vetor.length}`)
    }
}

//bike mais antiga
function bikeMaisAntiga(vetor){
    let maisAntiga = []
    maisAntiga[0]=vetor[0]
    for(let i=0; i<vetor.length; i++){
        if (vetor[i].ano < maisAntiga[0].ano){
            maisAntiga=[] // zera o vetor
            maisAntiga[0]= vetor[i]
        }
        else if (vetor[i].ano==maisAntiga[0].ano){
            maisAntiga.push(vetor[i])//adiciona mais uma com o mesmo ano
        }
    }
    console.log(`Bike(s) mais antiga(s):`)
    console.log(maisAntiga)
}

 //bikes da marca Caloi
function bikeCaloi(vetor){
    let caloi = []
    for(let i=0; i<vetor.length; i++){
        if (vetor[i].marca == 'CALOI' || vetor[i].marca == 'caloi'){
            caloi.push(vetor[i])
        }
    }
    console.log('Bikes com a marca caloi:')
    console.log(caloi)
}

//bikes aro 29
function bikeAro29(vetor){
    let aro29 = 0
    for(let i=0; i<vetor.length; i++){
        if (vetor[i].aro==29)
            aro29++
    }
    console.log(`Quantidade de bikes com aro 29: ${aro29}`)
}

//bike maior quadro
function bikeMaiorQuadro(vetor){
    let maiorQuadro= vetor[0]
    for(i=0; i<vetor.length; i++){
        if(vetor[i].quadro> maiorQuadro.quadro){
            maiorQuadro = vetor[i]
        }
    }
    console.log('Maior quadro:')
    console.log(maiorQuadro)
}

//funcao principal
function principal(){
    let vetor = []
    let opcao
    do{
        opcao= Number(prompt('Informe a opção escolhida \n1-Cadastrar \n2-Preço \n3-Mais antiga \n4-Caloi \n5-Aro \n6-Quadro \n7-SAIR'))
        switch(opcao){
        case 1: cadastrarBikes(vetor); break
        case 2: mediaPreços(vetor); break
        case 3: bikeMaisAntiga(vetor); break
        case 4:bikeMaiorQuadro(vetor); break
        case 5:bikeCaloi(vetor); break
        case 6:bikeAro29(vetor); break
        case 7: alert('Programa será encerrado!'); break
        default: alert('OPÇÃO INVÁLIDA')
        }
    } 
    while(opcao!=7)
}
