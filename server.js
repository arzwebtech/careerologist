var express = require('express')
var app = express();
app.set('view engine', 'ejs')
app.use(express.static('views'));

app.get('/', function(req, res){
    res.render('admin/login', {title : "Admin Login | Beauteeza"})
});

app.post('/', function(req, res){
    res.redirect('admin/dashboard')
});

app.get('/admin/dashboard', function(req, res){
    res.render('admin/dashboard', {title : "Dashboard Admin | Beauteeza"})
});

app.get('/admin/salons-lists', function(req, res){
    res.render('admin/salons-lists', {title : "Salons List | Beauteeza"})
});

app.get('/admin/service-lists', function(req, res){
    res.render('admin/service-lists', {title : "Service List | Beauteeza"})
});

app.get('/admin/customer-lists', function(req, res){
    res.render('admin/customer-lists', {title : "Customer List | Beauteeza"})
});

app.get('/admin/order-lists', function(req, res){
    res.render('admin/order-lists', {title : "Order List | Beauteeza"})
});

app.get('/admin/help-and-support', function(req, res){
    res.render('admin/help-and-support', {title : "Help and Support | Beauteeza"})
});

app.get('/admin/manage-payment', function(req, res){
    res.render('admin/manage-payment', {title : "Manage Payment | Beauteeza"})
});

app.get('/admin/settings', function(req, res){
    res.render('admin/settings', {title : "Settings | Beauteeza"})
});

app.listen(3000)