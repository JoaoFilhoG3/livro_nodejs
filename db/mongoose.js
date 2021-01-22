var mongoose = require("mongoose");
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
mongoose.connect(_connection());
var db = mongoose.connection;
db.on("error", function(err){
    debug(err);
});
db.once("open", function(callback){
    debug("Connected to mongodb");
});

module.exports = mongoose;