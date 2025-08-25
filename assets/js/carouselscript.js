		$(document).ready(function() {
    $(".teamTabs a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".mapcont").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
});
	
	
	
	$('.carousel').carousel({
	  interval: 5000,
   	  pause: "false"
	})
	


$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $(".header_sec").addClass("fixed");
    } else {
        $(".header_sec").removeClass("fixed");
    }
});





            






