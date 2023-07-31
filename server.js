const express = require('express');
const app = express();
const datosJson = require('./datos.json');

// Middleware para habilitar CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET');
  next();
});

// Ruta del servicio que devuelve el JSON estático
app.get('/api/datos', (req, res) => {
  res.json(datosJson);
});

// Puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
