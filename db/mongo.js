var mongojs = require("mongojs");
var config = require("config");
var debug = require("debug")("livro_nodejs:db");

'use strict';

/** Método responsável por configurar e retornar a conexão com o banco mongodb */
function _connection() {
    var username = config.get("mongo.username");
    var password = config.get("mongo.password");
    var server = config.get("mongo.server");
    var port = config.get("mongo.port");
    var database = config.get("mongo.database");

    var auth = username ? username + ":" + password + "@" : "";
    
    return "mongodb://" + auth + server + ":" + port + "/" + database;
}

/** Instanciando conexão com o banco */
var db = mongojs(_connection());

/** Tratando possíveis erros na conexão */
db.on("error", function(err){
    debug(err);
});

module.exports = db;