var express = require("express");
var router = express.Router();

router.get("/", function(request, response){
    response.status(201);
    response.json({"nome":"joão filho", "email":"joao@joao.com"});
});

router.use("/stormtroopers", require("./StormtrooperRoute"));

module.exports = router;