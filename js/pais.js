function buscarPais() {
    var pais = document.getElementById('pais');
    fetch(`https://api.covid19api.com/country/${pais.value.toLowerCase()}`, {
            method: "GET",
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data[data.length - 1])
            organizarData(data[data.length - 1])
                //gambiarra eu sei
        })
        .catch((err) => console.log(err))
}

function organizarData(data) {
    var ul = document.getElementById('lista')

    ul.innerHTML = '';

    var liCodigoPais = document.createElement('li');
    liCodigoPais.appendChild(document.createTextNode('CÓD PAÍS: ' + data.CountryCode))
    liCodigoPais.className = 'list-group-item';
    liCodigoPais.style.fontWeight = 'bold';
    ul.appendChild(liCodigoPais);

    var liAtivos = document.createElement('li');
    liAtivos.appendChild(document.createTextNode('CASOS ATIVOS: ' + data.Active.toLocaleString()))
    liAtivos.className = 'list-group-item';
    ul.appendChild(liAtivos);

    var liConfirmados = document.createElement('li');
    liConfirmados.appendChild(document.createTextNode('CASOS CONFIRMADOS: ' + data.Confirmed.toLocaleString()))
    liConfirmados.className = 'list-group-item';
    liConfirmados.style.fontWeight = 'bold';
    ul.appendChild(liConfirmados);

    var liCasosRecuperados = document.createElement('li');
    liCasosRecuperados.appendChild(document.createTextNode('CASOS RECUPERADOS: ' + data.Recovered.toLocaleString()))
    liCasosRecuperados.className = 'list-group-item';
    ul.appendChild(liCasosRecuperados);

    var liMortes = document.createElement('li');
    liMortes.appendChild(document.createTextNode('MORTES CONFIRMADAS: ' + data.Deaths.toLocaleString()))
    liMortes.className = 'list-group-item';
    liMortes.style.fontWeight = 'bold';
    ul.appendChild(liMortes);

}