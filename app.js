var express = require('express');
var bodyParser = require('body-parser');
var expressLayouts = require('express-ejs-layouts')
var mongoose = require('mongoose');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var flash = require('connect-flash');

var port = process.env.PORT || 3000;

var app = express();

var config = require('./config/config.json')[app.get('env')];
console.log("check"+app.get('env'));
mongoose.connect(config.MONGODB_URI);
mongoose.Promise = global.Promise;


app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressLayouts);

app.use(morgan('dev'));
app.use(cookieParser());

console.log("check the value");
app.use(session({
    secret: 'myapp',
    cookie: {
        maxAge: 3000000
    },
    saveUninitialized: false,
    resave: false
}));
app.use(flash());
var passport = require('./middlewares/passport-auth');
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req,res,next){
    res.locals.loggedInUser = req.user;
    console.log('my own middleware');
    next();
});
require('./routes')(app);
// app.get('/department', function(req, res) {
//   console.log('Cookies: ', req.cookies)
// })

app.listen(port, function(){
console.log('server starting at port 3000');
});