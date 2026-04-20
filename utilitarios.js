function recuperarTexto(idComponente) {

    let componente = document.getElementById(idComponente);
    let valor = componente.value;

    return valor;

}

function recuperarFloar(idComponente){
    let valorTexto = recuperarTexto(idComponente)
    let valoFloat = parseFloat(valorTexto);

    return valoFloat;

}