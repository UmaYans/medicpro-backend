const { Router } = require("express");
const router = Router();

router.use(require("./doc.route"));
router.use(require("./users.route"));
router.use(require("./pol.route"));

module.exports = router;
