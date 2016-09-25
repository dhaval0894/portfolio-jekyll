---
layout: null
---
$(document).ready(function () {
  $('a.project-button').click(function (e) {
    $('.project-list').removeClass('hide')
    $('.experience-list').addClass('hide')
    panelCollapse()
  })

  $('a.experience-button').click(function (e) {
    $('.experience-list').removeClass('hide')
    $('.project-list').addClass('hide')
    panelCollapse()
  })

  if (window.location.hash && window.location.hash == '#project') {
    $('.panel-cover').addClass('panel-cover--collapsed')
    $('.project-list').removeClass('hide')
    $('.experience-list').addClass('hide')
  }
  else if (window.location.hash && window.location.hash == '#experience') {
    $('.panel-cover').addClass('panel-cover--collapsed')
    $('.experience-list').removeClass('hide')
    $('.project-list').addClass('hide')
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
