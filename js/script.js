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