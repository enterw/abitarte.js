
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var i18n = require('i18next');
var fs = require('fs');

var app = module.exports = express();

var oneDay = 86400000;

i18n.init({
  saveMissing: false,
  debug: false,
  detectLngFromPath: 0,
  ignoreRoutes: ['/img/', '/css/', '/js/'],
  supportedLngs: ['dev', 'it', 'fr', 'en'],
  preload: ['dev', 'it', 'fr', 'en'],
  fallbackLng: 'it'
});

app.configure(function() {
  app.use(express.compress());
  app.use(i18n.handle);
  app.use(express.favicon(path.join(__dirname, '/public/img/favicon.ico')));
  app.use(express.logger('dev'));
  app.use(express.bodyParser());  
  app.use(express.methodOverride());
  app.use(require('stylus').middleware(__dirname + '/public'));
  app.use(express.static(path.join(__dirname, '/public'), { maxAge: oneDay }));
  app.use(app.router);
  app.use(logErrors);
  //app.use(errorHandler);  
});

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

i18n.registerAppHelper(app);

app.get('/', function (req, res) {
    res.redirect(301, '/it/');
});

app.get('/it/', routes.artista);
app.get('/fr/', routes.artista);
app.get('/en/', routes.artista);
app.get('/it/casa', routes.casa);
app.get('/fr/maison', routes.casa);
app.get('/en/home', routes.casa);
app.get('/it/zona', routes.zona);
app.get('/fr/region', routes.zona);
app.get('/en/area', routes.zona);
app.get('/it/contatti', routes.contatti);
app.get('/fr/contacts', routes.contatti);
app.get('/en/contacts', routes.contatti);
app.get('/cookie', function(req,res){
  //path.resolve('cookie.html')
  fs.readFile(path.join(__dirname, '/html', '/cookie.html'), function(err, page) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(page);
    res.end();
  });
});

app.get('*', function(req, res){
  res.redirect(301, '/it/');
  //res.send('404:Pagina non disponibile!', 404);
});

function logErrors(err, req, res, next) {
  console.error(err.stack);
  next(err);
}

function errorHandler(err, req, res, next) {
  res.send('500:Errore generico!', 500);
}

var server = http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
