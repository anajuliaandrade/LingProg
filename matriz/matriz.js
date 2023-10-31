function lerMatriz(matriz){
    //matriz 3x4 = três linhas e quatro colunas 
    for(let i =0; i<3; i++){//para cada linha
        matriz[i]=[]//cria um vetor dentro de um vetor
        alert(`Informe os elementos da linha ${i+1}`)
        for (let j=0; j<4; j++){//para cada coluna
            matriz [i][j]= Number(prompt(`Informe o nro da coluna ${j+1}`))

        }
    }
}

function mostraMatriz(matriz){
    console.log(matriz)
}

function principal(){
    let matriz=[]
    lerMatriz(matriz)
    mostraMatriz(matriz)
}