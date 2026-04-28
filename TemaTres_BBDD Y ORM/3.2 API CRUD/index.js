import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Bienvenido a mi API CRUD");
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});