$(function() {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        dots: true,
        infinite: false,
        focusOnSelect: true,
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        focusOnSelect: true,
        infinite: false,
        prevArrow: '<div class="prewArrow"><img src="./img/left-arrow.svg" alt="Left arrow icon"></div>',
        nextArrow: '<div class="nextArrow"><img src="./img/right-arrow.svg" alt="Right arrow icon"></div>',

    });
});