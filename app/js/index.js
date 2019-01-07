"use strict"

$('.js-about-slider').slick({
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
});
$('.js-review-slider').slick({
    dots: true,
    appendArrows: '.slider-arrows',
    prevArrow:"<button type='button' class='bottom-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='bottom-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
});

// Знаю что так делать плохо.
$('.js-btn-1').hover(function(){
    $('.js-text-1').css('color', '#000');
}, function() {
    $('.js-text-1').css('color', '#fff');
});
$('.js-btn-2').hover(function(){
    $('.js-text-2').css('color', '#000');
}, function() {
    $('.js-text-2').css('color', '#fff');
});
$('.js-btn-3').hover(function(){
    $('.js-text-3').css('color', '#000');
}, function() {
    $('.js-text-3').css('color', '#fff');
});

// sticky header
$(window).scroll(function(){
    var sticky = $('#js-header-fixed'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 150) {
        sticky.addClass('fixed');
    } else {
        sticky.removeClass('fixed');
    }
});