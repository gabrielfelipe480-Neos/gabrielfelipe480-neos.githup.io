

//================================
// BOTÃO "CONHEÇA MEU TRABALHO"
//================================

const botaoSobre = document.querySelector("#botaoSobre");
const titulo = document.querySelector("#hero h2");
const hero = document.querySelector("#hero");

// Guarda o estado do botão
let ativo = false;

// Quando o botão for clicado
botaoSobre.addEventListener("click", function () {

    if (ativo === false) {

        // Ativa a interação
        titulo.textContent = "Bem-vindo ao meu portfólio! | Conheça meu trabalho";
        botaoSobre.textContent = "Obrigado pela visita! | Desenvolvedor Front-end";
        hero.classList.add("hero-ativo");
        ativo = true;
    }       

});