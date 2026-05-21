// a. Función hipotética para probar igualdad exacta
// Recibe dos números y retorna su suma
function sumar(a, b) {
  return a + b;
}

//module.exports = { sumar };

// b. Función que retorna un objeto con datos de un usuario
function obtenerUsuario() {
  return { nombre: "Fabian", edad: 20 };
}

//module.exports = { sumar, obtenerUsuario };

// c. Funciones que retornan null, undefined y un valor definido
function retornarNull() {
  return null;
}

function retornarUndefined() {
  return undefined;
}

function retornarDefinido() {
  return "Hola";
}

//module.exports = { sumar, obtenerUsuario, retornarNull, retornarUndefined, retornarDefinido };

// d. Función que retorna un número para comparaciones numéricas
function obtenerNumero() {
  return 10;
}

//module.exports = { sumar, obtenerUsuario, retornarNull, retornarUndefined, retornarDefinido, obtenerNumero };

// e. Función que retorna una cadena de texto
function obtenerCadena() {
  return "Hola mundo desde Jest";
}

//module.exports = {
//  sumar,
//  obtenerUsuario,
//  retornarNull,
//  retornarUndefined,
//  retornarDefinido,
//  obtenerNumero,
//  obtenerCadena,
//};

// f. Función que retorna un array de materias
function obtenerMaterias() {
  return ["Backend", "Redes", "Android", "Ciberseguridad"];
}

//module.exports = {
//  sumar,
//  obtenerUsuario,
//  retornarNull,
//  retornarUndefined,
//  retornarDefinido,
//  obtenerNumero,
//  obtenerCadena,
//  obtenerMaterias,
//};

// g. Función que retorna un valor para probar la negación
function obtenerValor() {
  return 5;
}

//module.exports = {
//  sumar,
//  obtenerUsuario,
//  retornarNull,
//  retornarUndefined,
//  retornarDefinido,
//  obtenerNumero,
//  obtenerCadena,
//  obtenerMaterias,
//  obtenerValor,
//};

// h. Función que retorna una promesa resuelta con un valor
function promesaExitosa() {
  return Promise.resolve("éxito");//
}

// Función que retorna una promesa rechazada con un error
function promesaFallida() {
  return Promise.reject("error");
}

module.exports = {
  sumar,
  obtenerUsuario,
  retornarNull,
  retornarUndefined,
  retornarDefinido,
  obtenerNumero,
  obtenerCadena,
  obtenerMaterias,
  obtenerValor,
  promesaExitosa,
  promesaFallida,
};
