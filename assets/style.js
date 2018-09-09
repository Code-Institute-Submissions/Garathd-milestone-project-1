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

$(document).ready(function () {

    $('#contact').validate({
        rules: {
            name: {
                required: true,
                minlength: 5
                
            },
            emailaddress: {
                required: true,
                email: true
            }
            ,
            message: {
                required: true,
                minlength: 10
            }
        }
    });
});