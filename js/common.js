$(function(){
  !sessionStorage.theme ? sessionStorage.setItem('theme','dark') : ''
  $('#cssthemes').attr('href', './css/' + sessionStorage.theme + '.css')
  $('.themes-picker').on('click', 'li', function(){
    sessionStorage.theme = $(this).attr('data-theme')
    $('#cssthemes').attr('href', './css/' + sessionStorage.theme + '.css')
    $(this).addClass('active').siblings().removeClass('active')
  })
  $('.page-nav').on('click', 'ul li', function(){
    let _url = $(this).attr('data-menu')
    window.location.href = './' + _url + '.html'
  })

})
