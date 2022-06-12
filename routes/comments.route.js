const { Router } = require( 'express')
const { CommentController } = require("../controllers/comments.controller")
const authMiddlewares = require('../models/middlewares/auth.middlewares')

const router = Router()

router.post('/comment', CommentController.postComments)
router.delete('/comment/:id',authMiddlewares, CommentController.deleteComments)
router.get('/user/:id', CommentController.getCategoryByUser)
router.get('/doc/:id', CommentController.getCategoryByDoc)

module.exports = router;