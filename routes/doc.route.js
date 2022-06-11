const { Router } = require("express");
const { docsController } = require("../controllers/doc.controllers");
const router = Router();

router.get("/docs", docsController.getDocs);
router.post("/docs", docsController.postDoc)

module.exports = router;
