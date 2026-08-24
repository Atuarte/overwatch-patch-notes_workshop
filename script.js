let heroisOrdem = [];
let heroiAtualIndex = 0;

// Quando a página carrega, preparamos a lista de heróis
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Atualiza o contador de heróis na página inicial automaticamente
    const spanTotal = document.getElementById('total-mudancas');
    if (spanTotal && typeof bancoDeDados !== 'undefined') {
        spanTotal.innerText = Object.keys(bancoDeDados).length;
    }

    // 2. 🎯 MÁGICA: Lê dinamicamente apenas os heróis clicáveis da página atual!
    const cartoesClick = document.querySelectorAll('.cartao-heroi[onclick]');
    cartoesClick.forEach(cartao => {
        // Pega o texto do onclick, ex: abrirModal('D.Va')
        const onclickText = cartao.getAttribute('onclick');
        
        // Pega só o nome do herói que está entre aspas simples
        const match = onclickText.match(/abrirModal\('([^']+)'\)/);
        if (match && match[1]) {
            heroisOrdem.push(match[1]);
        }
    });
});

function abrirModal(nome) {
    const data = bancoDeDados[nome];
    const modal = document.getElementById('modal-heroi');
    const conteudo = document.getElementById('conteudo-modal');
    
    // Descobre a posição atual do herói na lista desta página específica
    heroiAtualIndex = heroisOrdem.indexOf(nome);
    
    if (data) {
        conteudo.innerHTML = `
            <div class="modal-header">
                <img src="${data.img}" alt="${nome}">
                <h2>${nome}</h2>
            </div>
            <div class="modal-body">
                ${data.texto}
            </div>
        `;
    } else {
        conteudo.innerHTML = `
            <div class="modal-header">
                <h2>${nome}</h2>
            </div>
            <div class="modal-body">
                <p>Nenhuma mudança registrada para este herói ainda.</p>
            </div>
        `;
    }
    
    // Como agora é um loop infinito (ex: Zarya -> D.Mon), não precisamos mais esconder os botões!
    // Nós garantimos que eles sempre fiquem visíveis.
    const btnAnt = document.getElementById('btn-modal-ant');
    const btnProx = document.getElementById('btn-modal-prox');
    if (btnAnt) btnAnt.classList.remove('oculto');
    if (btnProx) btnProx.classList.remove('oculto');
    
    modal.style.display = "flex";
}

function fecharModal() {
    document.getElementById('modal-heroi').style.display = "none";
}

function navegarHeroi(direcao) {
    // Se a lista estiver vazia por algum motivo, previne erros
    if (heroisOrdem.length === 0) return;

    let novoIndex = heroiAtualIndex + direcao;
    
    // 🔄 LÓGICA DO CARROSSEL INFINITO
    if (novoIndex < 0) {
        // Se apertar voltar no primeiro (ex: D.Mon), vai para o último (Zarya)
        novoIndex = heroisOrdem.length - 1; 
    } else if (novoIndex >= heroisOrdem.length) {
        // Se apertar avançar no último (ex: Zarya), volta para o primeiro (D.Mon)
        novoIndex = 0; 
    }
    
    abrirModal(heroisOrdem[novoIndex]);
}

// Fechar clicando fora do modal (no fundo escuro)
window.onclick = function(event) {
    const modal = document.getElementById('modal-heroi');
    if (event.target == modal) {
        fecharModal();
    }
}

// Navegação pelas setas do teclado e tecla ESC para fechar
document.addEventListener('keydown', function(event) {
    const modal = document.getElementById('modal-heroi');
    
    // Só funciona se o modal estiver aberto na tela
    if (modal && modal.style.display === "flex") {
        if (event.key === "ArrowLeft") {
            navegarHeroi(-1);
        } else if (event.key === "ArrowRight") {
            navegarHeroi(1);
        } else if (event.key === "Escape") {
            fecharModal();
        }
    }
});