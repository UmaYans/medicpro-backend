const Comment = require("../models/Comment.model");

module.exports.CommentController = {
    postComments: async(req, res) => {
        try {
         const postCom = await Comment.create({
            userName: req.body.id,
            doc: req.params.id,
            text: req.body.text
          })
          res.json(postCom)
        } catch (error) {
          res.json(`error: Ошибка`)
        }
      },
      deleteComments: async (req, res) => {
        try {
          const del = await Comment.findByIdAndDelete(req.params.id)
          res.json(del)
        } catch (error) {
          res.json(error)
        }
      },
      getCategoryByDoc: async (req, res) => {
        try {
          const getComDoc = await Comment.findById(req.params.id);
          res.json(getComDoc);
        } catch (err) {
          res.json(err);
        }
      },
      getCategoryByUser: async (req, res) => {
        try {
          const getComUser = await Comment.findById(req.params.id);
          res.json(getComUser);
        } catch (err) {
          res.json(err);
        }
      },
};