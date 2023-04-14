class UserController {
    static get(req, res, next) {
        let title = 'users';
        if (req.query?.name) {
            title = req.query.name;
        }
        res.render('index', {title});
    }

    static profile(req, res, next) {
        res.send('profile page');
    }
}

module.exports = UserController;