function buscarPorData() {
    var dataInicial = document.getElementById('data-inicial').value;
    var dataFinal = document.getElementById('data-final').value;

    var dataInicial = formatarData(dataInicial);
    var dataFinal = formatarData(dataFinal);

    fetch(`https://api.covid19api.com/country/brazil?from=${dataInicial}&to=${dataFinal}}`, {
            method: "GET",
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            organizarData(data)
        })
        .catch((err) => console.log(err))
}

function formatarData(data) {
    data = new Date(data);

    dia = data.getDate();
    if (dia < 10) {
        dia = `0${dia}`;
    }
    mes = data.getMonth();
    if (mes < 10) {
        mes = `0${mes}`;
    }
    return `${data.getFullYear()}-${mes}-${dia}T00:00:00Z`
}

function organizarData(data) {
    var div = document.getElementById('lista')

    div.innerHTML = '';
    for (i = 0; i < data.length; i++) {
        var ul = document.createElement('ul')
        ul.className = 'list-group text-center mt-3'

        var liData = document.createElement('li');
        dataDados = new Date(data[i].Date);
        liData.appendChild(document.createTextNode(`${dataDados.getDate()}/${dataDados.getMonth()}/${dataDados.getFullYear()}`))
        liData.className = 'list-group-item';
        ul.appendChild(liData);

        var liCodigoPais = document.createElement('li');
        liCodigoPais.appendChild(document.createTextNode('CÓD PAÍS: ' + data[i].CountryCode))
        liCodigoPais.className = 'list-group-item';
        liCodigoPais.style.fontWeight = 'bold';
        ul.appendChild(liCodigoPais);

        var liAtivos = document.createElement('li');
        liAtivos.appendChild(document.createTextNode('CASOS ATIVOS: ' + data[i].Active.toLocaleString()))
        liAtivos.className = 'list-group-item';
        ul.appendChild(liAtivos);

        var liConfirmados = document.createElement('li');
        liConfirmados.appendChild(document.createTextNode('CASOS CONFIRMADOS: ' + data[i].Confirmed.toLocaleString()))
        liConfirmados.className = 'list-group-item';
        liConfirmados.style.fontWeight = 'bold';
        ul.appendChild(liConfirmados);

        var liCasosRecuperados = document.createElement('li');
        liCasosRecuperados.appendChild(document.createTextNode('CASOS RECUPERADOS: ' + data[i].Recovered.toLocaleString()))
        liCasosRecuperados.className = 'list-group-item';
        ul.appendChild(liCasosRecuperados);

        var liMortes = document.createElement('li');
        liMortes.appendChild(document.createTextNode('MORTES CONFIRMADAS: ' + data[i].Deaths.toLocaleString()))
        liMortes.className = 'list-group-item';
        liMortes.style.fontWeight = 'bold';
        ul.appendChild(liMortes);

        div.appendChild(ul)
    }
}