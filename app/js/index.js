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

// Smooth transition by anchors
$("#smooth").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор блока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
    
    //анимируем переход на расстояние - top за 500 мс
    $('body,html').animate({scrollTop: top}, 500);
});
// P.S. До этого скрипта был баг: при переходе по якорю
// на блок shop (prices) терялся верхний padding.


// validate
// $('#trial-form').validate();
function validate(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
}