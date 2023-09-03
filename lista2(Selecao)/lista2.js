function ex5(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let escolha = Number(document.getElementById("escolha").value)
    let resultado = null // inicializacao
    switch(escolha){
        case 1: resultado = (n1 + n2)/2
                break
        case 2: if (n1>= n2){
            resultado = (n1 - n2)
        }
        else {
            resultado = (n2 - n1)
        }
                break
        case 3: resultado = (n1 * n2)
                break
        case 4: if (n2 != 0){
            resultado = (n1 / n2)
        }
        else {
            alert("Não é possível fazer uma divisão por 0!!")
        }
                break
        default: alert("Inválido!Tente novamente")
    }
    if (resultado != null){
        document.getElementById("resposta").innerHTML = `Escolha ${escolha} , resultado = ${resultado}`
    }

}

function ex15(){
    let tipo = Number(document.getElementById("tipo").value)
    let valor = Number(document.getElementById("valor").value)
    let resultado
    if (tipo == 1){
        resultado = valor + (valor*0.03)
        document.getElementById("resposta").innerHTML=`Rendimento do investimento após 1 mês: R$${resultado}`
    }
    else if(tipo == 2){
        resultado = valor+(valor*0.04)
        document.getElementById("resposta").innerHTML=`Rendimento do investimento após 1 mês: R$${resultado}`
    }
    else{
        document.getElementById("resposta").innerHTML=`TIPO DE INVESTIMENTO INVÁLIDO`
    }
}

function ex16(){
    let valor= Number(document.getElementById("valor").value)
    let codigo = Number(document.getElementById("codigo").value)
    let desconto
    if (valor<=30){
        desconto = 0
    }
    else if (valor>30 && valor<=100){
        desconto = valor *0.1
    }
    else {
        desconto = valor *0.15
    }

    let resultado = valor - desconto
    document.getElementById("resposta").innerHTML=`Valor do produto após o desconto: R$${resultado}`
}

function ex17(){
    let  senha = Number(document.getElementById("senha").value)
    if (senha == 4531){
        document.getElementById("resposta").innerHTML=`ACESSO PERMITIDO`
    }
    else {
        document.getElementById("resposta").innerHTML=`ACESSO NEGADO! SENHA INCORRETA`
    }
}

function ex18(){
    let idade = Number(document.getElementById("idade").value)
    if (idade >=18){
        document.getElementById("resposta").innerHTML=`O usuário É maior de idade!`
    }
    else{
        document.getElementById("resposta").innerHTML=`O usuário NÃO é maior de idade!`
    }
}

function ex19(){
    let altura =Number(document.getElementById("altura").value)
    let sexo =Number(document.getElementById("sexo").value)
    let pesoIdeal
    if (sexo == 1){
        pesoIdeal = ((62.1 * altura) - 44.7).toFixed(2)
    }
    else{
        pesoIdeal=((72.7 * altura) - 58).toFixed(2)
    }
    document.getElementById("resposta").innerHTML=`Peso ideal do usuário=${pesoIdeal}`
}

function ex20(){
    let idade=Number(document.getElementById("idade").value)
    if (idade>=5 && idade <=7){
        document.getElementById("resposta").innerHTML=`CATEGORIA: INFANTIL`
    }
    else if (idade>7 && idade<=10){
        document.getElementById("resposta").innerHTML=`CATEGORIA: JUVENIL`
    }
    else if(idade>10 && idade<=15){
        document.getElementById("resposta").innerHTML=`CATEGORIA: ADOLESCENTE`
    }
    else if(idade>15 && idade<=30){
        document.getElementById("resposta").innerHTML=`CATEGORIA: ADULTO`
    }
    else if(idade>30){
        document.getElementById("resposta").innerHTML=`CATEGORIA: SÊNIOR`
    }
    else{
        document.getElementById("resposta").innerHTML=`IDADE MENOR QUE 5 ANOS NÃO SE ENCONTRA EM NENHUMA CATEGORIA!`
    }
}

function ex21(){
   let valor = Number(document.getElementById("valor").value)
   let cod = Number(document.getElementById("cod").value)
   if  (cod == 1){
    document.getElementById("resposta").innerHTML=`PROCEDÊNCIA: SUL`
   }
   else if  (cod == 2){
        document.getElementById("resposta").innerHTML=`PROCEDÊNCIA: NORTE`
   }
   else if  (cod == 3){
        document.getElementById("resposta").innerHTML=`PROCEDÊNCIA: LESTE`
   }
   else if  (cod == 4){
        document.getElementById("resposta").innerHTML=`PROCEDÊNCIA: OESTE`
   }
   else if  (cod>=5 && cod<7){
        document.getElementById("resposta").innerHTML=`PROCEDÊNCIA: NORDESTE`
   }
   else if  (cod>=7 && cod<10){
        document.getElementById("resposta").innerHTML=`PROCEDÊNCIA: SUDESTE`
   }
   else if  (cod>=10 && cod<=20){
        document.getElementById("resposta").innerHTML=`PROCEDÊNCIA: CENTRO-OESTE`
   }    
   else if  (cod>=21 && cod<=30){
        document.getElementById("resposta").innerHTML=`PROCEDÊNCIA: NORDESTE`
   }
   else {
        document.getElementById("resposta").innerHTML=`CÓDIGO INVÁLIDO! TENTE NOVAMENTE`
   }

}

function ex22(){
    let idade = Number(document.getElementById("idade").value)
    let peso = Number(document.getElementById("peso").value)
    let grupo
    if (idade<20){
        if(peso<=60){
            document.getElementById("resposta").innerHTML=`GRUPO DE RISCO: 9`
        }
        else if (peso>60 && peso<=90){
            document.getElementById("resposta").innerHTML=`GRUPO DE RISCO: 8`
        }
        else if (peso>90){
            document.getElementById("resposta").innerHTML=`GRUPO DE RISCO: 7`
        }
    }
    else if (idade>=20 && idade<=50){
        if(peso<=60){
            document.getElementById("resposta").innerHTML=`GRUPO DE RISCO: 6`
        }
        else if (peso>60 && peso<=90){
            document.getElementById("resposta").innerHTML=`GRUPO DE RISCO: 5`
        }
        else if (peso>90){
            document.getElementById("resposta").innerHTML=`GRUPO DE RISCO: 4`
        }
    }
    else if (idade>50){
        if(peso<=60){
            document.getElementById("resposta").innerHTML=`GRUPO DE RISCO: 3`
        }
        else if (peso>60 && peso<=90){
            document.getElementById("resposta").innerHTML=`GRUPO DE RISCO: 2`
        }
        else if (peso>90){
            document.getElementById("resposta").innerHTML=`GRUPO DE RISCO: 1`
        }
    }
}

function ex23(){
    let cod = Number(document.getElementById("cod").value)
    let quant = Number(document.getElementById("quant").value)
    //Cálculo preço unitário
    precoUnitario = null
    if (cod >= 1 && cod<=10){
        precoUnitario = 10
    }
    else if (cod>10 && cod<=20){
        precoUnitario = 15
    }
    else if (cod>20 && cod<=30){
        precoUnitario=20
    }
    else if(cod>30 && cod<=40){
        precoUnitario=30
    }
    else{
        alert ("CÓDIGO INVÁLIDO")
    }
    //Cálculo do preço total da nota
    let precoNota
    if (precoUnitario != null && quant>0){
        precoNota = precoUnitario * quant
    }
    else{
        alert("CÓDIGO E/OU QUANTIDADE INVÁLIDA")
    }
    //Cálculo desconto
    let desconto
    if (precoNota<=250){
        desconto = precoNota*0.05
    }
    else if (precoNota>250 && precoNota<=500){
        desconto=precoNota*0.1
    }
    else {
        desconto = precoNota*0.15
    }
    //preço final da nota
    let precoFinal = precoNota - desconto

    document.getElementById("precoUnitario").innerHTML = `Preço unitário do produto=R$${precoUnitario}`
    document.getElementById("valorNota").innerHTML = `Preço total da nota=R$${precoNota}`
    document.getElementById("desconto").innerHTML = `Valor do desconto aplicado na nota=R$${desconto}`
    document.getElementById("valorFinal").innerHTML = `Preço final da nota=R$${precoFinal}`
    
}

function ex24(){
    let preco = Number(document.getElementById("preco").value)
    let categ = Number(document.getElementById("categoria").value)
    let situacao = Number(document.getElementById("situacao").value)
    
    let aumento 
    if (preco>0 && preco<=25) {
        if (categ==1) {
            aumento=preco*0.05
        }
        else if (categ==2) {
            aumento=preco*0.08
        }
        else if (categ==3) {
            aumento=preco*0.1
        }
        else{
            alert("CATEGORIA INVÁLIDA")
        }
    }
    else if (preco>0 && preco>25) {
        if (categ==1) {
            aumento=preco*0.12
        }
        else if (categ==2) {
            valorAumento= preco*0.15
        }
        else if (categ==3) {
            valorAumento=preco*0.18
        }
        else{
            alert("CATEGORIA INVÁLIDA")
        }
    }else{
        alert("PREÇO INVÁLIDO, DIGITE SOMENTE VALORES POSITIVOS!")
    }

    let imposto 
    if (categ==2 || situacao==1) {
        imposto=preco*0.05
    }else{
        imposto=preco*0.08
    }
    let novoPreco
    novoPreco= (preco+aumento-imposto).toFixed(2)
    let classif
    if (novoPreco>0 && novoPreco<=50) {
        classif= "BARATO"
    }
    else if (novoPreco>50 && novoPreco<120) {
        classif="NORMAL"
    }
    else if (novoPreco>=120) {
        classif="CARO"
    
    }else{
        alert("ERRO! TENTE NOVAMENTE!")
    }
    document.getElementById("valorAumento").innerHTML =`Valor do aumento=R$ ${aumento}`
    document.getElementById("valorImposto").innerHTML =`Valor do imposto sobre o produto=R$ ${imposto}`
    document.getElementById("novoPreco").innerHTML =`Valor final do produto=R$ ${novoPreco}`
    document.getElementById("classif").innerHTML =`Classificação do produto= ${classif}`
 }

 function ex25(){
    let horasExt = Number(document.getElementById("horasExt").value)
    let horasFalt = Number(document.getElementById("horasFalt").value)
    let minutos = horasExt - (2/3*(horasFalt))
    let premio
    if (minutos >=2400){
        premio = 500
    }
    else if (minutos>=1800 && minutos<2400){
        premio = 400
    }
    else if (minutos>=1200 && minutos<1800){
        premio = 300
    }
    else if (minutos>=600 && minutos<1200){
        premio = 200
    }
    else if (minutos<600){
        premio = 100
    }
    else {
        alert("ERRO!TENTE NOVAMENTE! USE APENAS NÚMEROS POSITIVOS")
    }

    document.getElementById("resposta").innerHTML =`Gratificação do funcionário=R$ ${premio}`
 }
