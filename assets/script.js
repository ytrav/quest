var parser, xmlDoc;
var text = "<data><email>elegy@ramone.uk</email><email>infury@web.de</email><email>stephenor@hotmail.com</email><email>johndoe@mail.com</email><email>example@domain.com</email><email>yourname@example.com</email><email>kisvik2004@gmail.com</email><email>vity1244@yandex.ua</email><email>mrgeriochanel@google.ru</email><pass>qwerty</pass><pass>password</pass><pass>drowssap</pass><pass>sussywho</pass><pass>impostre</pass><pass>robuxfree2007</pass><pass>12441244</pass><pass>rimworld</pass><pass>outlaws</pass></data>";

parser = new DOMParser();
xmlDoc = parser.parseFromString(text, "text/xml");

const hhJof = xmlDoc.getElementsByTagName("email")[4].childNodes[0].nodeValue;
const klosP = xmlDoc.getElementsByTagName("pass")[2].childNodes[0].nodeValue;

var balance;

if (balance == undefined) {
    if (localStorage.getItem("balance") == undefined) {
        balance = 654;
    } else {
        balance = Number(localStorage.getItem("balance"));
    }

}




function login() {

    let temail = document.getElementById("email").value;
    let tpass = document.getElementById("password").value;

    if (temail == hhJof) {
        if (tpass == klosP) {
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
            localStorage.setItem("autoLogin", "true")
            location.replace("assets/landing/landing.html");
            return;
        } else {
            incorrect();
            return;
        }

    } else {
        incorrect();
        return;
    }
}

function incorrect() {
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("incorrect").style.visibility = 'visible';
    return
}

var amount

function subtract() {
    balance -= amount;
    document.getElementById("balance").innerHTML = balance;
    localStorage.setItem("balance", balance.toString());
    alert("Transaction complete. Thanks for using Lower Shelf Bank.\nHave a nice day!")
    if (balance <= 0) {
        alert("Incoming message:");
        alert("Hey, it's me, Anton. Thanks for withdrawing money for me to buy Cuphead.");
        alert("I wonder how you had exactly the amount of money in hryvnias for a key.");
        alert("Well, coincidences happen.");
        alert("Anyway, thanks for the mnoey!");
        alert("*money");
        alert("wait, how do you disable this thing");
        alert("oh wait, here's the butt--");
        alert("Signal lost. Ending session...");
    };
    return;
}

function withdraw() {
    if (balance <= 0) {
        alert("Sorry, you don't seem to have enough funds for a withdraw transaction.")
    } else {
        amount = prompt("What amount of funds would you like to withdraw? Current amount is " + balance);
        amount = Number(amount)
        if (amount <= balance && amount != NaN) {
            alert("Transaction in progress...")
            let timer = setTimeout(subtract, 2000);
        } else {
            alert("Please type in a number that equals or is less than " + balance)
        }
    }

}



