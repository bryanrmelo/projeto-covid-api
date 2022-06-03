fetch(`https://api.covid19api.com/summary`, {
        method: "GET",
    })
    .then((resp) => resp.json())
    .then((data) => {
        organizarData(data)
    })
    .catch((err) => console.log(err))


function organizarData(data) {
    //console.log(data.Global.NewConfirmed)

    var ul = document.getElementById('lista')

    var liNovosConfirmados = document.createElement('li');
    liNovosConfirmados.appendChild(document.createTextNode('Casos Novos Confirmados: ' + data.Global.NewConfirmed))
    ul.appendChild(liNovosConfirmados);
    
    var liTotalConfirmados = document.createElement('li');
    liTotalConfirmados.appendChild(document.createTextNode('Casos Totais Confirmados: ' + data.Global.TotalConfirmed))
    ul.appendChild(liTotalConfirmados);

    var liNovasMortes = document.createElement('li');
    liNovasMortes.appendChild(document.createTextNode('Novas Mortes: ' + data.Global.NewDeaths))
    ul.appendChild(liNovasMortes);

    var liMortesTotais = document.createElement('li');
    liMortesTotais.appendChild(document.createTextNode('Casos Totais Confirmados: ' + data.Global.TotalDeaths))
    ul.appendChild(liMortesTotais);

    var liData = document.createElement('li');
    liData.appendChild(document.createTextNode('Data: ' + data.Global.Date))
    ul.appendChild(liData);

    console.log(ul)


}
/*
function handleOnClick() {
    const palavra = document.getElementById("inputPalavra").value
    consultaNear(palavra)
    consultaWord(palavra)
}

function consultaWord(palavra) {
    fetch(`https://api.dicionario-aberto.net/word/${palavra}`, {
        method : "GET",
    })
    .then( (resp) => resp.json() )
    .then( (data) => {
        parseWordResponse(data)                    
    })
    .catch ( (err) => console.log(err))
}

function parseWordResponse(data) {
    var conteudo = '<strong>Definição:</strong><br>'
        data.map ( (def) => (
            conteudo += def.xml + '<br><br>'
        ))
        document.getElementById("wordResp").innerHTML = conteudo
}

function consultaNear(palavra) {
    fetch(`https://api.dicionario-aberto.net/near/${palavra}`, {
        method : "GET",
    })
    .then( (resp) => resp.json() )
    .then( (data) => {
        parseNearResponse(data)
    })
    .catch ( (err) => console.log(err))
}

function parseNearResponse(data) {
    var conteudo = '<strong>Palavras próximas:</strong> '
    data.map( (palavra) => (
        conteudo += palavra + ", "
    ))
    document.getElementById("nearResp").innerHTML = conteudo
}

function handleLimparOnClick() {
    document.getElementById("inputPalavra").value = ''
    document.getElementById("nearResp").innerHTML = ''
    document.getElementById("wordResp").innerHTML = ''
}
*/