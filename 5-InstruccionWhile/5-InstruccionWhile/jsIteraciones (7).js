function mostrar() {

	var contador = 0;
	var acumulador = 0;
	var seguir;
	var numero;
	var promedio;
	do {
		numero = parseInt(prompt("Ingrese un numero: "));
		while (isNaN(numero)) {
			numero = parseInt(prompt("Eso no es un numero, ingrese uno"));
		}

		acumulador = acumulador + numero;
		contador = contador + 1;
		seguir = prompt("quiere ingresar otro numero?");
	} while (seguir == 's');

	promedio = acumulador / contador;

	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / contador;

}//FIN DE LA FUNCIÓN