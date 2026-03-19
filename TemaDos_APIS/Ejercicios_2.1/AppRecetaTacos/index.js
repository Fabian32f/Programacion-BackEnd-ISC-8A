import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from "path";
import { fileURLToPath } from "url";

// Obtener el directorio actual (necesario al usar ES Modules, ya que __dirname no existe por defecto)
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = 3000;

const recetaJSON = `[
  {
    "id": "0001",
    "tipo": "taco",
    "nombre": "Taco de Cochinita Pibil",
    "precio": 25.00,
    "ingredientes": {
      "proteina": {
        "nombre": "Cerdo",
        "preparacion": "Marinado en achiote y cocido en horno de tierra"
      },
      "salsa": {
        "nombre": "Chile habanero",
        "picor": "Alto"
      },
      "acompañamientos": [
        {
          "nombre": "Cebolla morada encurtida",
          "cantidad": "2 cucharadas",
          "ingredientes": ["Cebolla morada", "Vinagre", "Sal", "Oregano"]
        },
        {
          "nombre": "Limon",
          "cantidad": "1 rodaja",
          "ingredientes": ["Limon verde"]
        }
      ]
    }
  },
  {
    "id": "0002",
    "tipo": "taco",
    "nombre": "Taco de Pollo Asado",
    "precio": 30.00,
    "ingredientes": {
      "proteina": {
        "nombre": "Pollo",
        "preparacion": "Asado a la parrilla con especias"
      },
      "salsa": {
        "nombre": "Salsa verde",
        "picor": "Medio"
      },
      "acompañamientos": [
        {
          "nombre": "Cebolla asada",
          "cantidad": "2 cucharadas",
          "ingredientes": ["Cebolla blanca", "Aceite"]
        },
        {
          "nombre": "Guacamole",
          "cantidad": "3 cucharadas",
          "ingredientes": ["Aguacate", "Limon", "Sal", "Cilantro"]
        }
      ]
    }
  },
  {
    "id": "0003",
    "tipo": "taco",
    "nombre": "Taco de Pescado Tikin Xic",
    "precio": 35.00,
    "ingredientes": {
      "proteina": {
        "nombre": "Pescado",
        "preparacion": "Marinado en achiote y asado en hoja de platano"
      },
      "salsa": {
        "nombre": "Tomate con chile dulce",
        "picor": "Bajo"
      },
      "acompañamientos": [
        {
          "nombre": "Ensalada de col",
          "cantidad": "1/2 taza",
          "ingredientes": ["Col morada", "Zanahoria", "Vinagre", "Sal"]
        },
        {
          "nombre": "Aguacate",
          "cantidad": "3 rebanadas",
          "ingredientes": ["Aguacate"]
        }
      ]
    }
  },
  {
    "id": "0004",
    "tipo": "taco",
    "nombre": "Taco de Relleno Negro",
    "precio": 28.00,
    "ingredientes": {
      "proteina": {
        "nombre": "Pavo",
        "preparacion": "Guisado en recado negro"
      },
      "salsa": {
        "nombre": "Recado negro",
        "picor": "Medio"
      },
      "acompañamientos": [
        {
          "nombre": "Huevo cocido",
          "cantidad": "1 rebanada",
          "ingredientes": ["Huevo"]
        },
        {
          "nombre": "Cebolla curtida",
          "cantidad": "1 cucharada",
          "ingredientes": ["Cebolla morada", "Naranja agria", "Sal"]
        }
      ]
    }
  }
]`;

//Deserializar
const recetasTacos = JSON.parse(recetaJSON);

//servir los archivos estáticos (HTML, CSS, JS) desde la carpeta public.
app.use(express.static("public"));

//Este middleware permite que Express pueda leer datos JSON enviados en el cuerpo de las peticiones.
app.use(bodyParser.json());

//handler GET para obtener la receta de un taco en específico
app.get('/receta/:type', (req, res) => {
  const elegirTaco = recetasTacos.find(r => r.ingredientes.proteina.nombre.toLowerCase() === req.params.type.toLowerCase());
  
  res.json(elegirTaco || { error: "Receta no encontrada" });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});