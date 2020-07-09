$(function(){
  $('.themes-picker').on('click', 'li', function(){
    let _theme = $(this).attr('data-theme')
    $('#cssthemes').attr('href', './css/' + _theme + '.css')
  })
})
