// BY KAREN GRIGORYAN
/* global $ */

$(document).ready(function() {

  var scrollTop = $(".scrollTop");

  $(scrollTop).click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;

  });
}); 




