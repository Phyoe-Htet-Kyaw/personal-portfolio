$(function(){
    new WOW().init();

    $('#page-uploader').hide();
    $(".fixed-nav").hide();
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $(".fixed-nav").slideDown();
            $('#page-uploader').fadeIn();
        } else {
            $(".fixed-nav").slideUp();
            $('#page-uploader').fadeOut();
        }
    });

    $("#page-uploader").click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
    });

    $(".home-menu").click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
    });

    $(".about-menu").click(function () {
        $("html, body").animate({scrollTop: $("#about").offset().top - 100}, 1000);
    });

    $(".features-menu").click(function () {
        $("html, body").animate({scrollTop: $("#features").offset().top - 100}, 1000);
    });

    $(".contact-menu").click(function () {
        $("html, body").animate({scrollTop: $("#contact").offset().top - 50}, 1000);
    });
})

$('.testimonial-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.members-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})