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
            <div class="comentarios-atuarte">
                <h4>COMENTÁRIOS DO CRIADOR</h4>
                <p>A D.Va não pode receber qualquer aumento na vida do Meka, pois isso aumentaria também a vida da Baby D.Va. Para compensar, estou aumentando a duração da Matriz de Defesa; agora, ela também concede redução de dano enquanto a habilidade estiver ativa.</p>
            </div>
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
                <li class="cor-azul">Recupere 30 de vida por cada inimigo acertado. Aliados à 8 metros do Doomfist recebem 50% da cura.</li>
            </ul>
            <h3>ABALO SÍSMICO</h3>
            <ul>
                <li class="cor-azul">Tempo de recarga reduzido de 6,5 para 5,525 segundos (-15%).</li>
                <li class="cor-azul">Recupere 30 de vida por cada inimigo acertado. Aliados à 8 metros do Doomfist recebem 50% da cura.</li>
            </ul>
            <div class="comentarios-atuarte">
                <h4>COMENTÁRIOS DO CRIADOR</h4>
                <p>Doomfist é um dos tanques que mais tempo passa longe da sua equipe. Converter parte da sua vida base em escudos ajuda-o a retornar à batalha mais rapidamente, sem depender da ajuda dos suportes, que, na maioria das vezes, não estarão por perto. Para auxiliar ainda mais, ele agora se cura ao causar dano com suas habilidades.</p>
                <p>Para compensar essa série de melhorias, a sua passiva passará a gerar menos vida extra.</p>
            </div>
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
                <li class="cor-azul">Tempo de recarga do Salto Brutal reduzido de 5,5 para 4,95 segundos (-10%).</li>
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
            <div class="comentarios-atuarte">
                <h4>COMENTÁRIOS DO CRIADOR</h4>
                <p>Orisa foi projetada originalmente para ser uma âncora, com um style mais defensivo, mas quero fugir do óbvio onde apenas personagens de alta mobilidade abrem caminho. Escolhi a Orisa devido ao "Giro do Dardo", que permite avançar, tornando-a um tanque híbrido entre ofensiva e defensiva. No entanto, o foco principal dela neste modo de jogo será ofensiva, por isso ela foi movida para a classe dos Ofensivos.</p>
                <p>Para compensar a redução de vida e a falta de mobilidade extrema, a habilidade "Fortificar" agora concede vida extra com base no dano recebido. Toda a vida perdida no momento da ativação será convertida em um valor de vida extra não regenerável (e sim, eu plagiei o Venom do Marvel Rivals).</p>
                <p>A redução na vida base afetou indiretamente a barreira protetora, então reduzi o tempo de recarga tanto da barreira quanto do "Giro do Dardo" para compensar essa mudança. Quanto à sua suprema, adicionei a funcionalidade de atordoar os inimigos durante o puxão, apenas por achar uma adição interessante e funcional para o kit.</p>
            </div>
        `
    },
    "Rainha Junker": {
        img: "Imagem dos Heróis/Rainha Junker.png",
        texto: `
            <h3>OFENSIVA</h3>
            <ul>
                <li class="cor-verde">Tamanho e hitbox reduzidos em -3%.</li>
                <li class="cor-verde">Velocidade de movimento aumentada de 5,5 para 6,05 (+10%).</li>
                <li class="cor-laranja">Vida base reduzida de 525 para 300.</li>
                <li class="cor-verde">Escudos aumentados de 0 para 150. Total: 450.</li>
            </ul>
            <h3>GRITO DE GUERRA</h3>
            <ul>
                <li class="cor-verde">Tempo de recarga reduzido de 10 para 7,5 segundos (-25%).</li>
                <li>Nova mecânica: Agora causa sangramento a todos os inimigos atingidos no raio da habildade (15m).</li>
                <li>Dano: 15 de dano por segundo.</li>
                <li>Duração: 4 segundos (60 de dano total).</li>
                <li class="cor-verde">Nova mecânica: 100% do dano de sangramento causado por esta habilidade é convertido em cura para a Rainha Junker e para os aliados no raio da habildade.</li>
            </ul>
            <h3>CARNIFICINA</h3>
            <ul>
                <li class="cor-verde">Nova mecânica: O impacto inicial do machado agora causa dano adicional instantâneo equivalente a 10% da vida máxima do alvo atingido.</li>
                <li class="cor-laranja">Tempo de recarga aumentado de 9 para 12,15 segundos (+40%).</li>
            </ul>
            <div class="comentarios-atuarte">
                <h4>COMENTÁRIOS DO CRIADOR</h4>
                <p>A Rainha Junker é uma personagem que não se encaixa perfeitamente no papel de tanque defensivo tradicional, por isso, precisava de um caminho definido. Optei pela subclasse de Ofensiva, já que, na minha visão, ela não possui absolutamente nada que a tornaria uma tanque defensiva.</p>
            </div>
        `
    },
    "Roadhog": {
        img: "Imagem dos Heróis/Roadhog.png",
        texto: `
            <h3>OFENSIVO</h3>
            <ul>
                <li>Tamanho e hitbox reduzidos em 3%.</li>
                <li class="cor-verde">Velocidade de movimento aumentada de 5,5 para 6,05 (+10%).</li>
                <li class="cor-verde">Vida base reduzida de 750 para 600.</li>
            </ul>
            <div class="comentarios-atuarte">
                <h4>COMENTÁRIOS DO CRIADOR</h4>
                <p>Precisava de mais tanques nos ofensivos, aí eu escolhi o Roadhog para isso.</p>
            </div>
        `
    },
    "Symmetra": {
        img: "Imagem dos Heróis/Symmetra.png",
        texto: `
            <h3>A Symmetra foi adicionada aos tanques ofensivos.</h3>
            <h3>OFENSIVA</h3>
            <ul>
                <li class="cor-verde">Tamanho e hitbox aumentados em 20%.</li>
                <li class="cor-verde">Velocidade de movimento aumentada de 5,5 para 6,05 (+10%).</li>
                <li class="cor-laranja">Vida base aumentada de 125 para 200.</li>
                <li class="cor-verde">Escudos aumentados de 150 para 225. Total: 425.</li>
            </ul>
            <h3>PROJETOR DE FÓTONS</h3>
            <ul>
                <li class="cor-azul">Dano do disparo primário reduzido de 60/120/180 para 51/102/153.</li>
                <li class="cor-azul">Alcance do disparo primário foi aumentado de 12m para 14,4m.</li>
                <li class="cor-azul">Dano do disparo secundário reduzido de 100 para 85.</li>
                <li class="cor-azul">Velocidade do projétil aumentada em 75%.</li>
            </ul>
            <h3>TORRE DE SENTINELA</h3>
            <ul>
                <li class="cor-azul">Tempo de recarga aumentado de 10 para 10,3 segundos.</li>
                <li class="cor-azul">Velocidade do projétil aumentado em 75%.</li>
                <li class="cor-azul">Dano reduzido de 30 para 25,5.</li>
                <li class="cor-azul">Vida das sentinelas foi aumentada de 40 para 50.</li>
            </ul>
            <h3>TELETRANSPORTADOR</h3>
            <ul>
                <li class="cor-azul">Tempo de recarga reduzido de 12 para 9 segundos.</li>
                <li class="cor-azul">Vida base aumentou de 100 para 125.</li>
                <li class="cor-azul">Escudos aumentados de 200 para 250. Total: 375</li>
            </ul>
            <h3>BARREIRA DE FÓTONS</h3>
            <ul>
                <li class="cor-azul">Vida aumentada de 4000 para 5000.</li>
            </ul>
            <h3>PERK MENOR ***</h3>
            <ul>
                <li class="cor-azul">O alcance mámixo da perk funciona sobre o buff da distância máxima do feixe do projetor de fótons, indo de 14,4m para 17,28m.</li>
            </ul>
            <h3>BARREIRA FLUTUANTE - PERK MAIOR</h3>
            <ul>
                <li class="cor-azul">Vida da barreira aumentou de 600 para 750.</li>
            </ul>
            <div class="comentarios-atuarte">
                <h4>COMENTÁRIOS DO CRIADOR</h4>
                <p>Symmetra tanque 👍</p>
            </div>
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
                <li class="cor-azul">Tempo de recarga do Salto a Jato reduzido de 5 para 4,5 segundos (-10%).</li>
            </ul>
            <h3>CANHÃO DE TESLA</h3>
            <ul>
                <li class="cor-azul">Munição reduzida de 120 para 100.</li>
                <li class="cor-azul">Agora tem um dano adicional de 3% da vida máxima do alvo.</li>
            </ul>
            <div class="comentarios-atuarte">
                <h4>COMENTÁRIOS DO CRIADOR</h4>
                <p>Sendo bem sincero, eu não achava que o Winston estava forte nem fraco; na minha visão, ele estava bem equilibrado. No entanto, devido aos feedbacks da comunidade no último teste realizado em live, apontaram que ele estava com o dano um pouco abaixo do esperado.</p>
                <p>Dado esse feedback, adicionei uma mecânica em que ele causa o seu dano normal somado a um adicional baseado na vida máxima do inimigo. Para não torná-lo forte demais, já que ele passou a causar dano baseado na vida do alvo, reduzi um pouco a sua munição, evitando que ele se torne um DPS com muita vida.</p>
            </div>
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
    "D.Mon": {
        img: "Imagem dos Heróis/D.Mon.png",
        texto: `
            <h3>DEFENSIVA</h3>
            <ul>
                <li>Tamanho e hitbox aumentados em +3%.</li>
                <li class="cor-verde">Vida base reduzida de 425 para 275. Total: 600.</li>
                <li class="cor-laranja">Geração de suprema por combate reduzido em 25%.</li>
            </ul>
            <h3>NOVA PASSIVA</h3>
            <ul>
                <li>D.Mon ganha 25% (pensando em aumentar para 50%) de roubo de vida com todas as suas habilidades.</li>
            </ul>
        `
    },
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
                <li class="cor-azul">Ao ficar com 40% ou menos de vida, os inimigos à 10 metros do Mauga serão incendiados automaticamente, causando 18 de dano por segundo.</li>
            </ul>
            <h3>METRALHADORA INCENDIÁRIA - SASHA</h3>
            <ul>
                <li class="cor-azul">Não incendeia mais os inimigos.</li>
            </ul>
            <h3>SOBRECARGA CARDÍACA</h3>
            <ul>
                <li class="cor-azul">Incendeia os inimigos na área da Sobrecarga, causando 18 de dano por segundo.</li>
            </ul>
            <h3>MANO A MANO</h3>
            <ul>
                <li class="cor-azul">Reseta a Sobrecarga Cardíaca.</li>
            </ul>
            <div class="comentarios-atuarte">
                <h4>COMENTÁRIOS DO CRIADOR</h4>
                <p>Acredito que o que torna o Mauga muito forte é a combinação de muito dano, vida elevada e sobrevivência, especialmente pela passiva da arma que incendeia inimigos e permite causar dano extra a eles. Dito isso, removi o fogo da arma para movê-lo para outras habilidades, pois estas não são usadas o tempo inteiro, diferentemente da arma. Como ele se enquadra como tanque defensivo, ganha um aumento de munição um pouco maior que os outros tanques para ajudar no dano, já que, sem o fogo, sua eficácia cai bastante.</p>
                <p>Também aumentei a armadura dele para auxiliar na sobrevivência, compensando a perda da geração de vida extra que o fogo proporcionava. Essa mecânica ainda continuará no jogo, mas o fogo não virá mais da arma, e sim de suas habilidades ou da nova passiva, que incendiará inimigos próximos. Como ele acaba se prendendo sozinho numa jaula com vários inimigos, criando situações de até seis contra um, ele não teria vantagem alguma e, como tanque principal, cairia rapidamente. O pequeno buff de resetar a Sobrecarga Cardíaca é apenas para dar uma ajuda extra, sem torná-lo forte demais novamente.</p>
            </div>
        `
    },
    "Mei": {
        img: "Imagem dos Heróis/Mei.png",
        texto: `
            <h3>A Mei foi adicionada aos tanques defensivos.</h3>
            <h3>DEFENSIVA</h3>
            <ul>
                <li>Tamanho e hitbox aumentados em 25%.</li>
                <li class="cor-verde">Vida base aumentada de 300 para 575.</li>
                <li class="cor-laranja">*** Mei recebe a passiva da sub-role original dos dps's</li>
            </ul>
            <h3>ARMA***</h3>
            <ul>
                <li class="cor-azul">Velocidade do projétil reduzida em 30%.</li>
                <li class="cor-azul">Munição reduzida de 140 para 70.</li>
            </ul>
            <h3>MURALHA DE GELO</h3>
            <ul>
                <li class="cor-azul">Vida de cada pilar aumentou de 250 para 375.</li>
                <li class="cor-azul">Tamanho aumentado em 25%.</li>
                <li class="cor-azul">Tempo de recarga aumentado de 12 para 18 segundos.</li>
            </ul>
            <h3>CONGELAMENTO CRIOGÊNICO</h3>
            <ul>
                <li class="cor-azul">Tamanho do gelo aumentadeo em 25%.</li>
                <li class="cor-azul">Agora tem uma cura inicial e instantânea de 75 que também cura aliados num raio de 10 metros da Mei</li>
                <li class="cor-azul">Tempo de recarga aumentado de 12s para 15s.</li>
            </ul>
            <h3>BLIZZARD</h3>
            <ul>
                <li class="cor-azul">Velocidade do projétil reduzida em 30%.</li>
                <li class="cor-azul">Não recebe a redução na geração da suprema da passiva dos defensivos.</li>
            </ul>
            <div class="comentarios-atuarte">
                <h4>COMENTÁRIOS DO CRIADOR</h4>
                <p>Mei tanque 👍</p>
            </div>
        `
    },
    "Ramattra": {
        img: "Imagem dos Heróis/Ramattra.png",
        texto: `
            <h3>DEFENSIVO</h3>
            <ul>
                <li>Tamanho e hitbox aumentado em +3%.</li>
                <li class="cor-verde">Vida base reduzida de 425 para 275.</li>
                <li class="cor-verde">Armadura aumentada de 100 para 225. Total: 500.</li>
                <li class="cor-laranja">Geração de suprema por combate reduzido em 25%.</li>
            </ul>
            <h3>ACELERADOR DO VAZIO</h3>
            <ul>
                <li class="cor-azul">Munição aumentada de 100 para 150.</li>
                <li class="cor-azul">Dano causado reduzido de 5 para 4.</li>
                <li class="cor-azul">Velocidade do projétil aumentada em +100%.</li>
            </ul>
            <div class="comentarios-atuarte">
                <h4>COMENTÁRIOS DO CRIADOR</h4>
                <p>Quis fazer com que o Ramattra pudesse lidar um pouco melhor contra heróis voadores sem depender exclusivamente da sua habilidade Vórtice Devorador. Por isso, seu disparo primário agora é 100% mais rápido e conta com mais munição, alinhando-se à sua subfunção de Tanque Defensivo. Contudo, para compensar esses buffs, reduzi o seu dano total.</p>
            </div>
        `
    },
    "Reinhardt": {
        img: "Imagem dos Heróis/Reinhardt.png",
        texto: `
            <h3>DEFENSIVO</h3>
            <ul>
                <li>Tamanho e hitbox aumentados em +3%.</li>
                <li class="cor-verde">Vida base reduzida de 400 para 250.</li>
                <li class="cor-verde">Armadura aumentada de 300 para 425. Total: 675.</li>
                <li class="cor-laranja">Geração de suprema por combate reduzido em 25%.</li>
            </ul>
        `
    },
   "Sigma": {
        img: "Imagem dos Heróis/Sigma.png",
        texto: `
            <h3>DEFENSIVO E PLANADOR</h3>
            <ul>
                <li>Tamanho e hitbox aumentados em +3%.</li>
                <li class="cor-laranja">Vida base reduzida de 350 para 200.</li>
                <li class="cor-verde">Escudos aumentados de 250 para 450. Total: 650.</li>
                <li class="cor-laranja">Geração de suprema por combate reduzido em 25%.</li>
            </ul>
            <h3>PUNHO CINÉTICO</h3>
            <ul>
                <li class="cor-laranja">Tempo de recarga aumentado de 12 para 15 segundos.</li>
                <li class="cor-verde"><strong>Novo Efeito Gravitacional:</strong> Agora aplica um efeito de atração contínuo em todos os inimigos localizados dentro de um cone de 90 graus diretamente à frente de Sigma. Ignora efeitos de imparável/irrefreável.</li>
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
            <div class="comentarios-atuarte">
                <h4>COMENTÁRIOS DO CRIADOR</h4>
                <p>A nova mecânica desenvolvida para o Sigma busca alinhar suas habilidades ao seu imenso poder cósmico e à sua história, garantindo uma jogabilidade divertida e, ao mesmo tempo, equilibrada. Como o Punho Cinético é uma ferramenta defensiva central, aumentei o seu tempo de recarga para tornar o uso da habilidade mais estratégico e impactante. Para compensar a maior vulnerabilidade durante esse período de espera, aumentei sua vida máxima; isso permite que ele se mantenha firme na linha de frente por mais tempo, garantindo que a gestão cuidadosa de seus cooldowns seja recompensada com uma robustez condizente com um tanque de sua magnitude.</p>
            </div>
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
                <li class="cor-azul">Munição aumentada de 100 para 125.</li>
                <li class="cor-azul">Agora tem um sistema de superaquecimento.</li>
                <li class="cor-azul">Não possui mais recarga manual e nem automática. Se a Zarya parar de usar sua arma, depois de 0,3 segundo ela recupera 50 de munição por segundo.</li>
                <li class="cor-azul">Ao superaquecer o Canhão de Partículas, Zarya fica impossibilitada de usar sua arma e a Barreira de Partículas e recebe 50% a menos de cura por 2,5 segundos. Depois disso, ela recupera 100% da sua munição.</li>
            </ul>
            <div class="comentarios-atuarte">
                <h4>COMENTÁRIOS DO CRIADOR</h4>
                <p>A Zarya está forte atualmente, tanto no jogo quanto no último teste realizado. O feedback da comunidade indicou que ela estava muito poderosa, mesmo sem eu ter feito nenhuma alteração direta nela. Por ela já estar forte no jogo base, resolvi implementar uma mudança significativa em sua arma, que é o que acredito torná-la tão dominante.</p>
                <p>A nova mecânica de superaquecimento forçará o jogador a controlar o uso do seu armamento. Baseei esse sistema na mecânica da Orisa, mas com uma punição maior para a Zarya: caso ela superaqueça a arma, não poderá mais atirar, ficará impossibilitada de usar a Barreira de Partículas e ainda sofrerá uma redução na cura recebida.</p>
            </div>
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
            </ul>
            <div class="comentarios-atuarte">
                <h4>COMENTÁRIOS DO CRIADOR</h4>
                <p>A Anran está bem forte atualmente e, com as passivas dos Duelistas, ela ficaria quebrada, por isso ela perde mais vida em relação aos outros Duelistas.</p>
            </div>
        `
    },
    "Ashe": {
        img: "Imagem dos Heróis/Ashe.png",
        texto: `
        <h3>VIDA</h3>
            <ul>
                <li class="cor-verde">Vida base reduzida de 250 para 225.</li>
            </ul>
            <h3>VÍBORA</h3>
            <ul>
                <li class="cor-azul">Acertos críticos devolvem 1 de munição.</li>
                <li class="cor-azul">Mirar consumirá o dobro de munição.</li>
                <li class="cor-azul">Dano do Mirar aumentado de 75 para 100.</li>
                <li class="cor-azul">Multiplicador de dano crítico do Mirar reduzido de 2.0x para 1.5x</li>
            </ul>
            <h3>B.O.B.</h3>
            <ul>
                <li class="cor-azul">Vida do B.O.B. reduzida de XXXX para 900.</li>
                <li class="cor-azul">Duração máxima aumentada de 10 para 12 segundos.</li>
            </ul>
            <div class="comentarios-atuarte">
                <h4>COMENTÁRIOS DO CRIADOR</h4>
                <p>...</p>
            </div>
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
            <div class="comentarios-atuarte">
                <h4>COMENTÁRIOS DO CRIADOR</h4>
                <p>Buscando inspiração em Marvel Rivals, onde grande parte do elenco de duelistas e estrategistas possuem 275 de vida, decidi implementar essa variação para personagens selecionados. O Cassidy foi um dos escolhidos por já ter um histórico com esse patamar de vida. No entanto, como ele já está forte, apenas aumentar sua vida seria um erro; por isso, realizei um rework em quase todo o seu kit.</p>
                <p>Na arma, aumentei a munição e diminuí o dano dos tiros no corpo. O dano de acerto crítico (headshot) permanece o mesmo do jogo padrão, mas, para compensar, cada tiro crítico consome mais munição. A principal diferença de jogabilidade, portanto, será notada nos tiros que não forem críticos, que agora causam menos impacto.</p>
                <p>Quanto à Granada de Clarão, quis trazer de volta o stun característico do Overwatch 1, mas de uma forma equilibrada. Agora, ela aplica um micro-stun junto com um efeito de cegueira, combinando com a temática da habilidade. Por fim, a redução de dano base da arma afetou o Tiro Certeiro; para compensar essa perda de dano na habilidade suprema, o Cassidy agora ganha vida extra que não decai com o tempo ao ativá-la.</p>
            </div>
        `
    },
    "Echo": {
        img: "Imagem dos Heróis/Echo.png",
        texto: `
            <h3>DUELISTA E PLANADORA</h3>
            <ul>
                <li class="cor-verde">Vida base reduzida de 150 para 100.</li>
                <li class="cor-verde">Escudos aumentados de 75 para 100. Total: 200.</li>
            </ul>
            <h3>DUPLICAR</h3>
            <ul>
                <li class="cor-laranja">Por causa de uma regra do workshop, Echo, ao Duplicar, fica com 60% a menos de vida com um adicional de 70 de escudos e 40 de vida.</li>
                <li class="cor-laranja">Custo da suprema reduzido em 15%.</li>
            </ul>
            <div class="comentarios-atuarte">
                <h4>COMENTÁRIOS DO CRIADOR</h4>
                <p>Pela introdução da Echo na subfunção dos Ofensivos, reduzi sua vida, seguindo o padrão aplicado aos demais heróis dessa categoria. Contudo, essa mudança impactou negativamente sua habilidade suprema, deixando-a vulnerável demais ao copiar um alvo. Para compensar essa fragilidade, aumentei a taxa de geração da sua ultimate, permitindo que ela a utilize com mais frequência. Além disso, enquanto estiver transformada no inimigo ou aliado copiado, ela agora carrega a suprema do alvo de forma acelerada.</p>
            </div>
        `
    },
    "Emre": {
        img: "Imagem dos Heróis/Emre.png",
        texto: `
            <h3>VIDA</h3>
            <ul>
                <li class="cor-verde">Vida aumentada de 250 para 275.</li>
            </ul>
            <div class="comentarios-atuarte">
                <h4>COMENTÁRIOS DO CRIADOR</h4>
                <p>Sendo sincero, acredito que o Emre está equilibrado no jogo, não sendo nem muito forte nem muito fraco. Obviamente, nas mãos de jogadores com boa mira, ele se destaca, como ocorre com vários outros personagens. No entanto, devido aos feedbacks da comunidade sobre o último teste, ele foi considerado um pouco fraco. Como ele é um herói relativamente novo no elenco e eu não tenho muita experiência jogando com ele, tive dificuldade em identificar ajustes específicos. Por isso, optei por aumentar sua vida, considerando que ele possui uma altura elevada e uma hitbox considerável. Além disso, para diferenciá-lo, o posicionei como uma versão da Ashe, porém mais voltada para o combate a curta distância.</p>
            </div>
        `
    },
    "Freja": {
        img: "Imagem dos Heróis/Freja.png",
        texto: `
            <h3>DUELISTA</h3>
            <ul>
                <li class="cor-verde">Vida reduzida de 225 para 200.</li>
            </ul>
        `
    },
    "Genji": {
        img: "Imagem dos Heróis/Genji.png",
        texto: `
            <h3>DUELISTA</h3>
            <ul>
                <li class="cor-verde">Vida reduzida de 250 para 225.</li>
            </ul>
            <h3>*** DESVIAR</h3>
            <ul>
                <li>Tempo de recarga aumentado de XX para XX.</li>
                <li>Todo dano defletido será aumentado em 50%.</li>
            </ul>
        `
    },
    "Pharah": {
        img: "Imagem dos Heróis/Pharah.png",
        texto: `
            <h3>DUELISTA</h3>
            <ul>
                <li class="cor-verde">Vida reduzida de 225 para 200.</li>
            </ul>

            <h3>SUSPENSÃO A JATO</h3>
            <ul>
                <li class="cor-azul">Aceleração escalar vertical aumentada em 20%.</li>
                <li class="cor-azul">Taxa de recarga aumentada em 20%.</li>
                <li class="cor-azul">Tempo máximo aumentado em 20%.</li>
            </ul>

            <h3>SALTO FOGUETE</h3>
            <ul>
                <li class="cor-azul">Aceleração escalar aumentada em 20%.</li>
            </ul>
            <div class="comentarios-atuarte">
                <h4>COMENTÁRISE DO CRIADOR</h4>
                <p>Ao ser incluída na subfunção de Duelistas, a Pharah sofreu a redução de vida padrão da categoria. No entanto, essa mudança deixou seu total de vida baixo demais. Para compensar, estou aprimorando a mobilidade de todas as suas habilidades, aumentando tanto a distância quanto a velocidade de deslocamento. Além disso, melhorei o poder ofensivo do seu Lançador de Foguetes para que ela tenha mais chances de ativar a passiva de eliminação dos Duelistas mais rapidamente, garantindo que ela receba a cura e o reset de habilidades necessários para se manter no combate.</p>
            </div>
        `
    },
    "Reaper": {
        img: "Imagem dos Heróis/Reaper.png",
        texto: `
            <h3>DUELISTA</h3>
            <ul>
                <li class="cor-verde">Vida reduzida de 275 para 250.</li>
            </ul>
        `
    },
    "Sierra": {
        img: "Imagem dos Heróis/Sierra.png",
        texto: `
            <h3>DUELISTA</h3>
            <ul>
                <li class="cor-verde">Vida reduzida de 250 para 225.</li>
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
            <div class="comentarios-atuarte">
                <h4>COMENTÁRIOS DO CRIADOR</h4>
                <p>Um dos pontos que torna a Sojourn muito forte atualmente é o seu disparo secundário. A facilidade de carregá-lo e causar um dano absurdo é muito alta, estando disponível praticamente o tempo inteiro. O disparo primário, hoje, acaba servindo quase exclusivamente como uma ferramenta de carga para o secundário, perdendo a sua importância individual na jogabilidade.</p>
                <p>Visando corrigir isso, estou transferindo boa parte do poder do disparo secundário para o primário, aumentando a munição máxima e a velocidade do projétil. Como consequência, reduzi drasticamente a geração de energia para o disparo secundário: agora, o ganho é de apenas 1 de energia por acerto no corpo e 2 por acerto na cabeça (anteriormente 5 e 10, respectivamente).</p>
                <p>Para compensar esse nerf significativo no disparo secundário, o multiplicador de dano crítico agora é de duas vezes. Sobre o Disparo Disruptor, como o aumento na velocidade do projétil da arma afetou o desempenho da habilidade, aumentei o seu tempo de recarga apenas para manter o equilíbrio.</p>
            </div>
        `
    },
    "Sombra": {
        img: "Imagem dos Heróis/Sombra.png",
        texto: `
            <h3>DUELISTA</h3>
            <ul>
                <li class="cor-verde">Vida reduzida de 225 para 200.</li>
            </ul>
            <h3>HACKEAR</h3>
            <ul>
                <li class="cor-azul">Tempo de recarga em inimigos aumentado de 6 para 24 segundos.</li>
                <li class="cor-azul">Golpes finais não reduz o tempo de recarga do Hackear.</li>
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
            <div class="comentarios-atuarte">
                <h4>COMENTÁRIOS DO CRIADOR</h4>
                <p>Enquanto pensava nas mudanças da Sombra, reconheci o desafio real que é balanceá-la, algo que a própria Blizzard enfrenta. Acredito ter chegado a uma versão mais aceitável, mas a confirmação virá apenas após o teste da comunidade. Ela foi movida para a classe de Duelistas e, como a subfunção reduces a vida base, converti parte de sua vida em escudos para auxiliar na sua jogabilidade, já que parte dela depende de se isolar para recuperar vida. Atualmente, a Sombra está fraca e extremamente situacional, beneficiando-se apenas de personagens isolados sem defesas, embora seja odiada por ser irritante.</p>
                <p>O Hack da Sombra faz muito mais sentido se estiver vinculado ao Vírus, e foi exatamente o que fiz. Agora, o Vírus hackeará os inimigos atingidos de forma rápida, servindo especificamente para cancelar habilidades. Como este hack tem um propósito imediato, não possui uma duração prolongada. O Hack padrão da Sombra, por outro lado, ainda existe, mas foi completamente modificado: aumentei o tempo de recarga drasticamente, mais do que triplicando de 6 para 24 segundos. Em contrapartida, ele ganhou benefícios significativos: a duração do silenciamento foi aumentada em quatro vezes e agora o hack também zera a munição dos inimigos.</p>
                <p>Outra forma que encontrei de balanceá-la foi vinculando o tempo de recarga do Translocador e do Vírus. O combo anterior permitia que ela usasse o Vírus, disparasse e fugisse imediatamente com o Translocador, o que a tornava muito opressiva. Agora, você deve escolher entre usar um ou outro. Para compensar essa restrição, ambas as habilidades receberam melhorias. Sobre a habilidade suprema, decidi implementar um sistema de carregamento passivo, que servirá como um teste para avaliar o comportamento dela no jogo.</p>
            </div>
        `
    },

    "Tracer": {
        img: "Imagem dos Heróis/Tracer.png",
        texto: `
            <h3>A Tracer foi adicionada aos Duelistas.</h3>
            <div class="comentarios-atuarte">
                <h4>COMENTÁRIOS DO CRIADOR</h4>
                <p>Mexer nesse boneco é tenso, qualquer coisinha ela fica forte demais. Estou apto para sugestões.</p>
            </div>
        `
    },
    "Vendetta": {
        img: "Imagem dos Heróis/Vendetta.png",
        texto: `
            <h3>DUELISTA</h3>
            <ul>
                <li class="cor-verde">Vida base reduzida de 200 para 100.</li>
                <li class="cor-verde">Armadura aumentada de 75 para 125. Total: 225.</li>
            </ul>
            <div class="comentarios-atuarte">
                <h4>COMENTÁRIOS DO CRIADOR</h4>
                <p>Vendetta perdeu mais vida total em comparação à maioria dos Duelistas, mas ela ganha mais armadura para compensar. Acredito que isso possa equilibrá-la.</p>
            </div>
        `
    },
    "Venture": {
        img: "Imagem dos Heróis/Venture.png",
        texto: `
            <h3>DUELISTA</h3>
            <ul>
                <li class="cor-verde">Vida reduzida de 250 para 225.</li>
            </ul>
            <h3>EXPLORAÇÃO DETERMINADA (PASSIVA)</h3>
            <ul>
                <li class="cor-verde">Geração de escudos reduzida em 10%.</li>
                <li class="cor-verde">Quando tiver mais de 66 de escudos, ganha 1 adicional de 9 de escudos. Escudos totais: 75.</li>
            </ul>
            <div class="comentarios-atuarte">
                <h4>COMENTÁRIOS DO CRIADOR</h4>
                <p>Ao ser introduzide ao elenco de Duelistas, Venture teve a passiva de geração de escudos afetada pela redução de vida da subfunção. Decidi manter essa alteração, visto que o feedback da comunidade no último teste realizado indicou que Venture estava muito forte; assim, esse nerf não intencional foi convertido em uma decisão de design. Para não enfraquecer Venture totalmente, o limite total de 75 escudos foi mantido, mas com uma taxa de geração um pouco mais lenta.</p>
            </div>
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
            <div class="comentarios-atuarte">
                <h4>COMENTÁRIOS DO CRIADOR</h4>
                <p>Widow: 76</p>
            </div>
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
            <h3>*** ARMA</h3>
            <ul>
                <li>Enquanto Ana estiver no modo sem mira, ela ganha 20% de roubo de vida. Não se aplica enquanto estiver mirando!</li>
            </ul>
            <div class="comentarios-atuarte">
                <h4>COMENTÁRIOS DO CRIADOR</h4>
                <p>A Ana, assim como o Zenyatta, sofre pela falta de habilidades de movimentação, o que a torna vulnerável. Embora possua o Dardo Sonífero e a Granada Biótica como ferramentas de defesa, ela já é forte o suficiente; conceder-lhe uma forma de fuga direta poderia torná-la um dos personagens mais poderosos do jogo.</p>
                <p>Para melhorar sua sobrevivência sem elevar seu nível de poder excessivamente, converti parte de sua vida em escudos. Além disso, introduzi a passiva de "Restauração": agora, ao curar aliados — especialmente os tanques —, ela recupera vida própria. Essa mudança a incentiva a abandonar a postura estritamente defensiva de sniper na retaguarda e a jogar de forma mais integrada à equipe, atuando mais próxima ao tanque.</p>
            </div>
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
            <div class="comentarios-atuarte">
                <h4>COMENTÁRIOS DO CRIADOR</h4>
                <p>Seguindo a tendência da Blizzard de sempre dar buffs ao Baptiste sem que ele pareça atingir o ponto ideal, decidi aprimorá-lo também. Para este modo, aumentei a vida tanto do próprio herói quanto do seu Campo de Imortalidade. O Campo funciona quase como uma segunda habilidade suprema não oficial e, se for mal posicionado, é destruído muito rápido. Esse aumento de vida não mudará drasticamente as coisas, mas garantirá uma pequena ajuda, estendendo o tempo que o dispositivo resiste antes de ser quebrado.</p>
                <p>O aumento na vida base do Baptiste foi implementado para melhorar sua sobrevivência no combate direto. Como curar a média e longa distância exige uma mira muito boa, essa mudança permite que ele jogue e cure mais de perto sem sofrer tanto com a exposição. Além disso, a vida extra dará a ele mais confiança para se manter vivo e aplicar mais dano quando necessário.</p>
            </div>
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
                <li class="cor-azul">Aliados na área recebem 30% a menos de repulsão.</li>
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
            <h3>KIT DE REPAROS</h3>
            <ul>
                <li class="cor-azul">Tempo de recarga aumentado de 5 para 10 segundos.</li>
                <li class="cor-azul">Agora, ao invés de voltar 1 carga de cada vez, todas voltam juntas.</li>
            <h3>REAGRUPAR</h3>
            <ul>
                <li class="cor-azul">Aumenta o tamanho da barreira em +50%.</li>
                <li class="cor-azul">Brigitte não receberá repulsão durante o Reagrupar.</li>
                <li class="cor-verde">Reagrupar ativa automaticamente o Inspirar, pulsando a cada segundo 30 de cura instantânea.</li>
            </ul>
            <div class="comentarios-atuarte">
                <h4>COMENTÁRIOS DO CRIADOR</h4>
                <p>A Brigitte foi concebida para ser uma personagem anti-dive, papel que desempenhou tão bem que culminou no infame meta GOATS do Overwatch 1. No entanto, após tantos nerfs ao longo dos anos, ela perdeu sua identidade original, tornando-se ineficaz em impedir avanços, função que o Mitzuki agora desempenha melhor. Mesmo com um kit simples, é difícil extrair valor com ela.</p>
                <p>Para que ela possa atuar na linha de frente sem se tornar excessivamente forte, realizei um rework focado na sua sobrevivência. Aumentei sua armadura e implementei uma nova passiva: o dano que ela causa agora se converte em cura instantânea, facilitando sua sustentação em combate. Para torná-la uma ameaça real aos personagens ágeis, tanto o Disparo Açoitador quanto o Golpe de Escudo agora cancelam habilidades de movimentação.</p>
                <p>Quanto ao gerenciamento de recursos, alterei o funcionamento do Kit de Reparos: todas as cargas agora retornam simultaneamente, mas com o tempo de recarga dobrado. Além disso, para fortalecer seu papel anti-dive, o "Inspirar" recebeu uma representação visual (uma aura), que reduz a repulsão de aliados que estiverem dentro do seu alcance. Por fim, reconhecendo que sua habilidade suprema é considerada a mais fraca entre os suportes, ela também recebeu alguns aprimoramentos para garantir que seu uso tenha um impacto significativo na partida.</p>
            </div>
        `
    },
    "Illari": {
        img: "Imagem dos Heróis/Illari.png",
        texto: `
            <h3>RIFLE SOLAR</h3>
            <ul>
                <li class="cor-azul">Multiplicador de dano crítico aumentado de 1.5 para 1.6x. Headshot mínimo aumentado de 37,5 para 40 e máximo de 112,5 para 120.</li>
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
            <div class="comentarios-atuarte">
                <h4>COMENTÁRIOS DO CRIADOR</h4>
                <p>A Illari é, por essência, uma suporte ofensiva voltada para causar dano. Como as atualizações recentes da Blizzard afetaram sua capacidade ofensiva, decidi fazer alguns ajustes pontuais.</p>
                <p>No Rifle Solar, apliquei um leve ajuste no multiplicador de dano crítico, focando mais no arredondamento dos valores do que em um buff massivo. Além disso, implementei uma mecânica experimental: um sistema de hitscan explosivo. Aproveitando o design visual do projétil, adicionei uma explosão mínima que afeta alvos próximos ao impacto original — lembrando que o alvo atingido diretamente não sofre o dano bônus da explosão, apenas quem estiver no raio de ação.</p>
                <p>Para sua habilidade de movimentação, que considero uma das mais fracas do jogo, adicionei utilidade anti-dive, permitindo que ela lide melhor com agressores. No caso da habilidade suprema, Sol Aprisionado, adicionei uma mecânica de cura própria na ativação; isso garante que ela não desperdice a ultimate caso esteja com pouca vida ou sofro interrupção. Por fim, adicionei um efeito de "realismo" ao causar incêndio: os inimigos atingidos sofrem cegueira temporária e têm a HUD desabilitada, simulando o efeito de receber o impacto direto de um sol.</p>
            </div>
        `
    },
    "Juno": {
        img: "Imagem dos Heróis/Juno.png",
        texto: `
        <h3>A Juno foi adicionada aos planadores.</h3>    
        <h3>RESTAURAÇÃO (PASSIVA)</h3>
            <ul>
                <li>Juno recebe a passiva da sub-role Restauração.</li>
                <li class="cor-verde">Curar aliados com sua arma também cura a Juno com 40% da cura.</li>
            </ul>
            <div class="comentarios-atuarte">
                <h4>COMENTÁRIOS DO CRIADOR</h4>
                <p>Para não ficar restrita apenas à passiva dos seus planadores, adicionei a subfunção "Restauração" à Juno, seguindo a mesma lógica que apliquei à Ana. Essa adição traz um diferencial importante para o kit dela e justifica sua presença nestes patch notes, garantindo que ela tenha uma camada extra de utilidade e sustentabilidade que a diferencia no elenco de suportes.</p>
            </div>
        `
    },
    "Kiriko": {
        img: "Imagem dos Heróis/Kiriko.png",
        texto: `
        <h3>*** SUZU DE PROTEÇÃO</h3>
            <ul>
                <li>Tempo de recarga aumentado de 14 para 31s.</li>
                <li>Nova mecânica de redução dinâmica: *** Ofuda de cura reduz -0,25s por acerto; Kunai no corpo reduz -0,75s; Kunai na cabeça reduz -1,50s.</li>
            </ul>
            <div class="comentarios-atuarte">
                <h4>COMENTÁRIOS DO CRIADOR</h4>
                <p>O Suzu da Kiriko é a habilidade mais forte do jogo há muito tempo. Para não nerfá-la completamente, adicionei uma mecânica que exigirá mais esforço dos jogadores para 'contornar' esse nerf. Agora, a habilidade mais forte do jogo não será mais tão simples de usar.</p>
            </div>
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
                <li class="cor-azul">Velocidade de projétil reduzida em -50%.</li>
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
            <div class="comentarios-atuarte">
                <h4>COMENTÁRIOS DO CRIADOR</h4>
                <p>Lifeweaver é uma bosta! Não vou nem comentar sobre as suas mudanças.</p>
                <p>(Obs.: Me refiro a ele ser uma bosta por conta do seu kit de habilidades, mas eu gosto dele, tá! 👍)</p>
            </div>
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
            <div class="comentarios-atuarte">
                <h4>COMENTÁRIOS DO CRIADOR</h4>
                <p>Com base nos testes recentes e no feedback da comunidade, percebi que o Lúcio não estava em um bom estado. Como o jogo agora é 6v6, manter a cura em 20 por segundo faria com que sua habilidade suprema carregasse rápido demais; por isso, reduzi para 16 por segundo, alinhando-o ao padrão do formato.</p>
                <p>Como essa redução impacta todo o kit, compensei alterando a Onda Sonora: agora, ela concede escudo (vida azul) aos aliados que estiverem à sua frente, num raio de 12 metros, além de aplicar uma cura ao longo do tempo. A cura integrada serve para equilibrar o que foi removido da passiva. A habilidade exige que o aliado esteja no campo de visão, mas não requer mira precisa.</p>
                <p>Por fim, para sua habilidade suprema, decidi reforçar seu papel puramente defensivo. Em resposta aos nerfs recentes da Blizzard na vida extra da Barreira de Som, adicionei um efeito: agora, a suprema recupera 100% da vida dos aliados e do próprio Lúcio, garantindo que o impacto defensivo seja, de fato, decisivo.</p>
            </div>
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
            <div class="comentarios-atuarte">
                <h4>COMENTÁRIOS DO CRIADOR</h4>
                <p>A passiva de regeneração global da Mercy funciona de forma distinta da do restante do elenco (com exceção do Emre): enquanto a maioria começa a regenerar após 6 segundos fora de combate, a Mercy inicia após 3 segundos. Para otimizar isso, converti quase metade da sua vida em escudos, permitindo que ela aproveite melhor esse tempo de recarga acelerado, já que a regeneração de escudos é sincronizada com esse intervalo.</p>
                <p>Devido à redução de vida necessária para essa conversão, a eficácia da "vantagem menor" (Ressurreição Angelical) foi reduzida em 50%. Para compensar, integrei esses 50% de eficácia ao kit padrão da heroína. Dessa forma, caso o jogador opte por selecionar essa vantagem, o efeito é dobrado.</p>
                <p>Quanto à habilidade suprema, meu objetivo foi trazer de volta a essência do "Moth Meta", porém de forma equilibrada. Em vez de resetar a Ressurreição com um tempo de recarga fixo de 10 segundos, a ultimate agora reduz em 50% o tempo de recarga atual da habilidade e acelera sua recarga em 100%. Isso mantém a utilidade da Ressurreição sem torná-la opressiva.</p>
            </div>
        `
    },
    "Mizuki": {
        img: "Imagem dos Heróis/Mizuki.png",
        texto: `
        <h3>VIDA</h3>
            <ul>
                <li class="cor-verde">Vida reduzida de 250 para 100.</li>
                <li class="cor-verde">Escudos aumentados de 0 para 125. Total: 225.</li>
            </ul>    
        <h3>AURA MEDICINAL</h3>
            <ul>
                <li class="cor-verde">10% do dano causado vira cura na área da Aura Medicinal.</li>
                <li class="cor-verde">Cura mínima p/ aliados reduzida (5 para 4) e máxima (20 para 16). Para o Mizuki, cura mínima reduzida (3,5 para 2,8) e máxima (14 para 11,2) por segundo.</li>
            </ul>
            <h3>KASA MEDICINAL</h3>
            <ul>
                <li class="cor-verde">Cura reduzida: 72 (1º ricochete), 56 (2º), 40 (3º) e 32 (em si).</li>
            </ul>
            <h3>SANTUÁRIO KEKKAI</h3>
            <ul>
                <li class="cor-verde">Cura inicial reduzida de 100 para 80 e cura ao longo do tempo de 40 para 32.</li>
            </ul>
            <div class="comentarios-atuarte">
                <h4>COMENTÁRIOS DO CRIADOR</h4>
                <p>Para alinhar seu desempenho ao formato 6v6, reduzi sua cura máxima de 20 para 16 por segundo.</p>
                <p>Como essa redução impacta sua saída de cura geral, introduzi uma nova passiva: 10% do dano que ele causa é convertido em cura instantânea. Essa mecânica, somada à conversão de parte da sua vida para escudos, visa melhorar sua sustentabilidade e permitir que ele atue como uma mistura entre Lúcio e Brigitte.</p>
            </div>
        `
    },
    "Moira": {
        img: "Imagem dos Heróis/Moira.png",
        texto: `
            <h3>ERUPÇÃO BIOTÓXICA (NOVA PASSIVA)</h3>
            <ul>
                <li class="cor-azul">Golpes finais geram uma explosão de 5m na vítima que causa 25 de dano e estuna os inimigos próximos.</li>
            </ul>

            <h3>PUNHO BIÓTICO (DISPARO PRIMÁRIO)</h3>
            <ul>
                <li class="cor-azul">Agora incendeia os inimigos, causando 80 de dano por segundo.</li>
            </ul>

            <h3>PUNHO BIÓTICO (DISPARO SECUNDÁRIO)</h3>
            <ul>
                <li class="cor-azul">Dano reduzido de 65 para 32,5 por segundo.</li>
                <li class="cor-azul">Acumular 125 de dano no mesmo alvo aplica Congelamento por 0,75s (exige 250 de dano em Armaduras).</li>
                <li class="cor-azul">Inimigos têm os tempos de recarga das suas habilidades 25% mais lentos.</li>
                <li class="cor-azul">Causa 100% a mais de dano à armaduras.</li>
            </ul>

            <h3>ORBE BIÓTICO</h3>
            <ul>
                <li class="cor-verde">Capacidade máxima de cura e dano aumentado em +50%.</li>
                <li class="cor-azul">Velocidade do projétil reduzido em -50%.</li>
            </ul>
            <div class="comentarios-atuarte">
                <h4>COMENTÁRIOS DO CRIADOR</h4>
                <p>A Moira é vista atualmente como uma personagem de baixo risco e alto retorno, limitada ao básico de curar e causar dano. Para elevar sua utilidade e complexidade, apliquei um rework focado em transformar sua jogabilidade:</p>
                <p>O seu disparo primário agora funciona como um lança-chamas, curando aliados e causando dano a inimigos simultaneamente. Ambos os efeitos possuem o mesmo valor (80 de cura e 80 de dano por segundo). A diferença crucial é que, enquanto a cura possui um efeito residual que beneficia os aliados por um curto período após o uso, o dano do fogo é aplicado estritamente enquanto o gatilho for pressionado.</p>
                <p>Já o disparo secundário passou por ajustes táticos: ele agora causa metade do dano base, mas compensa isso ao aplicar dano crítico em armaduras. Além disso, ganhou uma função antiaérea poderosa: personagens no ar são forçados ao solo e impedidos de voar ou pular enquanto recebem esse dano, que também desacelera a recarga das habilidades dos inimigos.</p>
                <p>Por fim, mantive a nova passiva de explosão atordoante (stun) em golpes finais e a melhoria significativa na eficácia dos Orbes Bióticos, garantindo que a Moira tenha, finalmente, um impacto estratégico condizente com um suporte de alto nível.</p>
            </div>
        `
    },
    "Torbjörn": {
        img: "Imagem dos Heróis/Torbjörn.png",
        texto: `
        <h3>O Torbjörn foi adicionado aos suportes.</h3>
        <h3>Torbjörn não recebe a passiva da sub-role original dos dps's</h3>
            <h3>RESTAURAÇÃO (PASSIVA)</h3>
            <ul>
                <li>Torbjörn recebe a passiva da sub-role Restauração.</li>
                <li class="cor-verde">Curar aliados com sua arma também cura o Torbjörn com 40% da cura.</li>
            </ul>
            <h3>PISTOLA DE REBIT ***</h3>
            <ul>
                <li class="cor-azul">Munição reduzida de 18 para 10.</li>
                <li class="cor-azul">Disparo secundário removido. Agora, ele equipa o martelo de forja.</li>
            </ul>
            <h3>MARTELO DE FORJA ***</h3>
            <ul>
                <li class="cor-azul">Nova mecânica: O martelo vai criar uma aura visual de 5m (visível apenas para o Torbjörn).</li>
                <li class="cor-azul">Cada martelada vai curar 70 de vida todos os aliados que estiverem no campo de visão do Torbjörn e dentro da aura.</li>
            </ul>
            <h3>SOBRECARGA</h3>
            <ul>
                <li class="cor-azul">Tempo de recarga reduzido de 10 para 7.5 segundos.</li>
                <li class="cor-azul">Duração reduzida de 6 para 3 segundos.</li>
            </ul>
            <h3>TORRETA***</h3>
            <ul>
                <li class="cor-azul">Tempo de recarga aumentado em 25%**.</li>
            </ul>
            <h3>NÚCLEO FUNDIDO***</h3>
            <ul>
                <li class="cor-azul">50% do dano causado pela ultimate vai virar cura para todos os aliados no mapa inteiro.</li>
            </ul>
            <div class="comentarios-atuarte">
                <h4>COMENTÁRIOS DO CRIADOR</h4>
                <p>Torbjörn Suporte 👍</p>
            </div>
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
            <div class="comentarios-atuarte">
                <h4>COMENTÁRIOS DO CRIADOR</h4>
                <p>O Zenyatta, hoje, vive quase exclusivamente em função da Orbe da Discórdia. Sem ela — e com os nerfs que ela sofreu — o restante do seu kit acaba perdendo o brilho. A falta de habilidades de fuga, somada a uma hitbox considerável (agravada pela sua postura de pernas cruzadas enquanto flutua), faz dele um alvo extremamente vulnerável, e sua cura atual só se torna impactante durante a habilidade suprema.</p>
                <p>Para resolver essa dependência e aumentar sua sobrevivência, aumentei sua vida base. Além disso, implementei uma nova passiva que se torna sua principal fonte de cura: um quarto de todo o dano causado é convertido em cura instantânea. Essa cura ignora a passiva de redução global, tornando-o muito mais resiliente, embora, devido a limitações do Workshop, essa mecânica não se aplique a alvos como o B.O.B. ou outros itens implantáveis. Por fim, aproveitando o fato de que ele flutua, adicionei a ele a capacidade de planar, permitindo que utilize o terreno vertical para ganhar a mobilidade que lhe faltava.</p>
            </div>
        `
    }
};