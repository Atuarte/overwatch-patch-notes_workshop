const bancoDeDados = {

    // ==========================================
    // TANQUES (OFENSIVOS)
    // ==========================================
    "D.Va": {
        img: "Imagem dos Heróis/D.Va.png",
        texto: `
            <h3><img src="Habilidades e Perks/Ícone Ofensivos.png" class="icone-habilidade"> OFENSIVA</h3>
            <ul>
                <li>Tamanho e hitbox aumentados em 3%.</li>
                <li>Velocidade de movimento aumentada de 5,5 para 6,05 (10%).</li>
                <li>Vida base reduzida de 350 para 200.</li>
            </ul>
            <h3><img src="Habilidades e Perks/D.Va - Matriz de Defesa.png" class="icone-habilidade"> MATRIZ DE DEFESA</h3>
            <ul>
                <li>Taxa de recarga reduzida em 85%.</li>
                <li>15% de todo o dano causado pela D.Va vira recurso para a Matriz de Defesa.</li>
            </ul>
            <h3><img src="Habilidades e Perks/D.Va - Propulsores.png" class="icone-habilidade"> PROPULSORES</h3>
            <ul>
                <li>Tempo de recarga de propulsores reduzido de 4 para 3,4 segundos (15%).</li>
            </ul>
            <h3><img src="Habilidades e Perks/D.Va - Chamar Mecha.png" class="icone-habilidade"> CHAMAR MECHA</h3>
            <ul>
                <li>D.Va agora sempre nascerá e renascerá sem seu Mecha.</li>
            </ul>
        `
    },
    "Doomfist": {
        img: "Imagem dos Heróis/Doomfist.png",
        texto: `
            <h3><img src="Habilidades e Perks/Ícone Ofensivos.png" class="icone-habilidade"> OFENSIVO</h3>
            <ul>
                <li>Doomfist não recebe a redução de tamanho e na hitbox.</li>
                <li>Velocidade de movimento aumentada de 5,5 para 6,05 (10%).</li>
                <li>Vida base reduzida de 525 para 225.</li>
                <li>Escudos aumentados de 0 para 150. Total: 375.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Doomfist - A Melhor Defesa....png" class="icone-habilidade" style="height: 40px;">A MELHOR DEFESA... (PASSIVA)</h3>
            <ul>
                <li>Vida extra gerada reduzida em 40%.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Doomfist - Soco Foguete.png" class="icone-habilidade"> SOCO FOGUETE</h3>
            <ul>
                <li>Tempo de recarga reduzido de 4 para 3,4 segundos (15%).</li>
                <li>Recupere 30 de vida por cada inimigo acertado. Aliados à 8 metros do Doomfist recebem 50% da cura.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Doomfist - Abalo Sísmico.png" class="icone-habilidade"> ABALO SÍSMICO</h3>
            <ul>
                <li>Tempo de recarga reduzido de 6,5 para 5,525 segundos (15%).</li>
                <li>Recupere 30 de vida por cada inimigo acertado. Aliados à 8 metros do Doomfist recebem 50% da cura.</li>
            </ul>
        `
    },
    "Hazard": {
        img: "Imagem dos Heróis/Hazard.png",
        texto: `
            <h3><img src="Habilidades e Perks/Ícone Ofensivos.png" class="icone-habilidade"> OFENSIVO</h3>
            <ul>
                <li>Tamanho e hitbox reduzido em 3%.</li>
                <li>Velocidade de movimento aumentada de 5,5 para 6,05 (10%).</li>
                <li>Vida base reduzida de 425 para 200.</li>
                <li>Armadura reduzida de 225 para 175. Total: 375.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Hazard - Salto Brutal.png" class="icone-habilidade"> SALTO BRUTAL</h3>
            <ul>
                <li>Tempo de recarga reduzido de 5,5 para 4,95 segundos (10%).</li>
            </ul>
        `
    },
    "Orisa": {
        img: "Imagem dos Heróis/Orisa.png",
        texto: `
            <h3><img src="Habilidades e Perks/Ícone Ofensivos.png" class="icone-habilidade"> OFENSIVA</h3>
            <ul>
                <li>Tamanho e hitbox reduzido em 3%.</li>
                <li>Vida base reduzida de 300 para 175.</li>
                <li>Armadura reduzida de 300 para 225. Total: 400.</li>
                <li>Velocidade de movimento aumentada de 5,5 para 6,05 (10%).</li>
            </ul>
            <h3><img src="Habilidades e Perks/Orisa - Fortificar.png" class="icone-habilidade"> FORTIFICAR</h3>
            <ul>
                <li>Orisa agora acumula o dano recebido durante o fortificar, liberando 50% do dano acumulado como cura e dano instantâneos num raio de 8m.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Orisa - Giro do Dardo.png" class="icone-habilidade"> GIRO DO DARDO</h3>
            <ul>
                <li>Tempo de recarga reduzido de 8 para 6 segundos.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Orisa - Barreira Protetora.png" class="icone-habilidade"> BARREIRA PROTETORA - PERK MAIOR</h3>
            <ul>
                <li>Vida reduzida de 600 para 450.</li>
                <li>Tempo de recarga reduzido de 8 para 6 segundos.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Orisa - Rompante Terrano.png" class="icone-habilidade"> ROMPANTE TERRANO</h3>
            <ul>
                <li>Puxar os inimigos à Orisa agora os atordoa por 0,25s.</li>
            </ul>
        `
    },
    "Rainha Junker": {
        img: "Imagem dos Heróis/Rainha Junker.png",
        texto: `
            <h3><img src="Habilidades e Perks/Ícone Ofensivos.png" class="icone-habilidade"> OFENSIVA</h3>
            <ul>
                <li>Tamanho e hitbox reduzidos em 3%.</li>
                <li>Velocidade de movimento aumentada de 5,5 para 6,05 (10%).</li>
                <li>Vida base reduzida de 525 para 375.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Rainha Junker - Grito de Guerra.png" class="icone-habilidade"> GRITO DE GUERRA</h3>
            <ul>
                <li>Tempo de recarga reduzido de 10 para 7,5 segundos (25%).</li>
                <li>Nova mecânica: Agora causa sangramento a todos os inimigos atingidos no raio da habildade (15m).</li>
                <li>Dano: 15 de dano por segundo.</li>
                <li>Duração: 4 segundos (60 de dano total).</li>
                <li>Nova mecânica: 100% do dano de sangramento causado por esta habilidade é convertido em cura para a Rainha Junker e para os aliados no raio da habildade.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Rainha Junker - Carnificina.png" class="icone-habilidade"> CARNIFICINA</h3>
            <ul>
                <li>Nova mecânica: O impacto inicial do machado agora causa dano adicional instantâneo equivalente a 15% da vida máxima do alvo atingido.</li>
                <li>Tempo de recarga aumentado de 9 para 10,8 segundos (120%).</li>
            </ul>
        `
    },
    "Roadhog": {
        img: "Imagem dos Heróis/Roadhog.png",
        texto: `
            <h3><img src="Habilidades e Perks/Ícone Ofensivos.png" class="icone-habilidade"> OFENSIVO</h3>
            <ul>
                <li>Tamanho e hitbox reduzidos em 3%.</li>
                <li>Velocidade de movimento aumentada de 5,5 para 6,05 (10%).</li>
                <li>Vida base reduzida de 750 para 300.</li>
                <li>Escudos aumentados de 0 para 200. Total: 500.</li>
            </ul>
        `
    },
    "Winston": {
        img: "Imagem dos Heróis/Winston.png",
        texto: `
            <h3><img src="Habilidades e Perks/Ícone Ofensivos.png" class="icone-habilidade"> OFENSIVO</h3>
            <ul>
                <li>Tamanho e hitbox reduzido em 3%.</li>
                <li>Velocidade de movimento aumentada de 5,5 para 6,05 (10%).</li>
                <li>Vida base reduzida de 425 para 200.</li>
                <li>Armadura reduzida de 225 para 175. Total: 375.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Winston - Canhão de Tesla.png" class="icone-habilidade"> CANHÃO DE TESLA</h3>
            <ul>
                <li>Agora tem um dano adicional de 3% da vida máxima do alvo.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Winston - Salto a Jato.png" class="icone-habilidade"> SALTO A JATO</h3>
            <ul>
                <li>Tempo de recarga reduzido de 5s para 4,5s (10%).</li>
            </ul>
            <h3><img src="Habilidades e Perks/Winston - Projetor de Barreira.png" class="icone-habilidade"> PROJETOR DE BARRERA</h3>
            <ul>
                <li>Tempo de recarga reduzido de 12s para 7,2s (40%).</li>
                <li>Vida reduzida de 650 para 450.</li>
            </ul>
        `
    },
    "Wrecking Ball": {
        img: "Imagem dos Heróis/Wrecking Ball.png",
        texto: `
            <h3><img src="Habilidades e Perks/Ícone Ofensivos.png" class="icone-habilidade"> OFENSIVO</h3>
            <ul>
                <li>Tamanho e hitbox reduzido em 3%.</li>
                <li>Velocidade de movimento aumentada de 5,5 para 6,05 (10%).</li>
                <li>Vida base reduzida de 450 para 150.</li>
                <li>Escudos aumentados de 150 para 175. Total: 450.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Wrecking Ball - Bate-Estaca.png" class="icone-habilidade"> BATE-ESTACA</h3>
            <ul>
                <li>Tempo de recarga reduzido de 8 para 7,2 segundos (10%).</li>
            </ul>
            <h3><img src="Habilidades e Perks/Wrecking Ball - Garra.png" class="icone-habilidade"> GARRA</h3>
            <ul>
                <li>Tempo de recarga da Garra reduzido de 5 para 4,5 segundos (10%).</li>
            </ul>
            <h3><img src="Habilidades e Perks/Wrecking Ball - Escudos Adaptativos.png" class="icone-habilidade"> ESCUDOS ADAPTATIVOS</h3>
            <ul>
                <li>Vida extra gerada por cada inimigo reduzida de 100para 50.</li>
            </ul>
        `
    },

    // ==========================================
    // TANQUES (DEFENSIVOS)
    // ==========================================
    "D.Mon": {
        img: "Imagem dos Heróis/D.Mon.png",
        texto: `
            <h3><img src="Habilidades e Perks/Ícone Defensivos.png" class="icone-habilidade"> DEFENSIVA</h3>
            <ul>
                <li>Tamanho e hitbox aumentados em 3%.</li>
                <li>Vida base reduzida de 425 para 275. Total: 600.</li>
                <li>Geração de suprema por combate reduzido em 15%.</li>
            </ul>
        `
    },
    "Domina": {
        img: "Imagem dos Heróis/Domina.png",
        texto: `
            <h3><img src="Habilidades e Perks/Ícone Defensivos.png" class="icone-habilidade"> <img src="Habilidades e Perks/Ícone Planadores.png" class="icone-habilidade"> DEFENSIVA E PLANADORA</h3>
            <ul>
                <li>Tamanho e hitbox aumentados em +3%.</li>
                <li>Vida base reduzida de 250 para 100. Total: 500.</li>
                <li>Geração de suprema por combate reduzido em 15%.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Domina - Magnum de Fótons.png" class="icone-habilidade"> MAGNUM DE FÓTONS</h3>
            <ul>
                <li>Multiplicador de dano crítico aumentado de 1,5x para 2,0x.</li>
                <li>Munição aumentada de 100 para 120.</li>

            </ul>
        `
    },
    "Mauga": {
        img: "Imagem dos Heróis/Mauga.png",
        texto: `
            <h3><img src="Habilidades e Perks/Ícone Defensivos.png" class="icone-habilidade"> DEFENSIVO</h3>
            <ul>
                <li>Tamanho e hitbox aumentados em 3%.</li>
                <li>Vida base reduzida de 575 para 425. Total: 575.</li>
                <li>Munição aumentada de 300 para 375.</li>
                <li>Geração de suprema por combate reduzido em 15%.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Mauga - Passiva.png" class="icone-habilidade" style="height: 40px;">NOVA PASSIVA</h3>
            <ul>
                <li>Ao ficar com 50% ou menos de vida, os inimigos à 10 metros do Mauga serão incendiados automaticamente, causando 18 de dano por segundo.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Mauga - Metralhadora Incediária - Sasha.png" class="icone-habilidade" style="height: 75px;">METRALHADORA INCENDIÁRIA - SASHA</h3>
            <ul>
                <li>Não incendeia mais os inimigos.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Mauga - Sobrecarga Cardíaca.png" class="icone-habilidade"> SOBRECARGA CARDÍACA</h3>
            <ul>
                <li>Incendeia os inimigos na área da Sobrecarga, causando 18 de dano por segundo.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Mauga - Mano a Mano.png" class="icone-habilidade"> MANO A MANO</h3>
            <ul>
                <li>Reseta a Sobrecarga Cardíaca.</li>
            </ul>
        `
    },
    "Mei": {
        img: "Imagem dos Heróis/Mei.png",
        texto: `
            <h3>A Mei foi adicionada aos tanques defensivos.</h3>
            <h3><img src="Habilidades e Perks/Ícone Defensivos.png" class="icone-habilidade"> DEFENSIVA</h3>
            <ul>
                <li>Tamanho e hitbox aumentados em 25%.</li>
                <li>Escudos aumentados de 0 para 175. Total: 475</li>
                <li>Mei recebe a passiva Especialidade da sub-role dos dps's</li>
            </ul>
            <h3><img src="Habilidades e Perks/Mei - Aniquilador Endotérmico.png" class="icone-habilidade" style="height: 40px;"> ANIQUILADOR ENDOTÉRMICO</h3>
            <ul>
                <li>Mei ganha 25% de roubo de vida.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Mei - Pingente de Gelo.png" class="icone-habilidade" style="height: 40px;"> PINGENTE DE GELO</h3>
            <ul>
                <li>Velocidade do projétil reduzida em 30%.</li>
                <li>Munição gasta aumentada de 10 para 20.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Mei - Muralha de Gelo.png" class="icone-habilidade"> MURALHA DE GELO</h3>
            <ul>
                <li>Tamanho aumentado em 25%.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Mei - Congelamento Criogênico.png" class="icone-habilidade"> CONGELAMENTO CRIOGÊNICO</h3>
            <ul>
                <li>Tamanho do gelo aumentadeo em 25%.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Mei - Nevasca.png" class="icone-habilidade"> NEVASCA</h3>
            <ul>
                <li>Velocidade do projétil reduzida em 30%.</li>
                <li>Não recebe a redução na geração da suprema da passiva dos defensivos.</li>
                <li>Gravidade do projétil reduzida em 30%.</li>
                <li>Agora causa 6% da vida máxima do alvo por segundo.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Mei - Tempestade Criogênica.png" class="icone-habilidade"> TEMPESTADE CRIOGÊNICA - PERK MAIOR</h3>
            <ul>
                <li>Agora congela os inimigos próximos por 0,75s instantaneamente.</li>
            </ul>
        `
    },
    "Ramattra": {
        img: "Imagem dos Heróis/Ramattra.png",
        texto: `
            <h3><img src="Habilidades e Perks/Ícone Defensivos.png" class="icone-habilidade"> DEFENSIVO</h3>
            <ul>
                <li>Tamanho e hitbox aumentado em 3%.</li>
                <li>Vida base reduzida de 425 para 275. Total: 375.</li>
                <li>Geração de suprema por combate reduzido em 15%.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Ramattra - Acelerador do Vazio.png" class="icone-habilidade"> ACELERADOR DO VAZIO</h3>
            <ul>
                <li>Munição aumentada de 100 para 150.</li>
                <li>Dano causado reduzido de 5 para 4.</li>
                <li>Velocidade do projétil aumentada em 100%.</li>
            </ul>
        `
    },
    "Reinhardt": {
        img: "Imagem dos Heróis/Reinhardt.png",
        texto: `
            <h3><img src="Habilidades e Perks/Ícone Defensivos.png" class="icone-habilidade"> DEFENSIVO</h3>
            <ul>
                <li>Tamanho e hitbox aumentados em 3%.</li>
                <li>Vida base reduzida de 400 para 250. Total: 550.</li>
                <li>Geração de suprema por combate reduzido em 15%.</li>
            </ul>
            <h3>ROBUZTEZ (SUBFUNÇÃO)</h3>
            <ul>
                <li>Resistência a repulsão do Reinhardt aumentada de 40% para 75%.</li>
            </ul>
        `
    },
    "Sigma": {
        img: "Imagem dos Heróis/Sigma.png",
        texto: `
            <h3><img src="Habilidades e Perks/Ícone Defensivos.png" class="icone-habilidade"> <img src="Habilidades e Perks/Ícone Planadores.png" class="icone-habilidade"> DEFENSIVO E PLANADOR</h3>
            <ul>
                <li>Tamanho e hitbox aumentados em 3%.</li>
                <li>Vida base reduzida de 350 para 200.</li>
                <li>Escudos aumentados de 250 para 275. Total: 475.</li>
                <li>Geração de suprema por combate reduzido em 15%.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Sigma - Punho Cinético.png" class="icone-habilidade"> PUNHO CINÉTICO</h3>
            <ul>
                <li>Tempo de recarga aumentado de 12 para 15 segundos.</li>
                <li><strong>Novo Efeito Gravitacional:</strong> Agora aplica um efeito de atração contínuo em todos os inimigos localizados dentro de um cone de 90 graus diretamente à frente de Sigma. Ignora efeitos de imparável/irrefreável.</li>
                <li>Alcance Máximo: 20 metros.</li>
                <li><strong>Mecânica de Tração:</strong> O puxão cancela a força de movimento contrária do alvo, exigindo o uso de habilidades de movimentação para escapar do eixo de atração.</li>
                <li><strong>Escala de Distância:</strong> A velocidade do puxão agora é calculada dinamicamente com base em 4 estágios de proximidade:
                    <ul>
                        <li>De 0 a 5 metros: Força de tração 10.</li>
                        <li>De 5 a 10 metros: Força de tração 7.</li>
                        <li>De 10 a 15 metros: Força de tração 4.</li>
                        <li>De 15 a 20 metros: Força de tração 2.</li>
                    </ul>
                </li>
            </ul>
        `
    },
    "Zarya": {
        img: "Imagem dos Heróis/Zarya.png",
        texto: `
            <h3><img src="Habilidades e Perks/Ícone Defensivos.png" class="icone-habilidade"> DEFENSIVA</h3>
            <ul>
                <li>Tamanho e hitbox aumentados em 3%.</li>
                <li>Vida base reduzida de 325 para 175. Total: 400.</li>
                <li>Geração de suprema por combate reduzido em 15%.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Zarya - Canhão de partículas.png" class="icone-habilidade"> CANHÃO DE PARTÍCULAS</h3>
            <ul>
                <li>Munição aumentada de 100 para 125.</li>
                <li>Agora tem um sistema de superaquecimento.</li>
                <li>Não possui mais recarga manual e nem automática. Se a Zarya parar de usar sua arma, depois de 0,3 segundo ela recupera 50 de munição por segundo.</li>
                <li>Ao superaquecer o Canhão de Partículas, Zarya fica impossibilitada de usar sua arma e a Barreira de Partículas e recebe 50% a menos de cura por 2,5 segundos. Depois disso, ela recupera 100% da sua munição.</li>
            </ul>
        `
    },

    // ==========================================
    // DPS
    // ==========================================
    "Anran": {
        img: "Imagem dos Heróis/Anran.png",
        texto: `
            <h3><img src="Habilidades e Perks/Ícone Duelistas.png" class="icone-habilidade"> DUELISTA</h3>
            <ul>
                <li>Vida reduzida de 250 para 200.</li>
            </ul>
        `
    },
    "Ashe": {
        img: "Imagem dos Heróis/Ashe.png",
        texto: `
            <h3>VIDA</h3>
            <ul>
                <li>Vida base reduzida de 250 para 225.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Ashe - Víbora.png" class="icone-habilidade"> VÍBORA</h3>
            <ul>
                <li>Acertos críticos devolvem 1 de munição.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Ashe - Mirar.png" class="icone-habilidade" style="height: 40px;"> MIRAR</h3>
            <ul>
                <li>Tiros consomem 2 de munição.</li>
                <li>Acertos críticos consomem 1 de munição.</li>
                <li>Dano aumentado de 75 para 100.</li>
                <li>Multiplicador de dano crítico reduzido de 2.0x para 1.5x</li>
            </ul>
            <h3><img src="Habilidades e Perks/Ashe - B.O.B..png" class="icone-habilidade"> B.O.B.</h3>
            <ul>
                <li>Vida do B.O.B. reduzida de 1000 para 900.</li>
                <li>Duração máxima aumentada de 10 para 12 segundos.</li>
            </ul>
        `
    },
    "Cassidy": {
        img: "Imagem dos Heróis/Cassidy.png",
        texto: `
            <h3>VIDA</h3>
            <ul>
                <li>Vida base aumentada de 250 para 275.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Cassidy - Pacificador.png" class="icone-habilidade"> PACIFICADOR</h3>
            <ul>
                <li>Dano reduzido de 70 para 56.</li>
                <li>Multiplicador de dano crítico aumentado de 2 para 2.5x (headshot de 140).</li>\
                <li>Munição aumentada de 6 para 10.</li>
                <li>Acertos críticos consomem o dobro de munição.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Cassidy - Clarão.png" class="icone-habilidade">CLARÃO</h3>
            <ul>
                <li>Dano reduzido de 75 para 60.</li>
                <li>Tempo de recarga aumentado de 12 para 15 segundos.</li>
                <li>Desabilita a HUD dos inimigos por 1,2 segundos. O alvo receberá um efeito de "cegueira" temporária.</li>
                <li>Cassidy aplica um micro-stun de 0,016s (1 frame do jogo) cancelando algumas habilidades.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Cassidy - Tiro Certeiro.png" class="icone-habilidade"> TIRO CERTEIRO</h3>
            <ul>
                <li>Dano reduzido em 20%.</li>
                <li>Cassidy ganha 125 de vida extra que não decai com o tempo.</li>
            </ul>
        `
    },
    "Echo": {
        img: "Imagem dos Heróis/Echo.png",
        texto: `
            <h3><img src="Habilidades e Perks/Ícone Duelistas.png" class="icone-habilidade"> <img src="Habilidades e Perks/Ícone Planadores.png" class="icone-habilidade"> DUELISTA E PLANADORA</h3>
            <ul>
                <li>Vida base reduzida de 150 para 100.</li>
                <li>Escudos aumentados de 75 para 100. Total: 200.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Echo - Duplicar.png" class="icone-habilidade"> DUPLICAR</h3>
            <ul>
                <li>Por causa de uma regra do workshop, Echo, ao Duplicar, fica com 60% a menos de vida com um adicional de 70 de escudos e 40 de vida.</li>
                <li>Custo da suprema reduzido em 15%.</li>
            </ul>
        `
    },
    "Emre": {
        img: "Imagem dos Heróis/Emre.png",
        texto: `
            <h3>VIDA</h3>
            <ul>
                <li>Vida aumentada de 250 para 275.</li>
            </ul>
        `
    },
    "Freja": {
        img: "Imagem dos Heróis/Freja.png",
        texto: `
            <h3><img src="Habilidades e Perks/Ícone Duelistas.png" class="icone-habilidade"> DUELISTA</h3>
            <ul>
                <li>Vida reduzida de 225 para 200.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Freja - Preparar e Apontar.png" class="icone-habilidade"> PREPARAR E APONTAR</h3>
            <ul>
                <li>Tempo de recarga aumentado em 25%.</li>
                <li>Duração do Preparar e Apontar reduzido em 50%.</li>
            </ul>
        `
    },
    "Genji": {
        img: "Imagem dos Heróis/Genji.png",
        texto: `
            <h3><img src="Habilidades e Perks/Ícone Duelistas.png" class="icone-habilidade"> DUELISTA</h3>
            <ul>
                <li>Vida reduzida de 250 para 225.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Genji - Desviar.png" class="icone-habilidade"> DESVIAR</h3>
            <ul>
                <li>Tempo de recarga aumentado de 8 para 10s.</li>
                <li>Todo dano defletido será aumentado em 50%.</li>
            </ul>
        `
    },
    "Pharah": {
        img: "Imagem dos Heróis/Pharah.png",
        texto: `
            <h3><img src="Habilidades e Perks/Ícone Duelistas.png" class="icone-habilidade"> DUELISTA</h3>
            <ul>
                <li>Vida reduzida de 225 para 200.</li>
            </ul>

            <h3><img src="Habilidades e Perks/Pharah - Suspensão a Jato.png" class="icone-habilidade"> SUSPENSÃO A JATO</h3>
            <ul>
                <li>Aceleração escalar vertical aumentada em 20%.</li>
                <li>Taxa de recarga aumentada em 20%.</li>
                <li>Tempo máximo aumentado em 20%.</li>
            </ul>

            <h3><img src="Habilidades e Perks/Pharah - Salto Foguete.png" class="icone-habilidade"> SALTO FOGUETE</h3>
            <ul>
                <li>Aceleração escalar aumentada em 20%.</li>
            </ul>
        `
    },
    "Reaper": {
        img: "Imagem dos Heróis/Reaper.png",
        texto: `
            <h3><img src="Habilidades e Perks/Ícone Duelistas.png" class="icone-habilidade"> DUELISTA</h3>
            <ul>
                <li>Vida reduzida de 275 para 250.</li>
            </ul>
        `
    },
    "Sierra": {
        img: "Imagem dos Heróis/Sierra.png",
        texto: `
            <h3><img src="Habilidades e Perks/Ícone Duelistas.png" class="icone-habilidade"> DUELISTA</h3>
            <ul>
                <li>Vida reduzida de 250 para 225.</li>
            </ul>
        `
    },
    "Sojourn": {
        img: "Imagem dos Heróis/Sojourn.png",
        texto: `
            <h3>VIDA</h3>
            <ul>
                <li>Vida aumentadada de 225 para 250.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Sojourn - Canhão Elétrico.png" class="icone-habilidade"> CANHÃO ELÉTRICO</h3>
            <ul>
                <li>Munição aumentada de 45 para 60.</li>
                <li>Velocidade de projétil aumentada em 30%.</li>
                <li>Geração de energia para o Tiro Carregado reduzido de 5 para 2 no corpo, 10 para 4 na cabeça e 1 para 0,4 em barreiras e implantáveis.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Sojourn - Tiro Carregado.png" class="icone-habilidade" style="height: 40px;">TIRO CARREGADO</h3>
            <ul>
                <li>Multiplicador de dano crítico aumentado de 1.5x para 2x.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Sojourn - Disparo Disruptivo.png" class="icone-habilidade"> DISPARO DISRUPTIVO</h3>
            <ul>
                <li>Velocidade do projétil aumentado em 30%.</li>
            </ul>
        `
    },
    "Symmetra": {
            img: "Imagem dos Heróis/Symmetra.png",
            texto: `
                <h3>VIDA E OUTROS ATRIBUTOS</h3>
                <ul>
                    <li>Vida base aumentada de 125 para 150. Total: 300.</li>
                    <li>Tamanho e hitbox aumentados em 12,5%.</li>
                </ul>
                <h3><img src="Habilidades e Perks/Symmetra - Projetor de Fótons.png" class="icone-habilidade"> PROJETOR DE FÓTONS</h3>
                <ul>
                    <li>Alcance do disparo primário foi aumentado de 12m para 13,5m.</li>
                    <li>Dano reduzido de 60/120/180 para 45/90/135.</li>
                    <li>Nova mecânica: O feixe do projetor de fótons agora tem um dano adicional de 10% da vida máxima do alvo.</li>
                </ul>
                <h3><img src="Habilidades e Perks/Symmetra - Disparo Secundário.png" class="icone-habilidade" style="height: 45px;"> DISPARO SECUNDÁRIO</h3>
                <ul>
                    <li>Dano de impacto reduzido de 50 para 37,5.</li>
                    <li>Dano de explosão aumentado de 50 para 62,5. Totalizando 100 de dano.</li>
                    <li>Velocidade do projétil aumentada em 60%.</li>
                </ul>
                <h3><img src="Habilidades e Perks/Symmetra - Torre de Sentinela.png" class="icone-habilidade"> TORRE DE SENTINELA</h3>
                <ul>
                    <li>Dano reduzido de 30 para 22,5.</li>
                    <li>Velocidade do projétil aumentado em 60%.</li>
                    <li>Tempo de recarga reduzido de 10 para 9 segundos.</li>
                </ul>
                <h3><img src="Habilidades e Perks/Symmetra - Alinhamento Perfeito.png" class="icone-habilidade"> ALINHAMENTO PERFEITO - PERK MENOR</h3>
                <ul>
                    <li>O alcance mámixo da perk funciona sobre o buff da distância máxima do feixe do projetor de fótons, indo de 13,5m para 16,2m.</li>
                </ul>
            `
        },
    "Torbjörn": {
        img: "Imagem dos Heróis/Torbjörn.png",
        texto: `
            <h3><img src="Habilidades e Perks/Torbjörn - Passiva.png" class="icone-habilidade" style="height: 40px;">NOVA PASSIVA</h3>
            <ul>
                <li>Toda a vez que Torbjörn e seus aliados nascerem e renascerem, eles ganham 100 de armadura extra não regenerável.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Torbjörn - Sobrecarga.png" class="icone-habilidade"> SOBRECARGA</h3>
            <ul>
                <li>Tempo de recarga aumentado de 10 para 12,5s.</li>
                <li>Duração aumentada de 6 para 7,5s.</li>
                <li>Aliados à 15m do Torbjörn recebem 75 de cura passiva ao total de 7,5s.</li>
        `
    },
    "Tracer": {
        img: "Imagem dos Heróis/Tracer.png",
        texto: `
            <h3><img src="Habilidades e Perks/Ícone Duelistas.png" class="icone-habilidade"> DUELISTAS</h3>
            <ul>
                <li>A Tracer foi adicionada aos Duelistas.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Tracer - Pistolas Eletromagnéticas.png" class="icone-habilidade"> PISTOLAS ELETROMAGNÉTICAS</h3>
            <ul>
                <li>Munição aumentada de 40 para 50.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Tracer - Teleportar.png" class="icone-habilidade"> TELEPORTAR</h3>
            <ul>
                <li>Tempo de recarga aumentado de 3s para 3,75s.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Tracer - Recordação.png" class="icone-habilidade"> RECORDAÇÃO</h3>
            <ul>
                <li>Tempo de recarga aumentado de 12s para 15s.</li>
            </ul>            
        `
    },
    "Vendetta": {
        img: "Imagem dos Heróis/Vendetta.png",
        texto: `
            <h3><img src="Habilidades e Perks/Ícone Duelistas.png" class="icone-habilidade"> DUELISTA</h3>
            <ul>
                <li>Vida base reduzida de 200 para 100.</li>
                <li>Armadura aumentada de 75 para 125. Total: 225.</li>
            </ul>
        `
    },
    "Venture": {
        img: "Imagem dos Heróis/Venture.png",
        texto: `
            <h3><img src="Habilidades e Perks/Ícone Duelistas.png" class="icone-habilidade"> DUELISTA</h3>
            <ul>
                <li>Vida reduzida de 250 para 225.</li>
            </ul>
        `
    },
    "Widowmaker": {
        img: "Imagem dos Heróis/Widowmaker.png",
        texto: `
            <h3>VIDA</h3>
            <ul>
                <li>Vida máxima reduzida de 225 para 100.</li>
                <li>Escudos aumentados de 0 para 100. Total: 200.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Widowmaker - Mina Venenosa.png" class="icone-habilidade"> MINA VENENOSA</h3>
            <ul>
                <li>100% do dano causado pela Mina vira cura para a Widowmaker.</li>
                <li>Velocidade do projétil aumentada em 50%.</li>
                <li>Gravidade do projétil reduzida em 25%.</li>
            </ul>
        `
    },

    // ==========================================
    // SUPORTES
    // ==========================================
    "Ana": {
        img: "Imagem dos Heróis/Ana.png",
        texto: `
            <h3>RESTAURAÇÃO (SUB-FUNÇÃO)</h3>
            <ul>
                <li>Ana recebe a passiva da sub-role Restauração.</li>
                <li>Curar aliados com sua arma também cura a Ana com 40% da cura.</li>
            </ul>
            <h3>VIDA</h3>
            <ul>
                <li>75 da vida foram convertidos em escudos.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Ana - Rifle Biótico.png" class="icone-habilidade"> RIFLE BIÓTICO</h3>
            <ul>
                <li>Enquanto Ana estiver no modo sem mira, ela ganha 20% de roubo de vida. Não se aplica enquanto estiver mirando!</li>
            </ul>
        `
    },
    "Baptiste": {
        img: "Imagem dos Heróis/Baptiste.png",
        texto: `
            <h3>VIDA</h3>
            <ul>
                <li>Vida aumentada de 250 para 275.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Baptiste - Campo de Imortalidade.png" class="icone-habilidade"> CAMPO DE IMORTALIDADE</h3>
            <ul>
                <li>Vida aumentada de 150 para 165.</li>
            </ul>
        `
    },
    "Brigitte": {
        img: "Imagem dos Heróis/Brigitte.png",
        texto: `
            <h3>VIDA</h3>
            <ul>
                <li>Vida base aumentada de 175 para 200. Total: 275.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Brigitte - Inspirar.png" class="icone-habilidade"> INSPIRAR (PASSIVA)</h3>
            <ul>
                <li>A área do Inspirar agora fica visível para toda a sua equipe.</li>
                <li>20% do dano causado vira cura extra na área do Inspirar.</li>
                <li>Aliados na área recebem 30% a menos de repulsão.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Brigitte - Golpe de Escudo.png" class="icone-habilidade"> GOLPE DE ESCUDO</h3>
            <ul>
                <li>Repulsão causada aumentada em 10%.</li>
                <li>Tempo de recarga aumentado de 5 para 6,25 segundos.</li>
                <li>Cancela habilidades de movimentação.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Brigitte - Disparo Açoitador.png" class="icone-habilidade"> DISPARO AÇOITADOR</h3>
            <ul>
                <li>Repulsão causada aumentada em 10%.</li>
                <li>Tempo de recarga aumentado de 4 para 5 segundos.</li>
                <li>Cancela habilidades de movimentação.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Brigitte - Kit de Reparos.png" class="icone-habilidade"> KIT DE REPAROS</h3>
            <ul>
                <li>Tempo de recarga aumentado de 5 para 10 segundos.</li>
                <li>Agora, ao invés de voltar 1 carga de cada vez, todas voltam juntas.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Brigitte - Reagrupar.png" class="icone-habilidade"> REAGRUPAR</h3>
            <ul>
                <li>Aumenta o tamanho da barreira em 50%.</li>
                <li>Vida da barreira aumentada de 750 para 1200.</li>
                <li>Reagrupar aumenta a vida base máxima de 200 para 275 e a armadura base de 175 para 250, totalizando 525.</li>
                <li>Brigitte e aliados que estiverem na área do Reagrupar (8m) recebem 25 de cura por segundo.</li>
            </ul>
        `
    },
    "Illari": {
        img: "Imagem dos Heróis/Illari.png",
        texto: `
            <h3><img src="Habilidades e Perks/Illari - Rifle Solar.png" class="icone-habilidade"> RIFLE SOLAR</h3>
            <ul>
                <li>Multiplicador de dano critico aumentado de 1.5x para 2x (headshot mínimo de 50 e máximo de 150).</li>
            </ul>
            <h3><img src="Habilidades e Perks/Illari - Disparo Secundário.png" class="icone-habilidade" style="height: 40px;"> DISPARO SECUNDÁRIO</h3>
            <ul>
                <li>Energia solar máxima e recuperação aumentados em 25%.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Illari - Explosão.png" class="icone-habilidade"> EXPLOSÃO</h3>
            <ul>
                <li>Cancela habilidades de movimentação dos inimigos.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Illari - Sol Aprisionado.png" class="icone-habilidade"> SOL APRISIONADO</h3>
            <ul>
                <li>Cura a Illari em 25 de vida por segundo.</li>
                <li>Incendeia inimigos, mas não aplica dano extra.</li>
                <li>Todo dano da suprema desabilita a HUD dos inimigos por 0.5 segundo.</li>
            </ul>
        `
    },
    "Jetpack Cat": {
        img: "Imagem dos Heróis/Jetpack Cat.png",
        texto: `
            <h3>VIDA</h3>
            <ul>
                <li>Vida reduzida de 225 para 100.</li>
                <li>Escudos aumentados de 0 para 100. Total: 200.</li>
            </ul>
        `
    },
    "Juno": {
        img: "Imagem dos Heróis/Juno.png",
        texto: `
        <h3><img src="Habilidades e Perks/Ícone Planadores.png" class="icone-habilidade"> PLANADORA</h3>
        <ul>
            <li>A Juno foi adicionada aos planadores.</li>
        </ul>
        <h3>RESTAURAÇÃO (SUB-FUNÇÃO)</h3>
            <ul>
                <li>Juno recebe a passiva da sub-role Restauração.</li>
                <li>Curar aliados com sua arma também cura a Juno com 40% da cura.</li>
            </ul>
        `
    },
    "Kiriko": {
        img: "Imagem dos Heróis/Kiriko.png",
        texto: `
        <h3><img src="Habilidades e Perks/Kiriko - Ofuda de Cura.png" class="icone-habilidade"> OFUDA DE CURA</h3>
            <ul>
                <li>Velocidade do projétil aumentada em 25%.</li>
            </ul>

        <h3><img src="Habilidades e Perks/Kiriko - Kunai.png" class="icone-habilidade"> KUNAI</h3>
            <ul>
                <li>Velocidade do projétil aumentada em 25%.</li>
            </ul>

        <h3><img src="Habilidades e Perks/Kiriko - Passo Rápido.png" class="icone-habilidade"> PASSO RÁPIDO</h3>
            <ul>
                <li>Distância do salto aumentada de 30m para 36m.</li>
            </ul>

        <h3><img src="Habilidades e Perks/Kiriko - Suzu de Proteção.png" class="icone-habilidade"> SUZU DE PROTEÇÃO</h3>
            <ul>
                <li>Tempo de recarga aumentado de 14 para 28s.</li>
                <li>Nova mecânica de redução dinâmica: Ofuda de cura reduz -0,25s por acerto; Kunai no corpo reduz -1,25s; Kunai na cabeça reduz -2,5s.</li>
            </ul>
        `
    },
    "Lifeweaver": {
        img: "Imagem dos Heróis/Lifeweaver.png",
        texto: `
            <h3>VIDA</h3>
            <ul>
                <li>Escudos aumentados de 50 para 75. Total: 275.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Lifeweaver - Desabrochar Curativo.png" class="icone-habilidade"> DESABROCHAR CURATIVO</h3>
            <ul>
                <li>Velocidade de projétil reduzida em 50%.</li>
                <li>Cura mínima aumentada de 10 para 15 e cura máxima aumentada de 90 para 135 (não é mostrado o novo valor na interface).</li>
            </ul>
            <h3><img src="Habilidades e Perks/Lifeweaver - Saraivada de Espinhos.png" class="icone-habilidade"> SARAIVADA DE ESPINHOS</h3>
            <ul>
                <li>Velocidade de projétil aumentada em 35%.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Lifeweaver - Plataforma de Pétalas.png" class="icone-habilidade"> PLATAFORMA DE PÉTALAS</h3>
            <ul>
                <li>Velocidade de projétil reduzida em 50%.</li>
                <li>Vida aumentada de 300 para 375.</li>
            </ul>
        `
    },
    "Lúcio": {
        img: "Imagem dos Heróis/Lúcio.png",
        texto: `
            <h3><img src="Habilidades e Perks/Lúcio - Transição.png" class="icone-habilidade"> TRANSIÇÃO</h3>
            <ul>
                <li>Cura para os aliados reduzida de 20 para 16 e para o Lúcio reduzida de 12 para 9,6 por segundo.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Lúcio - Solta o Som.png" class="icone-habilidade"> SOLTA O SOM</h3>
            <ul>
                <li>Cura reduzida de 56 para 44,8 por segundo.</li>
                <li>Aliados dentro da área da Transição receberão 100 de escudos decrescentes ao longo de 5s.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Lúcio - Barreira de Som.png" class="icone-habilidade"> BARREIRA DE SOM</h3>
            <ul>
                <li>Agora recupera 100% da vida de todos os aliados instantaneamente.</li>
            </ul>
        `
    },
    "Mercy": {
        img: "Imagem dos Heróis/Mercy.png",
        texto: `
            <h3>VIDA</h3>
            <ul>
                <li>100 de vida foram convertidos em escudos.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Mercy - Ressureição.png" class="icone-habilidade"> RESSURREIÇÃO</h3>
            <ul>
                <li>Concede 50 de vida extra depois da ressurreição com duração máxima de 10 segundos.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Mercy - Vaquíria.png" class="icone-habilidade"> VALQUÍRIA</h3>
            <ul>
                <li>Ao ativar a suprema, corta 50% do tempo de recarga atual da Ressurreição.</li>
                <li>Durante a suprema, a Ressurreição tem seu tempo de recarga 100% mais rápido.</li>
            </ul>
            <h3><img src="Habilidades e Perks/Mercy - Ressureição Angeical.png" class="icone-habilidade"> RESSURREIÇÃO ANGELICAL (PERK MENOR)</h3>
            <ul>
                <li>Vida extra reduzida de 100 para 50.</li>
            </ul>
        `
    },
    "Mizuki": {
        img: "Imagem dos Heróis/Mizuki.png",
        texto: `   
            <h3><img src="Habilidades e Perks/Mizuki - Aura Medicinal.png" class="icone-habilidade"> AURA MEDICINAL</h3>
            <ul>
                <li>10% do dano causado vira cura na área da Aura Medicinal.</li>
            </ul>
        `
    },
    "Moira": {
        img: "Imagem dos Heróis/Moira.png",
        texto: `
            <h3><img src="Habilidades e Perks/Moira - Passiva.png" class="icone-habilidade" style="height: 40px;">ERUPÇÃO BIOTÓXICA (NOVA PASSIVA)</h3>
            <ul>
                <li>Golpes finais geram uma explosão de 5m na vítima que causa 25 de dano e estuna os inimigos próximos.</li>
            </ul>

            <h3><img src="Habilidades e Perks/Moira - Punho Biótico.png" class="icone-habilidade"> PUNHO BIÓTICO</h3>
            <ul>
                <li>Agora incendeia os inimigos, causando 80 de dano por segundo.</li>
            </ul>

            <h3><img src="Habilidades e Perks/Moira - Disparo Secundário.png" class="icone-habilidade" style="height: 40px;">DISPARO SECUNDÁRIO</h3>
            <ul>
                <li>Dano reduzido de 65 para 32,5 por segundo.</li>
                <li>Enquanto a armadura do alvo for maior que 0, ele receberá 100% a mais de dano.</li>
                <li>Acumular 125 de dano no mesmo alvo atordoará ele por 0,75s (exige 250 de dano em alvos com Armaduras).</li>
                <li>Inimigos têm os tempos de recarga das suas habilidades desaceleradas em 25% enquanto mantiver o dano.</li>
                <li>O disparo secundário agora puxa os inimigos à Moira.</li>
            </ul>

            <h3><img src="Habilidades e Perks/Moira - Orbe Biótico.png" class="icone-habilidade"> ORBE BIÓTICO</h3>
            <ul>
                <li>Capacidade máxima de cura e dano aumentado em 50%.</li>
                <li>Velocidade do projétil reduzido em 50%.</li>
            </ul>
        `
    },
    "Sombra": {
    img: "Imagem dos Heróis/Sombra.png",
    texto: `
        <h3><img src="Habilidades e Perks/Sombra - PEM.png" class="icone-habilidade"> PEM</h3>
        <ul>
            <li>Desabilita a HUD dos inimigos por 6 segundos.</li>
            <li>Inimigos hackeados têm suas munições zeradas.</li>
            <li>Drena 25% da carga da suprema dos inimigos atingidos.</li>
        </ul>
    `
    },
        "Wuyang": {
        img: "Imagem dos Heróis/Wuyang.png",
        texto: `
            <h3><img src="Habilidades e Perks/Wuyang - Correnteza Revigorante.png" class="icone-habilidade" style="height: 40px;"> CORRENTEZA REVIGORANTE</h3>
            <ul>
                <li>Taxa de drenagem da correnteza reduzida em 20%.</li>
                <li>Taxa de recarga da correnteza aumentada em 20%.</li>
            </ul>
        `
    },
    "Zenyatta": {
        img: "Imagem dos Heróis/Zenyatta.png",
        texto: `
            <h3><img src="Habilidades e Perks/Ícone Planadores.png" class="icone-habilidade"> PLANADOR</h3>
            <ul>
                <li>Zenyatta foi adicionado à subclasse de Planadores.</li>
            </ul>
            <h3>VIDA</h3>
            <ul>
                <li>Vida base aumentada de 75 para 100. Total: 275.</li>
            </ul>
            <h3>NOVA PASSIVA</h3>
            <ul>
                <li>Ganha uma aura de conversão de dano para cura (15m).</li>
                <li>Converte 25% do dano recebido em cura (ignora a passiva de redução de cura global).</li>
                <li>Implantáveis como sentinelas da Symmetra, torreta do Torbjörn e o B.O.B. não ativam a passiva.</li>
            </ul>
        `
    }
};