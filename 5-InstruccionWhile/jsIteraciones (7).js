function mostrar() {

var numero;
var acumulador =0;
var respuesta = "si";
var promedio=0;
while ( respuesta == "si"){
    numero = parseInt(prompt("Ingrese un numero: "));
    respuesta = prompt("Quiere seguir ingresando valores. si/no");
    acumulador = acumulador + numero ;
    promedio++;
}

document.getElementById("suma").value = acumulador ;
document.getElementById("promedio").value = acumulador / promedio ;
}//FIN DE LA FUNCIÓN