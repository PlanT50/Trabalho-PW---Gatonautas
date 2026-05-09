const DIARIO_API_URL = "https://engulf-deafness-trouble.ngrok-free.dev/diario";

const HEADERS_BASE = { "ngrok-skip-browser-warning": "true" };
const HEADERS_JSON = {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "true"
};

const ENTRADAS_FIXAS = [

    // ── MISSÕES ──────────────────────────────────────────────
    {
        id: "f1",
        titulo: "Decolagem da Gaton IX — Dia 1",
        data: "2025-01-15",
        categoria: "missao",
        autor: "Capitã Amora",
        texto: "Finalmente! Depois de semanas preparando a nave e convencendo o Astro Garfield a sair de cima do painel de controle, decolamos com sucesso. O motor de ronrons atingiu 120% da potência esperada. Cookie Saturno apertou todos os botões vermelhos durante a contagem regressiva — por sorte, nenhum explodiu.",
        imagem: "nasa"
    },
    {
        id: "f5",
        titulo: "Sistema estelar de Purr-Alpha salvo!",
        data: "2025-04-20",
        categoria: "missao",
        autor: "Capitã Amora",
        texto: "Missão cumprida. A cidade de Purr-Alpha estava em colapso gravitacional emocional. Luna Nebulosa plantou arranhadores solares em cada praça, Mika Andrômeda analisou os dados e Nox Eclipse fez os reparos no escuro — por escolha própria. Em 72 horas, os bairros recuperaram cor e disposição.",
        imagem: "nasa"
    },
    {
        id: "f6",
        titulo: "Operação Nebulosa do Fio de Lã",
        data: "2025-05-10",
        categoria: "missao",
        autor: "Tom Vega",
        texto: "Missão arriscada: atravessar a Nebulosa do Fio de Lã sem acionar os sensores da patrulha estelar. Ziggy Stardust propôs uma fuga improvisada pelo setor 7. Tom Vega insistiu no caminho mais longo apesar da alergia à poeira estelar. Chegamos com 3 horas de atraso, mas com o casco intacto.",
        imagem: "nasa"
    },

    // ── PLANETAS ─────────────────────────────────────────────
    {
        id: "f2",
        titulo: "Primeira cidade visitada: Miaulon-7",
        data: "2025-02-03",
        categoria: "cidade",
        autor: "Luna Nebulosa",
        texto: "Miaulon-7 estava completamente abandonada e cinzenta. Luna Nebulosa distribuiu mudas de plantas alienígenas e Lyra Miau mapeou as constelações locais — nomeando uma delas em homenagem ao próprio rabo. Os moradores adotaram Pixel Garras como herói oficial por ter consertado o gerador em 10 minutos.",
        imagem: "nasa"
    },
    {
        id: "f7",
        titulo: "Ronronix: a cidade que ronrona",
        data: "2025-03-14",
        categoria: "cidade",
        autor: "Mika Andrômeda",
        texto: "Descoberta histórica registrada por Mika Andrômeda: Ronronix emite frequências de ronron naturalmente pelo núcleo. A tripulação inteira dormiu por 11 horas na primeira noite. Bento Meteoro declarou o sono 'tecnicamente terapêutico'. Capitã Amora chamou de 'soneca tática' e incluiu no relatório oficial.",
        imagem: "nasa"
    },
    {
        id: "f8",
        titulo: "Lua de Gelo de Felinópolis Prime",
        data: "2025-06-01",
        categoria: "cidade",
        autor: "Tico Lunar",
        texto: "A lua glacial de Felinópolis Prime tem temperatura de -180°C. Tico Lunar tentou catalogar os cristais de gelo como 'artefatos alienígenas brilhantes'. Nina Cosmos aplicou aquecedor térmico em toda a equipe antes de sair. O gelo, analisado por Mika Andrômeda, sabe inexplicavelmente a atum.",
        imagem: "nasa"
    },

    // ── TRIPULAÇÃO ───────────────────────────────────────────
    {
        id: "f4",
        titulo: "Lyra Miau nomeia constelação pelo próprio rabo",
        data: "2025-03-05",
        categoria: "tripulacao",
        autor: "Lyra Miau",
        texto: "Durante observação noturna, Lyra Miau identificou um novo agrupamento de estrelas com curvatura semelhante ao seu próprio rabo. Registrou oficialmente como 'Constelação Cauda Lyrae'. A proposta foi aprovada por Capitã Amora após 4 minutos de debate e 1 miado persuasivo.",
        imagem: "cat"
    },
    {
        id: "f9",
        titulo: "Cookie Saturno aperta o botão errado (de novo)",
        data: "2025-04-02",
        categoria: "tripulacao",
        autor: "Pixel Garras",
        texto: "Pelo terceiro mês consecutivo, Cookie Saturno ativou o sistema de alarme de emergência ao tentar regular o aquecimento da nave. Nox Eclipse apareceu do nada para consertar. Pixel Garras registrou o incidente pela décima vez. Capitã Amora determinou que todos os botões vermelhos sejam pintados de azul.",
        imagem: "cat"
    },

    // ── INCIDENTES ───────────────────────────────────────────
    {
        id: "f10",
        titulo: "Sushi Orion pousa no asteroide errado",
        data: "2025-03-22",
        categoria: "incidente",
        autor: "Capitã Amora",
        texto: "Sushi Orion, pilotando com música espacial no volume máximo, confundiu o asteroide de pouso autorizado com um vizinho proibido — o mesmo onde Ziggy Stardust já havia estacionado ilegalmente em 2024. Bento Meteoro tratou o susto da tripulação. Ziggy Stardust achou graça. Relatório enviado à base com duas páginas de desculpas.",
        imagem: "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2015/06/hera_networking_with_cubesats/15477210-17-eng-GB/Hera_networking_with_CubeSats_pillars.jpg"
    },
    {
        id: "f11",
        titulo: "Chuva de meteoritos de pelúcia",
        data: "2025-04-08",
        categoria: "incidente",
        autor: "Luna Nebulosa",
        texto: "Ninguém sabe de onde vieram, mas passamos por um campo de meteoritos de pelúcia sintética cor-de-rosa. O sistema de filtragem entupiu com fiapos. Nina Cosmos atendeu 8 casos de espirro consecutivo. Tico Lunar tentou catalogar os fragmentos como nova espécie mineral. Luna Nebulosa catalogou como 'evento inexplicável classe F'.",
        imagem: "https://images8.alphacoders.com/690/690814.jpg"
    },
    {
        id: "f12",
        titulo: "Motim do atum: a greve da tripulação",
        data: "2025-05-30",
        categoria: "incidente",
        autor: "Mel Quasar",
        texto: "A tripulação entrou em greve após Mel Quasar informar que o estoque de atum havia sido substituído por 'proteína de asteróide liofilizada'. Capitã Amora negociou por 6 horas. Ziggy Stardust fez piquete na entrada da cozinha. Acordo final: reabastecimento emergencial em Felinópolis Prime. Atum voltou ao manifesto de carga.",
        imagem: "https://www.naylor.com/associationadviser/wp-content/uploads/sites/2/2020/08/Cats-on-Protest-Sign.jpg"
    },
    {
        id: "f3",
        titulo: "A Grande Soneca Técnica de Astro Garfield",
        data: "2025-02-18",
        categoria: "incidente",
        autor: "Tom Vega",
        texto: "Astro Garfield adormeceu sobre o painel de controle durante o turno da madrugada — exatamente como faz todos os turnos. A nave ficou em órbita por 6 horas em torno de um buraco de minhoca enquanto Tom Vega tentava acordá-lo. Mel Quasar sugeriu petiscos. Funcionou. Painel danificado. Nox Eclipse consertou no escuro.",
        imagem: "https://www.shutterstock.com/image-photo/cat-sleep-on-keyboard-260nw-26466448.jpg"
    },
];

// ---- APIs --------------------------------------------------
const NASA_KEY = "EIauP0dXfnLMGBdcZ34IcdjHrkGxNR0vjINvp40t";

async function buscarImagensNASA(quantidade) {
    try {
        const res = await fetch(
            `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}&count=${quantidade}`
        );
        if (!res.ok) throw new Error("NASA API falhou");
        const data = await res.json();
        return data.filter(item => item.media_type === "image").map(item => item.url);
    } catch (e) {
        console.warn("NASA API indisponível:", e);
        return [];
    }
}

async function buscarImagensGato(quantidade) {
    try {
        const res = await fetch(
            `https://api.thecatapi.com/v1/images/search?limit=${quantidade}`
        );
        if (!res.ok) throw new Error("Cat API falhou");
        const data = await res.json();
        return data.map(item => item.url);
    } catch (e) {
        console.warn("Cat API indisponível:", e);
        return [];
    }
}

async function resolverImagens(entradas) {
    const indicesNasa = entradas
        .map((e, i) => e.imagem === "nasa" ? i : -1)
        .filter(i => i !== -1);

    const indicesCat = entradas
        .map((e, i) => e.imagem === "cat" ? i : -1)
        .filter(i => i !== -1);

    const [urlsNasa, urlsCat] = await Promise.all([
        indicesNasa.length ? buscarImagensNASA(indicesNasa.length + 2) : Promise.resolve([]),
        indicesCat.length  ? buscarImagensGato(indicesCat.length)      : Promise.resolve([])
    ]);

    let iNasa = 0, iCat = 0;

    return entradas.map(entrada => {
        if (entrada.imagem === "nasa") return { ...entrada, imagem: urlsNasa[iNasa++] || "" };
        if (entrada.imagem === "cat")  return { ...entrada, imagem: urlsCat[iCat++]   || "" };
        return entrada;
    });
}

// ---- API do diário -----------------------------------------
async function carregarEntradasAPI() {
    try {
        const res = await fetch(DIARIO_API_URL, { headers: HEADERS_BASE });
        if (!res.ok) throw new Error("Erro ao carregar entradas");
        const entradas = await res.json();
        return entradas.map(e => ({ ...e, fromAPI: true }));
    } catch (e) {
        console.warn("API do diário indisponível:", e);
        return [];
    }
}

async function salvarEntradaAPI(dados) {
    const res = await fetch(DIARIO_API_URL, {
        method: "POST",
        headers: HEADERS_JSON,
        body: JSON.stringify(dados)
    });
    if (!res.ok) throw new Error("Erro ao salvar entrada");
    return res.json();
}

async function deletarEntradaAPI(id) {
    const res = await fetch(`${DIARIO_API_URL}/${id}`, {
        method: "DELETE",
        headers: HEADERS_BASE
    });
    if (!res.ok) throw new Error("Erro ao remover entrada");
}

// ---- Utilitários -------------------------------------------
const LABELS = {
    missao: "Missão",
    tripulacao: "Tripulação",
    cidade: "Cidade",
    incidente: "Incidente"
};

function formatarData(dataStr) {
    if (!dataStr) return "";
    const [ano, mes, dia] = dataStr.split("-");
    return `${dia}/${mes}/${ano}`;
}

// ---- Renderização ------------------------------------------
function criarCard(entrada, deletavel = false) {
    const card = document.createElement("article");
    card.className = "diario-card";
    card.dataset.categoria = entrada.categoria || "missao";
    card.dataset.id = entrada.id;

    const label = LABELS[entrada.categoria] || entrada.categoria;

    card.innerHTML = `
        ${deletavel ? `<button class="diario-card__del" title="Remover entrada" aria-label="Remover entrada">
            <i class="fa-solid fa-trash-can"></i>
        </button>` : ""}

        <div class="diario-card__header">
            <h2 class="diario-card__titulo">${entrada.titulo}</h2>
            <div class="diario-card__meta">
                <span class="diario-card__badge">${label}</span>
                <span class="diario-card__data">${formatarData(entrada.data)}</span>
                ${entrada.status && entrada.status !== "publicado"
                    ? `<span class="diario-card__badge" style="background:#555">${entrada.status}</span>`
                    : ""}
            </div>
        </div>

        ${entrada.autor ? `<p class="diario-card__autor">📡 ${entrada.autor}</p>` : ""}

        ${entrada.imagem ? `<img class="diario-card__img" src="${entrada.imagem}" alt="${entrada.titulo}" loading="lazy">` : ""}

        <p class="diario-card__texto">${entrada.texto}</p>
    `;

    if (deletavel) {
        card.querySelector(".diario-card__del").addEventListener("click", () => {
            removerEntrada(entrada.id);
        });
    }

    return card;
}

let ENTRADAS_RESOLVIDAS = [];

function renderizarTimeline(entradasAPI, filtro = "all") {
    const timeline = document.getElementById("timeline");
    const vazio    = document.getElementById("diarioVazio");

    const todas = [...ENTRADAS_RESOLVIDAS, ...entradasAPI].sort((a, b) =>
        new Date(b.data) - new Date(a.data)
    );

    const filtradas = filtro === "all"
        ? todas
        : todas.filter(e => e.categoria === filtro);

    timeline.innerHTML = "";

    if (filtradas.length === 0) {
        vazio.hidden = false;
        return;
    }

    vazio.hidden = true;

    filtradas.forEach(entrada => {
        timeline.appendChild(criarCard(entrada, !!entrada.fromAPI));
    });
}

async function recarregarTimeline() {
    const filtroAtivo = document.querySelector(".filter-btn.active")?.dataset.filter || "all";
    const entradasAPI = await carregarEntradasAPI();
    renderizarTimeline(entradasAPI, filtroAtivo);
}

async function removerEntrada(id) {
    try {
        await deletarEntradaAPI(id);
        await recarregarTimeline();
    } catch (e) {
        console.error(e);
        alert("Não foi possível remover a entrada.");
    }
}

// ---- Filtros -----------------------------------------------
function initFiltros() {
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", async () => {
            document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const entradasAPI = await carregarEntradasAPI();
            renderizarTimeline(entradasAPI, btn.dataset.filter);
        });
    });
}

// ---- Formulário --------------------------------------------
function initFormulario() {
    const toggleBtn   = document.getElementById("toggleForm");
    const formBox     = document.getElementById("formBox");
    const salvarBtn   = document.getElementById("salvarEntrada");
    const cancelarBtn = document.getElementById("cancelarEntrada");

    toggleBtn.addEventListener("click", () => {
        const aberto = !formBox.hidden;
        formBox.hidden = aberto;
        toggleBtn.setAttribute("aria-expanded", String(!aberto));
    });

    cancelarBtn.addEventListener("click", () => {
        formBox.hidden = true;
        toggleBtn.setAttribute("aria-expanded", "false");
        limparForm();
    });

    salvarBtn.addEventListener("click", async () => {
        const titulo    = document.getElementById("entradaTitulo").value.trim();
        const data      = document.getElementById("entradaData").value;
        const categoria = document.getElementById("entradaCategoria").value;
        const autor     = document.getElementById("entradaAutor").value.trim();
        const texto     = document.getElementById("entradaTexto").value.trim();
        const imagem    = document.getElementById("entradaImagem").value.trim();
        const status    = document.getElementById("entradaStatus").value;

        if (!titulo || !data || !categoria || !texto) {
            alert("Preencha os campos obrigatórios: título, data, categoria e relato.");
            return;
        }

        salvarBtn.disabled = true;
        salvarBtn.textContent = "Transmitindo...";

        try {
            await salvarEntradaAPI({
                titulo,
                data,
                categoria,
                autor: autor || "Tripulante Anônimo",
                texto,
                imagem,
                status
            });

            limparForm();
            formBox.hidden = true;
            toggleBtn.setAttribute("aria-expanded", "false");

            document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            document.querySelector(".filter-btn[data-filter='all']").classList.add("active");

            await recarregarTimeline();
        } catch (e) {
            console.error(e);
            alert("Falha ao transmitir log. Verifique se a API está rodando.");
        } finally {
            salvarBtn.disabled = false;
            salvarBtn.innerHTML = '<i class="fa-solid fa-satellite-dish"></i> Transmitir log';
        }
    });
}

function limparForm() {
    ["entradaTitulo", "entradaData", "entradaCategoria", "entradaAutor", "entradaTexto", "entradaImagem"]
        .forEach(id => { document.getElementById(id).value = ""; });
    document.getElementById("entradaStatus").value = "publicado";
}

// ---- Loading -----------------------------------------------
function mostrarLoading() {
    const timeline = document.getElementById("timeline");
    timeline.innerHTML = `
        <div style="text-align:center; padding: 3rem 0; color: var(--text-muted);">
            <i class="fa-solid fa-satellite-dish fa-spin" style="font-size:2rem; margin-bottom:1rem; display:block;"></i>
            Captando transmissões do espaço...
        </div>
    `;
}

// ---- Init --------------------------------------------------
document.addEventListener("DOMContentLoaded", async () => {
    initFiltros();
    initFormulario();
    mostrarLoading();

    const [entradasResolvidas, entradasAPI] = await Promise.all([
        resolverImagens(ENTRADAS_FIXAS),
        carregarEntradasAPI()
    ]);

    ENTRADAS_RESOLVIDAS = entradasResolvidas;
    renderizarTimeline(entradasAPI, "all");
});
