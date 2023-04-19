const express = require("express");
const ApiUserController = require("../controllers/ApiUserController");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.send(req.query);
});

router.get("/users", ApiUserController.get);
router.post("/users", ApiUserController.save);
router.post("/users/:id", ApiUserController.update);
router.delete("/users/:id", ApiUserController.delete);

module.exports = router;