function ex1(){
    let contador2 = 1
    while (contador2<=1){
        let a = Number(prompt(`Digite o valor de A`))
        let b = Number(prompt(`Digite o valor de B`))
        let c = Number(prompt(`Digite o valor de C`))              
        let d = Number(prompt(`Digite o valor de D`)) 
        let contador = 1             
        while (contador<=3){
            if (a>b){
                let aux = a
                a = b
                b = aux
            }
            if (b>c){
                let aux = b
                b=c
                c = aux
            }
            if (c>d){
                let aux = c
                c=d
                d=aux
            }
        contador++
        }      
        console.log(`Ordem crescente dos elementos: ${a}, ${b}, ${c}, ${d}`)
        console.log(`Ordem decrescente dos elementos: ${d}, ${c}, ${b}, ${a}`)
        contador2++
        document.getElementById("resposta").innerHTML=`Ordem crescente dos elementos: ${a}, ${b}, ${c}, ${d} <br> Ordem crescente dos elementos: ${a}, ${b}, ${c}, ${d}`
    } 

}

function ex2(){
    let quant = 120
    const custo = 200
    let corpo = ''
    for (let preco=5; preco>=1; preco=preco - 0.5){
        let lucro=(preco*quant)- custo
        corpo = corpo + `<tr> <td> ${preco.toFixed(2)} </td> <td> ${quant}</td> <td>${custo.toFixed(2)}</td>
        <td>${lucro.toFixed(2)}</td> </tr>`
        quant = quant + 26
    }
    document.getElementById("corpo").innerHTML= corpo
}

function ex3(){
    let faixa=0
    let faixa2=0
    let faixa3=0
    let faixa4=0
    let faixa5=0
    for (let n=1; n<=8; n++){
        let idade = Number(prompt(`Digite a idade da ${n}ª pessoa:`))
        if (idade<=15){
            faixa = faixa+1
        }
        else if (idade>15 && idade<=30){
            faixa2=faixa2+1
        }
        else if (idade>30 && idade<=45){
            faixa3=faixa3+1
        }
        else if (idade>45 && idade<=60){
            faixa4=faixa4+1
        }
        else{
            faixa5=faixa5+1
        }
    }
    //porcentagem de pessoas da primeira e última faixa etária com o total de pessoas
    let porcentagemFaixa1= ((faixa*100)/8).toFixed(2)
    let porcentagemFaixa5= ((faixa5*100)/8).toFixed(2)
    
    alert(` -Quantidade de pessoas na 1ª faixa etária:${faixa}
    -Quantidade de pessoas na 2ª faixa etária:${faixa2}
    -Quantidade de pessoas na 3ª faixa etária:${faixa3}
    -Quantidade de pessoas na 4ª faixa etária:${faixa4}
    -Quantidade de pessoas na 5ª faixa etária:${faixa5}
    -% de pessoas na 1ª faixa etária com relação ao total de pessoas:${porcentagemFaixa1}%
    -% de pessoas na 5ª faixa etária com relação ao total de pessoas:${porcentagemFaixa5}%`)
}

function ex4(){
    let corpo = ""
    let nro = Number(prompt(`Digite o nº que deseja executar a tabuada`))
    for (aux= 0; aux<=10; aux++){
        corpo = corpo + `<tr> <td>${nro}</td> <td>x</td> <td>${aux}</td> <td>=</td> <td>${nro*aux}</td> </tr>`
    }
    document.getElementById("corpo").innerHTML = corpo
}

function ex5(){
    let corpo = ''
    for(let n=1; n<=10; n++){
        for (let aux =1; aux<=10; aux++){
            corpo = corpo + `<tr> <td>${n}</td> <td>x</td> <td>${aux}</td> <td>=</td> <td>${n*aux}</td> </tr>`
        }
    }
    document.getElementById("corpo").innerHTML= corpo
}

function ex6(){
    let totalV = 0
    let totalP = 0
    let total=0
    let parcela = 0
    for(let n=1; n<=5; n++){
        let cod = String(prompt(`Digite o código do produto.
        V - transações à vista
        P - transações à prazo`))
        let valor = Number(prompt(`Digite o valor do produto`))
        total= total+valor
        if (valor>0 && cod == "V" || cod == "v"){
            totalV= totalV + valor
        }
        else if (valor>0 && cod=="P" || cod=="p"){
            totalP= totalP+valor
            parcela =  (valor/3) + parcela
        }
        else {
            alert(`Código e/ou valor incorreto! Tente novamente!`)
        }
    }
    alert(`-Valor total das compras à vista: R$${totalV}
    -Valor total das compras à prazo: R$${totalP}
    -Valor total das compras efetuadas: R$${total}
    -Valor da 1ª prestação das compras à prazo juntas: R$${parcela}`)
}

function ex7(){
    let quant=0
    let acm = 0
    let quantMedia=0
    let pesoInferior=0
    for(n=1; n<=5; n++){
        let idade= Number(prompt(`Digite a IDADE da ${n}ª pessoa:`))
        let altura= Number(prompt(`Digite a ALTURA da ${n}ª pessoa:`))
        let peso= Number(prompt(`Digite a PESO da ${n}ª pessoa:`))
        if (idade>50){
            quant= quant+1
        }
        if (idade>=10 && idade<=20){
            quantMedia= quantMedia+1
            acm = acm + altura
        }
        if (peso<40){
            pesoInferior= pesoInferior+1
        }
    }
    let media = acm/quantMedia
    let porcentagem = ((pesoInferior*100)/5).toFixed(2)
    alert(`-Pessoas com idade superior à 50 anos:${quant}
    -Média altura:${media}
    -Porcentagem peso inferior 40kg:${porcentagem}%`)
}

function ex8(){
    let idade, peso, olhos, cabelos, altura
    let quantPessoasIdadeSup=0
    let quantAlturaInferior=0
    let olhosAzuis=0
    let quantPessoasRuivas=0
    for(let i=1;i<=6;i++){
        idade=Number(prompt(`Informe a idade da ${i}ª pessoa:`))
        altura=Number(prompt(`Informe a altura da ${i}ª pessoa:`))
        peso=Number(prompt(`Informe o peso da ${i}ª pessoa:`))
        do{
            olhos= prompt(`Informe a cor dos olhos: A, P, V, C`).toUpperCase()
        }
        while (olhos != 'A' && olhos != 'P' && olhos != 'V' && olhos != 'C')
        do {
            cabelos = prompt('Informe cor dos cabelos: P, C, L, R').toUpperCase()
        }
        while (cabelos != 'P' && cabelos != 'C' && cabelos != 'L' && cabelos != 'R')
        if (idade>50 && peso<60){
            quantPessoasIdadeSup=quantPessoasIdadeSup+1
        }
        if (altura<1.50){
            quantAlturaInferior=idade+quantAlturaInferior
        }
        if (olhos=="A"){
            olhosAzuis=olhosAzuis+1
        }
        if (cabelos=="R" && olhos != "A"){
            quantPessoasRuivas= quantPessoasRuivas+1
        }
    }
    let media = (quantAlturaInferior/6).toFixed(2)
    let porcentagem= ((olhosAzuis*100)/6).toFixed(2)
    alert(`
    -Quantidade de essoas com idade superior à 50 anos e peso inferior à 60kg:${quantPessoasIdadeSup}
    -Média idade das pessoas com altura inferior à 1.50m: ${media}
    -Porcentagem pessoas com olhos azuis:${porcentagem}%
    -Quantidade pessoas ruivas sem olhos azuis: ${quantPessoasRuivas}`)
}

function ex9(){
    let quant=0
    let quantPeso=0
    let alturaMaior=0
    let quantPorcentagem=0
    for (let i=1; i<=10; i++){
        let idade=Number(prompt(`Digite a idade da ${i}ª pessoa`))
        let peso=Number(prompt(`Digite o peso da ${i}ª pessoa`))
        let altura=Number(prompt(`Digite a altura da ${i}ª pessoa`))
        quant = idade + quant
        if (peso>90 && altura<1.50){
            quantPeso= quantPeso+1
        }
        if (altura>1.90 && idade>=10 && idade<=30){
            alturaMaior= alturaMaior+1
            quantPorcentagem= quantPorcentagem+1
        }
    }
    let media = quant/10
    let porcentagem= ((quantPorcentagem*100)/alturaMaior).toFixed(2)
    alert(`
    -Média das idades:${media}
    -Pessoas com peso superior à 90kg e altura inferior à 1.50m: ${quantPeso}
    -Porcentagem: ${porcentagem}%`)
}

function ex10(){
    let acmPar =0
    let acmPrimo=0
    let par 
    for (i=1; i<=10; i++){
        let nro = Number(prompt(`Informe o ${i}º nº:`))
        if (nro%2==0){
            acmPar = acmPar+nro
            nro = par 
        }
        else if (nro%nro==0 && nro%1==0 && nro!=par){
            acmPrimo= acmPrimo+nro
        }
    }
    alert(`
    -Soma números pares: ${acmPar}
    -Soma números primos: ${acmPrimo}`)
}