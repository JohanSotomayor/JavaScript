// ECMASCRIPT6
// DEFAULT PARAMANS= asignar valores a parametros
function hello(mensaje="hola"){
    console.log(mensaje)
}
hello()

// TEMPLATES LITERALS plantillas de cadena

var nombre = "Nicolas"
var edad = 25
// console.log(`Hola ${nombre} tu edad es ${edad}`)

    // Espacio entre lineas

console.log(`Bienvenido ${nombre}  
Su edad es ${edad}`)  /* ESPACIO anteriormente con \n  */

// Concatenar ARRAYS dentro de otro ARRAY

var team1 = ["nicolas","camilo","alejo"]
var team2 = ["melany","sarita","isa"]

var totalTeams=[...team1,...team2]

console.log(totalTeams)

var Videojuego ={
    nombre:"fifa21",
    valor:129000 ,
    consola:"play4"
}

console.log(Videojuego.consola)

// Tomar valores de un OBJETO e imprimirlos

var Videojuego ={
    nombre:"fifa21",
    valor:129000 ,
    consola:"play4"
}

console.log(Videojuego.consola, Videojuego.nombre)

var{nombre, valor} = Videojuego

console.log(`El nombre del juego es ${nombre} y su valor ${valor}`)

// SCOPE local de CONST "inmutable" y LET "mutable"
{
    var nombre="nicolas"
}
{
    let edad=  25 
    const año = 1996
}

 console.log(`su nombre es ${nombre} y su edad ${edad} del año ${año}`)


//  ARROW FUNCTION para funciones expresivas o anonimas
var num =50
var num1= 100

var ArrowMult= (num,num1) =>{ return num*num1} 
var ShortArrowMult= (num,num1) => num*num1 

console.log(`Arrow function la multiplicacion es  ${ArrowMult(num,num1)}
Atajo arrow function = ${ShortArrowMult(num,num1)}`)

// PROMISE ASICRONIZMO espera de una respuesta


var precio= 3400
var descuento = 20

var precioFinal= (precio,descuento)=> {

  
    return new Promise((resolve,reject)=>{
        
  return precio*descuento/100 ? resolve(`TOTAL = ${precio-(precio*descuento/100)}` ) : reject("MAL")
    })
}

precioFinal(precio, descuento)
.then((response)=>{console.log(response)})
.catch((error)=>{
    console.log(error)
})


// EXPORTAR E IMPORTAR MODULOS EN JS

var ArrowMult= (num,num1) =>{ return num*num1} 

module.exports = ArrowMult; /*Sintaxis NODEJS para correr con CodeRuner "Consola"*/

export default ArrowMult; /*Sintaxis EcmaScript6  CORRECTA*/

`Import {ArrowMult} from './module' `/*Sintaxis EcmaScript6  CORRECTA*/
const ArrowMult = require('./module'); /*Sintaxis NODEJS para correr con CodeRuner "Consola"*/

console.log(ArrowMult(8,2))


// GENERATOR funcion especial que trae diferentes valores en pila

function* Hola(){
    if(true){
        yield `hola1`
    }
    if(true){
        yield `hola2`
    }
    if(true){
        yield `hola3`
    }
}

var funcionHola= Hola()
console.log(`${funcionHola.next().value}
${funcionHola.next().value}
${funcionHola.next().value}
${funcionHola.next().value}`)



// ECMASCRIPT 7


// METODO INCLUDE = da la opcion de saber si un elemento esta incluido en un array 
 
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





// Operaciones para sacar exponente con **
var exponencial = (base,exponente) => {return base**exponente}

console.log(exponencial(4,3))


// ECMASCRIPT 8
var pokemones={
    Nombre:"Pikachu",
    Tipo:"fuego",
    Region:"Alola",  /* tailings coma = comillas traseras deja implicitamente que puede agregarse o no otro elemento*/
}

// // Convertir OBJETOS en ARRAY(MATRIZ) con mas ARRAYS dentro
var MatrizPokemones = Object.entries(pokemones)

console.log(MatrizPokemones)

// Convertir los valores de un OBJETO en array
var ValoresPokemones = Object.values(pokemones)

console.log(ValoresPokemones)

console.log(ValoresPokemones.length)


// METODO PAD añade caracteres a una cadena
var ListaUtiles = "Cuaderno"

console.log(ListaUtiles.padStart(14,"Libro "))
console.log(ListaUtiles.padEnd(14," Libro"))
console.log(ListaUtiles.length)



// METODOS PARA OBJETOS, FILTRAR VALORES Y AÑADIR ELEMENTO DE UN OBJETO A OTRO
var pokemones={
    Nombre:"Pikachu",
    Tipo:"fuego",
    Region:"Alola",  
}

let {Tipo, ...all}=pokemones

console.log(Tipo, all)


var Entrenadores={
    Nomb:"Ash",
    Pueblo:"Paleta",
    ...pokemones,
} /* AÑADIR ELEMENTO DE UN OBJETO A OTRO*/

console.log(Entrenadores)
// METODO FINALLY EN LAS PROMESAS= agrega un mensaje final ya sea resuelto o no
const Saludo=()=>{
  
    return new Promise((resolve,reject)=>{
       (true) ?resolve("Hola") : reject(new error, "error") 

    })
}

 Saludo().then(response=> {console.log(response)})
 .catch(error=>{console.log(error)})
 .finally(()=>console.log("finalizo"))

 
// ASYNCRONISMO ASYNC AWAIT SETTIMEOUT
 const Saludo=()=>{
  
    return new Promise((resolve,reject)=>{
       (true) ? setTimeout(()=>resolve("Hola"),3000) : reject(new error, "error") 

    })
}

const AsynSaludo = async()=>{
    const Hello = await Saludo()

    console.log(Hello)
}

AsynSaludo()


// ECMASCRIPT9

// PROGRAMACION ASYNCRONA CON PROMESA Y TRY CATCH

const Saludo=()=>{
  
    return new Promise((resolve,reject)=>{
       (true) ? setTimeout(()=>resolve("Hola"),3000) : reject(new error, "error") 

    })
}



const AsyncTryCatch= async ()=>{
    try{const hello = await Saludo()
        console.log(hello+" try")}
        catch(error){
            console.log(error, "Catch")
        }
    

}
AsyncTryCatch()

// EXPRESIONES REGULARES COMO FECHA
const regexDate = /([0-9]{4})-([0-9]{2})-([0-9]{2})/

const Date= regexDate.exec('2020-08-02')
const year=Date[1]
const month=Date[2]
const Day=Date[3]

console.log(`año: ${year}
mes:${month}
dia:${Day}`)

// ECMASCRIPT10
// AARAY CON arraySubniveles(MATRIZ) Metodo FLAT= Aplanar menos niveles o uno solo nivel

const arraySubniveles=[1,2,3,[1,2,3,[1,2,3 ]]]
console.log(arraySubniveles.flat()) 
console.log(arraySubniveles.flat(2))


 
//  METODO FLATMAP =nos permite atrapar los valores de un array y devolver otros
let array=[1,2,3,]

let array2=array.flatMap(value => [value, value*2])
console.log(array2)
console.log(array)


// METODO TRIM= nos poda el espacio total o al final o al inicio de una cadena de texto
let Mensaje = "    mi nombre es Johan       "
console.log(Mensaje.trim())
console.log(Mensaje.trimStart())
console.log(Mensaje.trimEnd())

// METODO FROMENTRIES =CONVERTIR UN ARRAY EN UN OBJETO

let array=[
    ["nombre", "jorge"],
    ["edad",25],
]

let ObjetoDeArray= Object.fromEntries(array)

console.log(ObjetoDeArray)

// SYMBOL / DESCRIPTION = obtener informacion de un simbolo
let simbolo = 'simbolo'

let ValorSimbolo = Symbol(simbolo)

console.log(ValorSimbolo.description)

// DINAMIC IMPORT= importacion de formad dinamica y asincrona para mejorar el performance de la app esta en la carpeta dinamic import

// BigInt = Capacidad del numero mas alto en JS
var BigNum= 9007199254740991n
console.log(BigNum)
const anotherBigNum = BigInt(9007199254740991)
console.log(anotherBigNum)

// ECMASCRPTI11

// METODO Promise.AllSettLed = funciona para ejecutar varias promesas sin importar que tengan error

const Promise1 = new Promise ((resolve,reject) => {
    resolve("Bien")
})
const Promise2= new Promise((resolve, reject)=>{
reject("mal ")
})

const Promise3= new Promise((resolve,reject)=>{
    resolve("Bien2")
})


Promise.allSettled([Promise1,Promise2,Promise3])
.then((resuelto)=>console.log(resuelto))
.catch((reject)=>console.log(reject))


// PROPIEDAD GLOBAL POR PARTE DE NODE  Y NO SOLO NAVEGADOR
console.log(globalThis)

// OPERDADOR NULL Definir cuando nuestras variables son NULL nulas

let Nombre= null ?? 'string nulo sin valor'
console.log(Nombre) 

// Optional chaining (?.)

const user={}

console.log(user?.profile?.email)

user?.profile?.email ? console.log("email") : console.log("No hay email")


// ECMASCRIPT12

// METODO REPLACE Y REPLACEALL= Modifica una cadena de texto indicando el caracter o palabra a cambiar y por cual
var Frase = "El mundo de la programacion es fantastico extremadamente fantastico "

console.log(Frase.replace("fantastico","Horrible"))
console.log(Frase.replaceAll("fantastico", "Horrible"))


// # Encapsula nuestros metodos de una clase a privados(solo pueden ser utilizados en su clase nativa)

class Privada {
 #datos(frase){
     console.log(frase)
 }
//  get get1(){

//  }
// set set1(){

// }

}

const instancia = new Privada()


instancia.datos("hola")
cont

// METODO ANY= para PROMESAS, ejecuta una cadena de promesas y devuelve la primera que se resuelva correctamente



const promise1= new Promise ((resolve,reject)=>resolve("YES 1"))
const promise2= new Promise((resolve, reject)=>resolve("YES 2"))
const promise3 = new Promise((resolve,reject)=> reject("MAL"))

Promise.any([promise1,promise2,promise3])
.then((respuesta)=>console.log(respuesta))
.catch((rechazo)=>console.log(rechazo))

//   WeakRef(element); REFERENCIA DEBIL para evitar que el Garbage collector (recolector de basura) recoja la variable para eliminar espacio

class AnyClass {
    constructor(element){
        this.ref = new WeakRef
    }
  
}

// NUEVA ASIGNACION DE Y(&&) O(||) ??(diferente) con =

let verdad=true
let falso = false

console.log(verdad &&= falso)
console.log(verdad ||= falso)
console.log(verdad ??= falso)


