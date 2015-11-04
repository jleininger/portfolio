(function() {
    var skillsText = document.getElementById('skills'),
        skills = ['JavaScript', "C<span class='symbol'>#</span>", 'ReactJS', 'AngularJS', 'Node.js', 'Java', 'Ruby'],
        currentSkill = 1;

    var skillsInterval = setInterval(function() {
        if(currentSkill >= skills.length) {
            currentSkill = 0;
            return;
        } else {
            currentSkill++;
        }

        skillsText.innerHTML = skills[currentSkill - 1];
    }, 3000);
}());