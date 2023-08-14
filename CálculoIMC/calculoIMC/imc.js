function calcular (){
    //recupera o valor do peso digitado pelo usuário
    //vamos usar o recurso DOM (Document Object Model)
    //JS não é tipado, ou seja nao define o tipo da variável (inteiro, real e etc)
    let peso = document.getElementById("peso").value
    //recupera o valor da altura
    let altura = document.getElementById("altura").value
    //calcular o imc
    let imc = peso/(altura * altura) /* ou altura ** 2, os dois asteriscos é o chapeuzinho*/
    //mostrar os dados 
    /*alert("O seu IMC é " + imc)*/
    //template string 
    alert(`O seu IMC é ${imc.toFixed(2)}`)
    //colocar o imc no quadrado
    document.getElementById("imc").innerHTML = imc
}