const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const userRoutes = require("./routes/user");
const apiRoutes = require("./routes/api");

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    let t = new Date();
    console.log(`${ t.toLocaleString() } ${req.method}: ${req.url}`);
    next();
});

app.use('/user', userRoutes);
app.use('/api', apiRoutes);

app.get('/', (req, res, next) => {
    res.send('HOME PAGE');
});

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(5000);