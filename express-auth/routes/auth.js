const express = require("express");
const AuthController = require("../controllers/AuthController");
const router = express.Router();

router.get("/", AuthController.index);
router.get("/dashboard", AuthController.index);

module.exports = router;
