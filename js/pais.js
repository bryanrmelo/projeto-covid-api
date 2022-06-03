var pais = document.getElementById('input-pais').nodeValue;

function buscarPais() {
    console.log(pais)
    fetch(`https://api.covid19api.com/country/${pais}`, {
        method: "GET",
    })
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data)
        //organizarData(data)
    })
    .catch((err) => console.log(err))
}

function organizarData(data) {
    var ul = document.getElementById('lista')

    var liNovosConfirmados = document.createElement('li');
    liNovosConfirmados.appendChild(document.createTextNode('CASOS NOVOS: ' + data.Global.NewConfirmed.toLocaleString()))
    liNovosConfirmados.className = 'list-group-item';
    ul.appendChild(liNovosConfirmados);
}