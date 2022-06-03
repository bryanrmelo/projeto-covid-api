fetch(`https://api.covid19api.com/summary`, {
        method: "GET",
    })
    .then((resp) => resp.json())
    .then((data) => {
        organizarData(data)
    })
    .catch((err) => console.log(err))


function organizarData(data) {
    var ul = document.getElementById('lista')

    var liNovosConfirmados = document.createElement('li');
    liNovosConfirmados.appendChild(document.createTextNode('CASOS NOVOS: ' + data.Global.NewConfirmed.toLocaleString()))
    liNovosConfirmados.className = 'list-group-item';
    ul.appendChild(liNovosConfirmados);
    
    var liTotalConfirmados = document.createElement('li');
    liTotalConfirmados.appendChild(document.createTextNode('CASOS TOTAIS: ' + data.Global.TotalConfirmed.toLocaleString()))
    liTotalConfirmados.className = 'list-group-item';
    liTotalConfirmados.style.fontWeight = 'bold';
    ul.appendChild(liTotalConfirmados);

    var liNovasMortes = document.createElement('li');
    liNovasMortes.appendChild(document.createTextNode('NOVAS MORTES: ' + data.Global.NewDeaths.toLocaleString()))
    liNovasMortes.className = 'list-group-item'
    ul.appendChild(liNovasMortes);

    var liMortesTotais = document.createElement('li');
    liMortesTotais.appendChild(document.createTextNode('MORTES TOTAIS: ' + data.Global.TotalDeaths.toLocaleString()))
    liMortesTotais.className = 'list-group-item'
    liMortesTotais.style.fontWeight = 'bold';
    ul.appendChild(liMortesTotais);
    
    // var liData = document.createElement('li');
    // var data = new Date(data.Global.Date)
    // liData.appendChild(document.createTextNode(`Data : ${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`))
    // liData.className = 'list-group-item'
    // ul.appendChild(liData);

}