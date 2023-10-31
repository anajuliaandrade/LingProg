function lerMatriz(matriz){
    for(let i=0; i<2; i++){
        matriz[i]=[]
        for(let j=0; j<4; j++){
            matriz[i][j]= parseInt((Math.random()*20)+1)//gera numeros de 1 a 20
        }
    }
}
//mostra matriz
function mostraMatriz(matriz){
    console.log(matriz)
} 
//quanidade de elementos de 12 a 20
function calcularElementos(matriz){
    for(let i=0; i<2; i++){
        let quant = 0
        for(let j=0; j<4; j++){
            if(matriz[i][j]>=12 && matriz[i][j]<=20){
                quant++
            }
        }
        console.log(`Quantidade de elementos entre 12 e 20 na linha ${i+1}: ${quant}`)
    }
}
//media dos elementos pares
function media(matriz){
    let quant =0
    let elementos =0
    for(let i=0; i<2; i++){
        for(let j=0; j<4; j++){
            if(matriz[i][j] %2==0){
                quant++
                elementos = matriz[i][j] + elementos
            }
        }
    }
    let media = (elementos/quant).toFixed(2)
    console.log(`Média dos nºs pares: ${media}`)
}

function principal(){
    let matriz=[]
    lerMatriz(matriz)
    mostraMatriz(matriz)
    calcularElementos(matriz)
    media(matriz)
}
principal()
