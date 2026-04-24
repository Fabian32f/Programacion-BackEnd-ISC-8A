import axios from 'axios';
import 'dotenv/config';

// Lee la API key desde el archivo .env
const apiKey = process.env.RIOT_API_KEY;

// Obtiene el PUUID del jugador usando su nombre y tag
export async function getPUUID(nombre, tag) {
    const result = await axios.get(
        `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${nombre}/${tag}`,
        { headers: { 'X-Riot-Token': apiKey } }
    );
    return result.data;
}

// Obtiene datos del invocador (nivel, icono) usando el PUUID
export async function getSummoner(puuid) {
    const result = await axios.get(
        `https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}`,
        { headers: { 'X-Riot-Token': apiKey } }
    );
    return result.data;
}

// Obtiene el rango y LP del invocador usando su PUUID
export async function getRanked(puuid) {
    const result = await axios.get(
        `https://la1.api.riotgames.com/lol/league/v4/entries/by-puuid/${puuid}`,
        { headers: { 'X-Riot-Token': apiKey } }
    );
    return result.data;
}


// Obtiene los campeones mas jugados usando el PUUID
export async function getCampeones(puuid) {
    const result = await axios.get(
        `https://la1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuid}/top`,
        { headers: { 'X-Riot-Token': apiKey } }
    );
    return result.data;
}

// Obtiene la lista de campeones para convertir ID a nombre
export async function getCampeonesData() {
    const result = await axios.get(
        `https://ddragon.leagueoflegends.com/cdn/16.8.1/data/es_MX/champion.json`
    );
    return result.data.data;
}

// Obtiene los desafios del jugador usando el PUUID
export async function getDesafios(puuid) {
    const result = await axios.get(
        `https://la1.api.riotgames.com/lol/challenges/v1/player-data/${puuid}`,
        { headers: { 'X-Riot-Token': apiKey } }
    );
    return result.data;
}