function lerMatriz(matriz){
    for (let i=0; i<12; i++){
        matriz [i] = []
        for (let j=0; j<4; j++){
            matriz[i][j]= parseInt((Math.random()*300)+1)
        }
    }
}

function mostraMatriz(matriz){
    console.log(matriz)
}

function totalVendidoMes(meses,matriz){
    for (let i=0; i<12; i++){
        let soma =0
        for(let j=0; j<4; j++){
            soma = soma+ matriz[i][j]
        }
        console.log(`Total vendido no mês de ${meses[i]}: R$${soma}`)
    }
}

function totalVendidoSemana(matriz){
    for(let j=0; j<4; j++){
        let soma=0
        for(let i=0; i<12; i++){
            soma= soma+matriz[i][j]
        }
        console.log(`Total vendido na ${j+1}ª semana: R$${soma}`)
    }
}

function totalVendidoAno(matriz){
    let soma = 0
    for (let i=0; i<12; i++){
        for(let j=0; j<4; j++){
            soma= soma+matriz[i][j]
        }
    }
    console.log(`Total vendido no ano: R$${soma}`)
}

function principal(){
    let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto",
"Setembro", "Outubro", "Novembro", "Dezembro"]
    let matriz = []
    lerMatriz(matriz)
    mostraMatriz(matriz)
    totalVendidoMes(meses, matriz)
    totalVendidoSemana(matriz)
    totalVendidoAno(matriz)
}
principal()