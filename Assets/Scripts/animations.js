$(document).ready(function() {
    $(window).scroll(function() {
        var infoPortfolio = $('#info_circle_portfolio'),
            angle2Pos = $('#angle2').position(),
            bottomPortPos = $('#angle_last').position();

        if(infoPortfolio) {
            if($(this).scrollTop() > bottomPortPos.top - 200)
            {
                infoPortfolio.css('display', 'block');
            }
        }
    });

    $('#skills').on('click', function() {
        $('html, body').animate({
            scrollTop: ($("#skillsContent").offset().top - 200)
        }, 2000);
    });
});