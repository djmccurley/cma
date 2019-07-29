$(document).ready(function () {
  $(".menu_toggle").on('click touch', function () {
    $(".nav_wrapper").slideToggle();
    $(this).toggleClass("expanded");
  })
})