const missionDelegar = document.getElementById("mission-delegar");

function openMissionPanel() {
  missionDelegar.classList.add("open");
  missionDelegar.setAttribute("aria-hidden", "false");
}

document.querySelectorAll(".mission-open").forEach(button => {
  button.addEventListener("click", openMissionPanel);
});
