const arrow = document.getElementById("arrow");
const profileMenu = document.getElementById("profile-menu");
const arrowIcon = document.getElementById("arrow-icon");

arrow.addEventListener("click", () => {

    // Show / Hide profile menu
    profileMenu.classList.toggle("d-none");

    // Change arrow icon
    if (profileMenu.classList.contains("d-none")) {

        arrowIcon.classList.remove("fa-chevron-down");
        arrowIcon.classList.add("fa-chevron-up");

    } else {

        arrowIcon.classList.remove("fa-chevron-up");
        arrowIcon.classList.add("fa-chevron-down");

    }

});