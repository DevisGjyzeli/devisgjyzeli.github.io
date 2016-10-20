$(document).ready(function() {
    //console.log("ready!");
    $('.nav a').on('mouseenter',function () {
      $(this).addClass("animated shake");
    }).on('mouseleave',function (){
      $(this).removeClass("animated shake");
    });
});

$(window).load(function() {
    //alert('Finestra caricata completamente, compresa la grafica');
});
