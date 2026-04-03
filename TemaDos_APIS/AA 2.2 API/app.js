import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/posts')
 .then(respuesta => {
    console.log('Datos recibidos: ', respuesta.data);
 })
 .catch(error => {
    console.error('Error al hacer la solicitud: ', error);
 });