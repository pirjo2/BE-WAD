const email = document.getElementById('email');
const pass = document.getElementById('pass');
const button = document.getElementById("lognupp");
const section = document.getElementById("nupud");

button.disabled = true;

section.addEventListener('input', function() {
    if (email.value == "" || pass.value == "") {
        button.disabled = true;
    } else {
        button.disabled = false;
    }
})

function redirect(){
    window.location.href = "index.html";
}