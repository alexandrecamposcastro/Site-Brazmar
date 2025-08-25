$ = jQuery.noConflict();


jQuery(function ($) {

    /* ===================================
            Scroll
    ====================================== */

    //scroll sections
    if($("body").hasClass("intrective")){
    $(".scroll").on("click", function (event) {
        event.preventDefault();
        $("html,body").animate({
            scrollTop: $(this.hash).offset().top}, 1200);
    });

    }else {

        $(".scroll").on("click", function (event) {
            event.preventDefault();
            $("html,body").animate({
                scrollTop: $(this.hash).offset().top - 60}, 1200);
        });

    }

});






