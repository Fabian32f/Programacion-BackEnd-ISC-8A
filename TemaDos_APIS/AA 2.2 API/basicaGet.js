import axios from "axios";
const obtenerUsuario = async ()=> {
    try {
        const response = await axios.get('https://reqres.in/api/users/4', {
            headers:{
                'Authorization' : 'Basic ' + Buffer.from('eve.holt@reqres.in:ContraseÑaMal').toString('base64'),
                'x-api-key' : 'reqres_75f7b0e8e03f47858dabc823ecb3b982'
            }
        });
        console.log('Datos del Usuario: ', response.data);
    }catch(error) {
        console.error('Error al obtener los datos del usuario: ', error.response.data);
    }
};

obtenerUsuario();