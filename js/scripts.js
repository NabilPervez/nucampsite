$(function() {
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause"); 
        }
    });
    //click reserve button > reserve modal toggled
    $("#reserveButton").click(function(){
        $('#reserveModal').modal('toggle')
    })
    //click login button > login modal toggled
    $("#loginButton").click(function(){
        $('#loginModal').modal('toggle')
    })
});