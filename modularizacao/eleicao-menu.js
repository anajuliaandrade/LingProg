function cadastraPartido(partidos){
    let obj = {
        cod: parseInt(prompt(`Digite o código do  partido`)),
        nome: prompt(`Informe o nome do  partido`),
        sigla: prompt(`Informe a sigla do  partido`),
        presidente: prompt(`Informe o presidente do partido`),
        quant: parseInt(prompt(`Digite a quantidade de candidatos`))
    }
    //verificar se o codigo ja existe
    while(partidos.some((item)=> item.cod == obj.cod || obj.cod <0)){
        obj.cod = parseInt(prompt(`Código já existe. Informe um novo código`))
    }
    while(partidos.some((item)=> item.sigla==obj.sigla)){
        obj.sigla=prompt(`Sigla já existe. Digite uma nova sigla.`)
    }
    partidos.push(obj)
    console.log(`Partido cadastrado com sucesso!`)
}

function cadastraPolitico(politicos){
    let obj = {
        codPartido: parseInt(prompt(`Digite o código do partido do  candidato`)),
        nome: prompt(`Digite o nome do  cadidato:`),
        quant: 0,
        cargo: prompt(`Digite o cargo do  cadidato`)
    }
    while (!partidos.some((item)=> item.cod==obj.codPartido)){
        obj.codPartido= parseInt(prompt(`Partido não encontrado! Digite novamente`))
    }
    while (politicos.some((item)=> item.nome == obj.nome)){
            obj.nome = prompt(`Nome já existe! Digite um novo nome.`)
    }
    politicos.push(obj)
    console.log(`Político cadastrado com sucesso`)
}


//votação
function votacao(){
    let votacao={
        partido: parseInt(prompt(`Informe o codigo do partido para votação`)),
        candidato: prompt(`Digite o nome do candidato`)
    }
    let posicao = politicos.findIndex((item)=> item.codPartido==votacao.partido && 
    item.nome==votacao.candidato)
    if (posicao != -1){
        //achou
        politicos[posicao].quant++
        alert(`Votação realizada com sucesso!`)
    }
    else { // nao achou
        alert(`Partido e/ou candidato não existem! Tente novamente`)
    }
}

//candidato com mais voto
function candidatoMaisVotado(politicos){
    maisVotado = politicos[0]
    for(let i=0; i<politicos.length; i++){
        if (politicos[i].quant > maisVotado){
            maisVotado= politicos[i]
        }
    }
    console.log(`Candidato mais votado: ${maisVotado}`)
}

//funcao principal
function principal(){
    let partidos = []
    let politicos = []
    do{
        opcao= Number(prompt('Digite: \n1-Cadastrar partido \n2-Cadastrar politico \n3-Votação \n4-Candidato mais votado \n5-SAIR'))
        switch(opcao){
        case 1: cadastrarPartido(partidos); break
        case 2: cadastraPolitico(politicos); break
        case 3: votacao(); break
        case 4:candidatoMaisVotado(politicos); break
        case 5: alert('Programa será encerrado!'); break
        default: alert('OPÇÃO INVÁLIDA')
        }
    } 
    while(opcao!=5)
}
