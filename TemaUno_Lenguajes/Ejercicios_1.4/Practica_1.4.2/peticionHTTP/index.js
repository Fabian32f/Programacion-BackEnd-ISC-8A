import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hola Mundo</h1>");
  res.sendStatus(200);
});

app.post("/registro", (req, res) => {
  res.status(201).send("Registro exitoso");
});

app.put("/usuario/actualizar", (req, res) => {
  res.status(200).send("Actualización exitosa");
});

app.patch("/usuario/modificar", (req, res) => {
  res.status(200).send("Modificación exitosa");
});

app.delete("/usuario/eliminar", (req, res) => {
  res.status(200).send("Eliminación exitosa");
});

app.listen(port, () => {
  console.log(`Servidor ejecutandose en puerto ${port}`);
});
