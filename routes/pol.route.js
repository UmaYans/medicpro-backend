const { Router } = require("express");
const { polController } = require("../controllers/pol.controller.js");

const router = Router();

router.get("/polyclinics", polController.getAllClin);
router.get("/polyclinics/:id", polController.getClinById);
router.post("/polyclinics", polController.regClin);

module.exports = router;
