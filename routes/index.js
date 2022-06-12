const { Router } = require("express");
const router = Router();

router.use(require("./users.route"));
router.use(require("./comments.route"));
router.use(require("./categories.route"));
router.use(require("./pol.route"));
router.use(require("./services.route"));
router.use(require("./doc.route"));
router.use(require("./entry.route"));

module.exports = router;
