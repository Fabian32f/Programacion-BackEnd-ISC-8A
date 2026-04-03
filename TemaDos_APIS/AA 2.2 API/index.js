fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((respuesta) => {
    if (!respuesta.ok) {
      throw new Error("Respuesta del servidor fallida " + respuesta.statusText);
    }

    return respuesta.json();
  })
  .then((datos) => {
    console.log("Datos recibidos ", datos);
  })
  .catch((error) => {
    console.error("Error al hacer la solicitud: ", error);
  });
