
# JAVASCRIPT DESDE 0
<img src="https://img.icons8.com/color/48/000000/javascript--v1.png"/> \{JSoto} Johan Sotomayor <https://johansotomayor.github.io>



- Bases del lenguaje
- Termino principales (Scope, Hoisting, Coersion)
- Variables (Declaracion, Inicializacion)
- Tipado (Debil)
- Condicionales
- Loops
- funciones
- Arrays
- Objetos

# EVENT LOOP 
-Controlador de eventos en JS bajo una etructura de MonoHilo (capacidad en ejecucion de una sola entrada y una sola salida)
### CALLSTACK
- Estructura de pila, son las tareas(funciones) que ejecuta JS empezando por GlobalThis y por la funcion llamada, al terminar su ejecuion sale de la pila, asi siempre sale el ultimo secuencialmente, hasta solo volver a quedar en GlobaThis
### CALLBACK 
-  Cola de tareas dentro del event loop, esperan a que el Callstack ejecute las funciones llamadas para poder ejecutarse, normalmente son funciones pasadas como parametros en otras funciones y siendo utilizadas dentro de otras funciones
### MEMORY HEAP 
- Memoria de collecion o de monton esta alamcena los datos (variables o funciondes) dentro del programa, ejemplo= al inicilizar una variable esta guarda su valor, si cambia el valor de esa variable mas adelante el memory heap borra el valor anterior y deja el nuevo

### GARBAGE COLECTOR
- limpia la memory heap de las variables o informacion que ya no estamos utilizando (como una variable renombrada, su valor anterior es sweep osea barrido)

### FUNCION DE ORDEN SUPERIOR
- Se le denomina de esta manera a aquellas funciones que tienen como parametros otras funciones, las cuales se ejecutan dentro de esta funcion(de orden superior) y por ello su nombre