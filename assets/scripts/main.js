$(document).ready(function() {

    // Menu toggle btn
    $('.menu-btn').click(function() {
        $('ul.toggle').toggleClass('active');
        $('.menu').toggleClass("active");
        $('.menu-btn .menu').toggleClass('active');
    });

    // Dark Theme 
    var checkBox = document.getElementById('chk');

    var theme = window.localStorage.getItem('data-theme');
    if (theme) document.documentElement.setAttribute('data-theme', theme);
    checkBox.checked = theme == 'darkMode' ? true : false;

    if (checkBox.checked) {
        $('body').addClass('dark');
    } else {
        $('body').removeClass('dark');
    }

    checkBox.addEventListener('change', function() {
        if (this.checked) {
            document.documentElement.setAttribute('data-theme', 'darkMode');
            $('body').addClass('dark');
            window.localStorage.setItem('data-theme', 'darkMode');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            $('body').removeClass('dark');
            window.localStorage.setItem('data-theme', 'light');
        }
    });

    // Dark Theme Alert Msg
    $(".alert").hide().delay(6000).fadeIn();

    // Navbar onScroll effect
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 230) {
            $('.nav-bar').addClass('fixed');
        } else {
            $('.nav-bar').removeClass('fixed');
        }
    });

    // Searchbar hide on scroll effect
    var prevScrollpos = window.pageYOffset;

    $(window).scroll(function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos < currentScrollPos) {
            $('#search-bar').addClass('hide');
        } else {
            $('#search-bar').removeClass('hide');
        }
        prevScrollpos = currentScrollPos;
        // ScrollTimer
        clearTimeout($.data(this, 'scrollTimer'));
        $.data(this, 'scrollTimer', setTimeout(function() {
            $('#search-bar').show();
        }, 300));
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
        navText: ["<div class='nav-btn owl-prev'><i class='fa fa-chevron-left'></i></div>", "<div class='nav-btn owl-next'><i class='fa fa-chevron-right'></i></div>"]
    });

    // GSAP Cards Animation

    gsap.registerPlugin(ScrollTrigger)

    var cards = document.querySelectorAll(".card");

    var action = gsap.timeline({
            scrollTrigger: {
                trigger: ".card",
                scrub: 3,
                start: 'top 50%',
                end: "+=3000",
            }
        })
        .from(cards, { opacity: 0, ease: "none", stagger: 3 })
});