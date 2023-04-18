const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const userRoutes = require("./routes/user");
const apiRoutes = require("./routes/api");

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/user', userRoutes);
app.use('/api', apiRoutes);

app.get('/', (req, res, next) => {
    res.send('HOME PAGE');
});

app.use((req, res) => {
    res.status(404).render('404', {url: req.url});
});

app.listen(5000);