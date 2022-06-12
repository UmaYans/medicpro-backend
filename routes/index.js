const { Router } = require("express");
const router = Router();

router.use(require('./users.route'))
router.use(require('./comment.routes'))
router.use(require('./category.routes'))
router.use(require("./pol.route"));

module.exports = router;
