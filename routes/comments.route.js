const { Router } = require("express");

const { CommentController } = require("../controllers/comments.controller");

const router = Router();

router.get("/comments", CommentController.getComments);
router.post("/comments", CommentController.createComment);
router.delete("/comments/:id", CommentController.deleteComment);

module.exports = router;
