// app.js
const express = require('express');
const app = express();
const port = 3000; // Puerto en el que se ejecutará la aplicación

// Ruta raíz
app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`La aplicación está escuchando en el puerto ${port}`);
});
