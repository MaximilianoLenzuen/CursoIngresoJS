function mostrar()
{
    var marca;
    var peso;
    var temperatura;
    var resultado="si";
    var temperaturaPar=0;
    var pesoMaximo=1;
    var pesoMinimo=100;
    var marcaPesado;
    var productosCongelados=0;
    var acumulador=0;
    var contador=0;
    
    
    while(resultado=="si"){
        // Valido los datos!!
        marca = prompt("Ingrese la marca del producto: ");
        while(!(isNaN(marca))){
            marca = prompt("Ingrese una marca valida!!!");
        }

        peso = parseInt(prompt("Ingrese el peso del producto: "));
        while(peso <1 || peso > 100 || isNaN(peso)){
            peso = parseInt(prompt("Ingrese un peso valido entre 1 y 100!!: "));
        }

        temperatura = parseInt(prompt("Ingrese la temperatura de almacenamiento"));
        while(temperatura < -30 || temperatura > 30 || isNaN(temperatura)){
            temperatura = parseInt(prompt("Ingrese una temperatura entre -30 y 30 !!!"));
        }
        //Paridad en la temperatura!
        if(temperatura%2 == 0){
            temperaturaPar++;
        }
        //La marca del producto màs pesado! Y QUE NO SEA CONGELADO!
        if(peso > pesoMaximo && temperatura > 0){
            pesoMaximo = peso;
            marcaPesado = marca;
        } 

        // Cantidad de productos que se consevan a menos de 0 grados 
        if ( temperatura < 0){
            productosCongelados++;
        }

        /*
        if ((flag==0 || peso > pesoMaximoNoCongelado) && temperatura > 0){
            pesoMaximoNoCongelado=peso;
            marcaPesada = marca;
            flag == 1;
        }
        
        
        
        
        
        
        */


        // Promedio del peso de los productos
        acumulador = acumulador + peso;
        contador++;

        //Peso maximo y minimo
        if(peso<pesoMinimo){
            pesoMinimo=peso;
        }else{
           if(peso>pesoMaximo){
            pesoMaximo=peso;
           } 
        }
        
        
        resultado = prompt("Desea ingresar otro dato? si/no");
    }
    document.write("Temperaturas pares: " + temperaturaPar + "Marca del producto màs pesado: " + marcaPesado + "Los productos que se conservan a menos de 0 grados son: " + productosCongelados + "Promedio del peso: " + acumulador / contador +" El peso maximo es:" + pesoMaximo + " y el peso minimo es: " + pesoMinimo);
}


/*
function mostrar() {
    var seguir;
    var marca;
    var peso;
    var temperatura;
    var contadorTempPares = 0;
    var marcaPesada;
    var pesoMaximoNoCongelado;
    var flag = 0;
    var contadorCongelados = 0;
    var contador = 0;
    var acumuladorPeso = 0;
    var maximo;
    var minimo;
    var promedio;

    do {

        // ------------- pido datos --------------------
        marca = prompt("Ingrese una marca: ");

        peso = parseInt(prompt("Ingrese un peso entre 1 y 100: "));
        while (peso < 1 || peso > 100 || isNaN(peso)) {
            peso = parseInt(prompt("Peso invalido. Ingrese un peso entre 1 y 100: "));
        }
        temperatura = parseInt(prompt("Ingrese una temperatura entre -30 y 30: "));
        while (temperatura < -30 || temperatura > 30 || isNaN(temperatura)) {
            temperatura = parseInt(prompt("Temperatura invalida. Ingrese una temperatura entre -30 y 30: "));
        }
        // ---- analisis de los datos ----------
        if (temperatura % 2 == 0) {
            contadorTempPares++;
        }

        if ((flag == 0 || peso > pesoMaximoNoCongelado) && temperatura > 0) {
            pesoMaximoNoCongelado = peso;
            marcaPesada = marca;
            flag = 1;
        }

        if (temperatura < 0) {
            contadorCongelados++;
        }

        acumuladorPeso = acumuladorPeso + peso;

        if (contador == 0 || peso > maximo) {
            maximo = peso;
        }
        if (contador == 0 || peso < minimo) {
            minimo = peso;
        }

        contador++;
        // ------- pregunto si quiere continuar -----
        seguir = prompt("Quiere continuar?:");

    } while (seguir == 's');

    promedio = acumuladorPeso / contador;

    document.write("a) La cantidad de temperaturas pares: " + contadorTempPares + "</br>");
    document.write("b) La marca del producto más pesado no congelado: " + marcaPesada + "</br>");
    document.write("c) La cantidad de productos que se conservan a menos de 0 grados: " + contadorCongelados + "</br>");
    document.write("d) El promedio del peso de todos los productos: " + promedio + "</br>");
    document.write("f) Peso maximo: " + maximo + "</br>");
    document.write("f) Peso minimo: " + minimo + "</br>");

}



*/ 