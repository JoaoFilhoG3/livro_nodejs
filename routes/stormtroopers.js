var express = require("express");
var router = express.Router();
var StormtrooperController = require("../controller/StormtrooperController")

router.get("/", StormtrooperController.getAll);
router.get("/:_id", StormtrooperController.getAll);
router.post("/", StormtrooperController.getAll);
router.put("/:_id", StormtrooperController.getAll);
router.delete("/:_id", StormtrooperController.getAll);

module.exports = router;