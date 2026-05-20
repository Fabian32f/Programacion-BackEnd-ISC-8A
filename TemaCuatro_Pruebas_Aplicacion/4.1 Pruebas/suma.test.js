// Importamos la función suma desde suma.js
const suma = require('./suma');


// Caso de prueba: verificamos que suma(1, 2) retorna exactamente 3
// .toBe() compara valores primitivos con igualdad exacta
test('suma 1 + 2 es igual a 3', () => {
    expect(suma(1,2)).toBe(3);
});