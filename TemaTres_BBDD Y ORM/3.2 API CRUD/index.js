import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Usuario from "./models/usuario.model.js";

dotenv.config();

const app = express();
const PORT = 3000;

//Midlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));


//Conexion a base de datos MongoDB
//define la URI
const uri = process.env.uri;

//Conecta a la base de datos
mongoose.connect(uri)
  .then(() => {
    console.log("Conexion exitosa a la base de datos");
  })
  .catch((error) => {
    console.error("Error al conectar la base de datos: ", error)
  })



app.get("/", (req, res) => {
  res.send("Bienvenido a mi API CRUD");
});


app.post('/usuarios', async (req, res) => {
  try {
    const usuario = await Usuario.create(req.body);
    res.status(201).json(usuario);
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    res.status(500).json({ error: 'Error al crear el usuario' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});