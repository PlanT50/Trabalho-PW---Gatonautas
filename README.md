# Gaton IX — Central de Operações Cósmica

Site temático de uma ONG espacial felina fictícia, desenvolvido como projeto final da disciplina de Programação Web no Instituto ICEV. A Gaton IX é uma tripulação de gatos astronautas em missão para resgatar, cuidar e adotar felinos por toda a galáxia.

---

## Acesso

O site está publicado e acessível em: **[https://sparkling-snickerdoodle-a1af91.netlify.app/paginainicial]**

A API está hospedada no Render e não requer nenhuma configuração local para funcionar.

---

## Funcionalidades

### Página Inicial
Apresentação da ONG com hero, seção sobre a missão, estatísticas de impacto e a seção de **Tripulação Honorária** — usuários logados recebem um título oficial na tripulação da Gaton IX, gerado e salvo localmente.

### Login e Cadastro
Autenticação completa integrada com a API. Após o login, o usuário tem acesso às páginas protegidas. O sistema redireciona automaticamente para a página de origem após autenticar.

### Tripulação
Apresenta os 15 membros da tripulação com foto e descrição. Inclui o **SRD-4000**, o gato-robô da nave — usuários logados podem adotá-lo e acompanhar notícias dele, que mudam a cada dia da semana. As fotos do SRD são carregadas dinamicamente via **The Cat API**.

### Missões
Sistema estelar interativo com 6 planetas, cada um representando uma frente de atuação da ONG (resgate, acolhimento, saúde, adoção, educação e reencontro). Ao abrir um planeta, é exibido:
- Comparação visual **antes/depois** da missão
- Opção de enviar um gatonauta ao planeta
- Registro de transformações realizadas (salvo localmente por planeta)

### Loja
Catálogo de produtos temáticos com filtros por categoria. Itens adicionados ao carrinho são salvos no navegador. O ícone flutuante mostra a quantidade de itens em tempo real.

### Carrinho
Exibe os itens selecionados com controle de quantidade, subtotal por item e total geral. Ao finalizar a compra, o carrinho é limpo e um código de pedido é gerado.

### Mensagens
Área para enviar "mensagens em garrafas espaciais" para a tripulação. As mensagens são salvas na API e exibidas como hologramas na sala de controle em tempo real.

### Diário de Bordo
Timeline de registros da nave com filtros por categoria (Missão, Tripulação, Planeta, Incidente). Inclui entradas fixas com imagens reais carregadas via **NASA APOD API** e **The Cat API**. Usuários logados podem criar novas entradas — rascunhos ficam visíveis apenas para quem os criou.

### Voluntariado
Formulário de candidatura com teste de personalidade em três perguntas. Ao enviar, o sistema calcula a pontuação e exibe o resultado da candidatura.

---

## Tecnologias

| Camada | Tecnologia |
|--------|-----------|
| Frontend | HTML5, CSS3, JavaScript (Vanilla) |
| Backend | Java + Spring Boot |
| Banco de dados | PostgreSQL (hospedado no Render) |
| APIs externas | NASA APOD API, The Cat API |
| Hospedagem frontend | Netlify |
| Hospedagem backend | Render |

---

## Estrutura de pastas

```
/
├── assets/
│   ├── css/        # Estilos por página
│   ├── js/         # Scripts por página
│   └── imgs/       # Imagens locais
├── PaginaInicial.html
├── Login.html
├── Tripulacao.html
├── Missoes.html
├── Loja.html
├── Carrinho.html
├── Mensagens.html
├── Diario.html
└── Voluntariado.html
```

---

## Como rodar localmente

Apenas abra o arquivo `PaginaInicial.html` no navegador. Recomenda-se usar a extensão **Live Server** do VS Code para evitar restrições de CORS ao carregar arquivos locais.

A API já está rodando no Render — nenhuma configuração adicional é necessária.
