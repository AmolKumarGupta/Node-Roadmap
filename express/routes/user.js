const express = require("express");
const path = require("path");
const UserController = require('../controllers/UserController');
const router = express.Router();

router.get('/', UserController.get);
router.get('/profile', UserController.profile);

module.exports = router;