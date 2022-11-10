//function hola() {
//  console.log("Hola Greta");}

//function sumaTest() {
//let x = 23;
//let y = 43;
//let z = x + y;
//return z;}

//hola();

//let result = sumaTest();

//function multi() {
//let x = 3;
//let y = 6;
//let z = 78;
//let w = 3 * 6 * 78;
//return w;}
//let result = multi();
//console.log(multi());
let nombre1 = "pepe";
let nombre2 = "ggreta";

function hola(param1, param2) {
  console.log(param1);
  console.log(param2);
}

hola(nombre1, nombre2);

function division() {
  let x = 50;
  let y = 25;
  let z = x / y;
  return z;
}
let result = division();

console.log(division());

let palabra1 = "Hola";
let palabra2 = "Adiós";

function concat(parametro1, parametro2) {
  let frase = parametro1 + " " + parametro2;
  return frase;
}
console.log(concat(palabra1, palabra2));
concat("dfvdfv", "dsvdfsgfd");

function sumaParametrizada(cifra1, cifra2) {
  let resultado = cifra1 + cifra2;
  return resultado;
}
let valorPrimero = 2;
let valorSegundo = 4;

console.log(sumaParametrizada(valorPrimero, valorSegundo));
console.log(sumaParametrizada(valorPrimero, valorSegundo));
//- JS: Crear una función que calcule la división entre 50 y 25.
//- JS: Crear una función que concatene los valores de dos strings pasados por parámetros. (Ref: https://www.w3schools.com/js/js_function_parameters.asp y https://www.w3schools.com/jsref/jsref_concat_string.asp)

// GLOSARIO
// Definir una función: Significa crear una función nueva. EJ: function hola(){}
// Ejecutar una función: Simplemente es lanzar la orden para que la función que hemos creado se ejecute. EJ: hola();
// Parámetros de una función: Son variables que vienen de FUERA de la función y nos permite integrarlas dentor de ella para utilizar sus datos dentro de ella.
