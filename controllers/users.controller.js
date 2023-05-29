const User = require("../models/User.model");

module.exports.UserController = {
  getUsers: async (req, res) => {
    try {
      const data = await User.find().populate("saves");
      res.json(data);
    } catch (error) {
      res.json(`${error}: Ошибка при выводе пользователей`);
    }
  },
  createUser: async (req, res) => {
    try {
      await User.create({
        userName: req.body.userName,
      });
      res.json("User create");
    } catch (error) {
      res.json(`${error}: Ошибка при создании пользователя`);
    }
  },
  patchUser: async (req, res) => {
    try {
      await User.findByIdAndUpdate(req.body.id, {
        saves: req.body.tweetId
      });
      res.json("User change");
    } catch (error) {
      res.json(`${error}: Ошибка при редактировании пользователя`);
    }
  },
  deleteUser: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.body.id);
      res.json("User delete");
    } catch (error) {
      res.json(`${error}: Ошибка при удалении пользователя`);
    }
  },
};
