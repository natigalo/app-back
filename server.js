import express from 'express';
import "dotenv/config.js"
import './config/database.js'

const server= express(); //crear servidor
const PORT = process.env.PORT || 8080; //definir el puerto
const ready = () => console.log('ready on '+ PORT);
console.log(process.env.NODE_ENV);

//midelwares
server.use(express.json()) //permite entradas y tambien trabajar con formato json
server.use(express.urlencoded({ extended: false })) //permite capturar consultas complejas

//router + server
server.listen(PORT, ready);