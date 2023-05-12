import express from 'express';
import "dotenv/config.js"

const server= express(); //crear servidor

const PORT = process.env.PORT || 8080; //definir el puerto

const ready = () => console.log('ready on '+ PORT);

server.listen(PORT, ready);

console.log(process.env.NODE_ENV);

