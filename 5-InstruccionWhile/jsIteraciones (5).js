function mostrar()
{
    var sexo = prompt("Ingrese su sexo: ");
    while( sexo != "f" && sexo != "m"){
        sexo = prompt("Ingrese sexo valido");
    }
    document.getElementById("Sexo").value = sexo;
}//FIN DE LA FUNCIÓN
