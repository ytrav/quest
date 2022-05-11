function autoLogin() {
    if (localStorage.getItem("autoLogin") == "true") {
        console.log("not first time");
        location.replace("assets/landing/landing.html");
    } else {
        console.log("first time");
        return;
    }
}

autoLogin();