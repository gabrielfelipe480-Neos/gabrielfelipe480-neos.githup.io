
//================================
//BOTÃO "CONHEÇA MEU TRABALHO"
//================================

const botaoSobre = document.querySelector("#botaoSobre");

botaoSobre.addEventListener("click", function () {

    const titulo = document.querySelector("#hero h2");

    titulo.textContent = "Bem-vindo ao meu portfólio! 🚀";

    botaoSobre.textContent = "Obrigado pela visita!";

});





