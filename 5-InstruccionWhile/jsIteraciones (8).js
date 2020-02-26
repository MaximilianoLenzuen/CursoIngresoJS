function mostrar()
{
    var numero;
    var respuesta = "si";
    var positivos=0;
    var negativos=0;
    while ( respuesta == "si"){
        numero = parseInt(prompt("Ingrese un numero: "));
        respuesta = prompt("Quiere seguir ingresando valores. si/no");
        if( numero >= 0){
            positivos = positivos + numero;
        }else{
            
            negativos = negativos * numero;

        }
    }
    
    document.getElementById("suma").value = positivos ;
    document.getElementById("producto").value = negativos;

}//FIN DE LA FUNCIÓN