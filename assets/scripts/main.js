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
})