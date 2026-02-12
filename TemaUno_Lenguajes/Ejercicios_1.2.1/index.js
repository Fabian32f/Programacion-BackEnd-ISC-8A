//Ejercicios 1.2.1: Sintaxis Basica de Node.js
//Alumno: Fabian Kinil Adame

// ============================================
// EJERCICIO A: Comentarios en línea y multilínea
// ============================================
console.log("--- EJERCICIO A: Comentarios ---");

// Este es un comentario de una sola línea

/*
  Este es un comentario
  de múltiples líneas.
  Se usa para explicaciones más largas.
*/

/**
 * Este es un comentario de documentación
 * Se usa para documentar funciones, clases, etc.
 * @param {string} nombre - El nombre del usuario
 * @returns {string} Un saludo personalizado
 */

// ============================================
// EJERCICIO B: Declaración de variables con diferentes tipos de datos
// ============================================
console.log("--- EJERCICIO B: Tipos de Datos ---");

// String (cadena de texto)
let nombre = "Fabian";
console.log("String:", nombre, "- Tipo:", typeof nombre);

// Number (número)
let edad = 25;
console.log("Number:", edad, "- Tipo:", typeof edad);

// Boolean (booleano - verdadero o falso)
let esEstudiante = true;
console.log("Boolean:", esEstudiante, "- Tipo:", typeof esEstudiante);

// Undefined (variable declarada pero sin valor asignado)
let variableSinValor;
console.log("Undefined:", variableSinValor, "- Tipo:", typeof variableSinValor);

// Null (valor nulo intencionalmente)
let valorNulo = null;
console.log("Null:", valorNulo, "- Tipo:", typeof valorNulo);

// Object (objeto)
let persona = { nombre: "Juan", edad: 30 };
console.log("Object:", persona, "- Tipo:", typeof persona);

// Array (arreglo - técnicamente es un objeto)
let numeros = [1, 2, 3, 4, 5];
console.log("Array:", numeros, "- Tipo:", typeof numeros);

// ============================================
// EJERCICIO C: Array con al menos 5 elementos de diferentes tipos
// ============================================
console.log("--- EJERCICIO C: Array Mixto ---");

let arrayMixto = [
  "Texto", // String
  42, // Number
  true, // Boolean
  { ciudad: "CDMX" }, // Object
  [1, 2, 3], // Array dentro de array
  null, // Null
];

console.log("Array con diferentes tipos de datos:");
console.log(arrayMixto);
console.log("Cantidad de elementos:", arrayMixto.length);
console.log();

// ============================================
// EJERCICIO D: Función polinómica de segundo grado
// ============================================
console.log("--- EJERCICIO D: Función Polinómica ---");

/**
 * Función polinómica de segundo grado: f(x) = x² + x
 * @param {number} x - Primer número
 * @param {number} y - Segundo número
 * @returns {number} Resultado de la función
 */
function funcionPolinomica(x, y) {
  let resultado = Math.pow(x, 2) + y;
  console.log(`f(${x}, ${y}) = x² + y`);
  console.log("Resultado:", resultado);
  return resultado;
}

funcionPolinomica(3, 4);

// ============================================
// EJERCICIO E: Función flecha con manipulación de cadenas
// ============================================
console.log("--- EJERCICIO E: Función Flecha ---");

/**
 * Función flecha que manipula un string
 * Aplica varios métodos de manipulación de cadenas
 */
const manipularCadena = (texto) => {
  console.log("Texto original:", texto);
  console.log("En mayúsculas:", texto.toUpperCase());
  console.log("En minúsculas:", texto.toLowerCase());
  console.log("Longitud:", texto.length);
  console.log("Primera letra:", texto.charAt(0));
  console.log("Última letra:", texto.charAt(texto.length - 1));
  console.log("Texto invertido:", texto.split("").reverse().join(""));

  return texto.toUpperCase(); // Retorna el texto en mayúsculas
};

let textoManipulado = manipularCadena("JavaScript es Genial");
console.log("Resultado final:", textoManipulado);
console.log();

// ============================================
// EJERCICIO F: Bucle que imprime números del 1 al 10 descendente
// ============================================
console.log("--- EJERCICIO F: Bucle Descendente ---");

console.log("Números del 10 al 1:");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
console.log();

// ============================================
// EJERCICIO G: Objeto que representa una institución
// ============================================
console.log("--- EJERCICIO G: Objeto Institución ---");

let institucion = {
  nombre: "Instituto Tecnologico Superior",
  tipo: "Educativa",
  ubicacion: "Felipe Carrillo Puerto",
  añoFundacion: 1997,
  numeroEstudiantes: 1500,
  carreras: [
    "Ingeniería en Sistemas",
    "Ingenieria Industria",
    "Ingenieria en Administracion",
  ],
  estaActiva: true,
};

console.log("Información de la institución:");
console.log(institucion);
console.log();

// ============================================
// EJERCICIO H: Agregar método al objeto institución
// ============================================
console.log("--- EJERCICIO H: Método en Objeto ---");

// Agregamos un método al objeto institución
institucion.descripcion = function () {
  console.log(`${this.nombre} es una institución ${this.tipo} ubicada en ${this.ubicacion}.
Fue fundada en ${this.añoFundacion} y actualmente cuenta con ${this.numeroEstudiantes} estudiantes.
Ofrece las siguientes carreras: ${this.carreras.join(", ")}.`);
};

// llamando al metodo:
institucion.descripcion();
console.log();

// ============================================
// EJERCICIO I: Módulo con funciones matemáticas
// ============================================
console.log("--- EJERCICIO I: Módulo Matemático ---");

function suma(a, b) {
  return a + b;
}
function resta(a, b) {
  return a - b;
}
function multiplicacion(a, b) {
  return a * b;
}
function division(a, b) {
  if (b === 0) return "Error: No se puede dividir entre cero";
  return a / b;
}

module.exports = { suma, resta, multiplicacion, division };

// ============================================
// EJERCICIO J: Operación asíncrona con setTimeout y callback
// ============================================
console.log("--- EJERCICIO J: Operación Asíncrona ---");

/**
 * Simula una operación asíncrona que tarda 2 segundos
 * @param {function} callback - Función que se ejecuta cuando termina
 */
function operacionAsincrona(callback) {
  console.log("Iniciando operación asíncrona...");
  console.log("Esperando 2 segundos...");

  setTimeout(() => {
    const resultado = "¡Operación completada exitosamente!";
    callback(resultado);
  }, 2000); // 2000 milisegundos = 2 segundos
}

// Ejecutamos la función asíncrona con un callback
operacionAsincrona((resultado) => {
  console.log("Callback ejecutado:");
  console.log(resultado);
  console.log();
});

console.log(
  "Este mensaje aparece antes que el callback (porque es asíncrono)\n",
);

// ============================================
// EJERCICIO K: Conversión de cadena a número con manejo de errores
// ============================================
console.log("--- EJERCICIO K: Conversión y Manejo de Errores ---");

/**
 * Convierte una cadena a número con manejo de errores
 * @param {string} cadena - La cadena a convertir
 * @returns {number|string} El número convertido o un mensaje de error
 */
function convertirCadenaANumero(cadena) {
  try {
    // Intentamos convertir la cadena a número
    const numero = Number(cadena);

    // Verificamos si la conversión fue exitosa
    if (isNaN(numero)) {
      throw new Error(`"${cadena}" no es un número válido`);
    }

    console.log(`✓ Conversión exitosa: "${cadena}" → ${numero}`);
    return numero;
  } catch (error) {
    console.log(`✗ Error: ${error.message}`);
    return error.message;
  }
}

// Pruebas con diferentes valores
console.log("Pruebas de conversión:");
convertirCadenaANumero("123"); // Exitoso
convertirCadenaANumero("45.67"); // Exitoso
convertirCadenaANumero("abc"); // Error
convertirCadenaANumero("123abc"); // Error
convertirCadenaANumero("  789  "); // Exitoso (ignora espacios)

console.log("\n=== EJERCICIOS COMPLETADOS ===");
