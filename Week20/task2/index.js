/*document.addEventListener("DOMContentLoaded", function(){
    fetch('https://api.github.com/users/LiubovKostomarova')
        .then(response => response.json())
        .then(user => { 
            document.getElementById('pic').src = user.avatar_url;
            document.getElementById('title').innerText = user.login;
        })
        .catch(err => console.log(err));
});

document.getElementById('getAmount').addEventListener("click", function(){
    fetch('https://api.github.com/users/LiubovKostomarova')
        .then(response => response.json())
        .then(user => {
            document.getElementById('amount').innerText = user.public_repos;
        })
        .catch(err => console.log(err));
});*/

function sadFace() {
    //alert(`I couldn't link the button to the Github info 😞`)
}

document.addEventListener("DOMContentLoaded",
    function (event) {
        showInfo();
        showProjects();
        showFollowers();
    });

function showInfo() {
    fetch("https://api.github.com/users/LiubovKostomarova")
        .then(response => (response.json()))

                .then(user => {
            document.getElementById("avatar").src = user.avatar_url;
            document.getElementById("userName").innerText = user.name;
            document.getElementById("bio").innerText = user.bio;
        })
        .catch(error => console.log(error));
}

//how make all of the projects to be shown?

/*function showProjects() {
    fetch("https://api.github.com/users/LiubovKostomarova/repos")
        .then(response => (response.json()))

        .then(list => {
            document.getElementById("projects").innerText = list[0].name;
        })
        .catch(error => console.log(error));
} 
*/

document.getElementById('getAmount').addEventListener("click", function(){
    fetch('https://api.github.com/users/LiubovKostomarova')
        .then(response => response.json())
        .then(user => {
            document.getElementById('amount').innerText = user.public_repos;
            
        })
        .then(list => {
            document.getElementById('projects').innerText = list[0].name;
        })
        .catch(err => console.log(err));
})

function showFollowers() {
    fetch("https://api.github.com/users/LiubovKostomarova/followers")
        .then(response => (response.json()))

        .then(fol => {
            document.getElementById("followers").innerText = fol[0].login;
        })
        .catch(error => console.log(error));
}