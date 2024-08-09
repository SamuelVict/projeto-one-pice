const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

// Adiciona o evento para cada botão
botoes.forEach(function(btn, btnIndice) {
    btn.addEventListener("click", function() {
        // Remove a classe "selecionado" de todos os botões
        botoes.forEach(function(botao) {
            botao.classList.remove("selecionado");
        });

        // Adiciona a classe "selecionado" ao botão clicado
        btn.classList.add("selecionado");

        // Remove a classe "selecionado" de todos os personagens
        personagens.forEach(function(personagem) {
            personagem.classList.remove("selecionado");
        });

        // Adiciona a classe "selecionado" ao personagem correspondente
        if (btnIndice < personagens.length) {
            personagens[btnIndice].classList.add("selecionado");
        }
    });
});

// Adiciona o evento para cada personagem
personagens.forEach(function(personagem, pIndice) {
    personagem.addEventListener("click", function() {
        // Remove a classe "selecionado" de todos os personagens
        personagens.forEach(function(p) {
            p.classList.remove("selecionado");
        });

        // Adiciona a classe "selecionado" ao personagem clicado
        personagem.classList.add("selecionado");
    });
});

