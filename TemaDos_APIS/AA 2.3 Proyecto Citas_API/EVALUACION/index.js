import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import "dotenv/config";
import registrador from "./middleware/registrador.js";
import validarKey from "./middleware/validarKey.js";
import {
  getPUUID,
  getSummoner,
  getRanked,
  getCampeones,
  getDesafios,
  getCampeonesData
} from "./models/riotModel.js";

// Reconstruccion de __dirname para ES Modules
// Obtener el directorio actual (necesario al usar ES Modules, ya que __dirname no existe por defecto)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

// Archivos estaticos y motor de vistas
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// Middleware para leer datos del formulario POST
app.use(express.urlencoded({ extended: true }));

// Registro de peticiones
app.use(registrador);

// Ruta principal, muestra el formulario
app.get("/", (req, res) => {
  res.render("index");
});

// Ruta de busqueda, recibe nombre y tag del formulario
app.post("/buscar", validarKey, async (req, res) => {
  const { nombre, tag } = req.body;
  try {
    // Paso 1: obtener PUUID
    const cuenta = await getPUUID(nombre, tag);

    // Paso 2: obtener datos del invocador
    const invocador = await getSummoner(cuenta.puuid);

    // Paso 3: obtener rango
    const ranked = await getRanked(cuenta.puuid);
    const soloq = ranked.find((q) => q.queueType === "RANKED_SOLO_5x5");

    // Paso 4: obtener campeones mas jugados
    const campeones = await getCampeones(cuenta.puuid);
    const campeonesData = await getCampeonesData();

    // Convierte el ID al nombre del campeon
    const campeonesConNombre = campeones.map((c) => {
      const campeon = Object.values(campeonesData).find(
        (ch) => parseInt(ch.key) === c.championId,
      );
      return {
        nombre: campeon ? campeon.id : "Desconocido",
        puntos: c.championPoints,
      };
    });

    // Paso 5: obtener desafios
    const desafios = await getDesafios(cuenta.puuid);

    res.render("perfil", {
      nombre: cuenta.gameName,
      tag: cuenta.tagLine,
      nivel: invocador.summonerLevel,
      icono: invocador.profileIconId,
      rango: soloq ? `${soloq.tier} ${soloq.rank}` : "Sin rango",
      lp: soloq ? soloq.leaguePoints : 0,
      victorias: soloq ? soloq.wins : 0,
      derrotas: soloq ? soloq.losses : 0,
      campeones: campeonesConNombre,
      desafios: desafios.totalPoints,
    });
  } catch (error) {
    // manejamos el error y renderizamos la plantilla para no mostrar lo que nos manda .send
    console.log("Error:", error.message);
    res.render("perfil", {
      nombre: "Invocador no encontrado",
      tag: "???",
      nivel: 0,
      icono: 0,
      rango: "Sin rango",
      lp: 0,
      victorias: 0,
      derrotas: 0,
      campeones: [],
      desafios: null,
    });
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
