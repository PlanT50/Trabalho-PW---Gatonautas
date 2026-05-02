const API_URL = "https://engulf-deafness-trouble.ngrok-free.dev";

const form = document.getElementById("formMensagem");
const listaMensagens = document.getElementById("listaMensagens");
const botaoLimpar = document.getElementById("limparMensagens");

async function carregarMensagens() {
    try {
        const resposta = await fetch(API_URL);
        if (!resposta.ok) throw new Error("Erro ao carregar mensagens");
        const mensagens = await resposta.json();
        mostrarMensagens(mensagens);
    } catch (erro) {
        console.error(erro);
        listaMensagens.innerHTML = `<div class="mensagens-vazio">Falha na conexão com a central da Gaton IX. Verifique se a API está rodando em ${API_URL}</div>`;
    }
}

function mostrarMensagens(mensagens) {
    listaMensagens.innerHTML = "";

    if (!mensagens || mensagens.length === 0) {
        listaMensagens.innerHTML = `<div class="mensagens-vazio">Nenhuma garrafa espacial foi recebida ainda.<br>Seja o primeiro humano a enviar uma transmissão!</div>`;
        return;
    }

    [...mensagens].reverse().forEach((item) => {
        const holograma = document.createElement("article");
        holograma.classList.add("holograma");

        let dataFormatada = "Data desconhecida";
        if (item.data) {
            dataFormatada = new Date(item.data).toLocaleString("pt-BR");
        }

        holograma.innerHTML = `
            <h3>${escapeHtml(item.nome)} de ${escapeHtml(item.planeta)}</h3>
            <p>${escapeHtml(item.mensagem)}</p>
            <span class="mensagem-tag">${escapeHtml(item.tipo)}</span>
            <div class="mensagem-data">Recebido em ${dataFormatada}</div>
        `;
        listaMensagens.prepend(holograma);
    });
}

function escapeHtml(texto) {
    if (!texto) return "";
    return texto
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

// Enviar nova mensagem
form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const planeta = document.getElementById("planeta").value.trim();
    const tipo = document.getElementById("tipo").value;
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !planeta || !tipo || !mensagem) {
        alert("Preencha todos os campos antes de enviar.");
        return;
    }

    try {
        const resposta = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nome, planeta, tipo, mensagem })
        });
        
        if (!resposta.ok) throw new Error("Erro ao enviar");
        
        form.reset();
        await carregarMensagens();
        alert("Mensagem enviada! Holograma apareceu na sala de controle.");
    } catch (erro) {
        console.error(erro);
        alert("Falha na comunicação com a central espacial.");
    }
});

// Apagar todas
botaoLimpar.addEventListener("click", async () => {
    if (!confirm("Deseja apagar todos os hologramas?")) return;
    
    try {
        await fetch(API_URL, { method: "DELETE" });
        await carregarMensagens();
        alert("Todos os hologramas foram removidos.");
    } catch (erro) {
        console.error(erro);
        alert("Não foi possível limpar os hologramas.");
    }
});

// Inicializar
carregarMensagens();