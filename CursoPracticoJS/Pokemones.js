

function ColorPoke(){
    var pokemon= document.getElementById("NombrePokemon").value
  
    var color = document.getElementById("ColorPokemon")

    switch(pokemon){
        case "Charmander": color.value= "rojo"
        break
        case "Bulbasur": color.value= "verde"
        break
        case "Pikachu": color.value= "Amarillo"
        default:
    }

}
// FORMULARIO CUPONES

function Cupon(){
 
    var coupons=[
        "JuanDC_es_Batman",
        "pero_no_le_digas_a_nadie",
        "es_un_secreto",
    ]

var couponValue= document.getElementById("couponValue").value

if (!coupons.includes(couponValue)) {
    alert("El cupón " + couponValue + "no es válido");
 } else if (couponValue === "JuanDC_es_Batman") {
    descuento = 15;
 } else if (couponValue === "pero_no_le_digas_a_nadie") {
    descuento = 30;
 } else if (couponValue === "es_un_secreto") {
    descuento = 25;
 }
  
 var result= document.getElementById("Descuento")

 result.value=" Su descuento es del %"+descuento

}

// PENDIENTE METODO REDUCE("Sirve para sumar todos nuestros valores dentro de un array")
// y METODO SORT("Sirve para ordenar un arrray") 
