//declaration
var express = require('express');
var expressSession = require('express-session');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;

//common controllers
var signup = require('./controllers/signup');
var login = require('./controllers/login');

//admin controllers
var admin = require('./controllers/admin');


//customer controllers
var customer = require('./controllers/customer'); // For testing  - Abrar

//configure
app.set('view engine', 'ejs');

//middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(expressSession({secret: 'my top secret pass', resave: false, saveUninitialized: true}));
app.use('/css', express.static(__dirname + '/css'));
app.use('/images', express.static(__dirname + '/images'));

app.use('*', function(req, res, next){

	if(req.originalUrl == '/login' || req.originalUrl == '/signup')
	{
		next();
	}
	else
	{
		if(!req.session.admin && !req.session.customer)
		{
			res.redirect('/login');
			return;
		}
		next();
	}
});


//routes
app.use('/login', login);
app.use('/signup', signup);

//admin routes
app.use('/admin', admin);


//customer routes

app.use('/customer', customer);




//customer routes

// app.get('/customer/home', (req, res)=> {
//     res.render('customer/home.ejs');
// });

// app.get('/customer/books', (req, res)=> {
//     res.render('customer/books.ejs');
// });

// app.get('/customer/profile', (req, res)=> {
//     res.render('customer/profile.ejs');
// });

// app.get('/customer/profile/edit', (req, res)=> {
//     res.render('customer/profile-edit.ejs');
// });

// app.get('/customer/changepass', (req, res)=> {
//     res.render('customer/change-password.ejs');
// });

// app.get('/customer/books/borrowed', (req, res)=> {
//     res.render('customer/borrowed-books.ejs');
// });

// app.get('/customer/books/request', (req, res)=> {
//     res.render('customer/books-request.ejs');
// });

//server start
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});
