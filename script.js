var nome = document.getElementById('butthole');
nome.addEventListener('click', function(event) {
    event.preventDefault();
    var nome = document.getElementById('textor').value;
    console.log(nome);
    var paragrafo = document.getElementById('paragrafo').innerHTML = `eae ${nome}`
});
