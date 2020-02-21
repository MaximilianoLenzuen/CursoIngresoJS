function mostrar()
{

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

}//FIN DE LA FUNCIÓN