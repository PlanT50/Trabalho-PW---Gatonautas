const form = document.getElementById("formMensagem");
const listaMensagens = document.getElementById("listaMensagens");
const botaoLimpar = document.getElementById("limparMensagens");

let mensagens = JSON.parse(localStorage.getItem("mensagensGatonIX")) || [];

function salvarMensagens() {
    localStorage.setItem("mensagensGatonIX", JSON.stringify(mensagens));
}

function mostrarMensagens() {
    listaMensagens.innerHTML = "";

    if (mensagens.length === 0) {
        listaMensagens.innerHTML = `
            <div class="mensagens-vazio">
                Nenhuma garrafa espacial foi recebida ainda.
                <br>
                Seja o primeiro humano a enviar uma transmissão!
            </div>
        `;
        return;
    }

    mensagens.forEach(function (item) {
        const holograma = document.createElement("article");
        holograma.classList.add("holograma");

        holograma.innerHTML = `
            <h3>${item.nome} de ${item.planeta}</h3>
            <p>${item.mensagem}</p>
            <span class="mensagem-tag">${item.tipo}</span>
            <div class="mensagem-data">Recebido em ${item.data}</div>
        `;

        listaMensagens.prepend(holograma);
    });
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const planeta = document.getElementById("planeta").value.trim();
    const tipo = document.getElementById("tipo").value;
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !planeta || !tipo || !mensagem) {
        alert("Preencha todos os campos antes de enviar sua transmissão.");
        return;
    }

    const novaMensagem = {
        nome: nome,
        planeta: planeta,
        tipo: tipo,
        mensagem: mensagem,
        data: new Date().toLocaleString("pt-BR")
    };

    mensagens.push(novaMensagem);
    salvarMensagens();
    mostrarMensagens();

    form.reset();

    alert("Mensagem enviada! O holograma apareceu na sala de controle da Gaton IX.");
});

botaoLimpar.addEventListener("click", function () {
    const confirmar = confirm("Deseja apagar todos os hologramas recebidos?");

    if (confirmar) {
        mensagens = [];
        salvarMensagens();
        mostrarMensagens();
    }
});

mostrarMensagens();