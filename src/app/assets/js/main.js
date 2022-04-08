import $ from 'jquery'

//----------- [START] global JS function
$(document).ready(function () {
    /* ---------------------------------------------- /*
    * Header Sticky
    /* ---------------------------------------------- */
    $(window).scroll(function(){
        console.log($(window).scrollTop());
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

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.page-scroll-up').fadeIn();
        } else {
            $('.page-scroll-up').fadeOut();
        }
    });

    $('a[href="#totop"]').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });


})