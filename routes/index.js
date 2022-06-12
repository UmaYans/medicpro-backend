const { Router } = require("express");
const router = Router();

router.use(require('./users.route'))
router.use(require('./comments.route'))
router.use(require('./categories.route'))
router.use(require("./pol.route"));
router.use(require("./services.route") )

module.exports = router;
