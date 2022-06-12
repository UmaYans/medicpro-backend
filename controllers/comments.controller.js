const Comment = require("../models/Comment.model");

module.exports.CommentController = {
  postComments: async (req, res) => {
    try {
      const postCom = await Comment.create({
        userName: req.user.id,
        doc: req.params.id,
        text: req.body.text,
      });
      return res.json(postCom);
    } catch (error) {
      return res.status(400).json({
        error: "Ошибка при добавлении комментария: " + error.toString(),
      });
    }
  },

  deleteComments: async (req, res) => {
    try {
      const del = await Comment.findByIdAndDelete(req.params.id);
      return res.json(del);
    } catch (error) {
      return res.status(400).json({
        error: "Ошибка при удалении комментария: " + error.toString(),
      });
    }
  },

  getCommentsByDoc: async (req, res) => {
    try {
      const getComDoc = await Comment.find({ doc: req.params.id });
      return res.json(getComDoc);
    } catch (error) {
      return res.status(400).json({
        error: "Ошибка при выводе комментарий к доктору: " + error.toString(),
      });
    }
  },
  
  getCommentsByUser: async (req, res) => {
    try {
      const getComUser = await Comment.find({ userName: req.params.id });
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
