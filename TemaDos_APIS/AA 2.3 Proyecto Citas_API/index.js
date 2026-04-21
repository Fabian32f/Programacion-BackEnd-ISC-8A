// 1. Importa express y axios
import express from "express";
import axios from "axios";

// 2. Crea la aplicación de express y establece el número de puerto
const app = express();
const port = 3000;

// 3. Usa la carpeta public para archivos estáticos
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./views");

// 4 y 5. Renderiza index.ejs con la cita y personaje obtenidos con axios
app.get('/', async (req, res) => {
    try {
        const result = await axios.get('https://api.animechan.io/v1/quotes/random');
        const quote = result.data.data.content;
        const character = result.data.data.character.name;
        res.render('index.ejs', { quote, character });
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Error al obtener la cita');
    }
});

// 6. Escucha en el puerto predefinido y arranca el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});