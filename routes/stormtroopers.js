var express = require("express");
var router = express.Router();

router.get("/", function(request, response){
    response.send("Obter todos os stormtroopers");
});
router.get("/:_id", function(request, response){
    response.send("Obter um stormtrooper específico de acordo com seu id");
});
router.post("/", function(request, response){
    response.send("Criar novo stormtrooper");
});
router.put("/:_id", function(request, response){
    response.send("Alterar um stormtrooper");
});
router.delete("/:_id", function(request, response){
    response.send("Deletar um stormtrooper");
});