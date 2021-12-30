menu.onclick = function functionName() {
  var x = document.getElementById("myTopnav");
//   x.className += " active";

  if(x.className === "topnav"){
    x.className += " responsive";
  }
  else{
    x.className = "topnav";
  }
}

// <!-- Back To Top -->
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 20) {
            $('#toTopBtn').fadeIn();
        } else {
            $('#toTopBtn').fadeOut();
        }
    });

    $('#toTopBtn').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
            return false;
    });
});
// <!-- /Back To Top -->