function mostrar()
{
    var altura;
    var sexo;
    var contador=0;
    var acumuladorAltura=0;
    var alturaBaja;
    var sexoBaja;
    var contadorMujeresAltas=0;
    var flag=0;

    while(contador < 5){
     altura = parseInt(prompt("Ingrese la altura en centimetros!"));
     while(altura < 0 || altura > 250){
         altura = parseInt(prompt("Ingrese una altura valida!"));
     }

     sexo = prompt("Ingrese el sexo: m/f: ")
     while((sexo != 'm' && sexo != 'f' )){
         sexo = prompt("Ingrese un sexo valido!!!!!!");
     }

     acumuladorAltura=acumuladorAltura+altura;

     if(flag == 0 || altura < alturaBaja){
         alturaBaja = altura;
         sexoBaja = sexo;
         flag = 1;
     }

     if(altura > 190){
        contadorMujeresAltas++;
     }
     contador++;
    }
    alert("El promedio de todas las alturas es: " + acumuladorAltura/contador);
    alert("La altura mas baja fue: " + alturaBaja + " y el sexo de esa persona es: " + sexoBaja);
    alert("La cantidad de mujeres con altura mayor a 190 es: " + contadorMujeresAltas);
}
