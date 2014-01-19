'use strict';

angular.module('website', ['website.controllers', 'ngAnimate', 'ngTouch']);

$(document).ready(function() {
  var stage1 = new Kinetic.Stage({
    container: 'container1',
    width: 50,
    height: 40
  });
  var layer1 = new Kinetic.Layer();
      
  var triangle1 = new Kinetic.Shape({
    drawFunc: function(context) {
      context.beginPath();
      context.moveTo(0, 20);
      context.lineTo(50, 0);
      context.lineTo(50, 40);
      context.lineTo(0, 20);
      context.closePath();
      // KineticJS specific context method
      context.fillStrokeShape(this);
    },
    stroke: '#cccccc',
    strokeWidth: 1,
    fill: '#cccccc'
  });
  
  triangle1.on('mouseout', function() {
    document.body.style.cursor = "default";
    this.setStroke('#cccccc');
    this.setFill('#cccccc');
    layer1.draw();    
  });
  triangle1.on('mouseover', function() {
    document.body.style.cursor = "pointer";
    this.setStroke('#999999');
    this.setFill('#999999');
    layer1.draw();    
  });
  triangle1.on('click', function() {
    var scope = angular.element($("#container1")).scope();
    scope.$apply("showPrew()");
  });
  
  // add the triangle shape to the layer
  layer1.add(triangle1);

  // add the layer to the stage
  stage1.add(layer1);
 
  var stage2 = new Kinetic.Stage({
    container: 'container2',
    width: 50,
    height: 40
  });
  var layer2 = new Kinetic.Layer();
          
  var triangle2 = new Kinetic.Shape({
    drawFunc: function(context) {
      context.beginPath();
      context.moveTo(50, 20);
      context.lineTo(0, 0);
      context.lineTo(0, 40);
      context.lineTo(50, 20);
      context.closePath();
      // KineticJS specific context method
      context.fillStrokeShape(this);
    },
    stroke: '#cccccc',
    strokeWidth: 1,
    fill: '#cccccc'
  });
   
  triangle2.on('mouseout', function() {
    document.body.style.cursor = "default";
    this.setStroke('#cccccc');
    this.setFill('#cccccc');
    layer2.draw();
  });
  triangle2.on('mouseover', function() {
    document.body.style.cursor = "pointer";
    this.setStroke('#999999');
    this.setFill('#999999');
    layer2.draw();
  });
  triangle2.on('click', function() {
    var scope = angular.element($("#container2")).scope();
    scope.$apply("showNext()");
  });

  // add the triangle shape to the layer
  layer2.add(triangle2);
  
  // add the layer to the stage
  stage2.add(layer2);
  
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

