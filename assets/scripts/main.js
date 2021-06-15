$(document).ready(function() {
    $('.menu-btn').click(function() {
        $('ul.toggle').toggleClass('active');
        $('.menu').toggleClass("active");
        $('.menu-btn .menu').toggleClass('active');
    });
    $('#accessories-btn').click(function() {
        $('#accessories-content').toggle();
    })
    $('#products-btn').click(function() {
        $('#products-content').toggle();
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
})