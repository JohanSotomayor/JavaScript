class class1 {

    constructor(){
        this.marca =""
        this.color =""
        this.año =0

    }

 moto(marca, color, año){

    this.marca=marca
    this.color= color
    this.año= año
        
       return `la marca de la moto es ${marca} el color ${color}
       y el año es ${año}`
 }
 
 } 
//  USO DE LA HERENCIA
 var motoObject = new class1

  console.log(motoObject.moto("susuki", "rojo", 2021))

