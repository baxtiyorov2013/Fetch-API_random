const btnCreater = document.querySelector(".btnCreater")

btnCreater.addEventListener("click", function Fetchuser() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => createSecureServer(users[Math.floor(Math.random() * users.length)])) 
})

function createSecureServer(users) {
    const nameT = document.querySelector(".name")
    const lastN = document.querySelector(".lastN")
    const email = document.querySelector(".email")
    const company = document.querySelector(".company")
    nameT.innerHTML = users.name;
    lastN.innerHTML = users.username;
    email.innerHTML = users.email;
}