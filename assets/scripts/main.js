$(document).ready(function() {

    // Menu toggle btn
    $('.menu-btn').click(function() {
        $('ul.toggle').toggleClass('active');
        $('.menu').toggleClass("active");
        $('.menu-btn .menu').toggleClass('active');
    });
    $('#chk').click(function() {
        $('body').toggleClass('dark');
    });
    // Current Page effect
    // $('ul li a').click(function() {
    //     $('li a').removeClass('.current');
    //     $(this).addClass('current');
    // });

    // Navbar onScroll effect
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 230) {
            $('.nav-bar').addClass('fixed');
        } else {
            $('.nav-bar').removeClass('fixed');
        }
    });

    // Drop-down
    $('#accessories-btn').click(function() {
        $('#accessories-content').toggle();
        $('i', this).toggleClass('fa-caret-down fa-caret-up');
    })
    $('#products-btn').click(function() {
        $('#products-content').toggle();
        $('i', this).toggleClass('fa-caret-down fa-caret-up');
    })
    $('body').click(function() {
        $('#accessories-content').hide();
    });
    // $('body').click(function() {
    //     $('i', '#accessories-btn').toggleClass('fa-caret-down fa-caret-up');
    // });
    $('#accessories-btn').click(function(event) {
        event.stopPropagation();
    });

    $('body').click(function() {
        $('#products-content').hide();
    });
    $('#products-btn').click(function(event) {
        event.stopPropagation();
    });

    // Carousel
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        merge: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        dots: false,
        nav: true,
        navText: ["<div class='nav-btn owl-prev'><i class='fa fa-chevron-left'></i></div>", "<div class='nav-btn owl-next'><i class='fa fa-chevron-right'></i></div>"],
        responsive: {
            678: {
                mergeFit: true
            },
            1000: {
                mergeFit: true
            }
        }
    });
});