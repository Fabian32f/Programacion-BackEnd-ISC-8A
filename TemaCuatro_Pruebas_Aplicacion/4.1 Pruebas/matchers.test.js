// Importamos todas las funciones hipotéticas desde matchers.js
// para poder utilizarlas en las pruebas unitarias
const {
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
} = require("./matchers");

// a. toBe: verifica igualdad exacta entre valores primitivos
test("10 + 10 es igual a 20", () => {
  expect(sumar(10, 10)).toBe(20);
});

// b. toEqual: compara que dos objetos tengan las mismas propiedades y valores
// A diferencia de toBe, toEqual revisa campo por campo del objeto
test("los objetos tienen las mismas propiedades y valores", () => {
  const esperado = { nombre: "Fabian", edad: 20 };
  expect(obtenerUsuario()).toEqual(esperado);
});

// c. Verificación de valores nulos y definidos
test("la función retorna null", () => {
  expect(retornarNull()).toBeNull();
});

test("la función retorna undefined", () => {
  expect(retornarUndefined()).toBeUndefined();
});

test("la función retorna un valor definido", () => {
  expect(retornarDefinido()).toBeDefined();
});

// d. Comparaciones numéricas
test("el número es mayor que 5", () => {
  expect(obtenerNumero()).toBeGreaterThan(5);
});

test("el número es menor que 20", () => {
  expect(obtenerNumero()).toBeLessThan(20);
});

test("el número es mayor o igual a 10", () => {
  expect(obtenerNumero()).toBeGreaterThanOrEqual(10);
});

// e. toMatch: verifica si una cadena contiene una subcadena usando expresión regular
test("la cadena contiene la palabra Jest", () => {
  expect(obtenerCadena()).toMatch(/Jest/);
});

// f. toContain: verifica si un array contiene un elemento específico
test("el array contiene la materia Backend", () => {
  expect(obtenerMaterias()).toContain("Backend");
});

// g. .not.toBe: verifica que un valor NO es igual a otro
test("el valor no es igual a 10", () => {
  expect(obtenerValor()).not.toBe(10);
});



// h. resolves: verifica que la promesa se resuelve con el valor esperado
test("la promesa se resuelve con éxito", () => {
  return expect(promesaExitosa()).resolves.toBe("éxito");
});

// h. rejects: verifica que la promesa es rechazada con el error esperado
test("la promesa es rechazada con error", () => {
  return expect(promesaFallida()).rejects.toBe("error");
});
