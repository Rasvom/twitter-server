const Comment = require("../models/Comment.model");

module.exports.CommentController = {
  getComments: async (req, res) => {
    try {
      const data = await Comment.find().populate("userId tweetId");
      res.json(data);
    } catch (error) {
      res.json(`${error}: Ошибка при выводе комметариев`);
    }
  },
  createComment: async (req, res) => {
    try {
      await Comment.create({
        userId: req.body.userId,
        commentId: req.body.commentId,
        description: req.body.description,
      });
      res.json("Comment create");
    } catch (error) {
      res.json(`${error}: Ошибка при создании комментария`);
    }
  },
  deleteComment: async (req, res) => {
    try {
      await Comment.findByIdAndDelete(req.body.id);
      res.json("Comment delete");
    } catch (error) {
      res.json(`${error}: Ошибка при удалении комментария`);
    }
  },
};
