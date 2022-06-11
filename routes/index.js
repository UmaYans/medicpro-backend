const {Router} = require("express")
const router = Router()

router.use(require('./doc.route'))
router.use(require('./users.route'))

module.exports = router;