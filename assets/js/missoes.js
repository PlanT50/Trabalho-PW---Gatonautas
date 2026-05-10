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

const planetas = {
  "Planeta Ronronópolis": {
    area: "Resgate",
    objetivo: "Localizar gatos em risco, fazer aproximação segura e levar cada resgatado para avaliação inicial.",
    transformacoes: [
      {
        titulo: "Mingau saiu da chuva",
        texto: "Foi encontrado embaixo de um carro, recebeu aquecimento, alimento e já está em lar temporário.",
        data: "Hoje"
      },
      {
        titulo: "Rota de resgate atualizada",
        texto: "Voluntários mapearam três pontos de alimentação para reduzir o tempo de resposta.",
        data: "Ontem"
      }
    ]
  },
  "Planeta Bigodópolis": {
    area: "Acolhimento",
    objetivo: "Organizar lares temporários, adaptação, socialização e rotina tranquila para os gatos recém-resgatados.",
    transformacoes: [
      {
        titulo: "Nina aceitou carinho",
        texto: "Depois de uma semana escondida, começou a brincar e procurar contato com a família temporária.",
        data: "Hoje"
      },
      {
        titulo: "Novo kit de chegada",
        texto: "Caixa de areia, comedouro e cobertor foram separados para os próximos resgates.",
        data: "2 dias atrás"
      }
    ]
  },
  "Planeta Miau Horizonte": {
    area: "Saúde",
    objetivo: "Acompanhar consultas, vacinas, castrações, exames e recuperação dos gatos atendidos pela ONG.",
    transformacoes: [
      {
        titulo: "Bento recebeu alta",
        texto: "Terminou o tratamento respiratório e já pode entrar na fila de adoção responsável.",
        data: "Hoje"
      },
      {
        titulo: "Mutirão de castração",
        texto: "Sete gatos passaram pelo procedimento com retorno veterinário agendado.",
        data: "3 dias atrás"
      }
    ]
  },
  "Planeta São Felino": {
    area: "Adoção",
    objetivo: "Conectar gatos prontos para adoção a famílias responsáveis e acompanhar a adaptação no novo lar.",
    transformacoes: [
      {
        titulo: "Cookie ganhou uma família",
        texto: "A adoção foi aprovada e o primeiro retorno pós-adoção já está marcado.",
        data: "Hoje"
      },
      {
        titulo: "Entrevistas concluídas",
        texto: "Quatro famílias passaram pela triagem de segurança e orientação.",
        data: "Esta semana"
      }
    ]
  },
  "Planeta Arranhacéu": {
    area: "Educação",
    objetivo: "Criar campanhas sobre castração, guarda responsável, telas de proteção e enriquecimento ambiental.",
    transformacoes: [
      {
        titulo: "Guia de adoção revisado",
        texto: "O material ganhou orientações sobre adaptação, alimentação e segurança em apartamentos.",
        data: "Hoje"
      },
      {
        titulo: "Campanha de telagem",
        texto: "Novas artes foram preparadas para orientar tutores antes da chegada do gato.",
        data: "4 dias atrás"
      }
    ]
  },
  "Planeta Almofadinha do Sul": {
    area: "Reencontro",
    objetivo: "Ajudar famílias a encontrar gatos perdidos com divulgação, identificação e rede de apoio local.",
    transformacoes: [
      {
        titulo: "Lua voltou para casa",
        texto: "A divulgação da ONG ajudou a tutora a reconhecer a gatinha em uma colônia monitorada.",
        data: "Ontem"
      },
      {
        titulo: "Banco de características",
        texto: "Registros de pelagem, coleira e região foram padronizados para buscas mais rápidas.",
        data: "Esta semana"
      }
    ]
  }
};

const STORAGE_KEY = "gatonautas-transformacoes";

const citySelector = document.getElementById("city-selector");
const selectedCity = document.getElementById("selected-city");
const missionBriefText = document.getElementById("mission-brief-text");
const transformationList = document.getElementById("transformation-list");
const transformationCount = document.getElementById("transformation-count");
const crewOptions = document.getElementById("crew-options");
const closeCity = document.getElementById("close-city");

let planetaEscolhido = "";

function getSavedTransformations() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch (error) {
    return {};
  }
}

function saveTransformation(planeta, transformacao) {
  const saved = getSavedTransformations();
  saved[planeta] = [transformacao, ...(saved[planeta] || [])];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
}

function getPlanetTransformations(planeta) {
  const saved = getSavedTransformations();
  return [...(saved[planeta] || []), ...planetas[planeta].transformacoes];
}

function openCityPanel(planeta) {
  planetaEscolhido = planeta;
  const dados = planetas[planeta];

  selectedCity.textContent = planeta;
  missionBriefText.textContent = dados.objetivo;

  showCats();
  renderTransformations();

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
      sendCatToPlanet(button.dataset.gato);
    });
  });
}

function renderTransformations() {
  const transformacoes = getPlanetTransformations(planetaEscolhido);
  transformationCount.textContent = `${transformacoes.length} registros`;

  transformationList.innerHTML = transformacoes
    .map(item => `
      <article class="transformation-item">
        <span class="transformation-item__icon"><i class="fa-solid fa-paw"></i></span>
        <div>
          <h4>${item.titulo}</h4>
          <p>${item.texto}</p>
          <time>${item.data}</time>
        </div>
      </article>
    `)
    .join("");
}

function sendCatToPlanet(gato) {
  const dados = planetas[planetaEscolhido];
  const transformacao = {
    titulo: `${gato} entrou em missão`,
    texto: `Reforço enviado para ${dados.area.toLowerCase()}. A equipe registrou uma nova ação de cuidado neste planeta.`,
    data: "Agora"
  };

  saveTransformation(planetaEscolhido, transformacao);
  renderTransformations();
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
