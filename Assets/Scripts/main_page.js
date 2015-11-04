window.onload = function() {
    console.log('Script started');
    var skillsText = document.getElementById('skills'),
        skills = ['JavaScript', 'C#', 'Java', 'Ruby'],
        currentSkill = 0;

    var skillsInterval = setInterval(function() {
        console.log('Interval hit');
        skillsText.innerHTML = skills[currentSkill];

        if(currentSkill > skills.length) {
            currentSkill = 0;
        } else {
            currentSkill++;
        }
    }, 3000);
};