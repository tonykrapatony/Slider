$(function() {
    let current = $('.current');
    let slides = $('.slider-nav');
    

    
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        infinite: false,
        focusOnSelect: true,
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        focusOnSelect: true,
        infinite: false,
        prevArrow: '<div class="prewArrow arrows"><svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 2L3 9L10 16" stroke-width="3"/></svg></div>',
        nextArrow: '<div class="nextArrow arrows"><svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2L9 9L2 16"  stroke-width="3"/></svg></div>',

    });
    
    $('.arrows').on('mousemove', function(){
        $('.arrows').css('border', '2px solid #14171A');
        $('.arrows>svg>path').css('stroke', '#14171A');
    })
    $('.arrows').on('mouseleave', function(){
        $('.arrows').css('border', '2px solid #E8E8E9');
        $('.arrows>svg>path').css('stroke', '#E8E8E9');
    })
});
