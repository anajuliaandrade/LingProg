function cadastrarBikes(vetor){
    for (let i=0; i<3; i++){
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
}

//media do preco das bikes
function mediaPreços(vetor){
    let soma = 0
    for(let i=0;i<3; i++){
        soma = soma + vetor[i].preco
    }
    console.log(`Média do preço das bikes R$${soma/vetor.length}`)
}

//bike mais antiga
function bikeMaisAntiga(vetor){
    let maisAntiga = []
    maisAntiga[0]=vetor[0]
    for(let i=0; i<3; i++){
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
    for(let i=0; i<3; i++){
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
    for(let i=0; i<3; i++){
        if (vetor[i].aro==29)
            aro29++
    }
    console.log(`Quantidade de bikes com aro 29: ${aro29}`)
}

//bike maior quadro
function bikeMaiorQuadro(vetor){
    let maiorQuadro= vetor[0]
    for(i=0; i<3; i++){
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
    cadastrarBikes(vetor)
    mediaPreços(vetor)
    bikeMaisAntiga(vetor)
    bikeMaiorQuadro(vetor)
    bikeCaloi(vetor)
    bikeAro29(vetor)
}
