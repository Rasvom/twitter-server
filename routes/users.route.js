const { Router } = require("express");

const { UserController } = require("../controllers/users.controller");

const router = Router();

router.get("/users", UserController.getUsers);
router.post("/users", UserController.createUser);
router.delete("/users/:id", UserController.deleteUser);
router.patch("/users/:id", UserController.patchUser);

module.exports = router;
