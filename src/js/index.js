const botoesCarrossel = document.querySelectorAll('.botao');
const imagensCarrossel = document.querySelectorAll('.imagem');

botoesCarrossel.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        desativarBotaoSelecionado();

        marcarBotaoClicado(botao);

        esconderImagemAtiva();

        mostrarImagemDeFundo(index);
    })
})

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

function marcarBotaoClicado(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function mostrarImagemDeFundo(index) {
    imagensCarrossel[index].classList.add('ativa');
}



