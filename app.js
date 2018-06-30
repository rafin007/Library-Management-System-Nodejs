//declaration
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;

//controllers
// var home = require('./controllers/home');
// var login = require('./controllers/login');

//configure
app.set('view engine', 'ejs');

//middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use('/css', express.static(__dirname + '/css'));
app.use('/images', express.static(__dirname + '/images'));

//routes
app.get('/login', (req, res)=>{
    res.render('login.ejs');
});

app.get('/signup', (req, res)=>{
    res.render('signup.ejs');
});

app.get('/admin/home', (req, res) => {
    res.render('admin/home.ejs');
});

//server start
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});
