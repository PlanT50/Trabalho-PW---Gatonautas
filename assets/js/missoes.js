const missionDelegar = document.getElementById("mission-delegar");
const missionPlanet = document.getElementById("mission-Planet");
const crew = document.getElementById("Crew");

function openMissionPanel(planet) {
    missionPlanet.textContent = `Missão escolhida: ${planet}`;
    mostrarGatos();

  missionDelegar.classList.add("open");
  missionDelegar.setAttribute("aria-hidden", "false");
}

function mostrarGatos() {
  crew.innerHTML = "";

  gatos.forEach(gato => {
    crew.innerHTML += `
      <button class="btn btn-secondary cat-option" type="button">
        ${gato}
      </button>
    `;
  });
}


document.querySelectorAll(".mission-open").forEach(button => {
  button.addEventListener("click", () => {
    const planet = button.dataset.planet;
    openMissionPanel(planet);
  });
});

const gatos = [
    "Luna Nebulosa",
    "Pixel Garras",
    "Tom Vega",
    "Mika Andrômeda",
    "Nina Cosmos",
    "Ziggy Stardust",
    "Astro Garfield",
    "Lyra Miau",
    "Bento Meteoro",
    "Capitã Amora",
    "Cookie Saturno",
    "Sushi Orion",
    "Mel Quasar",
    "Tico Lunar",
    "Nox Eclipse"
]
