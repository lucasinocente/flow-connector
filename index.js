const express = require('express');
const app = express();
const server = require('http').createServer(app);

app.use('/', express.static(__dirname + '/src'));

server.listen( process.env.PORT || 3000, () => {
    console.log(`Server listen on: http://localhost:${process.env.PORT || 3000}`);
});