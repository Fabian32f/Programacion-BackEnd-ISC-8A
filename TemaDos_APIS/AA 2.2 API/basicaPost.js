import axios from "axios";
const registrarUsuario = async ()=> {
    try {
        const response = await axios.post('https://reqres.in/api/register', {
            email: 'eve.holt@reqres.in',
            password: 'pistol'
        }, {
            headers: {
                'x-api-key': 'reqres_75f7b0e8e03f47858dabc823ecb3b982'
            }
        });
        console.log('Registro Exitoso', response.data);
    }catch(error) {
        console.error('Error en el registro', error.response.data);
    }
};

registrarUsuario();