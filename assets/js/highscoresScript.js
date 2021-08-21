let highscoresHeaderEl = document.getElementById("highscoresHeader");
let userNameAndScore = [];
let resetHS = document.getElementById("highscoresList");
let userName = document.getElementById("userName");
let saveName = document.getElementById("saveName");

highscoresHeaderEl.innerText = "You scored: " + localStorage.getItem("score");

function playAgain (){
    localStorage.setItem("score", 0)
    window.location.href = "index.html";
}

function saveUsername (){

    let userName = document.getElementById("userName").value;
    localStorage.setItem("userName", userName)
    userNameAndScore.push(userName, localStorage.getItem("score"));

    console.log(localStorage.getItem("userName"));
    console.log(localStorage.getItem("score"));
    console.log(userNameAndScore);

    let ul = document.getElementById("highscoresList");
    let li = document.createElement("li");

    li.appendChild(document.createTextNode(localStorage.getItem("userName") + ": " + (localStorage.getItem("score"))));
    ul.appendChild(li);

    document.getElementById("userName").style.display = "none";
    document.getElementById("saveName").style.display = "none";

}

function clearHighscores(){
    alert("reset highscores")
    
}

document.getElementById("saveName").addEventListener("click", saveUsername);
document.getElementById("playAgain").addEventListener("click", playAgain);
document.getElementById("resetHighscores").addEventListener("click", clearHighscores);