//En este ejercicio, vamos a tratar con errores en la pila de llamadas.

//Crea función llamada dividir que tome dos números como argumentos y devuelva su división.
function dividir(a,b){return a/b};
//Llama a dividir(10, 0) y observa qué sucede. Deberías obtener un error de división por cero. ¿Cómo se maneja este error en la pila de llamadas?
console.log(dividir(10,0)); //Primero entra el console log, despues la funcion, sale la funcion devolviendo infinity y sale el console log
//Modifica la función dividir para manejar el caso de división por cero y lanzar una excepción personalizada.
function dividir2(a,b) {
    if (b == 0){
        throw new Error("No se puede dividir entre 0");
    }
    return a/b;
}
//Llama a dividir(10, 0) nuevamente y observa cómo se maneja ahora el error.
console.log(dividir2(10,0));
//Ahora pasa lo mismo que antes pero cuando pasa el error por la funcion se termina toda la pila, porque se ha producido el error y eso hace que se pare la ejecucion del programa.