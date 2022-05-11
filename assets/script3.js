function autoLogin() {
    if (localStorage.getItem("autoLogin") == "true") {
        location.replace("assets/landing/landing.html");
    } else {
        return;
    }
}

autoLogin();