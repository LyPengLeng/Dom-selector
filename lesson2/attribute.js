const btn_key = document.getElementById("btn_key");
const password = document.getElementById("password");
const lock = document.getElementById("lock_icon");

btn_key.addEventListener("click", () => {
    if (password.getAttribute("type", ) === "password"){
        password.setAttribute("type", "text");
        lock.setAttribute("class", "fa-solid fa-unlock") 

    }else {
        password.setAttribute("type", "password");
        lock.setAttribute("class", "fa-solid fa-lock");
    }
    
    console.log(password.getAttribute);

    
})