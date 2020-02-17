/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
    var lampara = parseInt(document.getElementById("Cantidad").value);
    var descuento;
    var precioFinal;
    
    
    if (lampara > 6) {
        precioFinal = (lampara * 35) - (lampara * 35) * descuento;
        descuento = 0.5;
        document.getElementById("precioDescuento").value = precioFinal;
    } 
    
    else if(lampara == 5) {
        if ( document.getElementById("Marca").value = "ArgentinaLuz"){
            precioFinal = (lampara * 35) - (lampara * 35) * descuento;
            descuento = 0.4;
            document.getElementById("precioDescuento").value = precioFinal;    
        }else {
            precioFinal = (lampara * 35) - (lampara * 35) * descuento;
            descuento = 0.3;
            document.getElementById("precioDescuento").value = precioFinal;
        }

    }else if(lampara == 4) {
        if( document.getElementById("Marca").value = "ArgentinaLuz" && document.getElementById("Marca").value = "FelipeLamparas" ){
            precioFinal = (lampara * 35) - (lampara * 35) * descuento;
            descuento = 0.25;
            document.getElementById("precioDescuento").value = precioFinal;
        }else{
            precioFinal = (lampara * 35) - (lampara * 35) * descuento;
            descuento = 0.2;
            document.getElementById("precioDescuento").value = precioFinal;
        }

    }else if(lampara == 3) {
        if( document.getElementById("Marca").value = "ArgentinaLuz"){
            precioFinal = (lampara * 35) - (lampara * 35) * descuento;
            descuento = 0.15;
            document.getElementById("precioDescuento").value = precioFinal;
        }else if(document.getElementById("marca").value = "FelipeLamparas){
            precioFinal = (lampara * 35) - (lampara * 35) * descuento;
            descuento = 0.2;
            document.getElementById("precioDescuento").value = precioFinal;
        }
}
