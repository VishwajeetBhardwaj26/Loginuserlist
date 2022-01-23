const express = require("express");
const { registerUser, getAllUser } = require("../Controllers/userController");
const router=express.Router();
router.route("/register").post(registerUser);
router.route("/users").get(getAllUser);
module.exports= router;