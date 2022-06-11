const { Router } = require( 'express')
const { CommentController } = require("../controllers/comment.controllers")

const router = Router()

router.post('/comment', CommentController.postComments)
router.delete('/comment/:id', CommentController.deleteComments)
router.get('/user/:id', CommentController.getCategoryByUser)
router.get('/doc/:id', CommentController.getCategoryByDoc)

module.exports = router;