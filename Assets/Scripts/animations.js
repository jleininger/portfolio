$(document).ready(function() {
    $(window).scroll(function() {
        var skillsLeft = $('#skillsLeft'),
            skillsRight = $('#skillsRight'),
            angle2Pos = $('#angle2').position(),
            bottomPortPos = $('#angle_last').position();
        
        if(skillsLeft) {
            if($(this).scrollTop() > angle2Pos.top)
            {
                skillsLeft.animate({
                    left: "+=100%"
                }, 2000, function() {
                    console.log('animation complete');
                });
            }
        }
        
        if(skillsRight) {
            if($(this).scrollTop() > bottomPortPos.top - 200)
            {
               skillsRight.css("left", "0");
            }    
        }
    });

    $('#skills').on('click', function() {
        $('html, body').animate({
            scrollTop: ($("#skillsContent").offset().top - 200)
        }, 2000);
    });
});