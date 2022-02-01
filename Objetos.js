// OBJETOS *JSON

// var carro = {
//     marca:"Hyundai",
//     color:"Rojo",
//     año: "2022",
//     datos : function(){
//         console.log(`Datos Carro ${this.marca}`)
//     }

// }
// carro.datos()

// FUNCTION CONTRUCTORA

// function Auto(marca, color, año){
//     this.marca=marca
//     this.color= color
//     this.año= año
// }
// NEW es intancia de un objeto
// var auto1= new Auto("Toyota","Azul",2022)
// var auto2= new Auto("Chevrolet","Amarillo",2022)

// console.log(auto1, auto2)

// Array con Objetos

var videojuegos = [
   {titulo:"Dragon Ball ", consola:"xbox", genero:"pelea"},
   {titulo:"Call of duty", consola:"play", genero:"guerra"},
   {titulo:"Fifa 21", consola:"play", genero:"Deportes"},
   {titulo:"NBA22", consola:"xbox", genero:"Deportes"}
]

// RECORRE ARRAYS

// FILTER= filtramos el array por un valor y nos trae todas las filas que lo contengan
// var TipoConsola = videojuegos.filter(function(tipo_consola){
//     return tipo_consola.genero == "guerra"
// })
// console.log(TipoConsola)

// MAP = mapear un array por tipo creando un nuevo array
//  var titulos= videojuegos.map(function(juegos){
//      return juegos.titulo + juegos.genero
//  })


// console.log(titulos)

// FOREACH = encontrar cada indice u tipo dentro de un array
videojuegos.forEach(function(titulo){
    console.log(titulo.titulo)
})

// FIND= encontrar un valor en especifico dentro del array obteniendo el primer resultado
var tipoGenero = videojuegos.find(function (genero){
    return genero.genero == "Deportes"
})

console.log(tipoGenero)

// SOME= Conoce por medio de dato booleano si hay ciertos valores o no
var TrueOrFalse =videojuegos.some(function(genero){
    return genero.genero == "guerra"
})
console.log(TrueOrFalse)
// bbgg
fgf