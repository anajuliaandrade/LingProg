function lerMatriz(matriz){
    for(let i=0; i<3; i++){
        matriz[i]=[]
        for(let j=0; j<5; j++){
            matriz[i][j]= parseInt((Math.random()*20)+1)//gera numeros de 1 a 20
        }
    }
}

function mostraMatriz(matriz){
    console.log(matriz)
} 

function calcularElementos(matriz){
    let quant = 0
    for(let i=0; i<3; i++){
        for(let j=0; j<5; j++){
            if(matriz[i][j]>=15 && matriz[i][j]<=20){
                quant++
            }
        }
    }
    console.log(`Quantidade de elementos entre 15 e 20: ${quant}`)
}

function principal(){
    let matriz=[]
    lerMatriz(matriz)
    mostraMatriz(matriz)
    calcularElementos(matriz)
}
