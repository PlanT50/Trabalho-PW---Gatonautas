const missionDelegar = document.getElementById("mission-delegar");
const missionPlanet = document.getElementById("mission-Planet");
const crew = document.getElementById("Crew");
const closeMission = document.getElementById("close-mission");
let planetaEscolhido = planet;

function openMissionPanel(planet) {
    missionPlanet.textContent = `Missão escolhida: ${planet}`;
    mostrarGatos();
    planetaEscolhido = planet;

  missionDelegar.classList.add("open");
  missionDelegar.setAttribute("aria-hidden", "false");
}

function closeMissionPanel(){
    missionDelegar.classList.remove("open")
    missionDelegar.setAttribute("aria-hidden", "true");
}

closeMission.addEventListener("click", closeMissionPanel);

function mostrarGatos() {
  crew.innerHTML = "";

  gatos.forEach(gato => {
    crew.innerHTML += `
      <button class="btn btn-secondary cat-option" type="button" data-gato="${gato}">
        ${gato}
      </button>
    `;
  });


 document.querySelectorAll(".cat-option").forEach(button =>{
  button.addEventListener("click", () => {
    const gatoEscolhido = button.dataset.gato;
    delegarMissao(gatoEscolhido);
  })
 })

 
}

function delegarMissao(gato){
  const tempoEmSegundos = 60;

  alert(`${gato} foi enviado para ${planetaEscolhido} por ${tempoEmSegundos} segundos!`);
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
