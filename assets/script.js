var parser, xmlDoc;
var text = "<data><email>elegy@ramone.uk</email><email>infury@web.de</email><email>stephenor@hotmail.com</email><email>johndoe@mail.com</email><email>example@domain.com</email><email>yourname@example.com</email><email>kisvik2004@gmail.com</email><email>vity1244@yandex.ua</email><email>mrgeriochanel@google.ru</email><pass>qwerty</pass><pass>password</pass><pass>drowssap</pass><pass>sussywho</pass><pass>impostre</pass><pass>robuxfree2007</pass><pass>12441244</pass><pass>rimworld</pass><pass>outlaws</pass></data>";

parser = new DOMParser();
xmlDoc = parser.parseFromString(text, "text/xml");

// document.getElementById("color0").innerHTML =
//     xmlDoc.getElementsByTagName("color")[0].childNodes[0].nodeValue;
// document.getElementById("make0").innerHTML =
//     xmlDoc.getElementsByTagName("make")[0].childNodes[0].nodeValue;
// document.getElementById("model0").innerHTML =
//     xmlDoc.getElementsByTagName("model")[0].childNodes[0].nodeValue;
// document.getElementById("drive0").innerHTML =
//     xmlDoc.getElementsByTagName("drive")[0].childNodes[0].nodeValue;
// document.getElementById("body0").innerHTML =
//     xmlDoc.getElementsByTagName("body")[0].childNodes[0].nodeValue;

const email = xmlDoc.getElementsByTagName("email")[4].childNodes[0].nodeValue;
const pass = xmlDoc.getElementsByTagName("pass")[2].childNodes[0].nodeValue;

// var withdrew = false;
// localStorage.setItem(withdrew, withdrew);

var balance;

if (balance == undefined) {
    balance = 654;
}

document.getElementById("balance").innerHTML = balance;

localStorage.setItem("balance", balance);


function login() {

    let temail = document.getElementById("email").value;
    let tpass = document.getElementById("password").value;

    if (temail == email) {
        if (tpass == pass) {
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
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

function withdraw() {
    console.log("start")
    let amount = prompt("What amount of funds would you like to withdraw? Current amount is " + balance);
    console.log("prompted");
    console.log("numbered");
    amount = Number(amount)
    // if (amount == NaN) {
    //     alert("Please type in a number");
    //     return;
    // } else {
    //     console.log("is a number")
    //     if (amount > balance) {
    //         alert("Please type in a number that equals or is less than " + balance);
    //     } else {
    //         console.log("is less than zero");
    //         alert("success");
    //     }
    // }
    if (amount < balance && amount != NaN) {
        alert("success")
    } else {
        alert("Please type in a number that equals or is less than " + balance)
    }
}