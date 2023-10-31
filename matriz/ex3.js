function lerMatriz(matriz){
    for(let i=0; i<6; i++){
        matriz[i]=[]
        for(let j=0; j<3; j++){
            matriz[i][j]= parseInt((Math.random()*100)+1)
        }
    }
}

function mostraMatriz(matriz){
    console.log(matriz)
} 

function calculaMaior(matriz){
    let maior = matriz[0][0]
    let linhaMaior = 0
    let colunaMaior = 0
    for(let i=0; i<6; i++){
        for(let j=0; j<3; j++){
            if (matriz[i][j]> maior){
                maior= matriz[i][j]
                linhaMaior = i
                colunaMaior = j
            }
        }
    }
    console.log(`Maior elemento: ${maior} \nLinha: ${linhaMaior}\n Coluna: ${colunaMaior}`)
}

function calculaMenor(matriz){
    let menor = matriz[0][0]
    let linhaMenor= 0
    let colunaMenor=0
    for(let i=0; i<6; i++){
        for(let j=0; j<3; j++){
            if (matriz[i][j]< menor){
                menor= matriz[i][j]
                linhaMenor = i
                colunaMenor = j
            }
        }
    }
    console.log(`Menor elemento: ${menor} \nLinha: ${linhaMenor}\n Coluna: ${colunaMenor}`)
}

function principal(){
    let matriz=[]
    lerMatriz(matriz)
    mostraMatriz(matriz)
    calculaMaior(matriz)
    calculaMenor(matriz)
}
principal()