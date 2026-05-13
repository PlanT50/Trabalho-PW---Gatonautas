const API_BASE = "http://localhost:8080";

const tabs = document.querySelectorAll(".login-tab");
const panels = document.querySelectorAll(".login-panel");
const switchBtns = document.querySelectorAll(".login-switch__btn");
const toggleSenhaBtns = document.querySelectorAll(".toggle-senha");

function ativarTab(nome) {
    tabs.forEach(t => t.classList.toggle("active", t.dataset.tab === nome));
    panels.forEach(p => p.classList.toggle("active", p.id === `panel-${nome}`));
}

tabs.forEach(tab => tab.addEventListener("click", () => ativarTab(tab.dataset.tab)));
switchBtns.forEach(btn => btn.addEventListener("click", () => ativarTab(btn.dataset.goto)));

toggleSenhaBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const input = document.getElementById(btn.dataset.target);
        const icon = btn.querySelector("i");
        if (input.type === "password") {
            input.type = "text";
            icon.classList.replace("fa-eye", "fa-eye-slash");
        } else {
            input.type = "password";
            icon.classList.replace("fa-eye-slash", "fa-eye");
        }
    });
});

function mostrarMsg(elementId, texto, tipo) {
    const el = document.getElementById(elementId);
    el.textContent = texto;
    el.className = `login-msg ${tipo}`;
}

function limparMsg(elementId) {
    const el = document.getElementById(elementId);
    el.textContent = "";
    el.className = "login-msg";
}

function getRedirecionamento() {
    const params = new URLSearchParams(window.location.search);
    return params.get("redirect") || "PaginaInicial.html";
}

document.getElementById("formLogin").addEventListener("submit", async (e) => {
    e.preventDefault();
    limparMsg("loginMsg");

    const email = document.getElementById("loginEmail").value.trim();
    const senha = document.getElementById("loginSenha").value;
    const btn = document.getElementById("btnLogin");

    if (!email || !senha) {
        mostrarMsg("loginMsg", "Preencha e-mail e senha.", "erro");
        return;
    }

    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Entrando...';

    try {
        const res = await fetch(`${API_BASE}/usuarios/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, senha })
        });

        const data = await res.json();

        if (!res.ok) {
            mostrarMsg("loginMsg", data.erro || "Email ou senha inválidos.", "erro");
            return;
        }

        localStorage.setItem("gaton_usuario", JSON.stringify({
            id: data.id,
            nome: data.nome,
            email: data.email,
            endereco: data.endereco
        }));

        mostrarMsg("loginMsg", `Bem-vindo(a), ${data.nome}!`, "sucesso");

        setTimeout(() => {
            window.location.href = getRedirecionamento();
        }, 800);

    } catch (err) {
        mostrarMsg("loginMsg", "Erro ao conectar com a nave. Tente novamente.", "erro");
    } finally {
        btn.disabled = false;
        btn.innerHTML = '<i class="fa-solid fa-arrow-right-to-bracket"></i> Entrar na nave';
    }
});

document.getElementById("formCadastro").addEventListener("submit", async (e) => {
    e.preventDefault();
    limparMsg("cadastroMsg");

    const nome = document.getElementById("cadNome").value.trim();
    const email = document.getElementById("cadEmail").value.trim();
    const senha = document.getElementById("cadSenha").value;
    const endereco = document.getElementById("cadEndereco").value.trim();
    const btn = document.getElementById("btnCadastro");

    if (!nome || !email || !senha || !endereco) {
        mostrarMsg("cadastroMsg", "Preencha todos os campos.", "erro");
        return;
    }

    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Cadastrando...';

    try {
        const res = await fetch(`${API_BASE}/usuarios/cadastro`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ nome, email, senha, endereco })
        });

        const data = await res.json();

        if (!res.ok) {
            mostrarMsg("cadastroMsg", data.erro || "Erro ao cadastrar.", "erro");
            return;
        }

        mostrarMsg("cadastroMsg", "Cadastro realizado! Faça login para continuar.", "sucesso");
        document.getElementById("formCadastro").reset();

        setTimeout(() => ativarTab("login"), 1500);

    } catch (err) {
        mostrarMsg("cadastroMsg", "Erro ao conectar com a nave. Tente novamente.", "erro");
    } finally {
        btn.disabled = false;
        btn.innerHTML = '<i class="fa-solid fa-user-plus"></i> Entrar para a tripulação';
    }
});
