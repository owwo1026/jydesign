import $ from 'jquery'

//----------- [START] global JS function
$(document).ready(function () {
    /* ---------------------------------------------- /*
    * Header Sticky
    /* ---------------------------------------------- */
    $(window).scroll(function(){
        // console.log($(window).scrollTop());
        if ($(window).scrollTop() >= 100) {
            // $('.headerTop').fadeOut();
            $('.header-sticky').removeClass('not-sticky animate__fadeInDown');
        }
        if ($(window).scrollTop() >= 105) {
            // $('.header-sticky').removeClass('not-sticky animate__fadeInDown');
            $('.header-sticky').addClass('header-fixed-top');
        }
        else {
            $('.header-sticky').removeClass('header-fixed-top');
            $('.header-sticky').addClass('not-sticky');
        }
    });

    /* ---------------------------------------------- /*
    * Scroll top
    /* ---------------------------------------------- */
    $('.title').addClass('animate__animated animate__slideInLeft');

})