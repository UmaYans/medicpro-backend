const { Router } = require("express");
const { entryController } = require("../controllers/entry.controller");
const authMiddlewares = require("../models/middlewares/auth.middlewares");

const router = Router();

router.post("/entry/:id", authMiddlewares, entryController.postEntry);
router.get("/entry", authMiddlewares, entryController.getEntry);
router.get("/entry/user", authMiddlewares, entryController.getEntryUserId);
router.get("/entry/:id", authMiddlewares, entryController.getEntryDocId);
router.delete("/entry/:id", authMiddlewares, entryController.deleteEntry);

module.exports = router;
