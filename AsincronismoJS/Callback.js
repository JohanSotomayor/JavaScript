
// CALLBACK evento que se origina sobre una funcion llamada dentro de otra funcion (de orden superior)

function ConversionABitcoin(cantidad){
   total= cantidad *Bitcoin() 
   console.log(total)
}

function Bitcoin(){
    const Bitcoin=45.000
    return Bitcoin 
}


ConversionABitcoin(5)


//PETICIONES HTTP CON CALLBACKS MAXIMO 3 LLAMADOS PARA EVITAR EL CALLBACK HELL

const HttpRequest = require('xmlhttprequest').XMLHttpRequest

const Endpoint="https://rickandmortyapi.com/api/character/"

function FetchApi(Endpoint, callback){
 let http= new HttpRequest()
     http.open('GET', Endpoint, true)
     http.onreadystatechange= function (evento){
         if(http,this.readyState===4){
             if(http.status===200){
                 callback(null,JSON.parse(http.responseText))
             }else{
              let error = new error('error'+Endpoint)
               return  callback(error, 'null')

            
             }
         }
     
        }
        http.send(); 
}


FetchApi(Endpoint,function(error,data){

    if(error) return console,log(error)
    FetchApi(Endpoint+data.results[0].id,function(error2,data2){
        if(error2) return console.log(error)
        FetchApi(data2.origin.url, function(error3, data3){
            if(error3) return console.log(error3)
            console.log(data.info.count)
            console.log(data2.name)
            console.log(data3.dimension)

        })
     
    })
    
})


