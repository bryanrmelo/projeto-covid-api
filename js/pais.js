function handleOnClick() {
    const pais = document.getElementById("inputPais").value
    buscaPais(pais)
    const data = document.getElementById("inputData").value
    buscaData(datar)
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

function buscaPais(pais) {
    fetch(`https://api.covid19api.com/country/${pais}`, {
        method : "GET",
    })
    .then( (resp) => resp.json() )
    .then( (data) => {
        parseNearResponse(data)
    })
    .catch ( (err) => console.log(err))
}

function buscaData(datar) {
    fetch(`https://api.covid19api.com/country/${datar}`, {
        method : "GET",
    })
    .then( (resp) => resp.json() )
    .then( (data) => {
        parseNearResponse(data)
    })
    .catch ( (err) => console.log(err))
}


function handleLimparOnClick() {
    document.getElementById("inputPalavra").value = ''
    document.getElementById("nearResp").innerHTML = ''
    document.getElementById("wordResp").innerHTML = ''
}