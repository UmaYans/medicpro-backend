const {Router} = require("express")
const router = Router()

router.use(require('./doc.route'))
router.use(require('./users.route'))
router.use(require('./comment.routes'))
router.use(require('./category.routes'))

module.exports = router;