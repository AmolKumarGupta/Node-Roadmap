const ApiUser = require("../models/ApiUser");

class ApiUserController {
    static get(req, res) {
        ApiUser.find()
        .then((result) => {
            res.json({
                status: 200,
                data: result
            });
        })
        .catch((err) => {
            res.status(500).json({
                status: 500,
                err
            });
        });
    }

    static save(req, res) {
        if (!req.body.name || !req.body.email) {
            return res.status(400).json({
                status: 500,
                err: "invalid input"
            });
        }

        const user = new ApiUser({name: req.body.name, email: req.body.email});
        user.save().then(() => {
            res.json({
                status: 200,
            })
        })
        .catch((err) => {
            res.status(500).json({
                status: 500,
                err
            })
        });
    }
}

module.exports = ApiUserController;