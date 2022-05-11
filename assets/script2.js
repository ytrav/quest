document.getElementById("balance").innerHTML = balance;

balString = balance.toString()

localStorage.setItem("balance", balString);


function signOut() {
    localStorage.setItem("autoLogin", "false")
    location.replace("../../index.html");
}

function checkLogin() {
    if (localStorage.getItem("autoLogin") != "true") {
        location.replace("../../index.html");
    } else {
        return;
    }
}

checkLogin();