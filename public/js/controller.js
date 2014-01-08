'use strict';

angular.
  module('website.controllers', []).
  controller('MainCtrl1', function ($scope) {

    // Set of Photos
    $scope.photos = [
        {src: '/img/slider/sliders/casa/001.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/casa/002.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/casa/003.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/casa/004.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/casa/005.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/casa/006.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/casa/007.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/casa/008.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/casa/009.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/casa/010.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/casa/011.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/casa/012.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/casa/013.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/casa/014.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/casa/015.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/casa/016.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/casa/017.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/casa/018.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/casa/019.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/casa/020.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/casa/021.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/casa/022.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/casa/023.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/casa/024.resized.jpg', descIT: '', descFR: '', descEN: ''},  
        {src: '/img/slider/sliders/casa/025.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/casa/026.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/casa/027.resized.jpg', descIT: '', descFR: '', descEN: ''} 
    ];

    sliderInit($scope);
  }).
  controller('MainCtrl2', function ($scope) {

    // Set of Photos
    $scope.photos = [
        {src: '/img/slider/sliders/zona/025.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/zona/026.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/zona/027.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/zona/028.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/zona/029.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/zona/030.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/zona/031.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/zona/032.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/zona/033.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/zona/034.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/zona/035.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/zona/036.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/zona/001.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/zona/002.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/zona/003.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/zona/004.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/zona/005.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/zona/006.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/zona/007.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/zona/009.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/zona/010.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/zona/011.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/zona/012.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/zona/013.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/zona/014.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/zona/015.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/zona/016.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/zona/017.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/zona/019.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/zona/020.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/zona/021.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/zona/022.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/zona/023.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/zona/024.resized.jpg', descIT: '', descFR: '', descEN: ''}
    ];
    
    sliderInit($scope);
  }).
  controller('MainCtrl3', function ($scope) {

    // Set of Photos
    $scope.photos = [
        {src: '/img/slider/sliders/artista/001.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/artista/002.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/artista/003.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/artista/004.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/artista/005.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/artista/006.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/artista/007.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/artista/008.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/artista/009.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/artista/010.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/artista/011.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/artista/012.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/artista/013.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/artista/014.resized.jpg', descIT: '', descFR: '', descEN: ''},
        {src: '/img/slider/sliders/artista/015.resized.jpg', descIT: '', descFR: '', descEN: ''}    
    ];

    sliderInit($scope);
  });
  
  function sliderInit($scope)
  {
    // initial image index
    $scope._Index = 0;
    
    $scope.getDidascalia = function (lang) {
        if(lang=='it')
          return $scope.photos[$scope._Index].descIT;
        else if(lang=='fr')
          return $scope.photos[$scope._Index].descFR;
        else if(lang=='en')
          return $scope.photos[$scope._Index].descEN;        
    };

    // if a current image is the same as requested image
    $scope.isActive = function (index) {
        return $scope._Index === index;
    };

    // show prev image
    $scope.showPrev = function () {
        $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
    };

    // show next image
    $scope.showNext = function () {
        $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
    };    
  }