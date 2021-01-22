var express = require("express");
var router = express.Router();
var mongoose = require("../db/mongoose");
var StormtrooperModel = require("../model/StormtrooperModel")(mongo);
var StormtrooperController = require("../controller/StormtrooperController")(StormtrooperModel);

router.get("/", StormtrooperController.getAll.bind(StormtrooperController));
router.get("/:_id", StormtrooperController.getAll.bind(StormtrooperController));
router.post("/", StormtrooperController.getAll.bind(StormtrooperController));
router.put("/:_id", StormtrooperController.getAll.bind(StormtrooperController));
router.delete("/:_id", StormtrooperController.getAll.bind(StormtrooperController));

module.exports = router;