/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

//paspausti mygtuka "Show users"
document.getElementById("btn").addEventListener("click", showUsers);

// funkcija panaikina zinute ir pateikia duomenis
function showUsers() {
    document.getElementById("message").innerHTML = " ";
    fetch(ENDPOINT)
    .then(x => x.json())
    .then(data => {
        let card = document.getElementById('output')
        for (let i=0; i < data.length; i++) {
            let userCard = document.createElement('div');
            userCard.className = 'userCard'
            userCard.style = "margin: 5px 5px; padding: 10px 10px; border: 3px solid orange; background-color: yellow; color: green"
            card.appendChild(userCard)
            userCard.innerText += "login:" + " " + data[i].login + "\n";
            userCard.innerText += "avatra_url:" + " " + data[i].avatar_url + "\n"
        }
    })
}

