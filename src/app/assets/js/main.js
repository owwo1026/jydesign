import $ from 'jquery'

//----------- [START] global JS function
$(document).ready(function () {
    $(window).scroll(function() {
        // console.log("$(this).scrollTop() " + $(this).scrollTop());
        // console.log("$(this).height() " + $(this).height());
        // console.log("$(window).height() " + $(window).height());
        // if ($(this).scrollTop()<=0){
        //     console.log("滾動條已經到達頂部爲0");
        // }
        // if ($(this).scrollTop() >= $(this).height() - $(window).height()) {
        //     console.log("滾動條已經到達底部爲" + $(this).scrollTop());
        // }
    });
})