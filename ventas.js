const ventasBase = 5;


function calcularComision(numeroVentas, precioProducto){
    let comision = 0;

    if(numeroVentas > ventasBase){
        let ventasExtras = numeroVentas - ventasBase;
        comision = ventasExtras * precioProducto * 0.10;
    }

    return comision;
}

function calcular(){
    // recuperamos propiedades de las cajas de texto
    // let componenteSueldoBase = document.getElementById("txtSueldoBase");
    // let componenteVentas = document.getElementById("txtVentas");
    // let componentePrecio = document.getElementById("txtPrecio");
    //recuperarmos el valor
    // let sueldoBaseSTR = componenteSueldoBase.value;
    //let sueldoBaseSTR = recuperarTexto("txtSueldoBase");
    //let numeroVentasSTR = recuperarTexto("txtVentas");
    //let precioProductoSTR = recuperarTexto("txtPrecio");

    // let numeroVentasSTR = componenteVentas.value;
    // let precioProductoSTR = componentePrecio.value;


    //convertimos el string a float
    let sueldoBase = recuperarFloar("txtSueldoBase");
    let numeroVentas = recuperarFloar("txtVentas");
    let precioProducto = recuperarFloar("txtPrecio");

    let comision = calcularComision(numeroVentas, precioProducto);

    let total = sueldoBase + comision;

    let spSueldoBase = document.getElementById("spSueldoBase");
    let spComision = document.getElementById("spComision");
    let spTotal = document.getElementById("spTotal");

    spSueldoBase.textContent = sueldoBase;
    spComision.textContent = comision;
    spTotal.textContent = total;

}