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
});