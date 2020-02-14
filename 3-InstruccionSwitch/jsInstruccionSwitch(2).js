function mostrar()
{
//tomo la edad  
var mes = document.getElementById('mes').value;

//alert (mesDelAño);

switch (mes) {
    case "Enero":
         alert("Falta para el invierno");
        break;

    case "Febrero":
        alert("Falta para el invierno");
        break;

    case "Marzo":
        alert("Falta para el invierno");
        break;

    case "Abril":
        alert("Falta para el invierno");
        break;
    
    case "Mayo":
        alert("Falta para el invierno");
        break;

    case "Junio":
        alert("Falta para el invierno");
        break;

    case "Julio":
        alert("Abrigate que hace frio");
        break;

    case "Agosto":
        alert("Abrigate que hace frio");
        break;

    case "Septiembre":
        alert("Ya pasamos el frio, ahora calor!!!");
        break;

    case "Octubre":
        alert("Ya pasamos el frio, ahora calor!!!");
        break;
        
    case "Noviembre":
        alert("Ya pasamos el frio, ahora calor!!!");
        break;

    case "Diciembre":
        alert("Ya pasamos el frio, ahora calor!!!");
        break;
}

// O ES LO MISMO QUE REALIZAR 
switch(mes){
    case "Enero":
    case "Febrero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
        alert("Falta para el invierno");
        break;
    case "Julio":
    case "Agosto":
        alert("Abrigate que hace frio");
        break;
    default:
        alert(Ya paso el frio, ahora calor);
        
}

    
    
}//FIN DE LA FUNCIÓN