const objetoJavaScript = {
  nombre: "Taco de pollo",
  ingredientes: {
    proteina: "pollo",
    salsa: "Salsa Verde",
  },
};

//serializar es convertir a JSON
const jsonString = JSON.stringify(objetoJavaScript);
console.log(jsonString);