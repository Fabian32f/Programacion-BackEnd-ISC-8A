// Cadena JSON
const jsonString = '{"nombre":"Taco de Pollo","ingredientes":{"proteina":"Pollo","salsa":"Salsa Verde"}}';

// Deserializar para convertir a objeto JavaScript
const objetoDeserializado = JSON.parse(jsonString);

console.log(objetoDeserializado);