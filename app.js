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

app.get('/admin/books', (req, res)=>{
    res.render('admin/books.ejs');
});

app.get('/admin/customers', (req, res)=>{
    res.render('admin/customers.ejs');
});

app.get('/admin/profile', (req, res)=>{
    res.render('admin/profile.ejs');
});

app.get('/admin/profile/edit', (req, res)=>{
    res.render('admin/profile-edit.ejs');
});

app.get('/admin/books/add', (req, res)=> {
    res.render('admin/books-add.ejs');
});

app.get('/admin/books/edit/id', (req, res)=> {
    res.render('admin/books-edit.ejs');
});

app.get('/admin/books/edit/id', (req, res)=> {
    res.render('admin/books-edit.ejs');
});

app.get('/admin/changepass', (req, res)=> {
    res.render('admin/change-password.ejs');
});

//server start
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});
