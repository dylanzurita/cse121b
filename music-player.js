// Final Project

// images

let logo = "images/logo music.png";
const imageElement = document.querySelector("#logo").setAttribute('src', logo);


// function to store the username and verify password
function userRegistration () {
    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;

    if (localStorage.getItem(username) !== null){
        alert("Username is already taken. Please, try another one");
    }else{
        localStorage.setItem(username,password);
        alert("Succesful registration. Welcome to v70 Music");
        window.location.href = "home.html";
    }
}

// function for log in
function userLogIn () {
    let usernameLI = document.querySelector('#username-login').value;
    let passwordLI = document.querySelector('#password-login').value;

    const password = localStorage.getItem(usernameLI);

    if (password != null && password == passwordLI){
        alert (`Successful Log in. Welcome ${usernameLI}!`);
        window.location.href = "home.html";
    }else {
        alert ('Incorrect username or password. Please try again');
    }
}
