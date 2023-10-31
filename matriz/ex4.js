function lerDados(vetor, matriz){
    for (let i=0; i<15; i++){
        vetor[i] = "aluno " + (i+1) // ou: vetor[i]= prompt(`Informe o nome do aluno ${i+1}`)
        matriz[i]= []
        for(j=0; j<5; j++){
            matriz[i][j]= parseFloat(((Math.random()*10)+1).toFixed(2))// ou parseInt
        }
    }
}

function mostraMatriz(matriz){
    console.log(matriz)
}

function calculaSituacao(vetor,matriz){
    for(let i=0; i<15; i++){
        let soma=0
        for(j=0; j<5; j++){
            soma = soma + matriz[i][j]
        }
        if (soma/5 >=6){
            console.log(`${vetor[i]} foi aprovado com média ${(soma/5).toFixed(2)}`)
        }
        else if (soma/5 >=3){
            console.log(`${vetor[i]} ficou de exame com média ${(soma/5).toFixed(2)}`)
        }
        else{
            console.log(`${vetor[i]} foi reprovado com média ${(soma/5).toFixed(2)}`)
        }
    }
}

function mediaTotal (matriz){
    let soma =0
    for(let i=0; i<15; i++){
        for(let j=0; j<5; j++){
            soma = soma + matriz[i][j]
        }
    }
    let media = soma/75
    console.log(`Média da classe: ${(media).toFixed(2)}`)
}

function principal(){
    let vetor=[]
    let matriz=[]
    lerDados(vetor, matriz)
    mostraMatriz(matriz)
    calculaSituacao(vetor, matriz)
    mediaTotal(matriz)
}
principal()