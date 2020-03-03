function mostrar()
{  

    var nombre;
    var edad;
    var sexo;
    var notaDelFinal;
    var resultado = "si";
 
    while(resultado=="si"){
         nombre = prompt("Ingrese nombre del estudiante: ");
         while(!(isNaN(nombre))){
             nombre = prompt("Ingrese un nombre valido!!!");
        }
        
        edad = parseInt(prompt("Ingrese la edad: "));
        while(edad < 0 && (!isNaN(edad))){
            edad = parseInt(prompt("Ingrese una edad correcta: "));
        }

        sexo = prompt("Ingrese el sexo del estudiante: ");
        while(sexo!='m' && sexo != 'f'){
            sexo=prompt("Ingrese un sexo valido! f/m");
        }

        notaDelFinal = parseInt(prompt("Ingresa la nota del final"));
        while( notaDelFinal < 0 && notaDelFinal > 10){
            notaDelFinal = parseInt(prompt("Ingrese una nota correcta entre 0 y 10"));
        }


        resultado =prompt()
    }
     
}












/*

 var nombre;
    var edad;
    var sexo;
    var notaDelFinal;
    var respuesta="si";
    var varonesAprobados=0;
    var acumuladorNotasMenores=0;
    var acumuladorNotasAdolescentes=0;
    var acumuladorNotasMayores=0;
    var acumuladorPromedioMasculino=0;
    var acumuladorPromedioFemenino=0;
    var mayorNotaAdolescente;
    var contador=0;


    while(respuesta=="si"){
        // Valido los datos!
        nombre=prompt("Ingrese el nombre del alumno: ")
        while(!(isNaN(nombre))){
            nombre=prompt("Ingrese un nombre valido!!!");
        }

        edad = parseInt(prompt("Ingrese la edad del alumno: "));

        while(edad < 0 && isNaN(edad)){
            edad = parseInt(prompt("Ingrese una edad valida!!!"));
        }

        sexo=prompt("Ingrese sexo del alumno: ");
        while( sexo != 'f' && sexo != 'm'){
            sexo=prompt("Ingrese un sexo valido m/f");
        }

        notaDelFinal = parseInt(prompt("Ingrese la nota del final: "));
        while(notaDelFinal < 0 || notaDelFinal >10){
            notaDelFinal = parseInt(prompt("Ingrese una nota valida!"));
        }
        // Cantidad de varones aprobados!
        if(notaDelFinal >= 4 && sexo == 'm'){
            varonesAprobados++;
        }
        // El promedio de notas de todos por categoria!

        if(edad < 14){
            acumuladorNotasMenores = acumuladorNotasMenores + notaDelFinal;
        }else if (edad < 18 && edad >= 14 ){
            acumuladorNotasAdolescentes = acumuladorNotasAdolescentes + notaDelFinal;
        }else{
            acumuladorNotasMayores = acumuladorNotasMayores + notaDelFinal;
        }
        // Promedio de notas por sexo
        if(sexo == 'm'){
            acumuladorPromedioMasculino = acumuladorPromedioMasculino + notaDelFinal;
        }else{
            acumuladorPromedioFemenino = acumuladorPromedioFemenino + notaDelFinal;
        }
        // EJERCICIO AGREGADO INFORMAR EL SEXO DE LA PERSONA CON LA MAYOR NOTA SI ES ADOLESCENTE

        if(edad < 18 && edad >=14 ){

        }






        respuesta = prompt("Desea seguir ingresando datos? si/no: ");










    }
}*/ 