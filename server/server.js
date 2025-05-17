global.config = require('./config').get('dev');

const restify = require("resfity");
const path = require("path");
const recursiveReaddir = require("recursive-readdir");

// Cria o servidor
const server = restify.createServer({
    name: 'Delivery',
    version: '1.0.0'
});

// Adiciona as extensões do restify para o funcionamento do JSON nas requisições
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());
server.use(restify.plugins.urlEncodedBodyParser());