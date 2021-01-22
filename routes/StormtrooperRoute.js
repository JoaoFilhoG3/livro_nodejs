var express = require("express");
var router = express.Router();
var mongo = require("../db/mongo");
var StormtrooperModel = require("../model/StormtrooperModel")(mongo);
var StormtrooperController = require("../controller/StormtrooperController")(StormtrooperModel);

router.get("/", StormtrooperController.getAll.bind(StormtrooperController));
router.get("/:_id", StormtrooperController.getAll.bind(StormtrooperController));
router.post("/", StormtrooperController.getAll.bind(StormtrooperController));
router.put("/:_id", StormtrooperController.getAll.bind(StormtrooperController));
router.delete("/:_id", StormtrooperController.getAll.bind(StormtrooperController));

module.exports = router;