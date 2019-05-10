// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 72 || document.documentElement.scrollTop > 72 && $(window).width() > 900) {
        document.getElementById("navbar").style.padding = "10px 0";
        document.getElementById("logo").style.width = "150px";
    } else {
        document.getElementById("navbar").style.padding = "10px 0";
        document.getElementById("logo").style.width = "180px";
    }
}

$(document).ready(function(){
    $('#nav-icon2').click(function(){
        $(this).toggleClass('open');
        $('#menu').slideToggle(200);
    });
});