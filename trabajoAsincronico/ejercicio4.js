//En este ejercicio, exploraremos cómo funciona el trabajo asincrónico en Node.js.

//Crea una función llamada buscarEnBD que simule una búsqueda en una base de datos. Esta función debería tomar un tiempo simulado (por ejemplo, 2 segundos) antes de devolver un resultado.
function buscarEnBD(datos){
    setTimeout(() =>{
        return datos;
    },2000);
}
//Llama a buscarEnBD("Usuario123") y observa cómo se comporta la pila de llamadas mientras espera la respuesta.
console.log(buscarEnBD("Usuario123")); 
/*Entra el console log, despues la funcion, despues entrra el timeout que espera el tiempo que hemos puesto, sale el timeout sale la funcion y la sale el console log */
//Ahora, utiliza una función de devolución de llamada (callback) para manejar el resultado de buscarEnBD. La función de devolución de llamada debería imprimir el resultado en la consola.
function buscarEnBD2(datos,callback){
    setTimeout(() =>{
        callback(datos);
    },2000);
}

function mostrarInfo(info){
    console.log(info);
}
//Llama a buscarEnBD("Usuario456", callback) y observa cómo se maneja la respuesta asincrónica.
console.log(buscarEnBD2("usuario456",mostrarInfo));
/*Entra el console log, entra la funcion buscarEnBd, entra el timeOut se espera el tiempo introducido, entra el callback sale el callback, sale el 
el timeout, sale la funcion buscarEnBd y sale el console log*/