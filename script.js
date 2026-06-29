// 1. Dicionário com todas as mudanças
const bancoDeDados = {
    "D.Va": `
        <h3>OFENSIVA</h3>
        <ul>
            <li>Tamanho e hitbox reduzido em -3%.</li>
            <li>Velocidade de movimento aumentada de 5,5 para 6,05 (+10%).</li>
            <li>Tempo de recarga de propulsores reduzido de 4 para 3 segundos (-25%).</li>
        </ul>
        <h3>VIDA:</h3>
        <ul><li>Vida base reduzida de 325 para 225. (Total: 500).</li></ul>
        <h3>Matriz de Defesa:</h3>
        <ul><li>Tempo máximo de matriz aumentado em 30%.</li></ul>
    `,
    "Ana": `
        <h3>SUPORTE:</h3>
        <ul>
            <li>Ana recebe a passiva da sub-role Restauração.</li>
            <li>75 da vida foram convertidos em escudos.</li>
        </ul>
    `,
    // Adicione os outros heróis aqui seguindo o mesmo padrão!
};

// 2. Função de abrir (agora busca no bancoDeDados)
function abrirModal(nome) {
    const modal = document.getElementById('modal-heroi');
    const containerConteudo = document.getElementById('modal-corpo');
    const containerHeader = document.getElementById('modal-header-container');
    
    // Verifica se temos dados para esse herói
    if (bancoDeDados[nome]) {
        containerHeader.innerHTML = `<div class="modal-header"><h2>${nome}</h2></div>`;
        containerConteudo.innerHTML = bancoDeDados[nome];
        modal.style.display = "block";
    } else {
        alert("Conteúdo para " + nome + " ainda não cadastrado.");
    }
}

// 3. Função de fechar
function fecharModal() {
    document.getElementById('modal-heroi').style.display = "none";
}