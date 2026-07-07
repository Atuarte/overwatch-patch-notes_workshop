function abrirModal(nome) {
    const data = bancoDeDados[nome];
    const modal = document.getElementById('modal-heroi');
    const conteudo = document.getElementById('conteudo-modal');
    
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
    
    modal.style.display = "flex";
}

function fecharModal() {
    document.getElementById('modal-heroi').style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById('modal-heroi');
    if (event.target == modal) {
        fecharModal();
    }
}

// Atualiza o contador de heróis na página inicial automaticamente
document.addEventListener('DOMContentLoaded', () => {
    const spanTotal = document.getElementById('total-mudancas');
    if (spanTotal && typeof bancoDeDados !== 'undefined') {
        spanTotal.innerText = Object.keys(bancoDeDados).length;
    }
});