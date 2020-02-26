function mostrar()
{
    var numero = prompt("Ingrese un numero del 1 al 10: ");
    while(numero < 0 || numero > 9){
        numero = prompt("Ingrese otro numero: ");
    }
    alert("El numero es: " + numero);
    document.getElementById("Numero").value = numero;
}//FIN DE LA FUNCIÓN
