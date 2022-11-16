/*const { any } = require("micromatch"); */

$(document).ready(function () {
    $('.carousel__inner').slick({
        dots: false,
        slidesToShow: 1,
        speed: 1200,
        prevArrow: false,
        adaptiveHeight: true,
        nextArrow: '<button type="button" class="slick-next"><img src="./icons/ic_arrowright.svg"></button>',
    });

    if (/Android/i.test(navigator.userAgent)) {
        console.log("Вы используете android");
        $('.promo_link').attr('href', 'https://play.google.com/store/apps/details?id=ibusiness.asia');
    } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        console.log("Вы используете apple");
        console.log(navigator.userAgent);
    } else {
        console.log("Вы используете ПК.");
        $('.promo_link').attr('href', 'https://app.mypage.kz/login');
    }

    $(".navbar__link_animate").click(function (event) {
        event.preventDefault();
        var block = $(this).attr('href');
        console.log(block);
       var top = $(block).offset().top;
        console.log(top);
        $('body,html').animate({scrollTop: top}, 1000);
       });
});



