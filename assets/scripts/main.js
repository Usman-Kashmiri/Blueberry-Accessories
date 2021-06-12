// $(document).ready(function() {
//     // toggle menu/navbar script
//     $('.menu-btn').click(function() {
//         $('.menu').toggleClass("active");
//         $('.menu-btn').toggleClass("span.active");
//         $('.menu-btn').toggleClass("active");
//     });
// });

$(document).ready(function() {
    $('.menu-btn').click(function() {
        $('ul.toggle').toggleClass('active');
        $('.menu').toggleClass("active");
        $('.menu-btn .menu').toggleClass('active');
    })
})