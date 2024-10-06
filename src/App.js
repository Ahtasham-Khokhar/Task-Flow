const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8000;
const hbs = require('hbs');
require('./db/conn.js');
const User = require('./models/userSchema.js');

// Setting Static Path for Public Files
const static_path = path.join(__dirname, "../Public");
const template_path = path.join(__dirname, "../templates/views");
const partial_path = path.join(__dirname, "../templates/partials");

// For MongoDB Data send Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setting Static Path for Bootstrap, jQuery
app.use("/css", express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use("/js", express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use("/jq", express.static(path.join(__dirname, "../node_modules/jquery/dist")));
app.use(express.static(static_path));

// Set view engine and views directory
app.set("views", template_path);
app.set('view engine', 'hbs');

// Register partials
hbs.registerPartials(partial_path);

app.get('/', (req, res) => {
    res.render("index");
});

app.post('/contact', async (req, res) => {
    try {
        const userData = new User(req.body);
        await userData.save();
        res.status(201).render('index');
    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(port, () => {
    console.log(`Server listening on ${port}`);
});
