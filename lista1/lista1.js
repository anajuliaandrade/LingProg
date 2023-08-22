
function ex1(){
//recupera os dados do html
let num1 = document.getElementById("num1").value
let num2 = document.getElementById("num2").value
let subtracao = num1 - num2
document.getElementById("subtracao").innerHTML = `Resultado da subtração = ${subtracao}`
}
function ex2(){
let n1 = document.getElementById("n1").value
let n2 = document.getElementById("n2").value
let n3 = document.getElementById("n3").value
let mult = n1*n2*n3
document.getElementById("resultado").innerHTML = `Resultado da multiplicação = ${mult}`
}
function ex3(){
    let n1 = document.getElementById("n1").value
    let n2 = document.getElementById("n2").value
    let resposta = n1 / n2
    document.getElementById("resposta").innerHTML = `Resultado da divisão = ${resposta}`
}
function ex4(){
    let nota1 = document.getElementById("nota1").value
    let nota2 = document.getElementById("nota2").value
    let result = (nota1*2 + nota2*3)/2
    document.getElementById("resposta").innerHTML = `Média Ponderada = ${result}`
}
function ex5(){
    let preco = document.getElementById("preco").value
    let valorFinal = preco - (preco*0.1)
    document.getElementById("resposta").innerHTML = `Valor final do produto = ${valorFinal}`
}
function ex6(){
    let salFixo = Number(document.getElementById("salFixo").value)
    let vendas = Number(document.getElementById("vendas").value)
    let comissao = vendas * 0.04
    let salFinal = salFixo +comissao
    document.getElementById("resposta1").innerHTML = `Salário final = R$ ${salFinal} `
    document.getElementById("resposta2").innerHTML = `Comissão = R$ ${comissao} `
}
function ex7(){
    let peso = Number(document.getElementById("peso").value)
    let pesoA = peso + (peso*0.15)
    let pesoB = peso - (peso*0.2)
    document.getElementById("resposta1").innerHTML = `Peso caso engorde 15% = ${pesoA} kg `
    document.getElementById("resposta2").innerHTML = `Peso caso emagreça 20% = ${pesoB} kg `
}
function ex8(){
    let peso  = Number(document.getElementById("peso").value)
    let pesoGramas = peso * 1000
    document.getElementById("resposta1").innerHTML = `Peso em KG = ${peso} kg `
    document.getElementById("resposta2").innerHTML = `Peso em gramas = ${pesoGramas} g `
}
function ex9(){
    let baseMaior = Number(document.getElementById("baseMaior").value)
    let baseMenor = Number(document.getElementById("baseMenor").value)
    let altura = Number(document.getElementById("altura").value)
    let area = ((baseMaior + baseMenor) * altura)/2
    document.getElementById("resposta").innerHTML = `Àrea do trapézio = ${area}`
}
function ex10(){
    let lado = document.getElementById("lado").value
    let area = lado * lado
    document.getElementById("resposta").innerHTML = `Àrea do quadrado = ${area}`
}