// PROPIEDADES GLOBALES

// console.log(frames)
// console.log(this)
// console.log(window)
// console.log(self)

// PROPIEDAD GLOBAL POR PARTE DE NODE  Y NO SOLO NAVEGADOR
// console.log(globalThis)

// // DEBILMENTE TIPADO
// console.log(4+ "2")
// console.log(4* "2")
// console.log(4+true)
// console.log(4-false)

// //  /* COECION*/
//  var a="2"
//  var b=3
//  var suma =a+b
//  var coecion = Number(a)
//  var sumabien = coecion+b
//  console.log(suma)
//  console.log(sumabien)
 


// //  /* HOISTING*/
// function suma(){
//     var nombre= "Nicolas" + apellido
//     return nombre
// }

// TEMPLATES LITERALS plantillas de cadena

// var nombre = "Nicolas"
// var edad = 25
// console.log(`Hola ${nombre} tu edad es ${edad}`)

// var apellido= "soto"
// segundo= "johan"
// console.log(suma() +segundo)

// // Operador TERNARIO
// numero=10

// resultado= numero>8 ? "SI":"NO"
// console.log(resultado)

//  Condicional PAR E IMPAR
// var par_inpar= num % 2 === 0 ? true : false

// console.log(par_inpar)


// ARRAYS

var lista= ["Nicolas", "Alejo", "Camilo"]

// lista.push("Melany") /*Añadir un objeto al final de la lista*/
// lista.pop("Melany"); /*Borrar el ultimo objeto de la lista*/
// lista.unshift("Janeth") /*Añadir un objeto al principio de la lista*/
// lista.shift("") /*Borrar un objeto al principio de la lista*/
// console.log(lista.indexOf("Nicolas")) /*Mapear ubicacion de un objeto dentro de la lista*/ 
// console.log(lista.length)/* Saber longitud del array */

// METODO REDUCE("Sirve para sumar todos nuestros valores dentro de un array")

var listaNumeros= [1, 2, 3]

// var SumaArray= listaNumeros.reduce(function(total=0,ValorActual){
//     return total + ValorActual
// })

// console.log(SumaArray)

// METODO SPLICE = toma una rebanada de un array 

// var List = [
//     1,
//     3,
//    4,
//    2,
//    5,
//    7
    
// ]
// var DondeComienza =4
// var CantidadRebanadas=1

// var rebanada =List.splice(DondeComienza,CantidadRebanadas)

// console.log(rebanada)


// METODO INCLUDE = da la opcion de saber si un elemento esta incluido en un array 
 
//     var coupons=[
//         "JuanDC_es_Batman",
//         "pero_no_le_digas_a_nadie",
//         "es_un_secreto",
//     ]

// var couponValue= document.getElementById("couponValue").value

// if (!coupons.includes(couponValue)) {
//     alert("El cupón " + couponValue + "no es válido");
//  } else if (couponValue === "JuanDC_es_Batman") {
//     descuento = 15;
//  } else if (couponValue === "pero_no_le_digas_a_nadie") {
//     descuento = 30;
//  } else if (couponValue === "es_un_secreto") {
//     descuento = 25;
//  }
  
//  var result= document.getElementById("Descuento")

//  result.value=" Su descuento es del %"+descuento

// }


// // LOOPS *CICLOS

// for ( var i=0; i<lista.length; i++){
//     console.log(lista[i])
// }
// // singular of plural
// for (var hijo of lista){

//     console.log("estos son mis " +hijo)
// }


// while(lista.length>0){
//     console.log("hola " + lista.shift())
// }

