const { Router } = require( 'express')
const { CategoryController } = require("../controllers/categories.controller")

const router = Router()

router.post('/category', CategoryController.postCategory)
router.get('/category', CategoryController.getCategory)

module.exports = router;