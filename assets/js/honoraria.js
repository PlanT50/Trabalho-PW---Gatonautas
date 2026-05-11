const titulos = [
    {
        titulo: "Comunicador Terrestre",
        desc: "Responsável por traduzir miados cósmicos em linguagem humana. Mantém o contato entre a Terra e a Gaton IX com precisão estelar."
    },
    {
        titulo: "Guardião Estelar",
        desc: "Protetor dos planetas resgatados. Vela pelo bem-estar dos felinos do universo e jamais deixa um ronron sem lar."
    },
    {
        titulo: "Navegante Cósmico",
        desc: "Conhecedor das rotas entre estrelas. Capaz de encontrar atalhos pelo espaço que nem o GPS galáctico consegue mapear."
    },
    {
        titulo: "Explorador de Nebulosas",
        desc: "Aventureiro nato que mergulha nas nuvens de gás cósmico em busca de novos mundos para transformar."
    },
    {
        titulo: "Sensor de Ronrons",
        desc: "Possui o dom raro de detectar ronrons a quilômetros de distância. Essencial para localizar tripulantes perdidos."
    },
    {
        titulo: "Cartógrafo Estelar",
        desc: "Mapeia cada canto da galáxia com precisão milimétrica. Nenhum planeta abandonado escapa do seu radar."
    },
    {
        titulo: "Embaixador Felino",
        desc: "Diplomata das relações entre humanos e gatonautas. Negocia tratados de paz com petiscos e arranhadores."
    },
    {
        titulo: "Engenheiro de Brinquedinhos",
        desc: "Inventor de gadgets espaciais indispensáveis para a missão — especialmente os que fazem barulhinho."
    },
    {
        titulo: "Observador Galáctico",
        desc: "Vigia os céus sem pestanejar. Registra cada transformação cósmica e envia relatórios detalhados à nave."
    },
    {
        titulo: "Técnico de Purr",
        desc: "Especialista em calibrar os sistemas de ronrons da Gaton IX. Garante que a frequência vibracional esteja sempre no ponto."
    }
];

function gerarIdHonorario() {
    const letras = "ABCDEFGHJKLMNPQRSTUVWXYZ";
    const nums = Math.floor(1000 + Math.random() * 9000);
    const letra = letras[Math.floor(Math.random() * letras.length)];
    return `HON-${letra}${nums}`;
}

function exibirCard(usuario, dados) {
    document.getElementById("honoraria-sem-login").style.display = "none";
    document.getElementById("honoraria-entrar").style.display = "none";

    document.getElementById("hon-nome").textContent = usuario.nome;
    document.getElementById("hon-titulo").textContent = dados.titulo;
    document.getElementById("hon-desc").textContent = dados.desc;
    document.getElementById("hon-id").textContent = dados.id;

    document.getElementById("honoraria-card").style.display = "flex";
}

document.addEventListener("DOMContentLoaded", () => {
    const usuario = JSON.parse(localStorage.getItem("gaton_usuario"));

    if (!usuario) return;

    document.getElementById("honoraria-sem-login").style.display = "none";

    const dadosSalvos = JSON.parse(localStorage.getItem("gaton_honoraria"));

    if (dadosSalvos) {
        exibirCard(usuario, dadosSalvos);
        return;
    }

    document.getElementById("honoraria-entrar").style.display = "flex";

    document.getElementById("btnReceberTitulo").addEventListener("click", () => {
        const sorteado = titulos[Math.floor(Math.random() * titulos.length)];
        const dados = { ...sorteado, id: gerarIdHonorario() };
        localStorage.setItem("gaton_honoraria", JSON.stringify(dados));
        exibirCard(usuario, dados);
    });
});
