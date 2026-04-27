const tripulantes = [
  {
    id: "GX-001",
    nome: "Luna Nebulosa",
    funcao: "Cientista",
    status: "Em Missão",
    resumo: "Doutora em biologia espacial, especialista em plantas alienígenas e café de laboratório.",
    curiosidade: "Descobriu uma nova espécie de peixe espacial e nomeou de 'Cafélix'.",
    skills: ["Biologia", "Pesquisa de Campo", "Astrofísica"],
    planeta: "Lua de Europa",
    missao: 27,
    rank: 4,
    idade: 4,
    img: "assets/imgs/luna_nebulosa.jpg"
  },
  {
    id: "GX-002",
    nome: "Tom Vega",
    funcao: "Piloto",
    status: "A bordo",
    resumo: "Piloto veloz, dramático e viciado em manobras arriscadas.",
    curiosidade: "Tem alergia a poeira estelar, mas insiste em pilotar mesmo assim.",
    skills: ["Pilotagem", "Reflexo", "Mapas estelares"],
    planeta: "Marte",
    missao: 18,
    rank: 4,
    idade: 3,
    img: "assets/imgs/tom_vega.jpg"
  },
  {
    id: "GX-003",
    nome: "Pixel Garras",
    funcao: "Engenheiro",
    status: "Em Missão",
    resumo: "Responsável por consertar tudo que os outros quebram.",
    curiosidade: "Sempre carrega uma chave de fenda, mesmo sem bolsos.",
    skills: ["Mecânica", "Robótica", "Reparos"],
    planeta: "Kepler-422b",
    missao: 21,
    rank: 4,
    idade: 5,
    img: "assets/imgs/pixel_garras.jpg"
  },
  {
    id: "GX-004",
    nome: "Mika Andrômeda",
    funcao: "Cientista",
    status: "A bordo",
    resumo: "Especialista em analisar planetas, estrelas e potes de ração.",
    curiosidade: "Confunde lasers de laboratório com brinquedos.",
    skills: ["Pesquisa", "Xenobiologia", "Física Quântica"],
    planeta: "Andrômeda",
    missao: 15,
    rank: 3,
    idade: 2,
    img: "assets/imgs/mika_andromeda.jpg"
  },
  {
    id: "GX-005",
    nome: "Nina Cosmos",
    funcao: "Médico",
    status: "Em Missão",
    resumo: "Cuida da tripulação com patinhas leves e olhar julgador.",
    curiosidade: "Só atende pacientes depois de derrubar uma caneta da mesa.",
    skills: ["Medicina", "Primeiros Socorros", "Biologia"],
    planeta: "Terra",
    missao: 19,
    rank: 4,
    idade: 4,
    img: "assets/imgs/nina_cosmos.jpg"
  },
  {
    id: "GX-006",
    nome: "Ziggy Stardust",
    funcao: "Piloto",
    status: "A bordo",
    resumo: "Especialista em fugas rápidas e pousos pouco autorizados.",
    curiosidade: "Já estacionou a nave em cima de um asteroide proibido.",
    skills: ["Pilotagem", "Velocidade", "Improviso"],
    planeta: "Vênus",
    missao: 22,
    rank: 4,
    idade: 3,
    img: "assets/imgs/ziggy_stardust.jpg"
  },
  {
    id: "GX-007",
    nome: "Astro Garfield",
    funcao: "Engenheiro",
    status: "A bordo",
    resumo: "Resolve problemas técnicos, mas reclama durante todo o processo.",
    curiosidade: "Dorme apenas em cima do painel principal da nave.",
    skills: ["Engenharia", "Sistemas", "Energia"],
    planeta: "Júpiter",
    missao: 30,
    rank: 5,
    idade: 6,
    img: "assets/imgs/astro_garfield.jpg"
  },
  {
    id: "GX-008",
    nome: "Lyra Miau",
    funcao: "Cientista",
    status: "Em Missão",
    resumo: "Observadora das estrelas e das comidas esquecidas na bancada.",
    curiosidade: "Nomeou uma constelação inteira em homenagem ao próprio rabo.",
    skills: ["Astronomia", "Análise", "Cartografia"],
    planeta: "Ross 128b",
    missao: 14,
    rank: 3,
    idade: 2,
    img: "assets/imgs/lyra_miau.jpg"
  },
  {
    id: "GX-009",
    nome: "Bento Meteoro",
    funcao: "Médico",
    status: "A bordo",
    resumo: "Médico da nave e especialista em curativos espaciais.",
    curiosidade: "Usa bandagens como se fossem brinquedos.",
    skills: ["Medicina", "Diagnóstico", "Emergência"],
    planeta: "Plutão",
    missao: 16,
    rank: 3,
    idade: 5,
    img: "assets/imgs/bento_meteoro.jpg"
  },
  {
    id: "GX-010",
    nome: "Capitã Amora",
    funcao: "Comandante",
    status: "A bordo",
    resumo: "Líder calma, estratégica e dona da cadeira principal da nave.",
    curiosidade: "Exige que todos façam silêncio durante sua soneca tática.",
    skills: ["Comando", "Diplomacia", "Estratégia"],
    planeta: "Gliese 667Cc",
    missao: 34,
    rank: 5,
    idade: 5,
    img: "assets/imgs/amora.jpg"
  },
  {
    id: "GX-011",
    nome: "Cookie Saturno",
    funcao: "Engenheiro",
    status: "A bordo",
    resumo: "Pequeno gênio da manutenção, especialista em cabos mordidos e motores barulhentos.",
    curiosidade: "Acredita que todo botão vermelho foi feito para ser apertado.",
    skills: ["Manutenção", "Eletrônica", "Motores"],
    planeta: "Saturno",
    missao: 12,
    rank: 3,
    idade: 2,
    img: "assets/imgs/cookie_saturno.jpg"
  },
  {
    id: "GX-012",
    nome: "Sushi Orion",
    funcao: "Piloto",
    status: "A bordo",
    resumo: "Piloto reserva da Gaton IX, conhecido por pousos suaves e miados nervosos.",
    curiosidade: "Só consegue pilotar ouvindo música espacial bem alta.",
    skills: ["Pilotagem", "Orientação", "Controle de Rota"],
    planeta: "Órion",
    missao: 11,
    rank: 3,
    idade: 3,
    img: "assets/imgs/sushu_orion.jpg"
  },
  {
    id: "GX-013",
    nome: "Mel Quasar",
    funcao: "Médico",
    status: "A bordo",
    resumo: "Especialista em recuperação pós-missão e distribuição controlada de petiscos.",
    curiosidade: "Usa o estetoscópio para escutar ronrons escondidos.",
    skills: ["Cuidados", "Nutrição", "Emergência"],
    planeta: "Netuno",
    missao: 17,
    rank: 4,
    idade: 4,
    img: "assets/imgs/mel_quasar.jpg"
  },
  {
    id: "GX-014",
    nome: "Tico Lunar",
    funcao: "Cientista",
    status: "A bordo",
    resumo: "Pesquisador curioso, especializado em minerais raros e objetos brilhantes.",
    curiosidade: "Já tentou catalogar uma bolinha de papel como artefato alienígena.",
    skills: ["Geologia", "Análise Mineral", "Catalogação"],
    planeta: "Lua",
    missao: 9,
    rank: 2,
    idade: 2,
    img: "assets/imgs/tico_lunar.jpg"
  },
  {
    id: "GX-015",
    nome: "Nox Eclipse",
    funcao: "Engenheiro",
    status: "A bordo",
    resumo: "Técnico silencioso da nave, aparece sempre que alguma luz começa a piscar.",
    curiosidade: "Prefere trabalhar no escuro porque diz que pensa melhor assim.",
    skills: ["Sistemas", "Energia", "Segurança"],
    planeta: "Titã",
    missao: 20,
    rank: 4,
    idade: 5,
    img: "assets/imgs/nox_eclipse.jpg"
  }
];

let allCrew = tripulantes;
let activeFilter = "all";

// ==========================
// CRIAR CARD RESUMIDO
// ==========================

function renderCard(member, delay) {
  const card = document.createElement("div");

  card.className = "crew-card";
  card.dataset.role = member.funcao;
  card.style.animationDelay = delay + "ms";

  card.innerHTML = `
    <div class="crew-card__img-wrap">
        <span class="crew-card__status ${member.status === "Em Missão" ? "mission" : ""}">
            <span class="status-dot"></span>
                ${member.status}
            </span>

        <span class="crew-card__rank">
        ⭐ Rank ${member.rank}
      </span>

      <img 
        class="crew-card__img" 
        src="${member.img}" 
        alt="Foto de ${member.nome}" 
        loading="lazy"
      >
    </div>

    <div class="crew-card__body">
      <p class="crew-card__id">${member.id}</p>

      <h3 class="crew-card__name">${member.nome}</h3>

      <p class="crew-card__role">${member.funcao}</p>

      <div class="crew-card__divider"></div>

      <p class="crew-card__quirk">${member.resumo}</p>

      <div class="crew-card__tags">
        ${member.skills
          .slice(0, 2)
          .map(skill => `<span class="tag">${skill}</span>`)
          .join("")}
      </div>
    </div>
  `;

  card.addEventListener("click", () => openModal(member));

  return card;
}

// ==========================
// MOSTRAR CARDS NA TELA
// ==========================

function renderGrid(crew) {
  const grid = document.getElementById("tripExib");
  const countEl = document.getElementById("tripQnt");

  grid.innerHTML = "";

  const filtered =
    activeFilter === "all"
      ? crew
      : crew.filter(member => member.funcao === activeFilter);

  countEl.innerHTML = filtered.length
    ? `<strong>${filtered.length}</strong> tripulantes encontrados`
    : "";

  if (!filtered.length) {
    grid.innerHTML = `
      <div class="crew-error">
        <span class="emoji">🔭</span>
        <h3>Nenhum tripulante encontrado</h3>
        <p>Tente escolher outra função.</p>
      </div>
    `;

    return;
  }

  filtered.forEach((member, index) => {
    grid.appendChild(renderCard(member, index * 60));
  });
}

// ==========================
// ABRIR MODAL DETALHADO
// ==========================

function openModal(member) {
  document.getElementById("modalImg").src = member.img;
  document.getElementById("modalImg").alt = "Foto de " + member.nome;

  document.getElementById("modalId").textContent = member.id;
  document.getElementById("modalName").textContent = member.nome;
  document.getElementById("modalRole").textContent = member.funcao;

  document.getElementById("modalStats").innerHTML = `
    <div class="stat">
      <div class="stat__label">Missões</div>
      <div class="stat__val">${member.missao}</div>
    </div>

    <div class="stat">
      <div class="stat__label">Rank</div>
      <div class="stat__val">⭐ ${member.rank}</div>
    </div>

    <div class="stat">
      <div class="stat__label">Idade</div>
      <div class="stat__val">${member.idade} anos</div>
    </div>

    <div class="stat">
      <div class="stat__label">Planeta</div>
      <div class="stat__val">${member.planeta}</div>
    </div>
  `;

  document.getElementById("modalBio").textContent =
    `${member.nome} atua como ${member.funcao.toLowerCase()} da nave Gaton IX. ` +
    `${member.curiosidade} Suas principais habilidades são: ${member.skills.join(", ")}.`;

  document.getElementById("modalTags").innerHTML = member.skills
    .map(skill => `<span class="tag">${skill}</span>`)
    .join("");

  document.getElementById("modalOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

// ==========================
// FECHAR MODAL
// ==========================

function closeModal() {
  document.getElementById("modalOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

document.getElementById("modalClose").addEventListener("click", closeModal);

document.getElementById("modalOverlay").addEventListener("click", event => {
  if (event.target.id === "modalOverlay") {
    closeModal();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeModal();
  }
});

// ==========================
// FILTROS
// ==========================

document.getElementById("filterBar").addEventListener("click", event => {
  const button = event.target.closest(".filter-btn");

  if (!button) return;

  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.remove("active");
  });

  button.classList.add("active");

  activeFilter = button.dataset.filter;

  renderGrid(allCrew);
});

// ==========================
// INICIAR PÁGINA
// ==========================

renderGrid(allCrew);