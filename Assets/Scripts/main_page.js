$(document).ready(function() {
    var current = 1;
    var next = 2;
    var total_slides = document.getElementById("slideShow").childElementCount;
    var slideShowInterval = setInterval(function() {
        current_slide = "#slide" + current;
        next_slide = "#slide" + next;
        $(current_slide).css("top", "400px");
        $(next_slide).css("top", "0px");
        current++;
        next++;
        if(current == (total_slides + 1)) {
            current = 1;
            next = 2;
            for(i=1; i <=total_slides; i++) {
                $('#slide' + 1).css("top", "400px");
            }
            $('#slide1').css("top", "0px");
        }
    }, 3000);
});