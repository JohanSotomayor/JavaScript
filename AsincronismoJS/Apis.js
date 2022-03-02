


    // #loop asincrinico llamando a una api
//     for(i=0; i<5; i++){
//         FetchApi(Endpoint+String(i+1),function(error,data){
//             console.log(i+1)
//             if(error) return console.log(error)
//             console.log(data)
//         })
// }




// function listado(){

//     const nombre = document.getElementById("nombre").value
//     const text = document.getElementById("TextProduct")
//     text.innerText= nombre
//     const div=document.getElementById("div")
//     div.innerHTML=	`<h1 id="a">Tu nombre es</h1>
//     <button>hola</button>`

// } 

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

       FetchApi(Endpoint+"2", function(error, data){

//   console.log(data)
        if(error)console.log(`error`)
  
        FetchApi(data.location.url, function(error2,data2){

            console.log(`Personaje: ${data.name}`)
            console.log(`Genero: ${data.gender}`)
            console.log(`Dimension: ${data2.name}`)
            console.log(`Tipo de planeta: ${data2.url}`)
   
            if(error2) return console.log(error2)
    
        })
     
    })


