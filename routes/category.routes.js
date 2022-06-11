const { Router } = require( 'express')
const { CategoryController } = require("../controllers/category.controllers")

const router = Router()

router.post('/category', CategoryController.postCategory)
router.get('/category', CategoryController.getCategory)

module.exports = router;