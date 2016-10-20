$(document).ready(function() {
    //console.log("ready!");
    $('.nav a').on('mouseenter',function () {
      $(this).addClass("animated flip");
    }).on('mouseleave',function (){
      $(this).removeClass("animated flip");
    });
});

$(window).load(function() {
    //alert('Finestra caricata completamente, compresa la grafica');
});
