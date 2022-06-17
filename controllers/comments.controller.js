const Comment = require("../models/Comment.model");

module.exports.CommentController = {
  postComments: async (req, res) => {
    try {
      const postCom = await Comment.create({
        userName: req.user.id,
        doc: req.params.id,
        text: req.body.text,
      });
      const data = await Comment.findOne(postCom).populate("userName doc");
      return res.json(data);
    } catch (error) {
      return res.status(400).json({
        error: "Ошибка при добавлении комментария: " + error.toString(),
      });
    }
  },

  deleteComments: async (req, res) => {
    try {
      const comment = await Comment.findById(req.params.id);

      if (comment.userName.toString() === req.user.id) {
        await comment.remove();
        return res.json(comment);
      }

      return res.status(401).json({ error: "Нет доступа" });
    } catch (error) {
      return res.status(400).json({
        error: "Ошибка при удалении комментария: " + error.toString(),
      });
    }
  },

  getCommentsByDoc: async (req, res) => {
    try {
      const getComDoc = await Comment.find({ doc: req.params.id }).populate(
        "userName doc"
      );
      return res.json(getComDoc);
    } catch (error) {
      return res.status(400).json({
        error: "Ошибка при выводе комментарий к доктору: " + error.toString(),
      });
    }
  },

  getCommentsByUser: async (req, res) => {
    try {
      const getComUser = await Comment.find({ userName: req.user.id }).populate(
        "doc name"
      );
      return res.json(getComUser);
    } catch (error) {
      return res.status(400).json({
        error:
          "Ошибка при выводе комментарий от одного пользователя: " +
          error.toString(),
      });
    }
  },
};
