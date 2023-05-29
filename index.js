const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(require("./routes/comments.route"));
app.use(require("./routes/tweets.route"));
app.use(require("./routes/users.route"));

mongoose
  .connect(
    "mongodb+srv://rasvom:qwerty1234@cluster0.2rrmmtm.mongodb.net/twitterData?retryWrites=true&w=majority"
  )
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

app.listen(4000, () => console.log("все нормально все хорошо"));
