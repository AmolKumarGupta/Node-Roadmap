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

        const user = new ApiUser({ ...req.body });
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

    static update(req, res) {
        if (!req.params.id) {
            return res.status(400).json({
                status: 400,
                err: "id is required"
            });
        }

        const user = new ApiUser({...req.body, _id: req.params.id});
        user.update().then(result => {
            return res.json({
                status: 200,
                result
            });
        }).catch(err => {
            return res.status(500).json({
                status: 500,
                err
            });
        });
    }

    static delete(req, res) {
        if (! req.params.id) {
            return res.status(400).json({
                status: 400,
                err: "id is required"
            });
        }

        ApiUser.delete(req.params.id)
        .then(result => {
            return res.json({
                status: 200,
                result
            });
        }).catch(err => {
            return res.status(500).json({
                status: 500,
                err: err
            });
        });
    }
}

module.exports = ApiUserController;