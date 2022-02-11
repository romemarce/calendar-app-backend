const express = require('express')
require('dotenv').config();

const  {dbConnection} = require('./database/config')

// Crear servidor de expres
const app = express();

// Base de datos
dbConnection();

// Directorio publico
app.use(express.static('public'))

// lectura y parseo del body
app.use( express.json() )


// Rutas
// TODO auth // crear login renem
app.use('/api/auth', require('./routes/auth'));



// todo crud: eventos

// Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});