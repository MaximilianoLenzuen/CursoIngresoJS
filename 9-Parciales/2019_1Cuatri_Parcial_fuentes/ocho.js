function mostrar() {
    var numero;
    var letra;
    var respuesta = "si";
    var contadorPares=0;
    var contadorImpares=0;
    var contadorCeros=0;
    var acumNumerosPositivos=0;
    var contadorPositivos=0;
    var sumaNegativos=0;
    var maximo;
    var minimo;
    var letraMaximo;
    var letraMinima;
    var flag = 0;

    
    while (respuesta == "si") {
        // Validacion!!
        numero = parseInt(prompt("Ingrese un numero entre -100 y 100"));
        while ((numero < -100 || numero > 100)) {
            numero = parseInt(prompt("Ingrese una altura valida!"));
        }

        letra = prompt("Ingrese una letra ");
        while (!((letra >= 'a' && letra <= 'z') || (letra >= 'A' && letra <= 'Z'))) {
            letra = prompt("Ingrese una letra valida!!!!!!!!");
        }
        //Paridad!!
        if(numero%2==0){
            contadorPares++;
        }else{
            contadorImpares++;
        }
        if(numero==0){
            contadorCeros++;
        }
        if(numero > 0){
            acumNumerosPositivos = acumNumerosPositivos + numero;
            contadorPositivos++;
        }
        
        if(numero < 0){
            sumaNegativos=sumaNegativos+numero;
        }

        if(flag==0 || numero > maximo ){
            maximo = numero;
            letraMaxima = letra;
        }
        if(flag==0 || numero < minimo){
            minimo = numero;
            letraMinima= letra;
            flag=1;
        }


        respuesta = prompt("Desea ingresar otro numero? si/no");
    }

    alert("La cantidad de numeros pares es: " + contadorPares);
    alert("La cantidad de impares son: " + contadorImpares);
    alert("La cantidad de ceros son: " + contadorCeros);
    alert("El promedio de los numeros positivos es: " + acumNumerosPositivos / contadorPositivos);
    alert("La suma de todos los numeros negativos: " + sumaNegativos);
    alert("El numero del maximo es: " + maximo + " y su letra era: " + letraMaxima);
    alert("El numero minimo es: " + minimo + " Y su letra es: " + letraMinima);
}
 
