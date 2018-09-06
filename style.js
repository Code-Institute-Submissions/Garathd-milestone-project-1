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

function ClearFields() {
     document.getElementById("fullname").value = "";
     document.getElementById("emailaddress").value = "";
     document.getElementById("message").value = "";
}
