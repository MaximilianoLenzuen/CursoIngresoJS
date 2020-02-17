function mostrar()
{

var sexo = prompt("ingrese f ó m .").toLowerCase;

while ( sexo != "m" && sexo != "f" ){
  sexo = prompt("Ingrese otro sexo válido").toLowerCase;
}


document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN
