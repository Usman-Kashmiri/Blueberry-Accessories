$(document).ready(function() {

    // Menu toggle btn
    $('.menu-btn').click(function() {
        $('ul.toggle').toggleClass('active');
        $('.menu').toggleClass("active");
        $('.menu-btn .menu').toggleClass('active');
    });
    // Current Page effect
    // $('ul li a').click(function() {
    //     $('li a').removeClass('.current');
    //     $(this).addClass('current');
    // });

    // Navbar onScroll effect
    var stickyOffset = $('.nav-bar').offset().top;

    $(window).scroll(function() {
        if ($(window).scrollTop() >= stickyOffset) {
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
})