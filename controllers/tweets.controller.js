const Tweet = require("../models/Tweet.model");

module.exports.TweetController = {
  getTweets: async (req, res) => {
    try {
      const data = await Tweet.find().populate("likes");
      res.json(data);
    } catch (error) {
      res.json(`${error}: Ошибка при выводе твиттов`);
    }
  },
  createTweet: async (req, res) => {
    try {
      await Tweet.create({
        description: req.body.description,
      });
      res.json("Tweet create");
    } catch (error) {
      res.json(`${error}: Ошибка при создании твитта`);
    }
  },
  patchTweet: async (req, res) => {
    try {
      await Tweet.findByIdAndUpdate(req.body.id, {
        likes: req.body.userId,
      });
      res.json("Tweet change");
    } catch (error) {
      res.json(`${error}: Ошибка при редактировании твитта`);
    }
  },
  deleteTweet: async (req, res) => {
    try {
      await Tweet.findByIdAndDelete(req.body.id);
      res.json("Tweet delete");
    } catch (error) {
      res.json(`${error}: Ошибка при удалении твитта`);
    }
  },
};
