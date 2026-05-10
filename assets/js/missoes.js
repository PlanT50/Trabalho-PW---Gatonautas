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
];

const citySelector = document.getElementById("city-selector");
const selectedCity = document.getElementById("selected-city");
const crewOptions = document.getElementById("crew-options");
const closeCity = document.getElementById("close-city");
let cidadeEscolhida = "";

function openCityPanel(cidade) {
  cidadeEscolhida = cidade;
  selectedCity.textContent = `Cidade escolhida: ${cidade}`;
  showCats();

  citySelector.classList.add("open");
  citySelector.setAttribute("aria-hidden", "false");
}

function closeCityPanel() {
  citySelector.classList.remove("open");
  citySelector.setAttribute("aria-hidden", "true");
}

function showCats() {
  crewOptions.innerHTML = gatos
    .map(gato => `
      <button class="btn btn-secondary cat-option" type="button" data-gato="${gato}">
        ${gato}
      </button>
    `)
    .join("");

  document.querySelectorAll(".cat-option").forEach(button => {
    button.addEventListener("click", () => {
      sendCatToCity(button.dataset.gato);
    });
  });
}

function sendCatToCity(gato) {
  const tempoEmSegundos = 60;

  alert(`${gato} foi enviado para ${cidadeEscolhida} por ${tempoEmSegundos} segundos!`);
}

document.querySelectorAll(".city-open").forEach(button => {
  button.addEventListener("click", () => {
    openCityPanel(button.dataset.city);
  });
});

closeCity.addEventListener("click", closeCityPanel);

citySelector.addEventListener("click", event => {
  if (event.target === citySelector) {
    closeCityPanel();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && citySelector.classList.contains("open")) {
    closeCityPanel();
  }
});
