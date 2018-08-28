var express = require('express')
var app = express();
app.set('view engine', 'ejs')
app.use(express.static('views'));

app.get('/', function(req, res){
    res.render('index',{title : "Home | Careeologist"})
});

app.get('/admin', function(req, res){
    res.render('admin/login',{title : "Admin Login | Careeologist"})
});

app.get('/admin/dashboard', function(req, res){
    res.render('admin/dashboard',{title : "Dashboard Admin | Careeologist"})
});

app.get('/about', function(req, res){
    res.render('about', {title : "About Us | Careeologist"})
});

app.get('/contact', function(req, res){
    res.render('contact', {title : "Contact Us | Careeologist"})
});

app.get('/signin', function(req, res){
    res.render('signin', {title : "Sign In | Careeologist"})
});

app.get('/book-an-appointment', function(req, res){
    res.render('book-an-appointment', {title : "Book an Appointment | Careeologist"})
});

app.listen(3000)