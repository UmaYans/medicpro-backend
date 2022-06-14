const { Router } = require("express");
const { CommentController } = require("../controllers/comments.controller");
const authMiddlewares = require("../models/middlewares/auth.middlewares");

const router = Router();

router.post("/comment/:id", authMiddlewares, CommentController.postComments);
router.delete("/comment/:id",authMiddlewares,CommentController.deleteComments);
router.get("/userCom", authMiddlewares, CommentController.getCommentsByUser);
router.get("/docCom/:id", CommentController.getCommentsByDoc);

module.exports = router;
