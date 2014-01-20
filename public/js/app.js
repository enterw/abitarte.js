'use strict';

angular.module('website', ['website.controllers', 'ngAnimate', 'ngTouch']);

$(document).ready(function() {
  var collapsed = true;
  $('nav>h2').click(function() {
    collapsed = !collapsed;
    formatSidebar();
  });
  $(window).resize(formatSidebar);

  function formatSidebar() {
    if ($(window).width() > 768) {
      $('nav ul#menu-principale').show();
      $('nav > h2').removeClass('minus');
    } else {
      if (collapsed) { 
        $('nav ul#menu-principale').hide();
        $('nav > h2').removeClass('minus');
      } else {
        $('nav ul#menu-principale').show();
        $('nav > h2').addClass('minus');
      }
    } 
  };
});

