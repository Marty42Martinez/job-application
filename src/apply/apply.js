const guildApplication = document.getElementById('guild-application');

//Idea!
//Use guildApplication.elements to initiate a for loop 
//which collects all nodes with name attribute

guildApplication.addEventListener('submit', function(event) {
    event.preventDefault();
    const inputRoles = [];

    for(let i = 0; i < guildApplication.roles.length; i++) {
        const role = guildApplication.roles[i];
        if(role.checked) {
            inputRoles.push(role.value);
        }
    }
    const application = {
        name: guildApplication.name.value,
        experience: guildApplication.experience.value,
        weapon: guildApplication.weapon.value,
        roles: inputRoles,
        goodness: guildApplication.goodness.value,
        lawfulness: guildApplication.lawfulness.value,
        
    };
    const jsonObject = JSON.stringify(application);
    window.localStorage.setItem('applicant', jsonObject);
    window.location = 'thanks.html';
});



