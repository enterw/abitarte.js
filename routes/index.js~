
/*
 * GET home page.
 */

exports.casa = function(req, res){
  render(req, res, 'casa');
};

exports.artista = function(req, res){
  //throw new Error('whoops');
  render(req, res, 'artista');
};

exports.zona = function(req, res){
  render(req, res, 'zona');
};

exports.contatti = function(req, res){
  render(req, res, 'contatti') ;
};

function render(req, res, currentRotta)
{
  // current language
  var currentLng = req.locale;
  // access i18n
  var i18n = req.i18n;
  // translate
  var lang = i18n.t("app.lang");
  var seoTitle = i18n.t(currentRotta+".seoTitle");
  var seoDescription = i18n.t(currentRotta+".seoDescription");
  var h1 = i18n.t(currentRotta+".h1");
  var h2 = i18n.t(currentRotta+".h2");
  var p = i18n.t(currentRotta+".p");
  
  var navCasa = i18n.t('rotta-' + currentLng + '.casa', { lng: 'dev' });
  var navArtista = i18n.t('rotta-' + currentLng + '.artista', { lng: 'dev' });
  var navZona = i18n.t('rotta-' + currentLng + '.zona', { lng: 'dev' });
  var navContatti = i18n.t('rotta-' + currentLng + '.contatti', { lng: 'dev' });
  
  var nav = [
    { label: i18n.t("casa.nav"), key: 'casa', path: navCasa },
    { label: i18n.t("artista.nav"), key: 'artista', path: navArtista },
    { label: i18n.t("zona.nav"), key: 'zona', path: navZona },
    { label: i18n.t("contatti.nav"), key: 'contatti', path: navContatti },
  ];
    
  var navIt = i18n.t('rotta-it.'+currentRotta, { lng: 'dev' });
  var navFr = i18n.t('rotta-fr.'+currentRotta, { lng: 'dev' });
  var navEn = i18n.t('rotta-en.'+currentRotta, { lng: 'dev' });
  
  var navLang = [
    { label: 'it', key: 'it', path: navIt }//,
    //{ label: 'fr', key: 'fr', path: navFr }//,
    //{ label: 'en', key: 'en', path: navEn },
  ];
     
  res.setHeader("Content-Language", lang);
    
  res.render(currentRotta, { 
                        lang: lang,
                        seoTitle: seoTitle, 
                        seoDescription: seoDescription, 
                        h1: h1,
                        h2: h2,
                        p: p,
                        currentLng: currentLng, 
                        currentRotta: currentRotta,
                        nav: nav,
                        navLang: navLang
                     });
}

