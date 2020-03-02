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
