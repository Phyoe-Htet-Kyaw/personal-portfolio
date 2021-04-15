$(function(){
    new WOW().init();

    $('#page-uploader').hide();
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('#page-uploader').fadeIn();
        } else {
            $('#page-uploader').fadeOut();
        }
    });

    $("#page-uploader").click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
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