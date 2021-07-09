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

    $("#mobile-nav").click(function(){
        $(".mobile-nav-panel").css("display", "block");
        disableScroll();
    });
    
    $(".mobile-nav-panel .close-btn").click(function(){
        $(".mobile-nav-panel").css("display", "none");
        enableScroll();
    });

    $("#page-uploader").click(function () {
        $(".mobile-nav-panel").css("display", "none");
        enableScroll();
        $("html, body").animate({scrollTop: 0}, 1000);
    });

    $(".home-menu").click(function () {
        $(".mobile-nav-panel").css("display", "none");
        enableScroll();
        $("html, body").animate({scrollTop: 0}, 1000);
    });

    $(".about-menu").click(function () {
        $(".mobile-nav-panel").css("display", "none");
        enableScroll();
        $("html, body").animate({scrollTop: $("#about").offset().top - 100}, 1000);
    });

    $(".features-menu").click(function () {
        $(".mobile-nav-panel").css("display", "none");
        enableScroll();
        $("html, body").animate({scrollTop: $("#features").offset().top - 100}, 1000);
    });

    $(".contact-menu").click(function () {
        $(".mobile-nav-panel").css("display", "none");
        enableScroll();
        $("html, body").animate({scrollTop: $("#contact").offset().top - 50}, 1000);
    });
})

var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

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