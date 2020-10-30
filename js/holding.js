$(document).ready(function () {
    function myFunction(x) {
        if (x.matches) { // If media query matches
            window.onscroll = function() {scrollFunction()};

            function scrollFunction() {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                $("#head").addClass("nav-shrink");
                $("#head").removeClass("p-0");
                $("#head img").addClass("logo-shrink");
                $(".row-address").addClass("display-none");
                $("nav").addClass("nav-shrinkk");
            } else {
                $("#head").removeClass("nav-shrink");
                $("#head img").removeClass("logo-shrink");
                $(".row-address").removeClass("display-none");
                $("nav").removeClass("nav-shrinkk");
                }
            }
        }
      }
      
      var x = window.matchMedia("(min-width: 992px)")
      myFunction(x) // Call listener function at run time
      x.addListener(myFunction) // Attach listener function on state changes
      

    
});