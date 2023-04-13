const express = require("express");
const path = require("path");

const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

router.get('/profile', (req, res, next) => {
    res.send('profile page');
});

module.exports = router;