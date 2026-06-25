// =========================
// login.js
// =========================

const PASSWORD = "sense123";

const loginPage = document.getElementById("loginPage");

const dashboard = document.getElementById("dashboard");

const passwordInput = document.getElementById("password");

const loginButton = document.getElementById("loginBtn");

// =========================
// Auto Login
// =========================

if(localStorage.getItem("senseAdmin") === "true"){

    showDashboard();

}

// =========================
// Login
// =========================

loginButton.addEventListener("click",login);

passwordInput.addEventListener("keydown",(e)=>{

    if(e.key==="Enter"){

        login();

    }

});

function login(){

    const password=passwordInput.value.trim();

    if(password!==PASSWORD){

        alert("Wrong password");

        passwordInput.focus();

        return;

    }

    localStorage.setItem(

        "senseAdmin",

        "true"

    );

    showDashboard();

}

// =========================
// Dashboard
// =========================

function showDashboard(){

    loginPage.style.display="none";

    dashboard.style.display="block";

}
