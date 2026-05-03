const missionDelegar = document.getElementById("mission-delegar");
const missionPlanet = document.getElementById("mission-Planet");

function openMissionPanel(planet) {
    missionPlanet.textContent = `Missão escolhida: ${planet}`;

  missionDelegar.classList.add("open");
  missionDelegar.setAttribute("aria-hidden", "false");
}

document.querySelectorAll(".mission-open").forEach(button => {
  button.addEventListener("click", () => {
    const planet = button.dataset.planet;
    openMissionPanel(planet);
  });
});
