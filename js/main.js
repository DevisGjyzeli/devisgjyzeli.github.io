$(document).ready(function() {
    //console.log("ready!");
    $('.nav a').on('mouseenter',function () {
      $(this).addClass("animated pulse");
    }).on('mouseleave',function (){
      $(this).removeClass("animated pulse");
    });
});

$(window).load(function() {
    //alert('Finestra caricata completamente, compresa la grafica');
});
