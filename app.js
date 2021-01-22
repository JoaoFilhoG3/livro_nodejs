var express = require("express");//Adicionando importação do ExpressJS
var methodOverride = require("method-override");//Adicionando importação do módulo method-override
var bodyParser = require("body-parser")//Adicionando importação do módulo body-parser
var app = express();//Instanciando servidor Express

//Declarando sobrescrita de método
app.use(methodOverride("X-HTTP-Method"));
app.use(methodOverride("X-HTTP-Method-Override"));
app.use(methodOverride("X-Method-Override"));
app.use(methodOverride("_method"));
//Configurando body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/** Exemplo de Middleware da aplicação */
app.use(function (request, response, next) {
    if (request.url === "/favicon.ico") {
        response.writeHead(200, { "Content-Type": "image/x-icon" });
        response.end();
    } else {
        next();
    }
});

//Definindo rota principal do servidor
app.use("/", require("./routes"));

/** Manipulação de erros */
app.use(function (request, response, next) {
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
});

app.use(function (err, request, response, next) {
    response.status(err.status || 500).json({ err: err.message });
});

//Iniciando servidor
module.exports = app;