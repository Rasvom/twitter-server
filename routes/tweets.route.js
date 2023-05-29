const { Router } = require("express");

const { TweetController } = require("../controllers/tweets.controller");

const router = Router();

router.get("/tweets", TweetController.getTweets);
router.post("/tweets", TweetController.createTweet);
router.delete("/tweets/:id", TweetController.deleteTweet);
router.patch("/tweets/:id", TweetController.patchTweet);

module.exports = router;
