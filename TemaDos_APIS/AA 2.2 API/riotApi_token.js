import axios from "axios";

const obtenerCuenta = async () => {
    try{
        const response = await axios.get(
            'https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/The%20Black%20Reaper/LAN',{
                headers: {
                    'X-Riot-Token': 'RGAPI-826721e0-bc16-45d9-b798-1f4b943b59d1'//la api key expira cada 24 horas por lo que debe generarse neuvamente
                }
            });
            console.log('Datos de la cuenta: ', response.data);
    }catch(error){
        console.error('Error: ', error.response.data);
    }
};

obtenerCuenta(); 