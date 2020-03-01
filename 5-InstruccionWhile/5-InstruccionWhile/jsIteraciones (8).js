function mostrar()
{
var numero;
var positivo=0;
var negativo=1;
var respuesta = "si";


while (respuesta == "si"){
	numero=parseInt(prompt("Ingrese un numero:"));
	respuesta = prompt("Quiere ingresar otro numero? si/no: ");

	if(numero>=0){
		positivo = positivo + numero;
	}else{
		negativo = negativo * numero;
	}
}

document.getElementById("suma").value = positivo;
document.getElementById("producto").value = negativo;




}



/*
	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';

	do {
		numero = parseInt(prompt("Ingrese un numero: "));
		while (isNaN(numero)) {
			numero = parseInt(prompt("Eso no es un numero, ingrese uno"));
		}

		acumulador = acumulador + numero;
		contador = contador + 1;
		seguir = prompt("quiere ingresar otro numero?");
	} while (seguir == 's');

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;
*/


//FIN DE LA FUNCIÓN