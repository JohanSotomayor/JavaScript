var button =document.getElementById("import")

button.addEventListener('click',async()=>{
   const module= await import("./file.js")
   module.hello()
})