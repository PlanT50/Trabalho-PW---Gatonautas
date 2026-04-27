const NOMES = [
  'Laranja de Kuiper','Tom Vega','Felino Deneb','Katty Omega','Malhado Meteoro',
  'Bigode de Andrômeda','Astro Garfield','Whiskers Cosmo','Echo Peludo','Pixel Garras',
  'Vulcan Pelagem','Ziggy Stardust','Lyra Miau','Zenith Siamês','Quasar Pata'
];

const FUNCOES = ['Comandante','Piloto','Engenheiro','Cientista','Médico'];

const CURIOSIDADES = [
  'Dorme em cima do painel de controle durante viagens longas',
  'Alérgico à poeira estelar mas insiste em explorar nebulosas',
  'Só aceita ordens se oferecerem petiscos em troca',
  'Guarda um novelo de fio como item de emergência na mochila',
  'Faz ronrons tão altos que interferem no sonar da nave',
  'Tem medo de aspiradores de pó intergalácticos',
  'Medita virando a nave de cabeça para baixo toda manhã',
  'Perdeu 3 caixas de areia. Ninguém sabe como.',
  'Comunica-se em morse com a cauda durante missões',
  'Coleciona amostras de rochas de cada planeta visitado'
];

const SKILLS = [
  'Navegação','Engenharia','Medicina','Física Quântica','Culinária Espacial',
  'Comunicações','Stealth','Xenobiologia','Pilotagem','Mecânica'
];

const PLANETAS = [
  'Terra','Marte','Vênus','Kepler-422b','Ross 128b','Júpiter','Plutão','Gliese 667Cc'
];

function randOf(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function buildMember(catData, index) {
  return {
    id: 'GX-' + String(index + 1).padStart(3, '0'),
    nome: NOMES[index % NOMES.length],
    funcao: randOf(FUNCOES),
    curiosidade: randOf(CURIOSIDADES),
    skills: SKILLS.slice().sort(() => Math.random() - 0.5).slice(0, 3),
    planeta: randOf(PLANETAS),
    missao: randInt(3, 47),
    rank: randInt(1, 5),
    img: catData.url
  };
}

let allCrew = [];
let activeFilter = 'all';

function renderCard(member, delay) {
  const card = document.createElement('div');
  card.className = 'crew-card';
  card.dataset.role = member.funcao;
  card.style.animationDelay = delay + 'ms';

  card.innerHTML = `
    <div class="crew-card__img-wrap">
      <span class="crew-card__status">
        <span class="status-dot"></span>A bordo
      </span>
      <span class="crew-card__rank">⭐ Rank ${member.rank}</span>
      <img class="crew-card__img" src="${member.img}" alt="Foto de ${member.nome}" loading="lazy">
    </div>

    <div class="crew-card__body">
      <p class="crew-card__id">${member.id}</p>
      <h3 class="crew-card__name">${member.nome}</h3>
      <p class="crew-card__role">${member.funcao}</p>

      <div class="crew-card__divider"></div>

      <p class="crew-card__quirk">${member.curiosidade}</p>

      <div class="crew-card__tags">
        ${member.skills.map(s => `<span class="tag">${s}</span>`).join('')}
      </div>
    </div>
  `;

  card.addEventListener('click', () => openModal(member));
  return card;
}

function renderGrid(crew) {
  const grid = document.getElementById('tripExib');
  const countEl = document.getElementById('tripQnt');

  grid.innerHTML = '';

  const filtered = activeFilter === 'all'
    ? crew
    : crew.filter(m => m.funcao === activeFilter);

  countEl.innerHTML = filtered.length
    ? `<strong>${filtered.length}</strong> tripulantes encontrados`
    : '';

  if (!filtered.length) {
    grid.innerHTML = `
      <div class="crew-error">
        <span class="emoji">🔭</span>
        <h3>Nenhum tripulante encontrado</h3>
        <p>Tente outro filtro.</p>
      </div>
    `;
    return;
  }

  filtered.forEach((m, i) => {
    grid.appendChild(renderCard(m, i * 60));
  });
}

function fetchCrew() {
  document.getElementById('tripExib').innerHTML = `
    <div class="crew-loading">
      <div class="orbit-loader"></div>
      <p>Recrutando tripulantes...</p>
    </div>
  `;

  fetch('https://api.thecatapi.com/v1/images/search?limit=15')
    .then(r => {
      if (!r.ok) throw new Error();
      return r.json();
    })
    .then(cats => {
      allCrew = cats.map(buildMember);
      renderGrid(allCrew);
    })
    .catch(() => {
      document.getElementById('tripExib').innerHTML = `
        <div class="crew-error">
          <span class="emoji">😿</span>
          <h3>Erro ao carregar</h3>
          <button id="retryBtn">Tentar novamente</button>
        </div>
      `;

      document.getElementById('retryBtn').addEventListener('click', fetchCrew);
    });
}


function openModal(m) {
  document.getElementById('modalImg').src = m.img;
  document.getElementById('modalId').textContent = m.id;
  document.getElementById('modalName').textContent = m.nome;
  document.getElementById('modalRole').textContent = m.funcao;

  document.getElementById('modalStats').innerHTML = `
    <div class="stat"><div class="stat__label">Missões</div><div class="stat__val">${m.missao}</div></div>
    <div class="stat"><div class="stat__label">Rank</div><div class="stat__val">⭐ ${m.rank}</div></div>
    <div class="stat"><div class="stat__label">Planeta</div><div class="stat__val">${m.planeta}</div></div>
  `;

  document.getElementById('modalBio').textContent =
    `${m.nome} é especialista em ${m.skills.join(', ').toLowerCase()}. "${m.curiosidade}".`;

  document.getElementById('modalTags').innerHTML =
    m.skills.map(s => `<span class="tag">${s}</span>`).join('');

  document.getElementById('modalOverlay').classList.add('open');
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
}

document.getElementById('modalClose').addEventListener('click', closeModal);

document.getElementById('modalOverlay').addEventListener('click', (e) => {
  if (e.target.id === 'modalOverlay') closeModal();
});

// ===== FILTROS =====
document.getElementById('filterBar').addEventListener('click', (e) => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;

  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  activeFilter = btn.dataset.filter;
  renderGrid(allCrew);
});

fetchCrew();