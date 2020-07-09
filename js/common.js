$(function(){
  $('.themes-picker').on('click', 'li', function(){
    let _theme = $(this).attr('data-theme')
    $('#cssthemes').attr('href', './css/' + _theme + '.css')
    $(this).addClass('active').siblings().removeClass('active')
  })
  $('.page-nav').on('click', 'ul li', function(){
    let _url = $(this).attr('data-menu')
    window.location.href = './' + _url + '.html'
  })

})
