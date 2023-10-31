function lerMatriz(matriz){
    for(let i=0; i<3; i++){
        matriz[i]=[]
        alert(`Digite os elementos da linha ${i+1}`)
        for(let j=0; j<5; j++){
            matriz[i][j]= Number(prompt(`Digite o nº inteiro da coluna ${j+1}`))
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
