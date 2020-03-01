function mostrar()
{
	var numero;
	var maximo=0;
	var minimo=0;
	var respuesta = "si";
	
	while (respuesta == "si"){
		numero=parseInt(prompt("Ingrese un numero:"));
		respuesta = prompt("Quiere ingresar otro numero? si/no: ");
	
		if (numero > maximo ){
			maximo = numero;
		}
		if(numero < minimo){
			minimo = numero;
		}
	}
	
document.getElementById("maximo").value = maximo;
document.getElementById("minimo").value = minimo;

}

//FIN DE LA FUNCIÓN

/*
	var contador=0;
	var numero;
	var maximo;
	var minimo;
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
*/