(function () {
    var CHAVE = "gaton_carrinho";

    function getCarrinho() {
        try { return JSON.parse(localStorage.getItem(CHAVE)) || []; }
        catch (_) { return []; }
    }

    function saveCarrinho(carr) {
        localStorage.setItem(CHAVE, JSON.stringify(carr));
    }

    function gerarCodigo() {
        var chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
        var cod = "GTN-";
        for (var i = 0; i < 8; i++) cod += chars[Math.floor(Math.random() * chars.length)];
        return cod;
    }

    function formatarPreco(num) {
        return "G$ " + num.toFixed(2).replace(".", ",");
    }

    function render() {
        var carr = getCarrinho();
        var layout = document.getElementById("carrinhoLayout");
        var vazio = document.getElementById("carrinhoVazio");

        if (!carr.length) {
            layout.style.display = "none";
            vazio.style.display = "flex";
            return;
        }

        vazio.style.display = "none";
        layout.style.display = "grid";

        var total = carr.reduce(function (acc, item) {
            return acc + item.precoNum * item.quantidade;
        }, 0);

        var itensHtml = carr.map(function (item) {
            return (
                '<div class="carrinho-item" data-sku="' + item.sku + '">' +
                '  <div class="carrinho-item__emoji">' + item.emoji + '</div>' +
                '  <div class="carrinho-item__info">' +
                '    <span class="carrinho-item__categoria">' + item.categoria + '</span>' +
                '    <span class="carrinho-item__nome">' + item.nome + '</span>' +
                '    <span class="carrinho-item__preco">' + formatarPreco(item.precoNum * item.quantidade) + '</span>' +
                '  </div>' +
                '  <div class="carrinho-item__acoes">' +
                '    <div class="carrinho-item__qtd">' +
                '      <button type="button" class="btn-diminuir" data-sku="' + item.sku + '" aria-label="Diminuir quantidade">−</button>' +
                '      <span>' + item.quantidade + '</span>' +
                '      <button type="button" class="btn-aumentar" data-sku="' + item.sku + '" aria-label="Aumentar quantidade">+</button>' +
                '    </div>' +
                '    <button type="button" class="carrinho-item__remover" data-sku="' + item.sku + '">' +
                '      <i class="fa-solid fa-trash-can"></i> Remover' +
                '    </button>' +
                '  </div>' +
                '</div>'
            );
        }).join("");

        var linhasResumo = carr.map(function (item) {
            return (
                '<div class="carrinho-resumo__linha">' +
                '  <span>' + item.nome + ' × ' + item.quantidade + '</span>' +
                '  <span>' + formatarPreco(item.precoNum * item.quantidade) + '</span>' +
                '</div>'
            );
        }).join("");

        layout.innerHTML =
            '<div class="carrinho-lista">' + itensHtml + '</div>' +
            '<aside class="carrinho-resumo card">' +
            '  <h2>Resumo do pedido</h2>' +
            linhasResumo +
            '  <div class="carrinho-resumo__total">' +
            '    <span class="carrinho-resumo__total-label">Total</span>' +
            '    <span class="carrinho-resumo__total-val">' + formatarPreco(total) + '</span>' +
            '  </div>' +
            '  <button type="button" class="btn btn-primary carrinho-resumo__btn" id="btnFinalizar">Finalizar compra</button>' +
            '  <button type="button" class="carrinho-resumo__limpar" id="btnLimpar">Limpar carrinho</button>' +
            '</aside>';

        bindEventos();
    }

    function bindEventos() {
        document.querySelectorAll(".btn-aumentar").forEach(function (btn) {
            btn.addEventListener("click", function () {
                alterarQtd(btn.dataset.sku, 1);
            });
        });

        document.querySelectorAll(".btn-diminuir").forEach(function (btn) {
            btn.addEventListener("click", function () {
                alterarQtd(btn.dataset.sku, -1);
            });
        });

        document.querySelectorAll(".carrinho-item__remover").forEach(function (btn) {
            btn.addEventListener("click", function () {
                removerItem(btn.dataset.sku);
            });
        });

        var btnFinalizar = document.getElementById("btnFinalizar");
        if (btnFinalizar) {
            btnFinalizar.addEventListener("click", finalizarCompra);
        }

        var btnLimpar = document.getElementById("btnLimpar");
        if (btnLimpar) {
            btnLimpar.addEventListener("click", function () {
                saveCarrinho([]);
                render();
            });
        }
    }

    function alterarQtd(sku, delta) {
        var carr = getCarrinho();
        var idx = carr.findIndex(function (i) { return i.sku === sku; });
        if (idx < 0) return;
        carr[idx].quantidade += delta;
        if (carr[idx].quantidade <= 0) carr.splice(idx, 1);
        saveCarrinho(carr);
        render();
    }

    function removerItem(sku) {
        var carr = getCarrinho().filter(function (i) { return i.sku !== sku; });
        saveCarrinho(carr);
        render();
    }

    function finalizarCompra() {
        var codigo = gerarCodigo();
        saveCarrinho([]);
        document.getElementById("confirmCodigo").textContent = "Código do pedido: " + codigo;
        document.getElementById("confirmOverlay").classList.add("open");
    }

    render();
})();
