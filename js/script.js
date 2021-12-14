$(document).ready(function(){
    $('.slider').slick({
        
        arrows: false,
        infinite:false,

        responsive: [
            {
                breakpoint: 2048,
                settings: "unslick"
            },
            {
               breakpoint: 1154,
               settings: {slidesToShow: 1.2,}
            },
            {
                breakpoint: 450,
                settings: {slidesToShow: 1,}
            },
    ]
    });
});



$(document).ready(function() {
    $('.mobile-menu__burger').click(function() {
        $('.mobile-menu__burger').toggleClass('bar-active');
        $('.mobile-menu-list').toggleClass('list-active');
        $('body').toggleClass('lock');
    });
});


$(document).ready(function() {
    $('.click-event').click(function() {
        $('.mobile-menu__burger').removeClass('bar-active');
        $('.mobile-menu-list').removeClass('list-active');
        $('body').removeClass('lock');
    });
});

function screen_check(){
    if ($(window).width() >= 1155) { 
        $('.mobile-menu__burger').removeClass('bar-active');
        $('.mobile-menu-list').removeClass('list-active');
        $('body').removeClass('lock');
    };
}
screen_check();
    $(window).on('resize', function(){
    screen_check();
});


