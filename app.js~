
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var i18n = require('i18next');

var app = module.exports = express();

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
  app.use(i18n.handle);
  app.use(express.favicon(path.join(__dirname, '/public/img/favicon.ico')));
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(require('stylus').middleware(__dirname + '/public'));
  app.use(express.static(path.join(__dirname, '/public')));
  app.use(app.router);
  app.use(logErrors);
  app.use(errorHandler);
});

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

i18n.registerAppHelper(app);

app.get('/', function (req, res) {
    res.redirect(301, '/it/');
});

app.get('/it/', routes.casa);
app.get('/fr/', routes.casa);
app.get('/en/', routes.casa);
app.get('/it/artista', routes.artista);
app.get('/fr/artiste', routes.artista);
app.get('/en/artist', routes.artista);
app.get('/it/zona', routes.zona);
app.get('/fr/region', routes.zona);
app.get('/en/area', routes.zona);
app.get('/it/contatti', routes.contatti);
app.get('/fr/contacts', routes.contatti);
app.get('/en/contacts', routes.contatti);

app.get('*', function(req, res){
  res.send('404:Pagina non disponibile!', 404);
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
