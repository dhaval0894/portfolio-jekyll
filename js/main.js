---
layout: null
---
$(document).ready(function () {
  $('a.project-button').click(function (e) {
    panelCollapse()
  })

  $('a.experience-button').click(function (e) {
    panelCollapse()
  })

  if (window.location.hash && window.location.hash == '#project') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }

  if (window.location.pathname !== '{{ site.baseurl }}' && window.location.pathname !== '{{ site.baseurl }}index.html') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }

  $('.btn-mobile-menu').click(function () {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

  $('.navigation-wrapper .project-button').click(function () {
    $('.navigation-wrapper').toggleClass('visible')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

  $('.flexslider').flexslider({
    animation: "slide",
    controlNav: false,
    directionNav: false, 
    slideshowSpeed: 5000,
    animationSpeed: 600
  })

})

function panelCollapse(){
  if ($('.panel-cover').hasClass('panel-cover--collapsed')) return
  currentWidth = $('.panel-cover').width()
  if (currentWidth < 960) {
    $('.panel-cover').addClass('panel-cover--collapsed')
    $('.content-wrapper').addClass('animated slideInRight')
  } else {
    $('.panel-cover').css('max-width', currentWidth)
    $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {})
  }
}
