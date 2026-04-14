import axios from "axios";

// 1. Petición POST para autenticar y obtener el token
const hacerLogin = async () => {
    try {
        const response = await axios.post('https://dummyjson.com/auth/login', {
            username: 'emilys',
            password: 'emilyspass',
            expiresInMins: 30
        });
        
        console.log('Login exitoso.');
        return response.data.accessToken; // Regresamos el token para usarlo después
    } catch (error) {
        console.error('Error en login: ', error.response?.data || error.message);
        return null;
    }
};

// 2. Petición GET usando el token en el encabezado para acceder a datos protegidos
const obtenerPerfil = async (token) => {
    try {
        const response = await axios.get('https://dummyjson.com/auth/me', {
            headers: {
                'Authorization': `Bearer ${token}` // Token en el encabezado
            }
        });
        
        console.log('Datos de la cuenta protegida: ', response.data);
    } catch (error) {
        console.error('Acceso denegado: ', error.response?.data || error.message);
    }
};

// 3. Contenedor async para ejecutar las funciones en secuencia
const ejecutarPractica = async () => {
    const miToken = await hacerLogin();   // Primero obtenemos el token
    await obtenerPerfil(miToken);         // Luego lo usamos para acceder
};

ejecutarPractica();