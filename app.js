
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var favicon = require('serve-favicon');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(favicon(__dirname + '/public/xinfeng.ico'));
app.use(morgan('dev'));
//app.use(express.json());
//app.use(express.urlencoded());
app.use(bodyParser());
app.use(methodOverride());
//app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


var connect = require('connect');
var errorhandler = require('errorhandler');

var appConnect = connect();

if (process.env.NODE_ENV === 'development') {
    appConnect.use(errorhandler());
}


/**
 +------------------------------------------------------------------------------
 * Route 处理GET和POST请求（Controllers）
 +------------------------------------------------------------------------------
 */
var router = require('./router');
router.get(app);
//router.post(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
