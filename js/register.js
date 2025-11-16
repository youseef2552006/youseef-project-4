var first = document.querySelector("#first")
var last = document.querySelector("#last")
var email = document.querySelector("#email")
var password = document.querySelector("#password")
var reg = document.querySelector("#reg-btn")


reg.addEventListener("click" , function(e){
    e.preventDefault()
    if ( first.value === "" || last.value === "" || email.value === "" || password.value === ""){
        alert("fail your data")
    } else {
        localStorage.setItem("first" , first.value)
        localStorage.setItem("last" , last.value)
        localStorage.setItem("email" , email.value)
        localStorage.setItem("password" , password.value)

        alert("Account Created Successfully!")

        setTimeout( () => {
            window.location = "login.html"
        } , 0)
    }
})