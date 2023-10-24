function soma (a,b){
    console.log(`Soma é ${a+b}`)
}
function soma2(a,b){
    return(a+b)
}
function soma3(){
    let a = parseInt(prompt('Informe o valor de A'))
    let b= parseInt(prompt(`Digite o valor de B`))
    return(a+b)
}
function alteraIdade(idade){
    idade= idade+10
    console.log(`Dentro da função ${idade}`)//28
}
function alteraVetor(vet){
    vet[0]= vet[0]+10
    vet[1]= vet[1]+10
    vet[2]= vet[2]+10
    console.log(`Dentro da funcao ${vet}`)
}
function principal(){
    soma(4,8)
    console.log(`Soma é ${soma2(6,9)}`)
    console.log(`Resultado da soma 3 é ${soma3()}`)
    //passagem de parametro por valor
    // a mudanca de variavel dentro da funcao nao altera a variavel de fora da funcao
    //obs: vale quando se passa como parametro um int, um float, um boolean, ou um char, ou seja, tipo primitivo de dados
    let idade = 18
    alteraIdade(idade)
    console.log(idade) // 18

    //passagem de parametro para referencia -> passa-se a referencia da variavel 
    //qual o efeito colateral disso?
    //a mudanca de valor da variavel dentro da funcao altera a variavel de fora da funcao 
    let vet = []
    vet[0]=10; vet[1]=11; vet[1]=12
    alteraVetor(vet)
    console.log(`Fora da funcao ${vet}`)
}