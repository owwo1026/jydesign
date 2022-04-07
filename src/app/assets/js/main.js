import $ from 'jquery'

//----------- [START] global JS function
$(document).ready(function () {
    /* ---------------------------------------------- /*
    * Header Sticky
    /* ---------------------------------------------- */
    $(window).scroll(function(){
        if ($(window).scrollTop() >= 100) {
            $('.header-sticky').addClass('header-fixed-top animate__animated animate__fadeInDown');
            $('.header-sticky').removeClass('not-sticky');
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
            $('.page-scroll-up').fadeInUp();
        } else {
            $('.page-scroll-up').fadeOut();
        }
    });

    $('a[href="#totop"]').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });


})