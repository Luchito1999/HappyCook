
/* var nombre = "ALEJANDRO";
console.log(nombre);
//if (condicion){
//    lo que queremos que se ejecute
//}
//condiciones pueden dar como resultado un true o un false
if (true){ // SI condicion == true, entonces se ejecuta  {}
    console.log("condicion cumplida o verdadera")
}
if (false){
    console.log("condicion no cumplida o falsa NO SE IMPRIME")
}
//Las Booleanas tambien son variables primitivas
let V = true;
let F = false;

if (V){ //El Valor de verdad de la variable es true
    console.log("condicion cumplida o verdadera usando V")
} */
//dentro de los () debemos poner una condicion
//Ejemplo:

//const EDAD = 18;

//const edadIngresada = prompt("Ingrese su edad:");

//if (edadIngresada >= EDAD){
//    alert("Puede pasar!")
//} else { // Sino se cumple la condicion, ejecuta esto:
   // alert ("Es menos a " + EDAD + " no puede pasar.!")
//}

// Comparaciones
/* const PI = 3.14;
const ingreseUnValor = prompt ("Ingrese un numero:")

if (ingreseUnValor <= 0) {
    console.warn ("No se puede ingresar un valor nefativo o igual a 0")
}else if (ingreseUnValor < PI){
    console.log("El numero ingresado es menor a PI")
}else if (ingresoUnValor == PI) {
    console.log("El numero ingresado es igual a PI")
}else if (ingresoUnValor > PI) {
    console.log("El numero ingresado es mayor a PI")
} else {
    console.log("El dato ingresado es invalido")
} */

// Tabla de Verdad (logica proposicional)

/* let V = true;
let F = false;

console.log ("Tabla de Verdad del Operador && (Y)");
console.log(V && V); // Si ambos son V => true
console.log(V && F); // Si almenos uno de los valores es F => false
console.log(F && V);// Si almenos uno de los valores es F => false
console.log(F && F);// Si ambos son f => false


console.log ("Tabla de Verdad del Operador && (O)");
console.log(V && V); // Si ambos son V => true
console.log(V && F); // Si almenos uno de los valores es F => true
console.log(F && V);// Si almenos uno de los valores es F => true
console.log(F && F);// Si ambos son f => false

console.log ("Tabla de Verdad del Operador de Negacion (!)");
console.log(!V); // Si no es verdadero => false
console.log(!F); // Si no es falso => true */

/* const VACIO = "";
const N = 1;
const ingreseUnNumeroPorPrompt = prompt("Ingrese un numero")

if (ingreseUnNumeroPorPrompt = VACIO) {
    console.warn ("usted no ha ingresado nada")
} else if (ingreseUnNumeroPorPrompt < 0 || ingreseUnNumeroPorPrompt == 0){
    console.warn ("no se puede ingresar un numero negativo al 0")
} else if (ingreseUnNumeroPorPrompt >0 && ingreseUnNumeroPorPrompt < N) {
    console.log ("El valor esta entre 0 y 1")
} else if (ingreseUnNumeroPorPrompt == 1){
    console.log ("usted ingreso el 1")
}
else if (ingreseUnNumeroPorPrompt > 1 && ingreseUnNumeroPorPrompt <= 50){
    console.log ("usted ingreso esta entre 1 y 50")
} else if (ingreseUnNumeroPorPrompt > 50) {
    console.log ("El valor es mayor a 50")
} else {
    console.error ("el dato ingresado no es un numero")
} */

// Actividad en Clase:

/* if (prompt("Ingrese un valor: ") > 1000){
    alert("Numero mayor a 1000")
} */
/* if (prompt("Ingrese un texto") == "Hola"){
    console.warn ("Hola")
} */
/* const valor = prompt ("Ingrese un valor: ");

if ((valor >=10 ) && (valor <=50)) {
    alert ("aprobo")
} */
// Ejemplo con strings

/* let color = "azul";
let ingreseUnColor = prompt("Ingrese un color:")

if (ingreseUnColor == color) {
    console.log("El color ingresado es " + color)
}else {
    console.warn("El color ingresado NO ES " + color)
} */

// Ciclos e iteraciones
//Actualizacion
/* let i = 0;
console.log(i)
i = i + 1;
console.log(i)
i = i + 1;
console.log(i)
i = i + 1;
console.log(i)
i = i + 1;
console.log(i)
i++
console.log("Actualizacion con i++",i)
 */
// Ciclo for
/* for(desde; hasta; actualizacion ) {
    lo que quiero que se ejecute
// } */
// /* for(let i = 0; i <= 10; i++) {
//     console.log("Se está ejecutando un for hasta el " + i)
// } */

// /* let ingreseUnNumero = parseInt(prompt("Ingrese un numero"));
// console.log("Tabla de Multiplicar del " + ingreseUnNumero)

// for( let i = 1; i <= 10; i++){
//     let r = ingreseUnNumero * i
//     console.log(ingreseUnNumero + " X " + i + " = " + r)
// } */

// /* let nombre = prompt ("Ingrese su Nombre")

// for (let i = 1; i <=500; i++) {
//     console.log("Su nombre es: " + nombre);
// } */
// /* for (let i = 1; i <=10; i++) {
//     if (i == 19){
//         break;//Corta la ejecucion del for
//     }
//     console.log("Los numeros son: " + 1);
// }
// for (let i = 1; i <= 20; i++){

//     if (i == 10){
//         continue; // Saltea el 10
//     }
//     console.log("Los numeros son: " + i);
// } */

//     // CICLO WHILE

// /* let ingreseUnValor = prompt("Ingrese un numero");

// while(ingreseUnValor != 0){
//     console.log("El usuario ingreso: " + ingreseUnValor);
//     ingreseUnValor = prompt("Ingrese otro valor");
// } */

//     // CICLO DO WHILE

// /* let ingreseUnValor = prompt("Ingrese un numero");

// do {
//     console.log("El usuario ingreso: " + ingreseUnValor);
// } while (ingreseUnValor != 0) */

// SWITCH

// let ingreseSuNombre = prompt ("Ingrese su Nombre");

// while (ingreseSuNombre != "Chau"){
// switch(ingreseSuNombre) {
//     case "Alejandro":
//         console.log("Su nombre es Alejandro");
//         break;
//     case "JavaScript":
//         console.log(ingreseSuNombre + "No es un nombre");
//     default:
//         console.log("Nos vemos en Disney");
//         break;
//     }
//     ingreseSuNombre = prompt ("Ingrese otro Nombre");
// }

let str = "123";
let num = parseInt(str);
console.log(str);

let = i == 1

for( i )