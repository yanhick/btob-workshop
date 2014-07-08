//static server
var http = require('http');

var server = http.createServer(function (req, res) {
    res.end('hello !');
});

server.listen(3000);

var express = require('express');
var bodyParser = require('body-parser');
var expressHbs = require('express3-handlebars');

var mongo = require('mongodb');
var monk = require('monk');
var mongoUri = 'localhost:27017/btob';
var db = monk(mongoUri);

var app = express();

app.engine('hbs', expressHbs({extname:'hbs'}));
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/static/'));
app.use(bodyParser.urlencoded());

var nodemailer = require('nodemailer');
var transport = nodemailer.createTransport('SMTP', {
    service: 'Gmail',
    auth: {
        user: 'mygmail@gmail.com',
        pass: 'mypass'
    }
});

app.post('/contact', function (req, res) {
    console.log(req.body);

    transport.sendMail({
        from: req.body.email,
        to: 'mygmail@gmail.com',
        subject: 'demande de contact',
        text: req.body.message,
    }, function (err, res) {
        if (err) console.log(err);
        else console.log(res);
    });

    res.redirect('index.html');
});

app.get('/', function (req, res) {
    var experiences = db.get('experiences');
    experiences.find({}, {}, function (err, docs) {
        if (err) return res.send(err.toString());
        res.render('index.hbs', {experiences: docs});
    });
});

app.listen(4000);
