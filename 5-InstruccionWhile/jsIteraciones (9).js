function mostrar()
{

	var contador=0;
	var numero;
	var maximo;
	var mnimo;
	var respuesta = 's' ;

	do {
		numero = parseInt(prompt("Ingrese un numero: "));
		while (isNaN(numero)) {
			numero = parseInt(prompt("Eso no es un numero, ingrese uno"));
		}

		if (contador == 0 || numero > maximo){
			maximo = numero;
		}
		if (contador == 0 || numero < maximo){
			minimo = numero;
		}

		contador++;

		respuesta = prompt("quiere ingresar otro numero?");
	} while (respuesta == 's');

	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;

}//FIN DE LA FUNCIÓN