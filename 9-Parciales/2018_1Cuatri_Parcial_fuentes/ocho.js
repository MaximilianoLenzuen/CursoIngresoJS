function mostrar()
{
    var letra;
    var numero;
    var respuesta="si";
    var numeroPar=0;
    var numeroImpar=0;
    var numeroCero=0;
    var promedioPositivos=0;
    var sumaNegativos=0;
    var numeroMaximo=-100;
    var letraMaximo;
    var numeroMinimo=100;
    var letraMaximo;
    // var = flag = 0;
    while(respuesta=="si"){
        letra = prompt("Ingrese una letra: ");
        while(!(isNaN(letra))){
            letra = prompt("Ingrese una letra valida!!!");
        }
        // while(!(letra>="Z" && letra<="Z") || letra >="a" && letra <?"z"))
        numero = parseInt(prompt("Ingrese un numero"));
        while(numero > 100 || numero < -100){
            numero = parseInt(prompt("Ingrese un numero valido!"));
        }
        

        if(numero%2 == 0){
            numeroPar++;
        }else{
            numeroImpar++;
        }
        if(numero==-100 || numero ==100){
            numeroCero=numeroCero+2;
        }else {
            if(numero%10==0){
                numeroCero++;
            }
        }
        
        if(numero>0){
            promedioPositivos = promedioPositivos + numero;
        }else{
            sumaNegativos = sumaNegativos + numero;
        }
        if(numero<numeroMaximo){
            numeroMaximo = numero;
            letraMaximo = letra;
        }
        if(numero>numeroMinimo){
            numeroMinimo=numero;
            letraMinimo= letra;
        }
        
        /* if (flag==0|| numero < minimo){
            minimo = numero;
            letraMin=letra;
        }
        if(flag==0 || numero > maximo){
            maximo = numero;
            letraMax = letra;
            flag = 1;
        }



        */
        respuesta = prompt("Desea ingresar otro numero?  si/no");
    }

    document.write("La cantidad de numeros pares son: " + numeroPar + "</br>" + "La cantidad de impares son: " + numeroImpar + "</br>" + "La cantidad de ceros son: " + numeroCero + "</br>" );
    }

    /*
    function mostrar() {
    var letra;
    var numero;
    var seguir;
    var contadorPar = 0;
    var contadorImpar = 0;
    var contadorCero = 0;
    var contadorPos = 0;
    var acumuladorPos = 0;
    var promedioPos = 0;
    var acumuladorNeg = 0;
    var flag = 0;
    var maximo;
    var minimo;
    var letraMax;
    var letraMin;

    // ---------- repito mientras el usuario quiera -----
    do {

        // ------------- pido datos --------------------
        letra = prompt("Ingrese una letra: ");
        while (!((letra >= 'A' && letra <= 'Z') || (letra >= 'a' && letra <= 'z'))) {
            letra = prompt("Eso no es una letra. Ingrese una letra: ");
        }
        numero = parseInt(prompt("Ingrese un numero entre -100 y 100: "));
        while (numero < -100 || numero > 100 || isNaN(numero)) {
            numero = parseInt(prompt("Numero invalido. Ingrese un numero entre -100 y 100: "));
        }

        // --------- analizo los datos -------------
        // ------- Paridad -----------
        if (numero % 2 != 0) {
            //impares
            contadorImpar++;
        }
        else {
            // pares
            contadorPar++;
        }

        // -------- Signo -------------
        if (numero == 0) {
            // cero
            contadorCero++;
        }
        else if (numero < 0) {
            // negativo
            acumuladorNeg = acumuladorNeg + numero;
        }
        else {
            // positivo
            acumuladorPos = acumuladorPos + numero;
            contadorPos++;
        }
        // ------------ Maximos y Minimos -------------------
        if (flag == 0 || numero < minimo) {
            minimo = numero;
            letraMin = letra;
        }
        if (flag == 0 || numero > maximo) {
            maximo = numero;
            letraMax = letra;
            flag = 1;
        }

        // ------- pregunto si quiere continuar -----
        seguir = prompt("Quiere continuar?:");

    } while (seguir == 's');

    // ------------ Promedio --------------------
    if (contadorPos != 0) {
        promedioPos = acumuladorPos / contadorPos;
    }

    // ------------ Muestro la informacion -------------------

    document.write("a) La cantidad de números pares: " + contadorPar + "</br>");
    document.write("b) La cantidad de números impares: " + contadorImpar + "</br>");
    document.write("c) La cantidad de números ceros: " + contadorCero + "</br>");
    document.write("d) El promedio de todos los números positivos ingresados: " + promedioPos + "</br>");
    document.write("e) La suma de todos los números negativos: " + acumuladorNeg + "</br>");
    document.write("f) Numero mayor: " + maximo + " Letra: " + letraMax + "</br>");
    document.write("f) Numero menor: " + minimo + " Letra: " + letraMin + "</br>");


}




    */
        
    
    

