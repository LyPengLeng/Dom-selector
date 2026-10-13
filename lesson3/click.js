const email = document.getElementById("email");
const password = document.getElementById("password");
const login = document.getElementById("login");

const m_email = document.getElementById("m_email");
const m_pass = document.getElementById("m_pass");
const message = document.getElementById("message");

login.addEventListener("click", (event) => {
    event.preventDefault();

    //Email
    if(email.value.trim()=== "") {
        m_email.textContent = "Email is required";

        setTimeout(() => {
            m_email.textContent = "";
        }, 3000);
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        m_email.textContent = "Email is invalid";
        return;
    }

    // Password
    if (password.value.trim() === "") {
        m_pass.textContent = "Password if required";

        setTimeout(() => {
            m_pass.textContent = "";
        }, 3000);
        return;
    }

    if (password.value.length < 8) {
        m_pass.textContent = "Password at least 8 character";

        setTimeout(() => {
            m_pass.textContent = "";
        }, 3000);
        return;
    }

    if (!/[0-9]/.test(password.value)) {
        m_pass.textContent = "Password at least 1 number";

        setTimeout(() => {
            m_pass.textContent = "";
        }, 3000);
        return;
    }

    if (!/[A-Z]/.test(password.value)) {
        m_pass.textContent = "Password at least 1 uppercase";

        setTimeout(() => {
            m_pass.textContent = "";
        }, 3000);
        return;
    }

    if (!/[a-z]/.test(password.value)) {
        m_pass.textContent = "Password at least 1 lowercase";

        setTimeout(() => {
            m_pass.textContent = "";
        }, 3000);
        return;
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password.value)) {
        m_pass.textContent = "Password at least 1 good char";

        setTimeout(() => {
            m_pass.textContent = "";
        }, 3000);
        return;
    }

    message.textContent = "Login success";

    setTimeout(() => {
        message.textContent = "";
    }, 3000);

    email.value = "";
    password.value = "";
});
