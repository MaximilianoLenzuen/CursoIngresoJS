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

    while(respuesta=="si"){
        letra = prompt("Ingrese una letra: ");
        while(!(isNaN(letra))){
            letra = prompt("Ingrese una letra valida!!!");
        }

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
        
    
        respuesta = prompt("Desea ingresar otro numero?  si/no");
    }

    document.write("La cantidad de numeros pares son: " + numeroPar + "</br>" + "La cantidad de impares son: " + numeroImpar + "</br>" + "La cantidad de ceros son: " + numeroCero + "</br>" );
    }

    
        
    
    

