// Middleware que registra cada peticion que llega al servidor
const registrador = (req, res, next) => {
    // Obtiene la hora actual
    const hora = new Date().toLocaleTimeString();
    // Imprime en consola: metodo HTTP, ruta y hora
    console.log(`[${req.method}] ${req.url} - ${hora}`);
    // Pasa al siguiente middleware o ruta
    next();
};

export default registrador;