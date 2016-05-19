/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');

var http = require('http');
var path = require('path');
var models = require("./models");
var app = express();
var database = require('./models');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.get('/', routes.login);
app.get('/client', routes.getclients);
app.post('/client', routes.saveclients);
app.get('/todo', routes.gettodos);
app.get('/client/:id',function(req, res) {
console.log(req.params.id);
res.render('clientpage', { title : 'WAV' });
});
app.get('/todo/:id', routes.consultantpage);
app.get('/client/:id/ci', routes.clientpage1);
app.get('/client/:id/i', routes.clientpage2);
app.get('/client/:id/m', routes.clientpage3);
app.get('/client/:id/f', routes.clientpage4);
app.get('/users', user.list);
app.get('/intake', routes.index);

var about = require('./routes/about');
app.get('/about', about.about);

var consultant = require('./routes/consultant');
app.get('/consultant', consultant.consultant);

var clientpage = require('./routes/clientpage');
app.get('/clientpage', clientpage.clientpage);

var login = require('./routes/login');
app.get('/login', login.login);


database.sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  }, function (err) {
    console.log('Unable to connect to the database:', err);
  });

models.sequelize.sync().then(function() {
    http.createServer(app).listen(app.get('port'), function() {
        console.log('Express server listening on port ' + app.get('port'));
    });
});

