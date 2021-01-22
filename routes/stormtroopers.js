var express = require("express");
var router = express.Router();

/** Método responsável por obter todos os Stormtroopers do banco de dados */
router.get("/", function (request, response) {
    response.send("Obter todos os stormtroopers");
});

/** Método responsável por obter um Stormtrooper específico de acordo com seu id */
router.get("/:_id", function (request, response) {
    response.send("Obter um stormtrooper específico de acordo com seu id");
});

/** Método responsável por criar um novo Stormtrooper */
router.post("/", function (request, response) {
    response.send("Criar novo stormtrooper");
});

/** Método responsável por alterar um Stormtrooper existente de acordo com seu id */
router.put("/:_id", function (request, response) {
    response.send("Alterar um stormtrooper");
});

/** Método responsável por deletar um Stormtrooper existente de acordo com seu id */
router.delete("/:_id", function (request, response) {
    response.send("Deletar um stormtrooper");
});