// Como se declara una funcion y cual es su estructura
// function nombreDeLaFuncion() {
//     //¿Que va a hacer? lo que yo le diga que haga..!!
// }

// console.log("Mostrando mensaje.!!");
// console.log("Mostrando mensaje.!!");
// console.log("Mostrando mensaje.!!");
// console.log("Mostrando mensaje.!!");
// console.log("Mostrando mensaje.!!");

// Aca la declaramos
// function enviarMensaje() {
//     console.log("Mostrando mensaje.!!");
// }

// enviarMensaje();



// function ingresarNombre () {
//     let ingreseSuNombre = prompt("Ingrese su nombre")
//     console.log("El nombre ingresado es: " + ingreseSuNombre)
// }
// ingresarNombre ();
// ingresarNombre ();

// Para repetirlo 5 veces
// for (let i = 0; i < 5; i++) {
//     ingresarNombre()
// }

// Funciones con parametros
// function enviarMensajeConParametros(mensaje1, mensaje2) {
//     console.log("Este valor me devuelve el: " + mensaje1);
//     console.log("Este valor me devuelve el: "  + mensaje);
// }
// enviarMensajeConParametros ("Enviar mensaje");
// enviarMensajeConParametros ("Mensaje distinto");

// let resultado = 0;

// function sumar(numero1, numero2) {
//     resultado = numero1 + numero2;

// }
// function mostrarResultado(mensaje) {
//     console.log(mensaje);
// }

// sumar(10, 15);
// mostrarResultado("El resultado de la suma es: " + resultado)

// function sumarConReturn (numero1, numero2) {
//     return numero1 + numero2;
// }

// console.log ("El resultado de la suma es: " + sumarConReturn(5, 9))

// function calculadora(numero1, operacion, numero2){
//     switch(operacion) {
//         case "+":
//             return numero1 + numero2;
//             break;
//         case "-":
//             return numero1 - numero2;
//             break;
//         case "*":
//             return numero1 * numero2;
//             break;
//         case "/":
//             if(numero2 != 0){
//             return numero1 / numero2;
//             } else {
//                 return console.log ("No se puede dividir por 0")
//             }
//             break;
//         default:
//             return 0;
//             break;
//     }
// }

// function usarCalculadora () {
//     let numero1 = parseFloat(prompt("Ingrese un valor"));
//     let operacion = prompt("Ingrese la Operacion:");
//     let numero2 = parseFloat(prompt("Ingrese otro valor"));
//     return console.log("El resultado de la operacion es" + calculadora(numero1, operacion, numero2))
// }
// usarCalculadora ();

//Scope - Alcance de una Variable
// function llamarVariable() {
//     let variable = 10; // Variable Local
//     console.log(variable);
// }
// llamarVariable();
// //Si la llamo por fuera, me da que no esta definida
// console.log(variable);

// Funciones anónimas

// const suma = function (a, b) {return a + b}
// const resta = (a ,b) => a - b; // Funciones flecha

// console.log (suma(5, 4));

// const iva = x => x * 0.21;
// let precio = 1500;
// console.log(iva(precio))

// function calcularPrecioConIva (precio) {
//     const nuevoPrecio = precio + iva(precio);
//     console.log(nuevoPrecio);
// }
// calcularPrecioConIva(100)

