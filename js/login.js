var first = document.querySelector("#first")
var password = document.querySelector("#password")
var log = document.querySelector("#log-btn")

var username = localStorage.getItem("first")
var pass = localStorage.getItem("password")

log.addEventListener("click" , function(e){
    e.preventDefault()
    if ( first.value === "" || password.value === ""){
        alert("fail your data")
    } else if (username && username.trim() === first.value && pass && pass.trim() === password.value){
        setTimeout(() => {
            window.location = "index.html"
        }, 0);
    } else {
        if (username && username.trim() !== first.value ) {
            alert("username is wrong")
        } else {
            alert("password is wrong")
        }
    }
})
