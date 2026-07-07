const bancoDeDados = {

    // ==========================================
    // TANQUES (OFENSIVOS)
    // ==========================================
    "D.Va": {
        img: "Imagem dos Heróis/D.Va.png",
        texto: `
            <h3>OFENSIVA</h3>
            <ul>
                <li>Tamanho e hitbox reduzido em -3%.</li>
                <li>Velocidade de movimento aumentada de 5,5 para 6,05 (+10%).</li>
                <li class="cor-azul">Tempo de recarga de propulsores reduzido de 4 para 3 segundos (-25%).</li>
            </ul>
            <h3>VIDA</h3>
            <ul>
                <li class="cor-verde">Vida base reduzida de 325 para 225. Total: 500.</li>
            </ul>
            <h3>MATRIZ DE DEFESA</h3>
            <ul>
                <li class="cor-azul">Tempo máximo de matriz aumentado em 30%.</li>
                <li class="cor-azul">Reduz o dano recebido em 30%.</li>
            </ul>
        `
    },
    "Doomfist": {
        img: "Imagem dos Heróis/Doomfist.png",
        texto: `
            <h3>OFENSIVO</h3>
            <ul>
                <li>Tamanho e hitbox reduzido em -3%.</li>
                <li>Velocidade de movimento aumentada de 5,5 para 6,05 (+10%).</li>
                <li class="cor-verde">Vida base reduzida de 525 para 225.</li>
                <li class="cor-verde">Escudos aumentados de 0 para 200. Total: 425.</li>
            </ul>
            <h3>A MELHOR DEFESA... (PASSIVA)</h3>
            <ul>
                <li class="cor-verde">Vida extra gerada reduzida em 40%.</li>
            </ul>
            <h3>SOCO FOGUETE</h3>
            <ul>
                <li class="cor-azul">Tempo de recarga reduzido de 4 para 3,4 segundos (-15%).</li>
                <li class="cor-azul">Recupere 25 de vida por cada inimigo acertado.</li>
            </ul>
            <h3>ABALO SÍSMICO</h3>
            <ul>
                <li class="cor-azul">Tempo de recarga reduzido de 6,5 para 5,525 segundos (-15%).</li>
                <li class="cor-azul">Recupere 15 de vida por cada inimigo acertado.</li>
            </ul>
        `
    },
    "Hazard": {
        img: "Imagem dos Heróis/Hazard.png",
        texto: `
            <h3>OFENSIVO</h3>
            <ul>
                <li>Tamanho e hitbox reduzido em -3%.</li>
                <li>Velocidade de movimento aumentada de 5,5 para 6,05 (+10%).</li>
                <li class="cor-verde">Vida base reduzida de 425 para 275. Total: 500.</li>
                <li class="cor-azul">Tempo de recarga do Salto Brutal reduzido de 5,5 para 4,125 segundos (-25%).</li>
            </ul>
        `
    },
    "Orisa": {
        img: "Imagem dos Heróis/Orisa.png",
        texto: `
            <h3>OFENSIVA</h3>
            <ul>
                <li>Tamanho e hitbox reduzido em -3%.</li>
                <li class="cor-verde">Vida base reduzida de 300 para 250.</li>
                <li class="cor-verde">Armadura reduzida de 300 para 225. Total: 475.</li>
                <li>Velocidade de movimento aumentada de 5,5 para 6,05 (+10%).</li>
            </ul>
            <h3>FORTIFICAR</h3>
            <ul>
                <li class="cor-azul">Orisa ganha vida extra baseada na que perdeu. Não afeta o Rompante Terrano. A vida extra não decai com o tempo e pode ser resetada no próximo uso da habilidade.</li>
            </ul>
            <h3>GIRO DO DARDO</h3>
            <ul>
                <li class="cor-azul">Tempo de recarga reduzido de 8 para 6 segundos.</li>
            </ul>
            <h3>BARREIRA PROTETORA (PERK MAIOR)</h3>
            <ul>
                <li class="cor-verde">Vida reduzida de 600 para 450.</li>
                <li class="cor-azul">Tempo de recarga reduzido de 8 para 6 segundos.</li>
            </ul>
            <h3>ROMPANTE TERRANO</h3>
            <ul>
                <li class="cor-azul">Puxar os inimigos à Orisa agora os atordoa por 0,25s.</li>
            </ul>
        `
    },
    "Rainha Junker": {
        img: "Imagem dos Heróis/Rainha Junker.png",
        texto: `
            <h3>OFENSIVA</h3>
            <ul>
                <li>Tamanho e hitbox reduzido em -3%.</li>
                <li>Velocidade de movimento aumentada de 5,5 para 6,325 (+15%).</li>
                <li class="cor-verde">Vida base reduzida de 525 para 425.</li>
                <li class="cor-azul">Tempo de recarga do Grito de Guerra reduzido de 12 para 9 segundos (-25%).</li>
            </ul>
        `
    },
    "Winston": {
        img: "Imagem dos Heróis/Winston.png",
        texto: `
            <h3>OFENSIVO</h3>
            <ul>
                <li>Tamanho e hitbox reduzido em -3%.</li>
                <li>Velocidade de movimento aumentada de 5,5 para 6,325 (+15%).</li>
                <li class="cor-verde">Vida base reduzida de 425 para 275. Total: 475.</li>
                <li class="cor-azul">Tempo de recarga do Salto a Jato reduzido de 5 para 3,75 segundos (-25%).</li>
            </ul>
            <h3>CANHÃO DE TESLA</h3>
            <ul>
                <li class="cor-azul">Munição reduzida de 120 para 100.</li>
                <li class="cor-azul">Agora tem um dano adicional de 2,5% da vida máxima do alvo.</li>
            </ul>
        `
    },
    "Wrecking Ball": {
        img: "Imagem dos Heróis/Wrecking Ball.png",
        texto: `
            <h3>OFENSIVO</h3>
            <ul>
                <li>Tamanho e hitbox reduzido em -3%.</li>
                <li>Velocidade de movimento aumentada de 5,5 para 6,325 (+15%).</li>
                <li class="cor-verde">Vida base reduzida de 450 para 300. Total: 575.</li>
                <li class="cor-azul">Tempo de recarga do Bate-Estaca reduzido de 5 para 6,8 segundos (-15%).</li>
                <li class="cor-azul">Tempo de recarga da Garra reduzido de 5 para 4,25 segundos (-15%).</li>
            </ul>
        `
    },

    // ==========================================
    // TANQUES (DEFENSIVOS)
    // ==========================================
    "Domina": {
        img: "Imagem dos Heróis/Domina.png",
        texto: `
            <h3>DEFENSIVA E PLANADORA</h3>
            <ul>
                <li>Tamanho e hitbox aumentados em +3%.</li>
                <li class="cor-verde">150 de vida foram convertidos em escudos. Total: 650.</li>
                <li class="cor-azul">Munição aumentada de 100 para 120.</li>
                <li class="cor-laranja">Geração de suprema por combate reduzido em 25%.</li>
            </ul>
        `
    },
    "Mauga": {
        img: "Imagem dos Heróis/Mauga.png",
        texto: `
            <h3>DEFENSIVO</h3>
            <ul>
                <li>Tamanho e hitbox aumentados em +3%.</li>
                <li class="cor-verde">Vida base reduzida de 575 para 425.</li>
                <li class="cor-verde">Armadura aumentada de 150 para 250. Total: 675.</li>
                <li class="cor-azul">Munição aumentada de 300 para 375.</li>
                <li class="cor-laranja">Geração de suprema por combate reduzido em 25%.</li>
            </ul>
            <h3>NOVA PASSIVA</h3>
            <ul>
                <li class="cor-azul">Ao ficar com 40% ou menos de vida, os inimigos à 10 metros do Mauga serão incendiados automaticamente, causando 10 de dano por segundo.</li>
            </ul>
            <h3>METRALHADORA INCENDIÁRIA - SASHA</h3>
            <ul>
                <li class="cor-azul">Não incendeia mais os inimigos.</li>
            </ul>
            <h3>SOBRECARGA CARDÍACA</h3>
            <ul>
                <li class="cor-azul">Incendeia os inimigos na área da Sobrecarga, causando 10 de dano por segundo.</li>
            </ul>
            <h3>MANO A MANO</h3>
            <ul>
                <li class="cor-azul">Reseta a Sobrecarga Cardíaca.</li>
            </ul>
        `
    },
    "Ramattra": {
        img: "Imagem dos Heróis/Ramattra.png",
        texto: `
            <h3>DEFENSIVO</h3>
            <ul>
                <li>Tamanho e hitbox aumentado em +3%.</li>
                <li class="cor-verde">Vida base reduzida de 425 para 275.</li>
                <li class="cor-verde">Armadura aumentada de 100 para 200. Total: 475.</li>
                <li class="cor-laranja">Geração de suprema por combate reduzido em 25%.</li>
            </ul>
            <h3>ACELERADOR DO VAZIO</h3>
            <ul>
                <li class="cor-azul">Munição aumentada de 100 para 150.</li>
                <li class="cor-azul">Dano causado reduzido de 5 para 4.</li>
                <li class="cor-azul">Velocidade do projétil aumentada em +100%.</li>
            </ul>
        `
    },
    "Reinhardt": {
        img: "Imagem dos Heróis/Reinhardt.png",
        texto: `
            <h3>DEFENSIVO</h3>
            <ul>
                <li>Tamanho e hitbox aumentados em +3%.</li>
                <li class="cor-verde">Vida base reduzida de 400 para 250.</li>
                <li class="cor-verde">Armadura aumentada de 300 para 400. Total: 650.</li>
                <li class="cor-laranja">Geração de suprema por combate reduzido em 25%.</li>
            </ul>
        `
    },
    "Roadhog": {
        img: "Imagem dos Heróis/Roadhog.png",
        texto: `
            <h3>DEFENSIVO</h3>
            <ul>
                <li>Tamanho e hitbox aumentados em +3%.</li>
                <li class="cor-verde">Vida base reduzida de 750 para 375.</li>
                <li class="cor-verde">Escudos aumentados de 0 para 375. Total: 750.</li>
                <li class="cor-laranja">Geração de suprema por combate reduzido em 25%.</li>
            </ul>
            <h3>ARMA DE SUCATA</h3>
            <ul>
                <li class="cor-azul">Disparo primário: Velocidade do projétil reduzida em -50%.</li>
                <li class="cor-azul">Disparo secundário: Velocidade do projétil aumentada em +50%.</li>
            </ul>
        `
    },
    "Sigma": {
        img: "Imagem dos Heróis/Sigma.png",
        texto: `
            <h3>DEFENSIVO E PLANADOR</h3>
            <ul>
                <li>Tamanho e hitbox aumentados em +3%.</li>
                <li class="cor-verde">150 de vida foram convertidos em escudos. Total: 625.</li>
                <li class="cor-laranja">Geração de suprema por combate reduzido em 25%.</li>
            </ul>
        `
    },
    "Zarya": {
        img: "Imagem dos Heróis/Zarya.png",
        texto: `
            <h3>DEFENSIVA</h3>
            <ul>
                <li>Tamanho e hitbox aumentados em +3%.</li>
                <li class="cor-verde">150 de vida foram convertidos em escudos. Total: 550.</li>
                <li class="cor-laranja">Geração de suprema por combate reduzido em 25%.</li>
            </ul>
            <h3>CANHÃO DE PARTÍCULAS</h3>
            <ul>
                <li class="cor-azul">Munição aumentada de 100 para 175.</li>
                <li class="cor-azul">Agora tem um sistema de superaquecimento.</li>
                <li class="cor-azul">Não possui mais recarga manual e nem automática. Se a Zarya parar de usar sua arma, depois de 0,25 segundo ela recupera 40 de munição por segundo (Se a munição chegar a 1, levará 5,1s para recuperar tudo).</li>
                <li class="cor-azul">Ao superaquecer o Canhão de Partículas, Zarya fica impossibilitada de usar sua arma e a Barreira de Partículas e recebe 50% a menos de cura por 3,5 segundos. Depois disso, ela recupera 100% da sua munição.</li>
            </ul>
        `
    },

    // ==========================================
    // DPS
    // ==========================================
    "Anran": {
        img: "Imagem dos Heróis/Anran.png",
        texto: `
            <h3>DUELISTA</h3>
            <ul>
                <li class="cor-verde">Vida reduzida de 250 para 200.</li>
                <li>Velocidade de movimento aumentada de 6 para 6,9 m por segundo (+15%).</li>
            </ul>
        `
    },
    "Ashe": {
        img: "Imagem dos Heróis/Ashe.png",
        texto: `
            <h3>VÍBORA</h3>
            <ul>
                <li class="cor-azul">Munição reduzida de 12 para 10.</li>
                <li class="cor-azul">Acertos críticos devolvem munição.</li>
            </ul>
        `
    },
    "Cassidy": {
        img: "Imagem dos Heróis/Cassidy.png",
        texto: `
            <h3>VIDA</h3>
            <ul>
                <li class="cor-verde">Vida base aumentada de 250 para 275.</li>
            </ul>
            <h3>PACIFICADOR</h3>
            <ul>
                <li class="cor-azul">Dano reduzido de 70 para 56.</li>
                <li class="cor-azul">Multiplicador de dano crítico aumentado de 2 para 2.5x (headshot de 140).</li>
                <li class="cor-azul">Munição aumentada de 6 para 10.</li>
                <li class="cor-azul">Acertos críticos consomem o dobro de munição.</li>
            </ul>
            <h3>CLARÃO</h3>
            <ul>
                <li class="cor-azul">Dano reduzido de 75 para 60.</li>
                <li class="cor-azul">Tempo de recarga aumentado de 12 para 15 segundos.</li>
                <li class="cor-azul">Desabilita a HUD dos inimigos por 1,2 segundos. O alvo receberá um efeito de "cegueira" temporária.</li>
                <li class="cor-azul">Estuna os inimigos por 0,35 segundo.</li>
            </ul>
            <h3>TIRO CERTEIRO</h3>
            <ul>
                <li class="cor-azul">Dano reduzido em 20%.</li>
                <li class="cor-verde">Cassidy ganha 125 de vida extra que não decai com o tempo.</li>
            </ul>
        `
    },
    "Echo": {
        img: "Imagem dos Heróis/Echo.png",
        texto: `
            <h3>DUELISTA E PLANADORA</h3>
            <ul>
                <li class="cor-verde">Vida base reduzida de 150 para 100. Total: 175.</li>
                <li>Velocidade de movimento aumentada de 5,5 para 6,325 m por segundo (+15%).</li>
            </ul>
            <h3>DUPLICAR</h3>
            <ul>
                <li class="cor-laranja">Por causa de uma regra do workshop, Echo, ao Duplicar, fica com 60% a menos de vida com um adicional de 45 de escudos e 40 de vida.</li>
                <li class="cor-laranja">Custo da suprema reduzido em 15%.</li>
            </ul>
        `
    },
    "Emre": {
        img: "Imagem dos Heróis/Emre.png",
        texto: `
            <h3>VIDA</h3>
            <ul>
                <li class="cor-verde">Vida aumentada de 250 para 275.</li>
            </ul>
        `
    },
    "Freja": {
        img: "Imagem dos Heróis/Freja.png",
        texto: `
            <h3>DUELISTA</h3>
            <ul>
                <li class="cor-verde">Vida reduzida de 225 para 175.</li>
                <li>Velocidade de movimento aumentada de 5,5 para 6,325 m por segundo (+15%).</li>
            </ul>
        `
    },
    "Genji": {
        img: "Imagem dos Heróis/Genji.png",
        texto: `
            <h3>DUELISTA</h3>
            <ul>
                <li class="cor-verde">Vida reduzida de 250 para 200.</li>
                <li>Velocidade de movimento aumentada de 6 para 6,9 m por segundo (+15%).</li>
            </ul>
        `
    },
    "Pharah": {
        img: "Imagem dos Heróis/Pharah.png",
        texto: `
            <h3>DUELISTA</h3>
            <ul>
                <li class="cor-verde">Vida reduzida de 225 para 175.</li>
                <li>Velocidade de movimento aumentada de 5,5 para 6,325 m por segundo (+15%).</li>
            </ul>
        `
    },
    "Reaper": {
        img: "Imagem dos Heróis/Reaper.png",
        texto: `
            <h3>DUELISTA</h3>
            <ul>
                <li class="cor-verde">Vida reduzida de 275 para 225.</li>
                <li>Velocidade de movimento aumentada de 5,5 para 6,325 m por segundo (+15%).</li>
            </ul>
        `
    },
    "Sierra": {
        img: "Imagem dos Heróis/Sierra.png",
        texto: `
            <h3>DUELISTA</h3>
            <ul>
                <li class="cor-verde">Vida reduzida de 250 para 200.</li>
                <li>Velocidade de movimento aumentada de 5,5 para 6,325 m por segundo (+15%).</li>
            </ul>
        `
    },
    "Sojourn": {
        img: "Imagem dos Heróis/Sojourn.png",
        texto: `
            <h3>CANHÃO ELÉTRICO</h3>
            <ul>
                <li class="cor-azul">Munição aumentada de 45 para 60.</li>
                <li class="cor-azul">Velocidade de projétil aumentada em 50%.</li>
                <li class="cor-azul">Geração de energia para o Disparo Alternativo reduzido de 5 para 1 no corpo, 10 para 2 na cabeça e 1 para 0,2 em barreiras e implantáveis.</li>
            </ul>
            <h3>DISPARO ALTERNATIVO</h3>
            <ul>
                <li class="cor-azul">Multiplicador de dano crítico aumentado de 1.5 para 2x.</li>
            </ul>
            <h3>CAMPO DISRUPTOR</h3>
            <ul>
                <li class="cor-azul">Tempo de recarga aumentado de 15 para 18 segundos.</li>
                <li class="cor-azul">Velocidade do projétil aumentado em 50%.</li>
            </ul>
        `
    },
    "Sombra": {
        img: "Imagem dos Heróis/Sombra.png",
        texto: `
            <h3>DUELISTA</h3>
            <ul>
                <li class="cor-verde">Vida reduzida de 225 para 100.</li>
                <li class="cor-verde">Escudos aumentados de 0 para 75. Total: 175.</li>
                <li>Velocidade de movimento aumentada de 5,5 para 6,325 m por segundo (+15%).</li>
            </ul>
            <h3>HACKEAR</h3>
            <ul>
                <li class="cor-azul">Tempo de recarga em inimigos aumentado de 6 para 24 segundos.</li>
                <li class="cor-azul">Golpes finais não ativa a passiva dos duelistas de redução de recarga para o Hackear.</li>
                <li class="cor-azul">Tempo de recarga em implantáveis aumentado de 3 para 12 segundos.</li>
                <li class="cor-azul">Tempo de recarga de quando a habilidade for interrompida aumentado de 3 para 6 segundos.</li>
                <li class="cor-azul">Duração do silenciamento aumentado de 1 para 4 segundos.</li>
                <li class="cor-azul">Inimigos hackeados tem suas munições zeradas (com exceções do Mauga e da Jetpack Cat por bug do jogo).</li>
            </ul>
            <h3>TRANSLOCADOR</h3>
            <ul>
                <li class="cor-azul">Agora compartilha o tempo de recarga com o Vírus, usou o Translocador, o Vírus entra em recarga.</li>
                <li class="cor-verde">Cura a Sombra em 25 de vida se ela tiver 188 de vida ou mais, 50 de vida se ela tiver entre 125 e 187, e 75 de vida se ela tiver menos de 125 de vida.</li>
            </ul>
            <h3>VÍRUS</h3>
            <ul>
                <li class="cor-azul">Agora compartilha o tempo de recarga com o Translocador.</li>
                <li class="cor-azul">Agora o Vírus hackea os inimigos por 0,25 segundo. O silenciamento dura o mesmo tempo.</li>
            </ul>
            <h3>P.E.M.</h3>
            <ul>
                <li class="cor-laranja">Não carrega mais por combate, apenas passivamente e ao ser eliminada. Ganha 1% de carga a cada 1,5s (0 a 100 passivamente em 2,5 min). Não carrega morta ou antes do jogo iniciar.</li>
                <li class="cor-azul">Desabilita a HUD dos inimigos por 6 segundos.</li>
                <li class="cor-azul">Inimigos hackeados tem suas munições zeradas.</li>
                <li class="cor-azul">Corta 25% da carga da suprema dos inimigos.</li>
            </ul>
        `
    },
    "Symmetra": {
        img: "Imagem dos Heróis/Symmetra.png",
        texto: `
            <h3>PROJETOR DE FÓTONS</h3>
            <ul>
                <li class="cor-azul">Velocidade do projétil aumentada em 50%.</li>
            </ul>
            <h3>TORRE DE SENTINELA</h3>
            <ul>
                <li class="cor-azul">Tempo de recarga aumentado de 10 para 11 segundos.</li>
                <li class="cor-azul">Velocidade do projétil aumentado em 50%.</li>
            </ul>
        `
    },
    "Torbjörn": {
        img: "Imagem dos Heróis/Torbjörn.png",
        texto: `
            <h3>VIDA</h3>
            <ul>
                <li class="cor-verde">Armadura aumentada de 75 para 100. Total: 325.</li>
            </ul>
            <h3>SOBRECARGA</h3>
            <ul>
                <li class="cor-azul">Tempo de recarga aumentado de 10 para 14 segundos.</li>
                <li class="cor-azul">Duração aumentada de 6 para 9 segundos.</li>
            </ul>
        `
    },
    "Tracer": {
        img: "Imagem dos Heróis/Tracer.png",
        texto: `
            <h3>DUELISTA</h3>
            <ul>
                <li class="cor-verde">Vida reduzida de 175 para 150.</li>
                <li>Velocidade de movimento aumentada de 6 para 6,9 m por segundo (+15%).</li>
            </ul>
            <h3>PISTOLAS ELETROMAGNÉTICAS</h3>
            <ul>
                <li class="cor-azul">Munição aumentada de 40 para 60.</li>
                <li class="cor-azul">Tracer ganha 25% de roubo de vida.</li>
            </ul>
        `
    },
    "Vendetta": {
        img: "Imagem dos Heróis/Vendetta.png",
        texto: `
            <h3>DUELISTA</h3>
            <ul>
                <li class="cor-verde">Vida base reduzida de 200 para 100.</li>
                <li class="cor-verde">Armadura aumentada de 75 para 125. Total: 225.</li>
                <li>Velocidade de movimento aumentada de 5,5 para 6,325 m por segundo (+15%).</li>
            </ul>
        `
    },
    "Venture": {
        img: "Imagem dos Heróis/Venture.png",
        texto: `
            <h3>DUELISTA</h3>
            <ul>
                <li class="cor-verde">Vida reduzida de 250 para 200.</li>
                <li>Velocidade de movimento aumentada de 5,5 para 6,325 m por segundo (+15%).</li>
            </ul>
            <h3>EXPLORAÇÃO DETERMINADA (PASSIVA)</h3>
            <ul>
                <li class="cor-verde">Geração de escudos reduzida em 20%.</li>
                <li class="cor-verde">Quando tiver mais de 59 de escudos, ganha 1 adicional de 15 de escudos. Escudos totais: 75.</li>
            </ul>
        `
    },
    "Widowmaker": {
        img: "Imagem dos Heróis/Widowmaker.png",
        texto: `
            <h3>BEIJO DA VIÚVA</h3>
            <ul>
                <li class="cor-azul">Munição aumentada de 35 para 56.</li>
            </ul>
            <h3>MIRAR</h3>
            <ul>
                <li class="cor-azul">Munição gasta aumentada de 5 para 7.</li>
            </ul>
        `
    },

    // ==========================================
    // SUPORTES
    // ==========================================
    "Ana": {
        img: "Imagem dos Heróis/Ana.png",
        texto: `
            <h3>RESTAURAÇÃO (PASSIVA)</h3>
            <ul>
                <li>Ana recebe a passiva da sub-role Restauração.</li>
                <li class="cor-verde">Curar aliados com sua arma também cura a Ana com 40% da cura.</li>
            </ul>
            <h3>VIDA</h3>
            <ul>
                <li class="cor-verde">75 da vida foram convertidos em escudos.</li>
            </ul>
        `
    },
    "Baptiste": {
        img: "Imagem dos Heróis/Baptiste.png",
        texto: `
            <h3>VIDA</h3>
            <ul>
                <li class="cor-verde">Vida aumentada de 250 para 275.</li>
            </ul>
            <h3>CAMPO DE IMORTALIDADE</h3>
            <ul>
                <li class="cor-verde">Vida aumentada de 125 para 137,5.</li>
            </ul>
        `
    },
    "Brigitte": {
        img: "Imagem dos Heróis/Brigitte.png",
        texto: `
            <h3>VIDA</h3>
            <ul>
                <li class="cor-verde">Armadura aumentada de 50 para 75. Total: 275.</li>
            </ul>
            <h3>INSPIRAR (PASSIVA)</h3>
            <ul>
                <li class="cor-laranja">Agora tem uma aura visual.</li>
                <li class="cor-verde">20% do dano causado vira cura na área do Inspirar.</li>
                <li class="cor-azul">Aliados na área recebem 25% a menos de repulsão.</li>
            </ul>
            <h3>GOLPE DE ESCUDO</h3>
            <ul>
                <li class="cor-azul">Repulsão causada aumentada em 10%.</li>
                <li class="cor-azul">Tempo de recarga aumentado de 5 para 6,25 segundos.</li>
                <li class="cor-azul">Cancela habilidades de movimentação.</li>
            </ul>
            <h3>DISPARO AÇOITADOR</h3>
            <ul>
                <li class="cor-azul">Repulsão causada aumentada em +10%.</li>
                <li class="cor-azul">Tempo de recarga aumentado de 4 para 5 segundos.</li>
                <li class="cor-azul">Cancela habilidades de movimentação.</li>
            </ul>
            <h3>REAGRUPAR</h3>
            <ul>
                <li class="cor-azul">Aumenta o tamanho da barreira em +50%.</li>
                <li class="cor-azul">Brigitte não receberá repulsão durante o Reagrupar.</li>
                <li class="cor-verde">Reagrupar ativa automaticamente o Inspirar, pulsando a cada segundo 30 de cura instantânea.</li>
            </ul>
        `
    },
    "Illari": {
        img: "Imagem dos Heróis/Illari.png",
        texto: `
            <h3>RIFLE SOLAR</h3>
            <ul>
                <li class="cor-azul">Multiplicador de dano crítico aumentado de 1.5 para 1.6x. Headshot mínimo de 40 e máximo de 120.</li>
                <li class="cor-azul">Adicionada mecânica de dano em área: Disparos geram explosão de 5m ao colidir com superfícies, barreiras ou inimigos. Causa 10 de dano fixo + 10% do dano original ao atingir inimigos na área. Acertos diretos não recebem dano explosivo.</li>
            </ul>
            <h3>EXPLOSÃO</h3>
            <ul>
                <li class="cor-azul">Cancela habilidades de movimentação dos inimigos.</li>
            </ul>
            <h3>SOL APRISIONADO</h3>
            <ul>
                <li class="cor-verde">Cura a Illari em 50 de vida por segundo.</li>
                <li class="cor-azul">Incendeia inimigos, mas não aplica dano extra.</li>
                <li class="cor-azul">Todo dano da suprema desabilita a HUD dos inimigos por 0.5 segundo.</li>
            </ul>
        `
    },
    "Juno": {
        img: "Imagem dos Heróis/Juno.png",
        texto: `
            <h3>RESTAURAÇÃO (PASSIVA)</h3>
            <ul>
                <li>A Juno foi adicionada aos planadores.</li>
                <li>Juno recebe a passiva da sub-role Restauração.</li>
                <li class="cor-verde">Curar aliados com sua arma também cura a Juno com 40% da cura.</li>
            </ul>
        `
    },
    "Lifeweaver": {
        img: "Imagem dos Heróis/Lifeweaver.png",
        texto: `
            <h3>VIDA</h3>
            <ul>
                <li class="cor-verde">Escudos aumentados de 50 para 75. Total: 275.</li>
            </ul>
            <h3>DESABROCHAR CURATIVO</h3>
            <ul>
                <li class="cor-azul">Velocidade de projétil reduzida em -60%.</li>
                <li class="cor-verde">Cura aumentada em +50% (mínimo de 10 para 15 e máximo de 90 para 135).</li>
            </ul>
            <h3>SARAIVADA DE ESPINHOS</h3>
            <ul>
                <li class="cor-azul">Velocidade de projétil aumentada em +35%.</li>
            </ul>
            <h3>PLATAFORMA DE PÉTALAS</h3>
            <ul>
                <li class="cor-azul">Velocidade de projétil reduzida em -50%.</li>
                <li class="cor-verde">Vida aumentada de 300 para 375.</li>
            </ul>
        `
    },
    "Lúcio": {
        img: "Imagem dos Heróis/Lúcio.png",
        texto: `
            <h3>ONDA SONORA</h3>
            <ul>
                <li class="cor-verde">Aliados à frente do Lúcio na área da Transição receberão 75 de escudos decrescentes e 25 de cura ao longo de 2.5s.</li>
            </ul>
            <h3>TRANSIÇÃO</h3>
            <ul>
                <li class="cor-verde">Cura para os aliados reduzida de 20 para 16 e para o Lúcio reduzida de 12 para 9,6 por segundo.</li>
            </ul>
            <h3>SOLTA O SOM</h3>
            <ul>
                <li class="cor-verde">Cura reduzida de 56 para 44,8 por segundo.</li>
            </ul>
            <h3>BARREIRA DE SOM</h3>
            <ul>
                <li class="cor-verde">Agora recupera 100% da vida de todos os aliados instantaneamente.</li>
            </ul>
        `
    },
    "Mercy": {
        img: "Imagem dos Heróis/Mercy.png",
        texto: `
            <h3>VIDA</h3>
            <ul>
                <li class="cor-verde">100 de vida foram convertidos em escudos.</li>
            </ul>
            <h3>RESSURREIÇÃO</h3>
            <ul>
                <li class="cor-verde">Concede 50 de vida extra depois da ressurreição com duração máxima de 10 segundos.</li>
            </ul>
            <h3>VALQUÍRIA</h3>
            <ul>
                <li class="cor-azul">Ao ativar a suprema, corta 50% do tempo de recarga atual da Ressurreição.</li>
                <li class="cor-azul">Durante a suprema, a Ressurreição tem seu tempo de recarga 100% mais rápido.</li>
            </ul>
            <h3>RESSURREIÇÃO ANGELICAL (PERK MENOR)</h3>
            <ul>
                <li class="cor-verde">Vida extra reduzida de 100 para 50.</li>
            </ul>
        `
    },
    "Mizuki": {
        img: "Imagem dos Heróis/Mizuki.png",
        texto: `
            <h3>AURA MEDICINAL</h3>
            <ul>
                <li class="cor-verde">10% do dano causado vira cura na área da Aura Medicinal.</li>
                <li class="cor-verde">Cura mínima p/ aliados reduzida (5 para 4) e máxima (20 para 16). Para o Mizuki, cura mínima reduzida (3,5 para 2,8) e máxima (14 para 11,2) por segundo.</li>
            </ul>
            <h3>GLAVE ESPIRITUAL</h3>
            <ul>
                <li class="cor-azul">Velocidade de projétil aumentada em +60%.</li>
            </ul>
            <h3>KASA MEDICINAL</h3>
            <ul>
                <li class="cor-azul">Velocidade de projétil aumentada em +60%.</li>
                <li class="cor-verde">Cura reduzida: 72 (1º ricochete), 56 (2º), 40 (3º) e 32 (em si).</li>
            </ul>
            <h3>SANTUÁRIO KEKKAI</h3>
            <ul>
                <li class="cor-verde">Cura inicial reduzida de 100 para 80 e cura ao longo do tempo de 40 para 32.</li>
                <li class="cor-laranja">Custo reduzido em -10%. Carrega 20% mais rápido.</li>
            </ul>
        `
    },
    "Moira": {
        img: "Imagem dos Heróis/Moira.png",
        texto: `
            <h3>ERUPÇÃO BIOTÓXICA (NOVA PASSIVA)</h3>
            <ul>
                <li class="cor-azul">Golpes finais geram uma explosão de 5m na vítima que causa 25 de dano e estuna os inimigos próximos.</li>
            </ul>
            <h3>PUNHO BIÓTICO (DANO)</h3>
            <ul>
                <li class="cor-azul">Agora incendeia os inimigos, causando 80 de dano por segundo.</li>
                <li class="cor-azul">Dano base reduzido de 65 para 32,5 por segundo.</li>
                <li class="cor-azul">Derruba inimigos que estiverem no ar.</li>
                <li class="cor-azul">Inimigos têm os tempos de recarga das suas habilidades 25% mais lentos.</li>
                <li class="cor-azul">Causa 100% a mais de dano à armaduras.</li>
            </ul>
            <h3>ORBE BIÓTICO</h3>
            <ul>
                <li class="cor-verde">Capacidade máxima de cura e dano aumentado em +50%.</li>
                <li class="cor-azul">Velocidade do projétil reduzido em -50%.</li>
            </ul>
        `
    },
    "Zenyatta": {
        img: "Imagem dos Heróis/Zenyatta.png",
        texto: `
            <h3>PLANADOR</h3>
            <ul>
                <li>Zenyatta foi adicionado à subclasse de Planadores.</li>
            </ul>
            <h3>VIDA</h3>
            <ul>
                <li class="cor-verde">Vida base aumentada de 75 para 100. Total: 275.</li>
            </ul>
            <h3>NOVA PASSIVA</h3>
            <ul>
                <li class="cor-verde">Ganha uma aura de conversão de dano para cura (15m).</li>
                <li class="cor-verde">Converte 25% do dano recebido em cura (ignora a passiva de redução de cura global).</li>
                <li class="cor-laranja">Implantáveis como sentinelas da Symmetra, torreta do Torbjörn e o B.O.B. não ativam a passiva.</li>
            </ul>
        `
    }
};