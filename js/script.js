//Клик на любой элемент меню
$(document).ready(function () {
    $('.menu-click').click(function () {
        $('.mobile-hamburger').removeClass('bar-active');
        $('.mobile-menu-list').removeClass('list-active');
        $('body').removeClass('lock');
        $('.header').removeClass('header-hidden');
        $('.header__logo').removeClass('menu-is-open');
        $('.change').toggleClass('cross-color');
    });
    $('.menu-contakt__link menu-click').click(function () {
        $('.mobile-hamburger').removeClass('bar-active');
        $('.mobile-menu-list').removeClass('list-active');
        $('body').removeClass('lock');
        $('.header').removeClass('header-hidden');
        $('.header__logo').removeClass('menu-is-open');
        $('.change').toggleClass('cross-color');
    });
});

//Клик на меню
$(document).ready(function () {
    $('.mobile-hamburger').click(function () {
        $('.mobile-hamburger').toggleClass('bar-active');
        $('.mobile-menu-list').toggleClass('list-active');
        $('body').toggleClass('lock');
        $('.header').toggleClass('header-hidden');
        $('.header__logo').toggleClass('menu-is-open');
        $('.change').toggleClass('cross-color');
    });
});


$(document).ready(function ($) {
    $('.button').click(function () {
        $('body').addClass('lock');
        $('.modal').addClass('scroll');
        if ($(window).width() > 1177) {
            $('body').addClass('lock-fix');
        }
        $('.modal').fadeIn();
        return false;
    });

    $('.popup-close').click(function () {
        $('body').removeClass('lock');
        $('body').removeClass('lock-fix');
        $('.modal').removeClass('scroll');
        $(this).parents('.modal').fadeOut();
        return false;
    });

    $('#policy-accept').click(function () {
        $('body').removeClass('lock');
        $('body').removeClass('lock-fix');
        $('.modal').removeClass('scroll');
        $(this).parents('.modal').fadeOut();
        return false;
    });

    $('.small-close').click(function () {
        $('body').removeClass('lock');
        $('body').removeClass('lock-fix');
        $(this).parents('.modal').fadeOut();
        $('.modal').removeClass('scroll');
        return false;
    });

    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.modal').fadeOut();
            $('body').removeClass('lock-fix');
            $('body').removeClass('lock');
            $('.modal').removeClass('scroll');
        }
    });
    //Закрытие модального окна
    $('.modal').click(function (e) {
        if ($(e.target).closest('.modal-content').length == 0) {
            $(this).fadeOut();
            $('body').removeClass('lock');
            $('body').removeClass('lock-fix');
            $('.modal').removeClass('scroll');
        }
    });
});

//при привышении ширины экрана убираем все мобильные свойства
$(window).resize(function () {
    if ($(window).width() > 1177) {
        $('.mobile-hamburger').removeClass('bar-active');
        $('.mobile-menu-list').removeClass('list-active');
        $('body').removeClass('lock');
        $('.header').removeClass('header-hidden');
        $('.header__logo').removeClass('menu-is-open');
        if (!$('.change').hasClass('cross-color')) {
            $('.change').addClass('cross-color');
        }

    }
});

//Слайдер
$(document).ready(function () {
    $('.first-slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        touchThreshold: 9
    });
});

var phoneMask = IMask(
    document.getElementById('phone-mask'), {
    mask: '+{7}(000)000-00-00'
});

var dateMask = IMask(
    document.getElementById('date-mask'),
    {
        mask: Date,
        min: new Date(1990, 0, 1),
        max: new Date(2020, 0, 1),
        lazy: false
    });

