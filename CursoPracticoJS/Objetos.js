// // OBJETOS *JSON

// // var carro = {
// //     marca:"Hyundai",
// //     color:"Rojo",
// //     año: "2022",
// //     datos : function(){
// //         console.log(`Datos Carro ${this.marca}`)
// //     }

// // }
// // carro.datos()

// // FUNCTION CONTRUCTORA

// // function Auto(marca, color, año){
// //     this.marca=marca
// //     this.color= color
// //     this.año= año
// // }
// // NEW es intancia de un objeto
// // var auto1= new Auto("Toyota","Azul",2022)
// // var auto2= new Auto("Chevrolet","Amarillo",2022)

// // console.log(auto1, auto2)

// // Array con Objetos

var videojuegos = [
   {titulo:"Dragon Ball ", consola:"xbox", genero:"pelea", precio:5000},
   {titulo:"Call of duty", consola:"play", genero:"guerra",precio:4000},
   {titulo:"Fifa 21", consola:"play", genero:"Deportes",precio:1000},
   {titulo:"NBA22", consola:"xbox", genero:"Deportes",precio:4000}
]

// RECORRE ARRAYS

// FILTER= filtramos el array por un valor y nos trae todas las filas que lo contengan
var TipoConsola = videojuegos.filter(function(tipo_consola){
    return tipo_consola.titulo + tipo_consola.precio
})
console.log(TipoConsola)

// MAP = mapear un array por tipo creando un nuevo array
 var titulos= videojuegos.map(function(juegos){
      return juegos.titulo+ juegos.precio
 })
 console.log(titulos)

// // console.log(titulos)

// FOREACH = encontrar cada indice u tipo dentro de un array
videojuegos.forEach(function(titulo){
    console.log("forecah"+titulo.titulo)
})
// // FIND= encontrar un valor en especifico dentro del array obteniendo el primer resultado
// var tipoGenero = videojuegos.find(function (genero){
//     return genero.genero == "Deportes"
// })

// console.log(tipoGenero)

// // SOME= Conoce por medio de dato booleano si hay ciertos valores o no
// var TrueOrFalse =videojuegos.some(function(genero){
//     return genero.genero == "guerra"
// })
// console.log(TrueOrFalse)
// // 
// 

//Grupos en Consola
// console.group("GRUPO")
// console.log("Hola")

// console.log("Hola")

// console.groupEnd()



// convertir un ARRAY en un OBJETO

var ListaNum = [
    1,
    3,
    1, 
    1,
    4,
    4,
    5
]

console.log(ListaNum)

var objects={}
 ListaNum.map( function(elemento){

    if(objects[elemento])
     objects[elemento] += 1
     else{
         objects[elemento]=1
     }

}
)

console.log("convertir un ARRAY en un OBJETO", objects)

// // Convertir OBJETOS en ARRAY con mas ARRAYS dentro

var arrays = Object.entries(objects)

console.log(`Convertir OBJETOS en ARRAY (MATRIZ )con mas ARRAYS dentro
${arrays}`) 


// // Ordenar un ARRAY ascendentemente

var OrdenarArray =arrays.sort(function(elemento1,elemento2){

    return elemento1[1]-elemento2[1]

})

console.log("Ordenar un ARRAY ascendentemente " +OrdenarArray)

// METODO FROMENTRIES =CONVERTIR UN ARRAY EN UN OBJETO

let array=[
    ["nombre", "jorge"],
    ["edad",25],
]

let ObjetoDeArray= Object.fromEntries(array)

console.log(ObjetoDeArray)


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
