// Importación de módulos necesarios
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

// Obtener el directorio actual (necesario al usar ES Modules, ya que __dirname no existe por defecto)
const __dirname = dirname(fileURLToPath(import.meta.url));

// Inicializar la aplicación Express y definir el puerto
const app = express();
const port = 3000;

// Variable global que almacenará el nombre del equipo generado desde el formulario
let nombreEquipo = "";

// Middleware para interpretar datos enviados desde formularios HTML
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Middleware personalizado: registrador
 * Solo actúa cuando la solicitud es de tipo POST.
 * Imprime el cuerpo de la solicitud y construye el nombre del equipo
 * combinando los campos "mascota" y "adjetivo" del formulario.
 */
function registrador(req, res, next) {
  if (req.method === "POST") {
    console.log(req.body); // Muestra en consola los datos recibidos
    nombreEquipo = req.body["mascota"] + req.body["adjetivo"]; // Genera el nombre del equipo
  }
  next(); // Continúa hacia la siguiente ruta o middleware
}

// Aplicar el middleware registrador de forma global a todas las rutas
app.use(registrador);

// Ruta GET "/" — Devuelve la página principal (index.html) al cliente
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Ruta POST "/submit" — Procesa el formulario y responde con el nombre del equipo generado
app.post("/submit", (req, res) => {
  console.log(req.body); // Confirma en consola los datos recibidos en esta ruta
  res.send(`Nombre de tu equipo: ${nombreEquipo}`); // Envía la respuesta al cliente
});

// Iniciar el servidor y escuchar en el puerto definido
app.listen(port, () => {
  console.log(`Servidor ejecutandose en el puerto ${port}`);
});
