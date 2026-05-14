(function () {
    var form = document.getElementById("footerNewsletter");
    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        var input = form.querySelector("input[type='email']");
        var msg = document.getElementById("newsletterMsg");

        if (!input.value.trim() || !input.validity.valid) {
            msg.textContent = "Digite um e-mail válido.";
            msg.className = "footer-newsletter__msg footer-newsletter__msg--erro";
            msg.hidden = false;
            return;
        }

        input.value = "";
        msg.textContent = "Missão recebida! Você agora faz parte da rota de transmissões.";
        msg.className = "footer-newsletter__msg footer-newsletter__msg--ok";
        msg.hidden = false;
        setTimeout(function () { msg.hidden = true; }, 4000);
    });
})();
