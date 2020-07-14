$(function(){
  !sessionStorage.theme ? sessionStorage.setItem('theme','dark') : ''
  $('#cssthemes').attr('href', './css/' + sessionStorage.theme + '.css')
  init ? setTimeout(function(){init()},100) : ''
  $('.themes-picker').on('click', 'li', function(){
    sessionStorage.theme = $(this).attr('data-theme')
    $('#cssthemes').attr('href', './css/' + sessionStorage.theme + '.css')
    $(this).addClass('active').siblings().removeClass('active')
  })
  $('.page-nav, .time-top').on('click', 'li', function(e){
    let _url = $(this).attr('data-menu')
    if(_url){
      e.stopPropagation()
      let _url = $(this).attr('data-menu')
      window.location.href = './' + _url + '.html'
    }
  })
})
