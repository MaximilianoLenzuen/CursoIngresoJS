function mostrar()
{
    var nota;
    var sexo;
    var acumulador=0;
    var contador=0;
    var notaMinima=10;
    var sexoMinimo;
    var contadorMasculino=0;

    while(contador<5){
        
        nota=parseInt(prompt("ingrese la nota"));
            while (nota<1 || nota>10) {
                nota=parseInt(prompt("Reingrese la nota"));
            }

            

        sexo=prompt("identifique el sexo f o m");
            while (sexo!='f'&& sexo!='m') {
                sexo=prompt("identifique el sexo f o m");
            }






            if(nota<notaMinima){
                notaMinima = nota;
                sexoMinimo = sexo;
            }
            
            if(sexo =="m" && nota >= 6){
                contadorMasculino++;
            }
        
            
        contador++;
        acumulador=acumulador+nota;
    }
    alert("el promedio es: "+ acumulador/contador);
    alert("La cantidad de hombres con nota mayor a 6 es:" + contadorMasculino);

}
