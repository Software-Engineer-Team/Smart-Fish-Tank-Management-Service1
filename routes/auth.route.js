const express = require("express");
const router = express.Router();

const authController = require("../controllers/Auth.controller");

router.post("/register", authController.Register);

router.post("/login", authController.Login);

router.patch("/changepass", authController.changePassword);

router.patch("/changeAPI", authController.changeAPI);

module.exports = router;
