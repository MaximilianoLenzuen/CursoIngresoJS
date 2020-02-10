function mostrar()
{
//tomo la edad  
 
var edad;
var estadoCivil = document.getElementById("estadoCivil").value;
edad = parseInt(document.getElementById("edad").value);

if(edad < 18 && estadoCivil != "Soltero" );
    alert(" Es muy pequeño para no ser soltero")
}//FIN DE LA FUNCIÓN