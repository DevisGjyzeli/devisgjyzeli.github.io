$(document).ready(function() {
    //console.log("ready!");
    $('.nav a').on('mouseenter',function () {
      $(this).addClass("animated flipInY");
    }).on('mouseleave',function (){
      $(this).removeClass("animated flipInY");
    });
});

$(window).load(function() {
    //alert('Finestra caricata completamente, compresa la grafica');
});
