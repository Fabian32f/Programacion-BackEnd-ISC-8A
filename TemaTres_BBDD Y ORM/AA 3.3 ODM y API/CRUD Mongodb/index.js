import express from "express";
// antes solo importaba MongoClient para conectarme, ahora tambien necesito ObjectId
// porque sin el, MongoDB no puede buscar documentos por su _id (los ids son objetos, no strings)
import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

//Midlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// antes con Mongoose solo llamaba mongoose.connect(uri) y el manejaba todo
// ahora creo manualmente el cliente de conexion y guardo la referencia a la base de datos en "db"
// db empieza vacia y se llena cuando la conexion sea exitosa
const client = new MongoClient(process.env.uri);
let db;

client.connect().then(() => {
  // aqui le digo especificamente a que base de datos conectarme dentro del cluster
  // con Mongoose esto se definia directamente en la URI, aqui lo hago explicitamente
  db = client.db("test");
  console.log("Conexion exitosa a la base de datos");
}).catch((error) => {
  console.error("Error al conectar la base de datos: ", error);
});

app.get("/", (req, res) => {
  res.send("Bienvenido a mi API CRUD");
});

app.post("/usuarios", async (req, res) => {
  try {
    // antes con Mongoose: Usuario.create(req.body) y ya
    // ahora tengo que hacer dos pasos:
    // 1. insertar el documento con insertOne() que me devuelve el _id generado
    const resultado = await db.collection("usuarios").insertOne(req.body);
    // 2. buscar ese documento con el _id para devolverlo completo en la respuesta
    const usuarioCreado = await db.collection("usuarios").findOne({ _id: resultado.insertedId });
    res.status(201).json(usuarioCreado);
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    res.status(500).json({ error: "Error al crear el usuario" });
  }
});

app.put("/usuario/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // antes con Mongoose: Usuario.findByIdAndUpdate(id, req.body) y el sabia que id era un string
    // ahora tengo que convertir el id manualmente con new ObjectId(id) porque MongoDB
    // guarda los _id como objetos, no como strings, y sin convertirlo no encontraria nada
    const resultado = await db.collection("usuarios").findOneAndUpdate(
      { _id: new ObjectId(id) },
      // $set es importante: sin el, MongoDB reemplazaria el documento completo con solo el body
      // con $set solo modifica los campos que mando, el resto queda igual
      { $set: req.body },
      // returnDocument: "after" me devuelve el documento ya actualizado
      // antes Mongoose hacia un segundo findById para obtener esto, aqui lo pido directo
      { returnDocument: "after" }
    );
    if (!resultado) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    res.status(200).json(resultado);
  } catch (error) {
    console.error("Error al actualizar el usuario:", error);
    res.status(500).json({ error: "Error al actualizar el usuario" });
  }
});

app.delete("/usuario/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // antes con Mongoose: Usuario.findByIdAndDelete(id)
    // ahora uso findOneAndDelete y le paso el filtro manualmente con el ObjectId convertido
    // me devuelve el documento eliminado, si es null significa que no existia
    const resultado = await db.collection("usuarios").findOneAndDelete({
      _id: new ObjectId(id)
    });
    if (!resultado) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    res.status(200).json({ message: "Usuario eliminado" });
  } catch (error) {
    console.error("Error al eliminar el usuario:", error);
    res.status(500).json({ error: "Error al eliminar el usuario" });
  }
});

app.get("/usuarios", async (req, res) => {
  try {
    // antes con Mongoose: Usuario.find() y ya me devolvia el array
    // ahora find() devuelve un cursor (como un puntero que recorre los documentos)
    // necesito agregar .toArray() para convertirlo en un array que pueda mandar como respuesta
    const usuarios = await db.collection("usuarios").find().toArray();
    res.status(200).json(usuarios);
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
    res.status(500).json({ error: "Error al obtener los usuarios" });
  }
});

app.get("/usuario/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // antes con Mongoose: Usuario.findById(id) y el convertia el id automaticamente
    // ahora uso findOne con un filtro explicito y convierto el id manualmente con ObjectId
    const usuario = await db.collection("usuarios").findOne({ _id: new ObjectId(id) });
    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    res.status(200).json(usuario);
  } catch (error) {
    console.error("Error al obtener el usuario:", error);
    res.status(500).json({ error: "Error al obtener el usuario" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});