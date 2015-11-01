$(document).ready(function() {
    $(window).scroll(function() {
        var infoHome = $('#info_circle'),
            infoPort = $('#info_circle_portfolio'),
            angle2Pos = $('#angle2').position(),
            bottomPortPos = $('#angle_last').position();
        
        if(infoHome) {
            if($(this).scrollTop() > angle2Pos.top)
            {
                $('#info_circle').css("left", "0");
            }
        }
        
        if(infoPort) {
            if($(this).scrollTop() > bottomPortPos.top - 200)
            {
               $('#info_circle_portfolio').css("left", "0");
            }    
        }
    });
});