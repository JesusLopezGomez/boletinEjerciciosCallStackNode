//Ejercicio 1: Entendiendo la Pila de Llamadas

//En este ejercicio, vamos a analizar la pila de llamadas en JavaScript.

//Escribe una función llamada sumar que tome dos números como argumentos y devuelva su suma.
function suma(a,b){return a+b;}
//Llama a la función sumar(5, 3) y observa cómo se comporta la pila de llamadas. Escribe los pasos en papel o en un editor de texto.
console.log(suma(5,3)); //Primero entra el console log, que mete en la pila a suma porque lo llama, sale la suma, y después sale el console.log
//Luego, modifica la función sumar para que llame a otra función llamada restar que tome dos números y devuelva su resta.
function suma2(a,b){return resta(a,b);}
function resta(a,b){return a-b};
//Llama a sumar(8, 4) y observa cómo se comporta la pila de llamadas nuevamente. Anota los pasos.
console.log(suma2(8,4)); //Primero entra en la pila el console log, que con su llamada a suma, la mete en la pila a suma, despues suma como llama a resta, tambien entra en la pila, sale la resta de la pila y despues sale la suma y por último sale el console log
