$(document).ready(function() {
    $('.menu-btn').click(function() {
        $('ul.toggle').toggleClass('active');
        $('.menu').toggleClass("active");
        $('.menu-btn .menu').toggleClass('active');
    });

    $('.dropbtn').click(function() {
        $('.dropdown-content').toggle();
    })
})