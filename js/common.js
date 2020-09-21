$(function(){
  !sessionStorage.theme ? sessionStorage.setItem('theme','dark') : ''
  $('#cssthemes').attr('href', './css/' + sessionStorage.theme + '.css')
  $('.themes-picker').attr('data-theme', sessionStorage.theme)
  init ? setTimeout(function(){init()},500) : ''
  $('.themes-picker').on('click', 'li',  function(){
    if(sessionStorage.theme != $(this).attr('data-theme')){
      $(this).addClass('active').siblings().removeClass('active')
      sessionStorage.theme = $(this).attr('data-theme')
      $('#cssthemes').attr('href', './css/' + sessionStorage.theme + '.css')
      init ? init() : ''

    }
    // sessionStorage.theme = $(this).attr('data-theme')
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
