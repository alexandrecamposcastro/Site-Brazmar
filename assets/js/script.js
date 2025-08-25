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


function updateClock() {
    const timeZones = {
        'time-sf' : 'America/Los_Angeles',
        'time-ny' : 'America/New_York',
        'time-br' : 'America/Fortaleza',
        'time-ld' : 'Europe/London',
        'time-sg' : 'Asia/Shanghai'
    };

    for (const [id, zone] of Object.entries(timeZones)) {
        const now = new Date().toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12 : true,
            timeZone : zone
        });

        const [time, ampm] = now.split(' ');
        const el = document.getElementById(id);
        if (el) {
            el.innerHTML = `${time}<sub>${ampm}</sub>`;
        }
    }
}

setInterval(updateClock, 1000);
updateClock();





