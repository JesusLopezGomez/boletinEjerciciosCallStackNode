//Crea una función llamada imprimirMensaje que tome un mensaje como argumento y lo imprima en la consola.
function imprimirMensaje(mensaje){
    console.log(mensaje);
}
//Llama a imprimirMensaje("Hola, Mundo") y observa el resultado.
console.log(imprimirMensaje("Hola, mundo"));
//Ahora, utiliza setTimeout para hacer que imprimirMensaje se llame después de 2 segundos con el mismo mensaje. ¿Cómo cambia la ejecución?
setTimeout(() => imprimirMensaje("Hola, mundo"),2000);
//Escribe el flujo de ejecución de las llamadas y observa cómo las funciones se agregan y eliminan de la pila de llamadas.
//Primero entra en la pila el console log despues el imprimirmensaje, sale el imprimir mensaje, sale el console log
//Entra el setTimeOut, entra la funcion imprimir mensaje, sale la funcion y sale el timeout