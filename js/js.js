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