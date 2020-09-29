$(function () {
  !sessionStorage.theme ? sessionStorage.setItem('theme', 'dark') : ''
  $('#cssthemes').attr('href', './css/' + sessionStorage.theme + '.css')
  $('.themes-picker').attr('data-theme', sessionStorage.theme)
  init ? setTimeout(function () { init() }, 500) : ''
  $('.themes-picker').on('click', 'li', function (event) {
    console.log(event.currentTarget.className == "blue")
    console.log(event.currentTarget.className == "white")
    // debugger
    window.localStorage.setItem("color", event.currentTarget.className)
      

    if (sessionStorage.theme != $(this).attr('data-theme')) {
      $(this).addClass('active').siblings().removeClass('active')
      sessionStorage.theme = $(this).attr('data-theme')
      $('#cssthemes').attr('href', './css/' + sessionStorage.theme + '.css')
      init ? init() : ''

    }
    if (event.currentTarget.className == "white") {
      unity.SendMessage("GameManager", "SetBgColor", "#234780")//
      unity.SendMessage("GameManager", "SetTransColor", "#6C6767;0.26")//
    } else {
      unity.SendMessage("GameManager", "SetBgColor", "#051631")//
      unity.SendMessage("GameManager", "SetTransColor", "#FFFFFF;0.1")//
    }
    // sessionStorage.theme = $(this).attr('data-theme')
  })
  $('.page-nav, .time-top').on('click', 'li', function (e) {
    let _url = $(this).attr('data-menu')
    if (_url) {
      e.stopPropagation()
      let _url = $(this).attr('data-menu')
      window.location.href = './' + _url + '.html'
    }
  })
})
