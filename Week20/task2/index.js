document.addEventListener("DOMContentLoaded", function(){
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
});