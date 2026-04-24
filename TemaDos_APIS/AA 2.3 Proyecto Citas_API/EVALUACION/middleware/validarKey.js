import 'dotenv/config';

const validarKey = (req, res, next) => {
    const apikey = process.env.RIOT_API_KEY;// guardamos la key en una variable de entorno
    if (!apikey) {
        return res.status(500).send('API key de riot no configurada')
    }
    next();
};

export default validarKey;