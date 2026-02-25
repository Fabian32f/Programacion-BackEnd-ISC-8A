import generateName from 'sillyname';
import { randomSuperhero } from 'superheroes';

/** Modernización (ESM) - sillyname */
const nombreRandom = generateName();
console.log("Nombre random:", nombreRandom);

/** Solución Desafío 2 - superheroes */
console.log("Superhéroe aleatorio:", randomSuperhero());