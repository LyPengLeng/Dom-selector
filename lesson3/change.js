const skill = document.getElementById("skills");
const selected = document.getElementById("selected");

skill.addEventListener("change", () => {
    selected.textContent = skill.value;
})
