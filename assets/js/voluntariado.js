const formVoluntariado = document.getElementById("formVoluntariado");
const resultadoVoluntariado = document.getElementById("resultadoVoluntariado");

formVoluntariado.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const planeta = document.getElementById("planeta").value.trim();
    const funcao = document.getElementById("funcao").value;
    const motivacao = document.getElementById("motivacao").value.trim();

    const pergunta1 = Number(document.getElementById("pergunta1").value);
    const pergunta2 = Number(document.getElementById("pergunta2").value);
    const pergunta3 = Number(document.getElementById("pergunta3").value);

    if (!nome || !email || !planeta || !funcao || !motivacao || !pergunta1 || !pergunta2 || !pergunta3) {
        alert("Preencha todos os campos antes de enviar sua candidatura.");
        return;
    }

    const pontuacao = pergunta1 + pergunta2 + pergunta3;

    resultadoVoluntariado.classList.remove("aprovado", "treinamento", "recusado");

    if (pontuacao >= 8) {
        resultadoVoluntariado.classList.add("aprovado");

        resultadoVoluntariado.innerHTML = `
            <h3>Candidatura aprovada, ${nome}!</h3>

            <p>
                A Gaton IX reconheceu seu potencial como <strong>${funcao}</strong>.
                Sua origem em <strong>${planeta}</strong> foi registrada no banco de voluntários terrestres.
            </p>

            <p>
                Status: pronto para receber o comunicador holográfico da missão.
            </p>
        `;
    } else if (pontuacao >= 5) {
        resultadoVoluntariado.classList.add("treinamento");

        resultadoVoluntariado.innerHTML = `
            <h3>Quase lá, ${nome}!</h3>

            <p>
                Você demonstrou potencial para atuar como <strong>${funcao}</strong>,
                mas a tripulação recomenda um treinamento extra com o gato-robô SRD-4000.
            </p>

            <p>
                Status: candidato em preparação.
            </p>
        `;
    } else {
        resultadoVoluntariado.classList.add("recusado");

        resultadoVoluntariado.innerHTML = `
            <h3>Missão adiada, ${nome}.</h3>

            <p>
                A Gaton IX agradece sua inscrição, mas talvez seja melhor começar
                como observador honorário antes de assumir a função de <strong>${funcao}</strong>.
            </p>

            <p>
                Status: treinamento recomendado antes do embarque.
            </p>
        `;
    }

    formVoluntariado.reset();
});